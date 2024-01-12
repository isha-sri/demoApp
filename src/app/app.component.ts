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
import { AppModule } from './app.module';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-root',
  //standalone: true,
  //imports: [CommonModule, RouterOutlet, AgGridModule, HttpClientModule, MatFormFieldModule, MatSelectModule, BrowserModule, BrowserAnimationsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('agGrid', { static: true })
  agGrid: any;

  private gridApi!: GridApi;
  title = 'myApp';
  selected = 'None';
  url='';

  t1:boolean=true;
  // rowData: any[]= [
  //   { mission: "Voyager", company: "NASA", location: "Cape Canaveral", date: "1977-09-05", rocket: "Titan-Centaur ", price: 86580000, successful: true },
  //   { mission: "Apollo 13", company: "NASA", location: "Kennedy Space Center", date: "1970-04-11", rocket: "Saturn V", price: 3750000, successful: false },
  //   { mission: "Falcon 9", company: "SpaceX", location: "Cape Canaveral", date: "2015-12-22", rocket: "Falcon 9", price: 9750000, successful: true }
  // ];

  // // Column Definitions: Defines & controls grid columns.
  // colDefs: ColDef[] = [
  //   { field: "mission", filter: true  },
  //   { field: "company", filter: true },
  //   { field: "location", filter: true },
  //   { field: "date", filter: true },
  //   { field: "price", filter: true },
  //   { field: "successful", filter: true },
  //   { field: "rocket", filter: true }
  // ];

  // colDefs:any[]=[{ headerName:'Athlete',field: 'athlete', filter:true },
  // { headerName:'Age', field: 'age', filter:true },
  // { headerName:'Country',field: 'country', filter:true },
  // { headerName:'Year',field: 'year', filter:true },
  // { headerName:'Date',field: 'date', filter:true },
  // { headerName:'Sport',field: 'sport', filter:true },
  // { headerName:'Gold',field: 'gold', filter:true },
  // { headerName:'Silver',field: 'silver', filter:true },
  // { headerName:'Bronze',field: 'bronze', filter:true },
  // { headerName:'Total',field: 'total', filter:true },
  // ]
  
  // colDefs: any[] = [{headerName: 'Date', field: 'Date', filter:true },
  // { headerName: 'Windows', field: 'Windows', filter:true },
  //  { headerName: 'Android', field: 'Android', filter:true },
  //          { headerName: 'iOS', field: 'iOS', filter:true },
  //          { headerName: 'OS X', field: 'OS X', filter:true },
  //          { headerName: 'Unknown', field: 'Unknown', filter:true },
  //          { headerName: 'Linux', field: 'Linux', filter:true },
  //          { headerName: 'Series 40', field: 'Series 40', filter:true },
  //          { headerName: 'SymbianOS', field: 'SymbianOS', filter:true },
  //          { headerName: 'Samsung', field: 'Samsung', filter:true },
  //          {headerName: 'BlackBerryOS', field: 'BlackBerryOS', filter:true },
  //          { headerName: 'Chrome OS', field: 'Chrome OS', filter:true },
  //          { headerName: 'Nokia Unknown', field: 'Nokia Unknown', filter:true },
  //          { headerName: 'Playstation', field: 'Playstation', filter:true },
  //          { headerName: 'Sony Ericsson', field: 'Sony Ericsson', filter:true },
  //          { headerName: 'KaiOS', field: 'KaiOS', filter:true },
  //          { headerName: 'Xbox', field: 'Xbox', filter:true },
  //          { headerName: 'bada', field: 'bada', filter:true },
  //          { headerName: 'Tizen', field: 'Tizen', filter:true },
  //          { headerName: 'LG', field: 'LG', filter:true },
  //          { headerName: 'Nintendo', field: 'Nintendo', filter:true },
  //          { headerName: 'Other', field: 'Other', filter:true },];
 
  colDefs:any[]=[];

  rowData: any[] = [];
  constructor(private http: HttpClient) {}
  importExcelFromUrl(): void {  
    ///console.log(this.selected);
    if(this.selected=='OS')
    {console.log("OS");
    this.url='./assets/os_worldwide.xlsx'
    this.colDefs= [{headerName: 'Date', field: 'Date', filter:true },
  { headerName: 'Windows', field: 'Windows', filter:true },
   { headerName: 'Android', field: 'Android', filter:true },
           { headerName: 'iOS', field: 'iOS', filter:true },
           { headerName: 'OS X', field: 'OS X', filter:true },
           { headerName: 'Unknown', field: 'Unknown', filter:true },
           { headerName: 'Linux', field: 'Linux', filter:true },
           { headerName: 'Series 40', field: 'Series 40', filter:true },
           { headerName: 'SymbianOS', field: 'SymbianOS', filter:true },
           { headerName: 'Samsung', field: 'Samsung', filter:true },
           {headerName: 'BlackBerryOS', field: 'BlackBerryOS', filter:true },
           { headerName: 'Chrome OS', field: 'Chrome OS', filter:true },
           { headerName: 'Nokia Unknown', field: 'Nokia Unknown', filter:true },
           { headerName: 'Playstation', field: 'Playstation', filter:true },
           { headerName: 'Sony Ericsson', field: 'Sony Ericsson', filter:true },
           { headerName: 'KaiOS', field: 'KaiOS', filter:true },
           { headerName: 'Xbox', field: 'Xbox', filter:true },
           { headerName: 'bada', field: 'bada', filter:true },
           { headerName: 'Tizen', field: 'Tizen', filter:true },
           { headerName: 'LG', field: 'LG', filter:true },
           { headerName: 'Nintendo', field: 'Nintendo', filter:true },
           { headerName: 'Other', field: 'Other', filter:true },];
  }
  else if(this.selected=='GDP'){
    console.log("GDP");
    this.url='./assets/gdp.xlsx';
    this.colDefs= [{headerName: 'Country', field: 'Country', filter:true },
  { headerName: '1980', field: '1980', filter:true },
   { headerName: '1985', field: '1985', filter:true },
           { headerName: '1990', field: '1990', filter:true },
           { headerName: '1995', field: '1995', filter:true },
           { headerName: '2000', field: '2000', filter:true },
           { headerName: '2005', field: '2005', filter:true },
           { headerName: '2010', field: '2010', filter:true },
           { headerName: '2015', field: '2015', filter:true },
           { headerName: '2020', field: '2020', filter:true },
           {headerName: '2025', field: '2025', filter:true },];
  }
  else if(this.selected=='Movies'){
    console.log("Movies");
    this.url='./assets/moviesdataset_2023.xlsx';
    this.colDefs=[{ headerName:'Name',field: 'name', filter:true },
    { headerName:'Rating', field: 'rating', filter:true },
    { headerName:'Votes',field: 'votes', filter:true },
    { headerName:'Runtime',field: 'runtime', filter:true },
    { headerName:'Genre',field: 'genre', filter:true },
    { headerName:'Description',field: 'description', filter:true },
    ]
  }
  else{
    console.log("None");
    this.url='https://www.ag-grid.com/example-assets/olympic-data.xlsx';
    this.colDefs=[{ headerName:'Athlete',field: 'athlete', filter:true },
    { headerName:'Age', field: 'age', filter:true },
    { headerName:'Country',field: 'country', filter:true },
    { headerName:'Year',field: 'year', filter:true },
    { headerName:'Date',field: 'date', filter:true },
    { headerName:'Sport',field: 'sport', filter:true },
    { headerName:'Gold',field: 'gold', filter:true },
    { headerName:'Silver',field: 'silver', filter:true },
    { headerName:'Bronze',field: 'bronze', filter:true },
    { headerName:'Total',field: 'total', filter:true },
    ]
  }
  //const url = 'https://www.ag-grid.com/example-assets/olympic-data.xlsx';
//const url='./assets/os_worldwide.xlsx'

    this.http.get(this.url, { responseType: 'arraybuffer' }).subscribe(
      (data) => {
        const workbook: XLSX.WorkBook = XLSX.read(data, { type: 'array' });

        const sheetName: string = workbook.SheetNames[0];
        const sheet: XLSX.WorkSheet = workbook.Sheets[sheetName];

        this.rowData = XLSX.utils.sheet_to_json(sheet);
      },
      (error) => {
        console.error('Error fetching Excel file from the URL:', error);
      }
    );
  }





  
  ngAfterViewInit(): void {
    this.gridApi = this.agGrid.api;
  }
  onBtExport() {
    this.gridApi.exportDataAsCsv();
  }
  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
  }
 

}
