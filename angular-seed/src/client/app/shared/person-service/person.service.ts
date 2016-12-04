import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { TPerson, TPersonLookupRequest, TPersonServiceClient } from 't2ng.demo/person';

@Injectable()
export class PersonService {
  private client:TPersonServiceClient;

  constructor() {
    this.client = new TPersonServiceClient(
      new Thrift.TJSONProtocol(
        new Thrift.TXHRTransport('api/person')
      )
    );
    console.log('PersonService initialized');
  }

  public findPersonByRole(role:string):Observable<TPerson> {
    return Observable.create(_ => {
      this.client.find(new TPersonLookupRequest({
        role: role,
        limit: 1
      }), function (data) {
        _.next(data);
        _.complete();
      });
    });
  }
}

