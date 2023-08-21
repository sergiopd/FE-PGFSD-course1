import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCustomerComponent } from './customers/create-customer/create-customer.component';
import { EditCustomerComponent } from './customers/edit-customer/edit-customer.component';
import { CreateMeetingComponent } from './meetings/create-meeting/create-meeting.component';
import { ViewAllCustomersComponent } from './customers/view-all-customers/view-all-customers.component';
import { ViewAllActivityComponent } from './customers/view-all-activity/view-all-activity.component';
import { EditMeetingComponent } from './meetings/edit-meeting/edit-meeting.component';
import { ViewAllMeetingsComponent } from './meetings/view-all-meetings/view-all-meetings.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'customer',
    pathMatch: 'full'
  },
  {
    path: 'customer',
    component: CreateCustomerComponent,
  },
  {
    path: 'meeting',
    component: CreateMeetingComponent
  },
  {
    path: 'customer/edit',
    component: EditCustomerComponent,
  },
  {
    path: 'customer/view',
    component: ViewAllCustomersComponent
  },
  {
    path: 'activity/view',
    component: ViewAllActivityComponent
  },
  {
    path: 'meeting/add',
    component: CreateMeetingComponent
  },
  {
    path: 'meeting/edit',
    component: EditMeetingComponent
  },
  {
    path: 'meetings/view',
    component: ViewAllMeetingsComponent
  },
  // {
  //   path: '**',
  //   component: PageNotFoundComponent,
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
