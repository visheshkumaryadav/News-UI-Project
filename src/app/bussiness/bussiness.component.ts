import { Component, OnInit } from '@angular/core';
import { NewsServiceService } from '../news-service.service';

@Component({
  selector: 'app-bussiness',
  templateUrl: './bussiness.component.html',
  styleUrls: ['./bussiness.component.css']
})
export class BussinessComponent implements OnInit {

  constructor(private api:NewsServiceService){}

  bussinessData:any=[];
  ngOnInit(): void {
    this.api.bussiness().subscribe((res)=>{
      console.log(res.articles);
      this.bussinessData=res.articles;
    })
  }
}
