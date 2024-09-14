import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebSocketSubject, webSocket } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  private socket$: WebSocketSubject<any>;

  constructor() {
    this.socket$ = webSocket('');
  }

 // Method to get the WebSocket observable
  public getNotifications(): Observable<any> {
    return this.socket$.asObservable();
  }

  // Method to send a message through the WebSocket
  public updateNotification(notification: any) {
    this.socket$.next({event:'update_notification',data:notification});
  }

  public sendMessage(message:any):void
  {
    this.socket$.next(message)
  }
}
