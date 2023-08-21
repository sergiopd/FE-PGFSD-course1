export interface Tab {
  legend: string;
  link: string;
}

export const TABS = [
  {
    legend: 'Edit customer info',
    link: 'customer/edit'
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

export const INITIAL_TABS: Tab[] = [
  {
    legend: 'Customer section',
    link: 'customer'
  },
  {
    legend: 'Meeting section',
    link: 'meeting'
  },
];

export const CUSTOMER_TABS = [
  {
    legend: 'Edit customer info',
    link: 'customer/edit'
  },
  {
    legend: 'View customer info',
    link: 'customer/view'
  },
  {
    legend: 'Review all customer activity',
    link: 'activity/view',
  },
]

export const MEETING_TABS = [
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
