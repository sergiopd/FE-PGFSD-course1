export interface Tab {
  legend: string;
  link: string;
}

export const TABS = [
  {
    legend: 'Add customer',
    link: 'customer'
  },
  {
    legend: 'View customers info',
    link: 'customer/view'
  },
  {
    legend: 'Add a meeting',
    link: 'meeting',
  },
  {
    legend: 'View meetings info',
    link: 'meetings/view'
  },
]
