import React from 'react';
export default function FooterCopyright({ copyright }) {
  return (
    <div
      className="text-xs leading-5 text-gray-500"
      // Developer provided the HTML, so assume it's safe.
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: copyright }}
    />
  );
}
