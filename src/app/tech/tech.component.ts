import { Component, OnInit } from '@angular/core';
import { NewsServiceService } from '../news-service.service';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent  implements OnInit {

  constructor(private api:NewsServiceService){}

  techData:any=[];
  ngOnInit(): void {
    this.api.tech().subscribe((res)=>{
      console.log(res.articles);
      this.techData=res.articles;
    })
  }
}