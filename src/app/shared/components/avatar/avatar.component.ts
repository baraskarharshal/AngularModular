import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-portal-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {

  @Input()
  candidate:any

  label: string;

  constructor() { }

  ngOnInit() {
    if (this.candidate)
      this.label = this.candidate.firstName.charAt(0) + ' ' + this.candidate.lastName.charAt(0);
  }
}
