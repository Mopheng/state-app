import { Injectable } from '@angular/core';
import {HttpCallService} from '../http-call.service';

@Injectable()
export class StateListService {

  private endpoint: string;

  constructor(private httpCall: HttpCallService) {
    this.endpoint = 'http://pos.idtretailsolutions.com/countytest/states';
  }

  get_state_list() {
    return this.httpCall.http_get(this.endpoint);
  }

  get_state_detail(url) {
    return this.httpCall.http_get(url);
  }
}
