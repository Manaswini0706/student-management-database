import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  rollno:string = '';
  name:string = '';
  branch:string = '';
  constructor(private http:HttpClient){}
  whenSubmit()
  {
    const data = {
      name:this.name,
      branch:this.branch
    }
    // this.http.delete('http://localhost:3090/delete/${this.rollno}')
    this.http.put<any>(`http://localhost:3090/update/${this.rollno}`, data)
    // this.http.put<any>('http://localhost:3090/update/' + this.rollno,data)
    .subscribe((res)=>{
      console.log(res)
    },
    (err)=>
    {
      console.log(err)
    })
  }
} 
