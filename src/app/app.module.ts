import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './layout/home/home.module';
import { MatCardModule } from '@angular/material/card';
import { MatConfirmDialogComponent } from './mat-confirm-dialog/mat-confirm-dialog.component';

import { AddformComponent } from './modules/addform/addform.component';
import { EditformComponent } from './modules/editform/editform.component';

@NgModule({
  declarations: [
    AppComponent,
    MatConfirmDialogComponent,
    AddformComponent,
    EditformComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomeModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
