import type { JSONSchemaType } from 'ajv';
import CodeBlock from '@theme/CodeBlock';
import { useEffect, useState } from 'react';
import yaml from 'js-yaml';

type HclFromJsonSchemaProps = {
  schema: JSONSchemaType<unknown> | string;
};

/**
 * Indent the string the specified number of spaces
 */
const indent = (str: string, spaces: number) =>
  str
    .split('\n')
    .map((line) => ' '.repeat(spaces) + line)
    .join('\n');

/**
 * Add prefix to each line in the string
 */
const addLinePrefix = (str: string, prefix: string) =>
  str
    .split('\n')
    .map((line) => prefix + line)
    .join('\n');

const genSchemaString = (
  schema: JSONSchemaType<unknown>,
  propertyName?: string,
  required?: boolean
): string => {
  let res = '';
  if (schema.title || (propertyName && required)) {
    res += '##';
  }

  if (propertyName && required) {
    res += ' [Required]';
  }

  if (schema.title) {
    res += ' ' + schema.title;
  }

  if (schema.title || (propertyName && required)) {
    res += '\n#\n';
  }

  if (schema.description) {
    res += addLinePrefix(schema.description, '# ') + `\n#\n`;
  }

  if (schema.default !== undefined) {
    res += `# Default value: ${schema.default === '' ? '""' : schema.default}\n#\n`;
  }

  if (schema.examples && Array.isArray(schema.examples) && schema.examples.length > 0) {
    res += '# Examples:\n';
    res += addLinePrefix(yaml.dump(schema.examples), '# ');
    res += '\n';
  }

  if (propertyName) {
    res += `${propertyName}: `;

    let value: any;
    if (schema.default !== undefined) {
      value = schema.default;
    } else if (schema.examples && Array.isArray(schema.examples) && schema.examples.length > 0) {
      value = schema.examples[0];
    }

    if (value !== undefined) {
      if (Array.isArray(value) || typeof value === 'object') {
        res += '\n' + indent(yaml.dump(value).replace(/\n$/, ''), 2);
      } else if (value === '') {
        res += '""';
      } else {
        res += value;
      }
    }

    res += '\n\n';
  }

  if (schema.type === 'object') {
    Object.entries(schema.properties || {}).forEach(([key, value]) => {
      const nestedSchema = value as JSONSchemaType<unknown>;
      const nestedSchemaString = genSchemaString(nestedSchema, key, schema.required?.includes(key));
      const lines = nestedSchemaString.split('\n');
      if (!lines[0]) {
        lines.shift();
      }

      if (!lines[lines.length - 1]) {
        lines.pop();
      }

      res += lines.map((line) => `  ${line}`).join('\n');
      res += '\n';
    });

    if (schema.additionalProperties && typeof schema.additionalProperties === 'object') {
      res += genSchemaString(schema.additionalProperties);
    }
  }

  return res;
};

export const HclFromJsonSchema = (props: HclFromJsonSchemaProps) => {
  const [schema, setSchema] = useState<JSONSchemaType<any> | undefined>(
    typeof props.schema === 'string' ? undefined : props.schema
  );

  if (typeof props.schema === 'string') {
    useEffect(() => {
      fetch(props.schema as string)
        .then((res) => res.json())
        .then((res) => setSchema(res));
    }, []);
  }

  if (!schema) {
    return <CodeBlock>Loading...</CodeBlock>;
  }

  if (schema.$ref && schema.$ref.startsWith('#/definitions/')) {
    const definition_key = schema.$ref.substring('#/definitions/'.length);
    const definition = schema.definitions?.[definition_key];
    if (!definition) {
      console.error(`Invalid $ref in schema definition. ${schema.$ref} does not exist.`);
      console.error(schema);
      return <div>Invalid $ref in schema definition. {schema.$ref} does not exist.</div>;
    }

    return <HclFromJsonSchema schema={definition} />;
  }

  let schemaString = '';
  if (schema.title) {
    schemaString += `## ${schema.title}\n#\n`;
  }

  if (schema.description) {
    schemaString += `# ${schema.description}\n#\n`;
  }

  if (schema.type === 'object' && schema.properties) {
    Object.entries(schema.properties).forEach(([key, value]) => {
      const nestedSchema = value as JSONSchemaType<unknown>;
      schemaString += genSchemaString(nestedSchema, key);
    });
  }

  return <CodeBlock language="yaml">{schemaString}</CodeBlock>;
};
