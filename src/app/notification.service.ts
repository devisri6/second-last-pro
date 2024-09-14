import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Inotify } from './new-page/new-page.component';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  url='';
  private notificationSource=new BehaviorSubject<Inotify[]>([]);
  currentNotifications=this.notificationSource.asObservable();

  constructor(private http:HttpClient) { }

  public getData():Observable<Inotify[]>
  {
      return this.http.get<Inotify[]>(this.url);
  }

  public sendNotifications(notifications:Inotify[])
  {
    this.notificationSource.next(notifications);
  }
}
