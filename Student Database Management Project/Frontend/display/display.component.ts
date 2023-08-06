import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { response } from 'express';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {
  rollno:string = ''
  data:any[] = []
  constructor(private http:HttpClient){}
  whenSubmit()
  {
    console.log(this.rollno)
    // this.http.get<any>('http://localhost:5050/display/($this.rollno)')
    this.http.get<any>('http://localhost:5050/display/' + this.rollno)
    .subscribe((res)=>{
      console.log(res)
      this.data=[res]
    },
    (err)=>{
      console.log(err)
    })  
  }
}
