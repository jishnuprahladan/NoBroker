import { Component } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  allFlats: any
  filterFlats:any
  searchKey:any
  constructor(private ds: DataService,private route:Router){}
  ngOnInit(){
    this.ds.viewAll().subscribe((data: any) => {
      this.allFlats = data
    })
    this.ds.Search.subscribe((value:any)=>{
      this.searchKey=value
    })
  }
  filters(category:any){
    this.filterFlats=this.allFlats.filter((item:any)=>item.categoryId==category || category== ""   
    )
    
   }
   Logout(){
    this.route.navigateByUrl('')
   }
}
