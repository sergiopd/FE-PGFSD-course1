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
    legend: 'Review all customer activity',
    link: 'activity/view',
  },
  {
    legend: 'Add a meeting',
    link: 'meeting/add',
  },
  {
    legend: 'Edit a meeting',
    link: 'meeting/edit',
  },
  {
    legend: 'View all meetings info',
    link: 'meetings/view'
  },
]
