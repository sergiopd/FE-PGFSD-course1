import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCustomerComponent } from './customers/create-customer/create-customer.component';
import { CreateMeetingComponent } from './meetings/create-meeting/create-meeting.component';
import { ViewAllMeetingsComponent } from './meetings/view-all-meetings/view-all-meetings.component';
import { ViewCustomersComponent } from './customers/view-customers/view-customers.component';

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
    path: 'customer/view',
    component: ViewCustomersComponent
  },
  {
    path: 'meeting',
    component: CreateMeetingComponent
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
