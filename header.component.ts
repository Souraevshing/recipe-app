import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  collapsed = true;
  @Output() selectedNav = new EventEmitter<string>();

  onClick(name: string) {
    this.selectedNav.emit(name);
  }
}
