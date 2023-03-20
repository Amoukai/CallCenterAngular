import { storage } from 'src/assets/javascript/site';
import { RouteService } from '../../services/route.service';
import { Component } from '@angular/core';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
})
export class LayoutComponent {
  user: User = { id: '', aid: '', role: '', name: '' };
  moreRoleShow: boolean = false;
  mainRoute: string = '';
  subRoute: string = '';
  bottomRoute: string = '';

  constructor(private routeService: RouteService, private router: Router) {}
  ngOnInit(): void {
    const user = storage.get('user');
    if (!user) {
      this.router.navigate(['/Login']);
      return;
    }
    this.user = JSON.parse(user);
  }

  mouseIn(): void {
    this.moreRoleShow = true;
  }
  mouseOut(): void {
    this.moreRoleShow = false;
  }

  logout(): void {
    storage.remove('user');
    if (!storage.get('user')) this.router.navigate(['/Login']);
  }
}
