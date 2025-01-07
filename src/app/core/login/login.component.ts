import { Component } from '@angular/core';
import { TransferService } from '../../providers/transfer.service';
import { userLogin } from '../../model/model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginReq: userLogin | null = null;
  constructor(private transferService: TransferService) {}

  onLogInclick() {
    if (this.loginReq != null) {
      this.transferService.getLogin(this.loginReq);
    } else {
      throw new Error('Login Error occured login req is null');
    }
  }
}
