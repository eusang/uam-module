import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { UsersComponent } from 'src/app/modules/users/users.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { LogComponent } from 'src/app/modules/log/log.component';
import { AnalysisComponent } from 'src/app/modules/analysis/analysis.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { HallComponent } from 'src/app/modules/hall/hall.component';
import { MatButtonModule } from '@angular/material/button';
import { UserdetailsComponent } from 'src/app/modules/userdetails/userdetails.component';
import { LoginComponent } from 'src/app/login/login.component';

@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    UsersComponent,
    LogComponent,
    AnalysisComponent,
    HallComponent,
    UserdetailsComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
  ],
})
export class HomeModule {}
