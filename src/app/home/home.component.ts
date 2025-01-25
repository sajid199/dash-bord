import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      <h1>Welcome to Dashboard</h1>
      <p>This is the main landing page of the application.</p>
    </div>
  `,
  styles: []
})
export class HomeComponent {}
