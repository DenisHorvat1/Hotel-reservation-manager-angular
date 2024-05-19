// hotel-in-range.component.ts
import { Component, OnInit } from '@angular/core';
import { HotelService } from '../service/hotel.service';
import { Hotel } from '../entity/hotel';

@Component({
  selector: 'app-hotel-in-range',
  templateUrl: './hotel-in-range.component.html',
  styleUrls: ['./hotel-in-range.component.css']
})
export class HotelInRangeComponent implements OnInit {
  latitude: number = 0; // Latitude of user's current location
  longitude: number = 0; // Longitude of user's current location
  range: number = 10; // Default range in km
  hotels: Hotel[] = [];

  constructor(private hotelService: HotelService) {}

  ngOnInit(): void {
    // Get user's current location (latitude and longitude)
    this.getUserLocation();

    // Get hotels initially with default range
    this.getHotelsInRange();

  }

  getUserLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;
        },
        (error) => {
          console.error('Error getting user location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }

  getHotelsInRange(): void {
    this.hotelService.getHotelsInRange(this.latitude, this.longitude, this.range).subscribe(
      (response: Hotel[]) => {
        this.hotels = response;
      },
      (error) => {
        console.error('Error fetching hotels:', error);
      }
    );
  }

  onRangeChange(): void {
    // When the range slider value changes, fetch hotels within the updated range
    this.getHotelsInRange();
  }
}
