import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormCustomerComponent } from './customers/form-customer/form-customer.component';
import { EditCustomerComponent } from './customers/edit-customer/edit-customer.component';
import { ViewAllCustomersComponent } from './customers/view-all-customers/view-all-customers.component';
import { CreateCustomerComponent } from './customers/create-customer/create-customer.component';
import { CreateMeetingComponent } from './meetings/create-meeting/create-meeting.component';
import { EditMeetingComponent } from './meetings/edit-meeting/edit-meeting.component';
import { ViewAllMeetingsComponent } from './meetings/view-all-meetings/view-all-meetings.component';
import { ViewAllActivityComponent } from './customers/view-all-activity/view-all-activity.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FormCustomerComponent,
    EditCustomerComponent,
    ViewAllCustomersComponent,
    CreateCustomerComponent,
    CreateMeetingComponent,
    EditMeetingComponent,
    ViewAllMeetingsComponent,
    ViewAllActivityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
