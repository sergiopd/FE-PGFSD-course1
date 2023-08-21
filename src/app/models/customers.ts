export interface Customer {
  address: string;
  email: string;
  name: string;
  password: string;
  userId?: number;
};

export interface activityLog {
  operID?: number;
  createdAt?: Date | string;
  activity: string;
  email: string;
}
