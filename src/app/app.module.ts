import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HotelDetailsComponent } from './hotel-detail/hotel-detail.component';
import { RoomBookingComponent } from './room-booking/room-booking.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HttpClientModule } from '@angular/common/http';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HotelInRangeComponent } from './hotel-in-range/hotel-in-range.component';

@NgModule({
  declarations: [
    AppComponent,
    HotelListComponent,
    HotelDetailsComponent,
    RoomBookingComponent,
    FeedbackComponent,
    SideBarComponent,
    HotelInRangeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
