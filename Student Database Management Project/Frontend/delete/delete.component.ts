import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
  rollno:string = '';
  constructor(private http:HttpClient){}
  whenSubmit()
  {
    // this.http.delete('http://localhost:5050/delete/${this.rollno}')
    this.http.delete('http://localhost:5050/delete/' + this.rollno)
    .subscribe((res)=>{
      console.log(res)
    },
    (err)=>
    {
      console.log(err)
    })
  }
}
