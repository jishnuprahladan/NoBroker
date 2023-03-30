import { Component } from '@angular/core';
import { DataService } from 'src/app/flats/service/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  searchTerm:any
  constructor(private ds:DataService){}

  search(event:any){
    this.searchTerm = event.target.value
   //  send the data to behaviour subject
   this.ds.Search.next(this.searchTerm)
   }

}
