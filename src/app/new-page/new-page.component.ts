import { Component,OnInit, SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NotificationService } from '../notification.service';
import { WebsocketService } from '../websocket.service';

export interface Inotify
{
  id:number,
  datetime:Date,
  msg:string,
  status:string
  isread:boolean
}


@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styleUrl: './new-page.component.css'
})
export class NewPageComponent implements OnInit {
  searchTerm: string = '';
  
  filteredNotifications:Inotify[]=[]
  notifications:Inotify[]=[]
  buttonDisabled=false;

  constructor(private http:HttpClient,private notify:NotificationService,private webSocketService:WebsocketService){}
  

  ngOnInit() {
    this.notify.getData().subscribe((results)=>{
      this.notifications=results;
      this.filteredNotifications = this.notifications; 
      console.log(this.filteredNotifications)
      
    })

    this.webSocketService.getNotifications().subscribe((data: Inotify) => {
      console.log('Received message:', data);
      this.notifications.push(data); // Add received message to notifications
      this.filteredNotifications = this.notifications;
    });
    

    console.log(this.filteredNotifications);
    // this.loadUnreadNotifications();
    // this.notify.updateNotifications(this.unreadNotifications)



    this.notify.currentNotifications.subscribe(notifications=>{
          this.notifications=notifications
           console.log("this is ",this.notifications);
         })
         this.filteredNotifications=this.notifications;
    
  }

  // sendTestMessage()
  // {
  //   const testMessage:Inotify={
  //     userId:1,
  //     id:2,
  //     title:'Test Notification',
  //     body:'This is a test notification from web socket'
  //   }
  //   this.webSocketService.sendMessage(testMessage);
  // }

  // ngOnChanges(changes: SimpleChanges) {
  //   if (changes['notifications']) {
  //     this.filteredNotifications = this.notifications;
  //   }
  // }

  


  public filterNotification() {
    this.filteredNotifications = this.notifications.filter(phone =>
      `${phone.msg}`.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  

}
