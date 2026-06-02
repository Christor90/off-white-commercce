export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: 'Men' | 'Women' | 'Children';
  tag?: 'New arrival' | 'Featured' | 'Sale';
}

export interface NavLink {
  label: string;
  href: string;
}
