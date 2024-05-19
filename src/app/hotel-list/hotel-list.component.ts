// hotel-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hotel } from '../entity/hotel';
import { HotelService } from '../service/hotel.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {
  public hotels: Hotel[] = [];

  constructor(private hotelService: HotelService, private router: Router) {}

  ngOnInit() {
    this.getHotels();
  }

  public getHotels(): void {
    this.hotelService.getHotels().subscribe(
      (response: Hotel[]) => {
        this.hotels = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public goToHotelDetails(hotelId: number): void {
    this.router.navigate(['/hotel', hotelId]);
  }

  getRoomType(type: number): string {
    switch (type) {
      case 1:
        return "Single Room";
      case 2:
        return "Double Room";
      case 3:
        return "Suite Room";
      case 4:
        return "Matrimonial Room";
      default:
        return "Unknown Room Type";
    }
  }
}
