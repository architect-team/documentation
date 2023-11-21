import React from 'react';
import LinkItem from '@theme/Footer/LinkItem';

function ColumnLinkItem({ item }) {
  return item.html ? (
    <li
      // Developer provided the HTML, so assume it's safe.
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: item.html }}
    />
  ) : (
    <li>
      <LinkItem item={item} />
    </li>
  );
}

function Column({ column }) {
  return (
    <div className="my-16 xl:my-0">
      <h3 className="text-sm font-semibold leading-6 text-white">{column.title}</h3>
      <ul role="list" className="mt-6 space-y-4">
        {column.items.map((item, i) => (
          <ColumnLinkItem key={i} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default function FooterLinksMultiColumn({ columns }) {
  if (columns.length % 2 === 0) {
    const sections = [];
    for (let i = 0; i < columns.length; i += 2) {
      sections.push([columns[i], columns[i + 1]]);
    }

    return sections.map((section, i) => (
      <div className="md:grid md:grid-cols-2 md:gap-8" key={i}>
        {section.map((column, i) => (
          <Column key={i} column={column} />
        ))}
      </div>
    ));
  } else {
    return (
      <div className="md:grid md:grid-flow-col md:auto-cols-auto md:gap-8">
        {columns.map((column) => (
          <Column column={column} />
        ))}
      </div>
    );
  }
}
