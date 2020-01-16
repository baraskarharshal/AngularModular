import { Component, OnInit, ComponentFactoryResolver, Inject } from '@angular/core';
import { Store } from '@ngxs/store';
import { ShowSidenav } from 'src/app/shared/state/layout.actions';
import { ApiService } from 'src/app/shared/services/api.service';
import { DataTabel } from 'src/app/shared/interfaces/datatabel.interface';
import { DataField } from 'src/app/shared/interfaces/datafield.interface';
import { DataTabelViewComponent } from '../data-tabel-view/data-tabel-view.component';

@Component({
  selector: 'app-portal-data-tabel-list',
  templateUrl: './data-tabel-list.component.html',
  styleUrls: ['./data-tabel-list.component.scss']
})
export class DataTabelListComponent implements OnInit {

  dataTabels:Array<DataTabel>;
  constructor(private resolver: ComponentFactoryResolver,
    private store: Store,
    private api:ApiService) { }

  ngOnInit() {
    //this.loadDataTabels();
  
  }

  loadDataTabels(){
  //  this.api.request('GET_DATA_CONFIG').subscribe((_r:Array<DataTabel> )=> {
  //    this.dataTabels = _r;
  //  });
  }
  onOpenCandidate(dataFields : Array<DataField>): void {
    let factory = this.resolver.resolveComponentFactory(DataTabelViewComponent);
    this.store.dispatch(new ShowSidenav(factory, {
      name: 'dataFields',
      value: dataFields
    }));
  }
}
