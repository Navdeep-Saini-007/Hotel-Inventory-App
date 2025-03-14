import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit, ViewChild } from '@angular/core';
import { Room, RoomType } from './rooms';
import { CommonModule } from '@angular/common';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './service/rooms.service';

@Component({
  selector: 'hinv-rooms',
  imports: [CommonModule, RoomsListComponent, HeaderComponent],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss',
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit, AfterViewChecked {
  hotelName: string = 'Hilton';
  noOfRooms: number = 10;
  isRoomHidden: boolean = false;
  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };
  roomList: RoomType[] = [];
  selectedRoom!: RoomType;

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  constructor(private roomsService: RoomsService) {}

  ngOnInit(): void {
    console.log("Checking View Child header component inside ngOnInit make {static: true}: ", this.headerComponent);
    this.roomList = this.roomsService.getRooms();
  }

  ngDoCheck(): void {
    console.log(
      "ngDoCheck lifecycle hook will listen to all the events throughout the application and it is very costly. Don't use ngOnChanges and ngDoCheck together."
    );
  }

  ngAfterViewInit(): void {
    console.log("Checking View Child header component inside ngAfterViewInit: ", this.headerComponent);
    this.headerComponent.title="Header Component";
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked will be triggered not just after the first view initialization (ngAfterViewInit), but also after every subsequent change detection cycle.");
  }

  toggle(): void {
    this.isRoomHidden = !this.isRoomHidden;
  }

  selectRoom(room: RoomType): void {
    console.log(room);
    this.selectedRoom = room;
  }

  addRoom(): void {
    const room: RoomType = {
      roomType: 'Static',
      amenities: 'Static',
      price: 2000,
      photos:
        'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9vbXN8ZW58MHx8MHx8fDA%3D',
      checkinTime: new Date('03-Jun-2025'),
      checkoutTime: new Date('04-Jun-2025'),
      rating: 2.34,
    };
    // this.roomList.push(room);
    this.roomList = [...this.roomList, room];
  }
}
