import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { LoadDataTabel } from 'src/app/features/data-tabels/state/datatabel.action';
import { DataTabelState } from 'src/app/features/data-tabels/state/datatabel.state';
import { Observable } from 'rxjs';
import { DataTabel } from 'src/app/shared/interfaces/datatabel.interface';

@Component({
  selector: 'app-portal-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})

export class TopnavComponent implements OnInit {

  @Select(DataTabelState.AllDataTabels) dataTabels$: Observable<DataTabel[]>;
  
  constructor(private store:Store) { 
    
  }

  ngOnInit() {
    this.store.dispatch(new LoadDataTabel());
  }

}
