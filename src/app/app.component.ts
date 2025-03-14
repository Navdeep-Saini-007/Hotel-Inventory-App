import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RoomsComponent } from './rooms/rooms.component';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from "./container/container.component";
import { EmployeeComponent } from "./employee/employee.component";

@Component({
  selector: 'hinv-root',
  imports: [RouterOutlet, RoomsComponent, CommonModule, ContainerComponent, EmployeeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit{
  title: string = 'HotelInventoryApp';
  role: string = 'Admin';

  //load components dynamically
  // @ViewChild('admin', {read:ViewContainerRef}) vcr!:ViewContainerRef;
  // ngAfterViewInit(): void {
  //   const containerRef = this.vcr.createComponent(RoomsComponent);
  //   containerRef.instance.noOfRooms = 50;
  // }

  // accessing element using ViewChild
  @ViewChild('element', {static: true}) element!: ElementRef;
  ngOnInit(): void {
    this.element.nativeElement.innerHTML = "Element Ref"
  }
}
