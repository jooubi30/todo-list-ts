export type StatCardType = 'default' | 'active' | 'completed';

export interface StatCardProps {
  count: number;
  status: string;
  type?: StatCardType;
}