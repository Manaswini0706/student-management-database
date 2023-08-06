import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
    name:string=""
    rollno:string=""
    branch:string=""
    constructor(private http:HttpClient){}
    onSubmit() {
      console.log(this.name,this.branch,this.rollno)
      const data = {
        name: this.name,
        rollno: this.rollno,
        branch: this.branch
      };
    
      this.http.post<any>('http://localhost:5050/create', data)
        .subscribe(
          (res) => {
            console.log(res.status);
          },
          (error) => {
            console.log(error);
          }
        );
    }
    
}
