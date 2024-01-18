import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  constructor() {}

  employees: Employee [] = [
    {
      id: '8sd7f9-3h5g6j-2i4t5r-7a8d9f',
      name: 'Alice',
      email: 'alice@email.com',
      phone: 9876543210,
      salary: 90000,
      department: 'Marketing'
    },
    {
      id: '3j5k6g-7h8j9s-1o2p3q-4w5e6r',
      name: 'Bob',
      email: 'bob@gmail.com',
      phone: 8765432109,
      salary: 75000,
      department: 'Finance'
    },
    {
      id: '1a2b3c-4d5e6f-7g8h9i-0j1k2l',
      name: 'Eva',
      email: 'eva@email.com',
      phone: 7654321098,
      salary: 85000,
      department: 'Information Technology'
    }    
  ]

  ngOnInit(): void {

  }

}
