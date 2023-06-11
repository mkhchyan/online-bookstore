import { itemCVA, listCVA, navCVA } from "./Nav.cva";

import type { NavProps } from "./Nav.types";

const Nav = (props: NavProps) => {
  const { items, className } = props;

  return (
    <nav className={navCVA({ class: className })}>
      <ul className={listCVA()}>
        {items.map((item) => (
          <li key={item.href} className={itemCVA()}>
            <a href={item.href} className="block">
              {item.children}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
