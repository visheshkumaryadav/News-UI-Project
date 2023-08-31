import { Component, OnInit } from '@angular/core';
import { NewsServiceService } from '../news-service.service';

@Component({
  selector: 'app-topheadline',
  templateUrl: './topheadline.component.html',
  styleUrls: ['./topheadline.component.css']
})
export class TopheadlineComponent implements OnInit {

  constructor(private api:NewsServiceService){}

  topheadlinesData:any=[];
  ngOnInit(): void {
    this.api.topheadline().subscribe((res)=>{
      console.log(res.articles);
      this.topheadlinesData=res.articles;
    })
  }
  

}
