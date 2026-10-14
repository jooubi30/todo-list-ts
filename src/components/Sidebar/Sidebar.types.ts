export type SidebarType = 'default' | 'active';

export interface SidebarProps {
  icon: string; // сырой SVG-код (строка), не путь к файлу
  name: string;
  count: number;
  type?: SidebarType;
}