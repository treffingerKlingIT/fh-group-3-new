import { Component, OnInit } from '@angular/core';
import {User} from '../../interfaces/core/user';
import {AuthService} from '../../services/core/auth.service';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {

  protected user: User = null;

  constructor(private authService: AuthService) { }

  public ngOnInit(): void {
    this.user = this.authService.user;
  }

}
