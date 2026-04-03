import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome-page',
  imports: [],
  templateUrl: './welcome-page.component.html',
  styleUrl: './welcome-page.component.css',
})
export class WelcomePage {
  onGetStarted() {
    console.log('Get started clicked - functionality to be implemented');
    // TODO: Implement navigation or action when user clicks "Get Started"
  }
}
