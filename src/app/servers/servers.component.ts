import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: 'servers.component.html',
  //selector: '[app-servers]',
  //selector: '.app-servers',
  standalone: false,
  //template: '<app-server></app-server><app-server></app-server>',
})
export class ServersComponent {
  allowsNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'TestServer';
  serverCreated = false;
  servers = ['TestServer', 'TestServer 2'];
  //Username roperties
  username = '';
  usernameIsEmpty = true;

  constructor() {
    setTimeout(() => {
      this.allowsNewServer = true;
    }, 2000);
  }
  onCreateServer() {
    this.serverCreationStatus =
      'Server was created! Name is ' + this.serverName;
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  //Username stuff
  onResetUsername() {
    this.username = '';
    this.usernameIsEmpty = true;
  }

  onUsernameChange() {
    if (this.username === '') {
      this.usernameIsEmpty = true;
    } else {
      this.usernameIsEmpty = false;
    }
  }
}
