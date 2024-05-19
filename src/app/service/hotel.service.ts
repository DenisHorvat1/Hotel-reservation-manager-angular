import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Hotel } from '../entity/hotel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  private apiServerUrl = environment.apiBaseUrl

  constructor(private http: HttpClient) { }

  public getHotels(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(`${this.apiServerUrl}/hotels/room`);
  }

  public addHotel(hotel: Hotel): Observable<Hotel> {
    return this.http.post<Hotel>(`${this.apiServerUrl}/hotels/room`, hotel);
  }

  public getHotelById(hotelId: number): Observable<Hotel> {
    return this.http.get<Hotel>(`${this.apiServerUrl}/hotels/room/${hotelId}`);
  }

  //to be fixed
  public updateHotel(hotel: Hotel): Observable<Hotel> {
    return this.http.put<Hotel>(`${this.apiServerUrl}/employee/update`, hotel);
  }

  public getHotelsInRange(latitude: number, longitude: number, range: number): Observable<Hotel[]> {
    // Adjust the API endpoint and query parameters according to your API
    return this.http.get<Hotel[]>(`${this.apiServerUrl}/hotels/room/nearby?latitude=${latitude}&longitude=${longitude}&radiusKm=${range}`);
  }

  public deleteHotel(hotelId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/hotels/room/${hotelId}`);
  }
}
