import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FormCustomerComponent } from './customers/form-customer/form-customer.component';
import { CreateCustomerComponent } from './customers/create-customer/create-customer.component';
import { ViewCustomersComponent } from './customers/view-customers/view-customers.component';
import { ViewAllActivityComponent } from './customers/view-all-activity/view-all-activity.component';
import { CreateMeetingComponent } from './meetings/create-meeting/create-meeting.component';
import { ViewAllMeetingsComponent } from './meetings/view-all-meetings/view-all-meetings.component';

@NgModule({
  declarations: [
    AppComponent,
    FormCustomerComponent,
    CreateCustomerComponent,
    ViewCustomersComponent,
    ViewAllActivityComponent,
    CreateMeetingComponent,
    ViewAllMeetingsComponent,
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
