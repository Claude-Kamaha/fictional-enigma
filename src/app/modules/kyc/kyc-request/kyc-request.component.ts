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
   state: String;
displayedColumns: string[] =['username','request_status','level'];
dataSource : MatTableDataSource<Ikyc>;

currentStatus: string;
UsersFilteredByStatus: any[];
  Status: any[];
filteredStatus: any[];





  constructor(private kycservice:KycServiceService) {
    this.currentStatus = 'all';
  }

  ngOnInit(): void {
    //this.dataSource.paginator = this.paginator;
    //this.dataSource.sort = this.sort;

   if (this.state= 'pending'){
    this.getAllPendingRequest()
}else if (this.state = 'rejected'){
  this.getAllRejectedRequest()
}
else if (this.state = 'confirmed'){
  this.getAllConfirmedRequest()
}
  }

  public getAllPendingRequest(){
    this.kycservice.listKycRequest('pending').subscribe((response: any) => {
        console.log(response.data);
                this.dataSource = new MatTableDataSource(response.data);
      });
      //let resp = this.kycservice.listKycRequest('pending');
      //resp.subscribe(listkyc=>this.dataSource.data = listkyc as Ikyc[]);
      //this.dataSource = new MatTableDataSource(listkyc.data);
      //console.log(this.dataSource.data);
  }
  public getAllConfirmedRequest(){

    this.kycservice.listKycRequest('confirmed').subscribe((response: any) => {
        console.log(response.data);
                this.dataSource = new MatTableDataSource(response.data);
            });
}
public getAllRejectedRequest(){

    this.kycservice.listKycRequest('rejected').subscribe((response: any) => {
        console.log(response.data);
                this.dataSource = new MatTableDataSource(response.data);
            });
  //console.log(this.dataSource.data);
}
  applyFilter(filterValue: string){
    //const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
//Angular 9 Tutorial For Beginners #65- HTTP Params
