import { DataField } from './datafield.interface';

export interface DataTabel {
    id:number,
    name:string,
    dataFields:Array<DataField>
}