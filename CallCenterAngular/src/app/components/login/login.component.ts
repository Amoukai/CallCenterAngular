import { RouteService } from '../../services/route.service';
import { Login } from '../../models/login.model';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { storage } from 'src/assets/javascript/site';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  constructor(
    private service: LoginService,
    private routeService: RouteService,
    private router: Router
  ) {}
  aid: string = '';
  pid: string = '';

  ngOnInit(): void {
    if (this.isLogin()) {
      this.router.navigate(['/index']);
    }
  }

  login(): void {
    if (!this.aid || !this.pid) {
      alert('請輸入帳號密碼');
      return;
    }
    const model: Login = { aid: this.aid, pid: this.pid };
    console.log('1', model);
    this.service.login(model).subscribe((result) => {
      if (result.success) {
        storage.set('user', JSON.stringify(result.data));
        this.router.navigate(['']);
      } else {
        alert(result.message);
      }
    });
  }

  isLogin(): boolean {
    if (storage.get('user')) return true;
    return false;
  }
}
