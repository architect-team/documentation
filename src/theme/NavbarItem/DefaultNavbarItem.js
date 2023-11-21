import React from 'react';
import clsx from 'clsx';
import NavbarNavLink from '@theme/NavbarItem/NavbarNavLink';

function DefaultNavbarItemDesktop({ className, isDropdownItem = false, ...props }) {
  const element = (
    <NavbarNavLink
      className={clsx(
        'hidden lg:inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 dark:text-white hover:no-underline',
        className
      )}
      isDropdownLink={isDropdownItem}
      {...props}
    />
  );
  return element;
}

function DefaultNavbarItemMobile({ className, isDropdownItem, ...props }) {
  return (
    <li className="menu__list-item">
      <NavbarNavLink className={clsx('menu__link', className)} {...props} />
    </li>
  );
}

export default function DefaultNavbarItem({
  mobile = false,
  position, // Need to destructure position from props so that it doesn't get passed on.
  ...props
}) {
  const Comp = mobile ? DefaultNavbarItemMobile : DefaultNavbarItemDesktop;
  return (
    <Comp
      {...props}
      activeClassName={props.activeClassName ?? (mobile ? 'menu__link--active' : '')}
    />
  );
}
