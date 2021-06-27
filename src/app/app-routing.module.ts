import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { AnalysisComponent } from './modules/analysis/analysis.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { HallComponent } from './modules/hall/hall.component';
import { LogComponent } from './modules/log/log.component';
import { UserdetailsComponent } from './modules/userdetails/userdetails.component';
import { UsersComponent } from './modules/users/users.component';

const routes: Routes = [{
  path:'',
  component:HomeComponent,
  children: [{
    path:'',
    component:DashboardComponent
  },{
    path:'hall',
    component:HallComponent
  },{
    path:'users',
    component:UsersComponent
  },{
    path:'userdetails',
    component:UserdetailsComponent
  },{
    path:'log',
    component:LogComponent
  },{
    path:'analysis',
    component:AnalysisComponent
  }
]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
