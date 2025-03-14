import { Injectable } from '@angular/core';
import { RoomType } from '../rooms';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  roomList: RoomType[] = [
    {
      roomType: 'Deluxe',
      amenities: 'BedRoom',
      price: 2000,
      photos:
        'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9vbXN8ZW58MHx8MHx8fDA%3D',
      checkinTime: new Date('03-Mar-2025'),
      checkoutTime: new Date('04-Mar-2025'),
      rating: 2.34,
    },
    {
      roomType: 'Suite',
      amenities: 'Kitchen',
      price: 2000,
      photos:
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cm9vbXN8ZW58MHx8MHx8fDA%3D',
      checkinTime: new Date('05-Mar-2025'),
      checkoutTime: new Date('06-Mar-2025'),
      rating: 3.456,
    },
    {
      roomType: 'Private',
      amenities: 'Washroom',
      price: 2000,
      photos:
        'https://images.unsplash.com/photo-1481277542470-605612bd2d61?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cm9vbXN8ZW58MHx8MHx8fDA%3D',
      checkinTime: new Date('07-Mar-2025'),
      checkoutTime: new Date('08-Mar-2025'),
      rating: 5.678,
    },
  ];

  constructor() {}

  getRooms() {
    return this.roomList;
  }
}
