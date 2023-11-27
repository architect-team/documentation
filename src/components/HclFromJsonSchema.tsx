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

/**
 * Generate the HCL string to render
 */
const genSchemaString = (
  schema: JSONSchemaType<unknown>,
  options?: {
    propertyName?: string;
    required?: boolean;
    hideComments?: boolean;
  }
) => {
  let res = '';

  const isRequired = options?.propertyName && options?.required;

  if (!options?.hideComments) {
    if (schema.title || isRequired) {
      res += '##';
    }

    if (isRequired) {
      res += ' [Required]';
    }

    if (schema.title) {
      res += ' ' + schema.title;
    }

    if (schema.title || isRequired) {
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
  }

  if (schema.type === 'object' && schema.properties) {
    Object.entries(schema.properties || {}).forEach(([key, value]) => {
      const nestedSchema = value as JSONSchemaType<unknown>;
      res += genSchemaString(nestedSchema, {
        propertyName: key,
        required: schema.required?.includes(key),
      });
    });
  } else if (
    schema.type === 'object' &&
    schema.additionalProperties &&
    schema.additionalProperties.type === 'array'
  ) {
    res += `${options?.propertyName} "item" {\n`;
    res += indent(genSchemaString(schema.additionalProperties.items), 2).trimEnd() + '\n';
    res += '}\n\n';
  } else if (schema.type === 'array') {
    res += `${options?.propertyName} {\n`;
    res += indent(genSchemaString(schema.items as JSONSchemaType<unknown>), 2).trimEnd() + '\n';
    res += '}\n\n';
  } else if (options?.propertyName) {
    let value: any;
    if (schema.default !== undefined) {
      value = schema.default;
    } else if (schema.examples && Array.isArray(schema.examples) && schema.examples.length > 0) {
      value = schema.examples[0];
    }

    res += `${options?.propertyName} = `;

    if (value !== undefined) {
      if (Array.isArray(value) || typeof value === 'object') {
        res += JSON.stringify(value, null, 2).replace(
          /^(\s*)"([^:]+)":\s*([^,\n]+),?/gm,
          '$1$2 = $3'
        );
      } else if (value === '') {
        res += '""';
      } else if (typeof value === 'string') {
        res += `"${value}"`;
      } else {
        res += value;
      }
    }

    res += '\n\n';
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

  return <CodeBlock language="hcl">{genSchemaString(schema)}</CodeBlock>;
};
