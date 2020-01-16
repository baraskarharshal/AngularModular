import { DataTabel } from 'src/app/shared/interfaces/datatabel.interface';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { LoadDataTabel } from './datatabel.action';
import { ApiService } from 'src/app/shared/services/api.service';


export interface DataTabelStateModel {
    dataTabels: Array<DataTabel>
}

@State<DataTabelStateModel>({
    name: 'datatabel',
    defaults: {
        dataTabels: [],
    }
})

export class DataTabelState {

    constructor(private api: ApiService) { }

    @Selector()
    static AllDataTabels(state: DataTabelStateModel) {
        return state.dataTabels;
    }

    @Action(LoadDataTabel)
    LoadDataTabel(ctx: StateContext<DataTabelStateModel>) {
        this.api.request('GET_DATA_CONFIG').subscribe((_dataTabels: Array<DataTabel>) => {
            ctx.patchState({
                dataTabels: _dataTabels
            })
        });
    }
}