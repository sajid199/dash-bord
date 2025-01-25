import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  standalone: true,
  imports: [RouterModule, CommonModule]
})
export class SidebarComponent {
  menuItems = [
    { label: 'Overview', route: '/overview', icon: 'house' },
    { label: 'Announcements', route: '/announcements', icon: 'megaphone' },
    { label: 'Events', route: '/events', icon: 'calendar' },
    { label: 'Messages', route: '/messages', icon: 'envelope' },
    { label: 'Documents', route: '/documents', icon: 'file-earmark' },
    { label: 'Photos', route: '/photos', icon: 'image' },
    { label: 'Web Links', route: '/links', icon: 'link' }
  ];
}
