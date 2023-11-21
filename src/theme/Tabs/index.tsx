import React, { cloneElement } from 'react';
import clsx from 'clsx';
import { useScrollPositionBlocker, useTabs } from '@docusaurus/theme-common/internal';
import useIsBrowser from '@docusaurus/useIsBrowser';
import styles from './styles.module.css';

function TabList({ className, selectedValue, selectValue, tabValues }) {
  const tabRefs = [];
  const { blockElementScrollPositionUntilNextRender } = useScrollPositionBlocker();

  const handleTabChange = (event) => {
    const newTab = event.currentTarget;
    const newTabIndex = tabRefs.indexOf(newTab);
    const newTabValue = tabValues[newTabIndex].value;
    if (newTabValue !== selectedValue) {
      blockElementScrollPositionUntilNextRender(newTab);
      selectValue(newTabValue);
    }
  };

  const handleClick = (event, value: string) => {
    const newTab = event.currentTarget;
    if (value !== selectedValue) {
      blockElementScrollPositionUntilNextRender(newTab);
      selectValue(value);
    }
  };

  const handleKeydown = (event) => {
    let focusElement = null;
    switch (event.key) {
      case 'Enter': {
        handleTabChange(event);
        break;
      }
      case 'ArrowRight': {
        const nextTab = tabRefs.indexOf(event.currentTarget) + 1;
        focusElement = tabRefs[nextTab] ?? tabRefs[0];
        break;
      }
      case 'ArrowLeft': {
        const prevTab = tabRefs.indexOf(event.currentTarget) - 1;
        focusElement = tabRefs[prevTab] ?? tabRefs[tabRefs.length - 1];
        break;
      }
      default:
        break;
    }
    focusElement?.focus();
  };

  return (
    <div className="mb-2">
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          id="tabs"
          name="tabs"
          className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
          defaultValue={tabValues.find(({ value }) => selectedValue === value).value}
          onChange={(e) => handleClick(e, e.target.value)}
        >
          {tabValues.map(({ value, label }) => (
            <option key={value} value={value}>
              {label ?? value}
            </option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <nav
          className="flex space-x-4 overflow-x-auto"
          style={{ scrollbarWidth: 'none' }}
          aria-label="Tabs"
        >
          {tabValues.map(({ value, label, attributes }) => (
            <a
              key={value}
              className={clsx(
                selectedValue === value
                  ? 'bg-gray-100 text-gray-700 dark:bg-slate-blue-200 dark:text-gray-200'
                  : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200',
                'rounded-md px-3 py-2 text-sm font-medium cursor-pointer'
              )}
              role="tab"
              tabIndex={selectedValue === value ? 0 : -1}
              aria-selected={selectedValue === value}
              aria-current={selectedValue === value ? 'page' : undefined}
              {...attributes}
              onKeyDown={handleKeydown}
              onClick={(e) => handleClick(e, value)}
            >
              {label ?? value}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}

function TabContent({ lazy, children, selectedValue }) {
  const childTabs = (Array.isArray(children) ? children : [children]).filter(Boolean);
  if (lazy) {
    const selectedTabItem = childTabs.find((tabItem) => tabItem.props.value === selectedValue);
    if (!selectedTabItem) {
      // fail-safe or fail-fast? not sure what's best here
      return null;
    }
    return cloneElement(selectedTabItem, { className: 'margin-top--md' });
  }
  return (
    <div>
      {childTabs.map((tabItem, i) =>
        cloneElement(tabItem, {
          key: i,
          hidden: tabItem.props.value !== selectedValue,
        })
      )}
    </div>
  );
}

function TabsComponent(props) {
  const tabs = useTabs(props);
  return (
    <div className={clsx('tabs-container not-prose', styles.tabList)}>
      <TabList {...props} {...tabs} />
      <TabContent {...props} {...tabs} />
    </div>
  );
}

export default function Tabs(props) {
  const isBrowser = useIsBrowser();
  return (
    <TabsComponent
      // Remount tabs after hydration
      // Temporary fix for https://github.com/facebook/docusaurus/issues/5653
      key={String(isBrowser)}
      {...props}
    />
  );
}
