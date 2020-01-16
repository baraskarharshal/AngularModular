import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Actions, ofActionSuccessful } from '@ngxs/store';
import { ShowSidenav, CloseSidenav } from '../../shared/state/layout.actions';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-portal-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  @ViewChild(MatSidenav, { static: true }) sidenav: MatSidenav;

  @ViewChild('sidebarContainer', { read: ViewContainerRef, static: true })
  sidebarContainer: ViewContainerRef;

  constructor(private actions$: Actions) { }

  ngOnInit() {
    this.actions$
      .pipe(ofActionSuccessful(ShowSidenav))
      .subscribe(_ => this.renderSidebarComponent(_));

    this.actions$
      .pipe(ofActionSuccessful(CloseSidenav))
      .subscribe(_ => this.sidenav.close());
  }

  private renderSidebarComponent(options: any) {
    this.sidebarContainer.clear();

    const componentRef = this.sidebarContainer.createComponent(options.factory);

    if (options.param)
      componentRef.instance[options.param.name] = options.param.value;

    setTimeout(() => {
      this.sidenav.open();
    }, 100);

  }

}
