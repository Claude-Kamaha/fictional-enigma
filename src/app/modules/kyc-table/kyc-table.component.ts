import { AfterViewInit, Component, OnInit, ViewChild, } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { KycTableDataSource, KycTableItem } from './kyc-table-datasource';

@Component({
  selector: 'app-kyc-table',
  templateUrl: './kyc-table.component.html',
  styleUrls: ['./kyc-table.component.scss']
})
export class KycTableComponent implements OnInit {
  ngOnInit(): void {}
  
}
