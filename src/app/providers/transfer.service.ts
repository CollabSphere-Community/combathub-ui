import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { userLogin } from '../model/model';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TransferService {
  constructor(private dataService: DataService) {}

  getLogin(req: userLogin) {
    return this.dataService.getData(environment.apiUrl + '/auth/login');
  }
}
