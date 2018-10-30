import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

@Injectable()
export class HttpCallService {

  constructor(private httpClient: HttpClient) {
  }

  http_get(url, httpOptions?) {
    if (!httpOptions) {
      return this.httpClient.get(url)
        .catch(this.handleError);
    } else {
      return this.httpClient.get(url, httpOptions)
        .catch(this.handleError);
    }
  }

  private handleError(error: any) {
    return Observable.throw(error);
  }
}
