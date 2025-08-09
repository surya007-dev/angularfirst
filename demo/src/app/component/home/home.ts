import { Component } from '@angular/core';
import { Apiservice } from '../../services/apiservice';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [CommonModule,FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  people: any;
  constructor(private apiservices: Apiservice) {}

ngOnInit() {
 this. getJsonData()
}

  getData() {
    this.apiservices.getData().subscribe((data) => {
      console.log(data);
    });
  }
  getJsonData() {
    this.apiservices.getJSON().subscribe((res)=>{
      if(res){
        const data= res.data;
        this.people = data;
      }
    })
  }

}
