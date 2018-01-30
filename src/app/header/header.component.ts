import { Component, OnInit } from '@angular/core';
import { SocketService } from './socket.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  messageCount = 0;
  constructor(public socketService: SocketService) { }

  ngOnInit() {
    this.socketService.connet('ws://localhost:8085')
      .map(event => JSON.parse(event))
      .subscribe(data => this.messageCount = data.messageCount);
  }

}
