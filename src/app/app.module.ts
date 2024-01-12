import { Component,ViewChild, ElementRef, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AgGridModule, AgGridAngular } from 'ag-grid-angular'; // Angular Grid Logic
import { ColDef, ColGroupDef,
  GridApi,
  GridReadyEvent, } from 'ag-grid-community'; // Column Definitions Interface
import * as XLSX from 'xlsx';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
    declarations: [
      AppComponent,
      // ... other components, directives, and pipes
    ],
    imports: [CommonModule, RouterOutlet, AgGridModule, HttpClientModule, MatFormFieldModule, MatSelectModule, BrowserModule, BrowserAnimationsModule, MatSelectModule,
      MatButtonModule],

    bootstrap: [AppComponent]
  })
  export class AppModule { }