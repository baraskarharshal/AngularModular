import { Component, OnInit } from '@angular/core';
import { DataField } from 'src/app/shared/interfaces/datafield.interface';

@Component({
  selector: 'app-portal-data-tabel-view',
  templateUrl: './data-tabel-view.component.html',
  styleUrls: ['./data-tabel-view.component.scss']
})
export class DataTabelViewComponent implements OnInit {

  dataFields:Array<DataField>;
  constructor() { }

  ngOnInit() {
  }

}
