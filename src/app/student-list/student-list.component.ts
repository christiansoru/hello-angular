import { Component } from '@angular/core';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {
  students: Student[] = [{id: 1, nome: "Ciccio", cognome:"Pasticcio", linguaggioPreferito: "Javascript"},
    {id: 2, nome: "Paolo", cognome: "Tavolo", linguaggioPreferito: "Java"},
    {id: 3, nome: "Topo", cognome: "Gigio", linguaggioPreferito: "C++"}
  ];
  student = {id: 4, nome: "Pino", cognome: "Abete", linguaggioPreferito: "Python"};
  noData: string[] = [];
  age = 35;
}

interface Student{
  id: number;
  nome: string;
  cognome: string;
  linguaggioPreferito: string;
}
