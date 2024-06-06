import { Routes } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentComponent } from './student/student.component';
import { UserListComponent } from './user-list/user-list.component';

export const routes: Routes = [
    {path: '', component: StudentListComponent},
    {path: 'users', component: UserListComponent}
];
