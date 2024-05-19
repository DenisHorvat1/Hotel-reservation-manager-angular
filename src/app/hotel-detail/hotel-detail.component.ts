import { Component, OnInit } from '@angular/core';
import { Hotel } from '../entity/hotel';
import { HotelService } from '../service/hotel.service';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Feedback } from '../entity/feedback';

@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrl: './hotel-detail.component.css'
})
export class HotelDetailsComponent implements OnInit {
  public hotel: Hotel | null = null;
  public feedback: Feedback | null = null;

  constructor(private route: ActivatedRoute, private hotelService: HotelService) {}

  ngOnInit(): void {
    const hotelId = +this.route.snapshot.paramMap.get('id')!;
    this.getHotelDetails(hotelId);
  }

  public getHotelDetails(hotelId: number): void {
    this.hotelService.getHotelById(hotelId).subscribe(
      (response: Hotel) => {
        this.hotel = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  getRoomType(type: number): string {
    switch(type) {
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