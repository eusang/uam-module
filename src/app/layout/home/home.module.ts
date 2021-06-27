import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { UsersComponent } from 'src/app/modules/users/users.component';
import { SharedModule } from 'src/app/shared/shared.module';
import{MatSidenavModule} from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { LogComponent } from 'src/app/modules/log/log.component';
import { AnalysisComponent } from 'src/app/modules/analysis/analysis.component';


@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    UsersComponent,
    LogComponent,
    AnalysisComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,

  ]
})
export class HomeModule { }
