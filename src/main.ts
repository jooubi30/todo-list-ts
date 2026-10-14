import './styles/main.scss';
import { createStatCard } from './components/StatCard/StatCard';
import { createSidebar } from './components/Sidebar/Sidebar';

import allIcon from './images/all.svg?raw';
import completedIcon from './images/completed.svg?raw';
import activeIcon from './images/active.svg?raw';

const statsContainer = document.querySelector('.stats')!;
statsContainer.append(
  createStatCard({ count: 5, status: 'Total Tasks' }),
  createStatCard({ count: 3, status: 'Active', type: 'active' }),
  createStatCard({ count: 2, status: 'Completed', type: 'completed' })
);

const sidebar = document.querySelector('.navigation__list');
sidebar?.append(
  createSidebar({ icon: allIcon, name: 'All', count: 5, type: 'active' }),
  createSidebar({ icon: completedIcon, name: 'Completed', count: 2 }),
  createSidebar({ icon: activeIcon, name: 'Active', count: 3 })
);