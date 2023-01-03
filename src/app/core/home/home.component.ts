import { Component, OnInit } from '@angular/core';
import { Slide } from 'src/app/model/slide';
import { CakesService } from 'src/app/service/cakes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  slideshow: Slide[] = [];

  constructor(private service: CakesService) { }

  ngOnInit(): void {
    this.service.getSlideShow().subscribe((slideshow: Slide[]) => {
      this.slideshow = slideshow
    })
  }

}
