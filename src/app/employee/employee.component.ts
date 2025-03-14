import { AfterContentInit, Component, ContentChild, OnInit } from '@angular/core';

@Component({
  selector: 'hinv-employee',
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss'
})
export class EmployeeComponent implements OnInit{
  empName: string = '';

  ngOnInit(): void {
  }
}
