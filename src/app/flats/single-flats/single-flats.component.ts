import { Component } from '@angular/core';
import { DataService } from '../service/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-flats',
  templateUrl: './single-flats.component.html',
  styleUrls: ['./single-flats.component.css']
})
export class SingleFlatsComponent {
flatId:any
flatData:any
  constructor(private ds:DataService,private activate:ActivatedRoute){

  }
  ngOnInit(){
    this.activate.params.subscribe((data:any)=>{
      this.flatId=data["id"]
  })
  this.ds.viewFlat(this.flatId).subscribe((data:any)=>{
    this.flatData=data
   })
}
}