import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTabelViewComponent } from './data-tabel-view.component';

describe('DataTabelViewComponent', () => {
  let component: DataTabelViewComponent;
  let fixture: ComponentFixture<DataTabelViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataTabelViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTabelViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
