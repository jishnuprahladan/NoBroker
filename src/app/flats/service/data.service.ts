import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  Search=new BehaviorSubject("")
  constructor(private http:HttpClient) { }

  ngOnInit():void{

  }
  viewAll(){
    return this.http.get("http://localhost:3000/flats")
  }
  viewFlat(flatId:any){
    return this.http.get("http://localhost:3000/flats/"+flatId)
  }
  addnewuser(userdata:any){
    return this.http.post("http://localhost:3000/users",userdata)
  }
  login(email:any,password:any){
    return this.http.get("http://localhost:3000/users")
  }
}
