import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UsersQueriesService } from '../shared/api/queries/users/users-queries.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-crm-management';

  constructor(private usersQueriesService: UsersQueriesService) { }

  ngOnInit() {
    this.usersQueriesService.listAllUsers().subscribe((res) => {
      console.log(res);
    }, (error) => {
      console.log(error);
    });
  }
}
