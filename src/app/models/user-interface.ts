export interface Tab {
  legend: string;
  link: string;
}

export const TABS = [
  {
    legend: 'Create customer info',
    link: 'customer'
  },
  {
    legend: 'View customer info',
    link: 'customer/view'
  },
  {
    legend: 'Add a meeting',
    link: 'meeting',
  },
  {
    legend: 'View meeting info',
    link: 'meetings/view'
  },
]
