import { Component, ElementRef, OnInit,  ViewEncapsulation } from '@angular/core';
import { ViewChild, AfterViewInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort, SortDirection} from '@angular/material/sort';
import {BehaviorSubject, fromEvent, merge, Observable, of as observableOf, Subject} from 'rxjs';
import {catchError, debounceTime, distinctUntilChanged, map, startWith, switchMap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import { DataSource } from '@angular/cdk/table';
import { FuseUtils } from '@fuse/utils';
import { takeUntil } from 'rxjs/internal/operators';
import { CustomersService } from 'app/core/customers/customers.service';
import { MatTableDataSource } from '@angular/material/table';
import { fuseAnimations } from '@fuse/animations';

export interface Ikyc{
  username: string,
  request_status: string,
  level: boolean
}


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
  animations   : fuseAnimations,
    encapsulation: ViewEncapsulation.None
})
export class CustomersComponent implements OnInit {
 
//customer: Ikyc[];
//displayedColumns: string[] = ['username', 'request_status', 'level'];

state:string;

customers:Ikyc[];
  @ViewChild(MatPaginator,  {static: true}) 
  paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) 
  sort: MatSort;
  @ViewChild('filter', {static: true})
  filter: ElementRef;

  

  constructor(
    private _httpClient: HttpClient,
    private customerservice: CustomersService)
     {}
  
    ngOnInit(): void {
      
  this.customerservice.getListKyc(this.state).subscribe(
 response =>{
   // localStorage.getItem('token');
    console.log(response.data);
    this.customers= response.data;
    })

}
}


 

//getcustomerdet()
//{this.customerservice.getcusomerdetails().subscribe(data =>
 // console.log(data))