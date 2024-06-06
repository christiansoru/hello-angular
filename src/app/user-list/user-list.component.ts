import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {
  users: User[] = [
    { "id": 1, "name": "Cicciopasticcio" },
    { "id": 2, "name": "Cicciobello" },
    { "id": 3, "name": "Cicciotto" },
    { "id": 4, "name": "Cicciolone" },
    { "id": 5, "name": "Cicciopiripicchio" },
    { "id": 6, "name": "Cicciomatto" },
    { "id": 7, "name": "Cicciolino" },
    { "id": 8, "name": "Cicciobuffo" },
    { "id": 9, "name": "Cicciostaibravo" },
    { "id": 10, "name": "Cicciociccio" },
    { "id": 11, "name": "Ciccioburro" },
    { "id": 12, "name": "Cicciococco" },
    { "id": 13, "name": "Cicciolindo" },
    { "id": 14, "name": "Cicciosano" },
    { "id": 15, "name": "Cicciopop" },
    { "id": 16, "name": "Cicciocicca" },
    { "id": 17, "name": "Cicciopollo" },
    { "id": 18, "name": "Cicciopanzo" },
    { "id": 19, "name": "Cicciobombo" },
    { "id": 20, "name": "Ciccioveloce" }
  ];  

  isAuthorized: boolean = true;

  constructor(){
    
  }   

  ngOnInit(): void{
    return;             
  }                      
}
