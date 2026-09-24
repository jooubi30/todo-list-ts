import type { StatCardProps } from "./StatCard.types";

const BASE_CLASSNAME = 'stat-card';
const BASE_CLASSNAME_COUNT = BASE_CLASSNAME + '__count';
const BASE_CLASSNAME_STATUS = BASE_CLASSNAME + '__status';

export function createStatCard(props: StatCardProps): HTMLElement {
  const {count, status, type = 'default'} = props;

  const card = document.createElement('div');
  card.className = BASE_CLASSNAME;

  const countEl = document.createElement('div');
  countEl.className = BASE_CLASSNAME_COUNT
  if (type !== 'default') {
    countEl.classList.add(`${BASE_CLASSNAME_COUNT}--${type}`);
  }
  countEl.textContent = String(count);

  const statusEl = document.createElement('div');
  statusEl.className = BASE_CLASSNAME_STATUS;
  statusEl.textContent = status;

  card.append(countEl, statusEl);

  return card;
}