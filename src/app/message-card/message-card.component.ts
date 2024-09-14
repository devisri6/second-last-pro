import { Component, Input } from '@angular/core';
import { Inotify } from '../new-page/new-page.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-message-card',
  templateUrl: './message-card.component.html',
  styleUrl: './message-card.component.css'
})
export class MessageCardComponent {
  @Input() notification!: Inotify; 
  buttonDisabled=false;

  constructor(private http:HttpClient){}

  deleteData()
  {
    // const url = `https://localhost:44349/api/Phone/${this.contact.id}`;
    const url = `https://jsonplaceholder.typicode.com/posts/${this.notification.id}`;
    this.http.delete(url).subscribe({
      next: () => {
        console.log("delete successful");
      },
      error: error => {
        console.error('There was an error!', error);
      }
    });
  }

  markAsRead()
  {
    // this.buttonDisabled=true;
    this.notification.isread=true
  }

}
