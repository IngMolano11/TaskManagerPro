import { Component } from '@angular/core';
import { SearchBox } from '../../shared/search-box/search-box';

@Component({
  selector: 'app-header',
  imports: [SearchBox],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

}
