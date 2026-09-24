import './styles/main.scss';
import { createStatCard } from './components/StatCard/StatCard';

const statsContainer = document.querySelector('.stats')!;
statsContainer.append(
  createStatCard({ count: 5, status: 'Total Tasks' }),
  createStatCard({ count: 3, status: 'Active', type: 'active' }),
  createStatCard({ count: 2, status: 'Completed', type: 'completed' })
);