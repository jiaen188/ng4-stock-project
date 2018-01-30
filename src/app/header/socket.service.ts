import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SocketService {

  ws: WebSocket;

  constructor() { }

  connet(url: string): Observable<any> {
    this.ws = new WebSocket(url);

    return new Observable(
      observer => {
        this.ws.onmessage = (event) => observer.next(event.data); // 替换原有的函数，将ws和observable联系在一起
        this.ws.onerror = (event) => observer.error(event);
        this.ws.onclose  = (event) => observer.complete();
      }
    );
  }

  send(message: string) {
    this.ws.send(message);
  }

}
