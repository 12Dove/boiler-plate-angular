import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormpageComponent } from './formpage/formpage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TablespageComponent } from './tablespage/tablespage.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: HomepageComponent},
  {path: 'tables', component: TablespageComponent},
  {path: 'form', component: FormpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
