import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import BlogSidebar from '@theme/BlogSidebar';

export default function BlogLayout(props) {
  const { sidebar, toc, children, ...layoutProps } = props;
  const hasSidebar = sidebar && sidebar.items.length > 0;
  return (
    <Layout {...layoutProps}>
      <div className="container margin-vert--lg">
        <div className="row">
          {!toc && <BlogSidebar sidebar={sidebar} />}
          <main
            className={clsx('col', {
              'col--9 pl-8': hasSidebar && !toc,
              'col--10 pr-8': toc,
              'col--12': !hasSidebar && !toc,
              'col--7 px-8': hasSidebar && toc,
            })}
            itemScope
            itemType="http://schema.org/Blog"
          >
            {children}
          </main>
          {toc && <div className="col col--2">{toc}</div>}
        </div>
      </div>
    </Layout>
  );
}
