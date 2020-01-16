import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTabelListComponent } from './data-tabel-list.component';

describe('DataTabelListComponent', () => {
  let component: DataTabelListComponent;
  let fixture: ComponentFixture<DataTabelListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataTabelListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTabelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
