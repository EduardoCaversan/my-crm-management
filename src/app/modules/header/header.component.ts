import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() public actualTab: EventEmitter<string> = new EventEmitter();
  public activeTab: string = 'users';

  public activateTab(tab: string): void {
    this.activeTab = tab;
    this.actualTab.emit(this.activeTab);
  }
}
