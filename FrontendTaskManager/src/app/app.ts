import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBar } from './layout/side-bar/side-bar';
import { Header } from './layout/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SideBar, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'FrontendTaskManager';
}
