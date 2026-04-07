import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetJwtService } from './get-jwt.service';
import { JwtToken } from './JwtToken.model';

@Component({
  selector: 'app-callback-page',
  imports: [],
  templateUrl: './callback-page.html',
  styleUrl: './callback-page.css',
})
export class CallbackPage {

  private code: string | null;

  constructor(protected activatedRoute: ActivatedRoute,
              protected getJwtService: GetJwtService,
              protected router: Router) {
    this.code = this.activatedRoute.snapshot.queryParamMap.get('code');

    if (this.code) {
      this.getJwtService.__invoke(this.code).subscribe({
        next: (token: JwtToken) => {
          localStorage.setItem('token', JSON.stringify(token));
          this.router.navigate(['/admin/endpoints']).then();
        }
      })
    }

  }
}
