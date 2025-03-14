import { AfterContentChecked, AfterContentInit, Component, ContentChild, OnInit } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'hinv-container',
  imports: [],
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss'
})
export class ContainerComponent implements OnInit, AfterContentChecked, AfterContentInit {

  ngOnInit(): void {
  }

  @ContentChild(EmployeeComponent) content!: EmployeeComponent;
  ngAfterContentInit(): void {
    this.content.empName='Navdeep Saini';
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked runs one more time after one time change detection happens");
  }
}
