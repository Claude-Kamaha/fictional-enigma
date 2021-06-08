import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { KycServiceService } from 'app/core/kyc/kyc-service.service';
import { Ikyc } from 'app/models/requestKyc';

@Component({
  selector: 'app-kyc-request',
  templateUrl: './kyc-request.component.html',
  styleUrls: ['./kyc-request.component.scss']
})
export class KycRequestComponent implements OnInit {
  @ViewChild(MatPaginator,{static:true}) paginator: MatPaginator; 
  @ViewChild(MatSort,{static:true}) sort: MatSort;
  Kyc_list: Ikyc[] = [];
   state: String = 'pending'|| 'confirmed' || 'rejected';
displayedColumns: string[] =['username','request_status','level'];
dataSource = new MatTableDataSource<Ikyc>(this.Kyc_list);

currentStatus: string;
UsersFilteredByStatus: any[];
  Status: any[];
filteredStatus: any[];


  
  constructor(private kycservice:KycServiceService) { 
    this.currentStatus = 'all';
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getAllPendingRequest()
  }
  public getAllPendingRequest(){
   
      let resp = this.kycservice.listKycRequest('pending');
      resp.subscribe(listkyc=>this.dataSource.data = listkyc as Ikyc[])
      //console.log(this.dataSource.data);
  }
  applyFilter(filterValue: string){
    //const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
//Angular 9 Tutorial For Beginners #65- HTTP Params