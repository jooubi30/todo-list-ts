import type { SidebarProps } from "./Sidebar.types";

export function createSidebar (props: SidebarProps):HTMLElement {
  const {icon, name, count, type = 'default'} = props;
  
  const item = document.createElement('li');
  item.className = 'navigation__item';

  const link = document.createElement('a');
  link.className = 'navigation__link';
  link.href = '#';
  if (type === 'active') {
    link.classList.add('navigation__link--active');
  }

  const iconEl = document.createElement('span');
  iconEl.className = 'navigation__icon';
  iconEl.innerHTML = icon;

  const nameEl = document.createElement('span');
  nameEl.className = 'navigation__text';
  nameEl.textContent = name;

  const countEl = document.createElement('span');
  countEl.className = 'navigation__count';
  countEl.textContent = String(count);

  link.append(iconEl, nameEl, countEl);
  item.append(link);

  return item;
}