import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetAuthInfoService } from './get-auth-info.service';

@Component({
  selector: 'app-welcome-page',
  imports: [],
  templateUrl: './welcome-page.component.html',
  styleUrl: './welcome-page.component.css',
})
export class WelcomePage implements OnInit {

  private authInfo: { auth_client_name: string; auth_url: string }|null = null;
  private readonly redirectUrl: string;

  constructor(private getAuthInfoService: GetAuthInfoService) {
    this.redirectUrl = window.location.origin + '/auth/callback';
  }

  onGetStarted() {
    if (this.authInfo === null)
      return;

    window.location.href =
      this.authInfo.auth_url +
      '/auth/login?redirectUrl=' +
      encodeURIComponent(this.redirectUrl) +
      '&clientName=' +
      encodeURIComponent(this.authInfo.auth_client_name);
  }

  ngOnInit(): void {
    this.getAuthInfoService.__invoke().subscribe({
      next: (authInfo) => {
        this.authInfo = authInfo;
      },
      error: (e) => {
        console.error(e);
      },
    });
  }
}
