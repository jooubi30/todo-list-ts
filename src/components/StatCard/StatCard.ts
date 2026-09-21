type StatCardType = 'default' | 'active' | 'completed';

interface StatCardProps {
  count: number;
  status: string;
  type?: StatCardType;
}

export function createStatCard({count, status, type = 'default'}: StatCardProps): HTMLElement {
  const card = document.createElement('div');
  card.className = 'stat-card'

  const countEl = document.createElement('div');
  countEl.className = 'stat-card__count'
  if (type !== 'default') {
    countEl.classList.add(`stat-card__count--${type}`);
  }
  countEl.textContent = String(count);

  const statusEl = document.createElement('div');
  statusEl.className = 'stat-card__status'
  statusEl.textContent = status;

  card.append(countEl, statusEl);

  return card;
}