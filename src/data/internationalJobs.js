import { 
  Bike, 
  Brush, 
  Flame, 
  HardHat, 
  Hammer, 
  Car, 
  Pickaxe, 
  Zap, 
  Warehouse, 
  Settings, 
  Wrench,
  MoreHorizontal
} from 'lucide-react';

const jobCategories = [
  { id: 1, title: 'Delivery', jobs: '600+', icon: Bike, color: 'text-yellow-500' },
  { id: 2, title: 'Housekeeping', jobs: '400+', icon: Brush, color: 'text-yellow-500' },
  { id: 3, title: 'Welder', jobs: '360+', icon: Flame, color: 'text-yellow-500' },
  { id: 4, title: 'Labor/Helper', jobs: '360+', icon: HardHat, color: 'text-yellow-500' },
  { id: 5, title: 'Carpenter', jobs: '200+', icon: Hammer, color: 'text-yellow-500' },
  { id: 6, title: 'Driver', jobs: '200+', icon: Car, color: 'text-yellow-500' },
  { id: 7, title: 'Mason', jobs: '150+', icon: Pickaxe, color: 'text-yellow-500' },
  { id: 8, title: 'Electrician', jobs: '120+', icon: Zap, color: 'text-yellow-500' },
  { id: 9, title: 'Warehouse/Logistics', jobs: '120+', icon: Warehouse, color: 'text-yellow-500' },
  { id: 10, title: 'Scaffolding', jobs: '120+', icon: Settings, color: 'text-yellow-500' },
  { id: 11, title: 'Technician', jobs: '100+', icon: Wrench, color: 'text-yellow-500' },
  { id: 12, title: 'Others', jobs: '100+', icon: MoreHorizontal, color: 'text-yellow-500' },
];

export default jobCategories;