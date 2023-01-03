import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Cake } from 'src/app/model/cake.model';
import { CakesService } from 'src/app/service/cakes.service';
import { CakesComponent } from '../cakes.component';

@Component({
  selector: 'app-cake-detail',
  templateUrl: './cake-detail.component.html',
  styleUrls: ['./cake-detail.component.css']
})
export class CakeDetailComponent implements OnInit {
cakeId= -1;

cake: Cake = new Cake()

  constructor(
    private service: CakesService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe({
      next:(params: Params)=>{
        this.cakeId = params['id'];
        console.log(params['id']);
        this.getCake();
      }
    })
  }

  getCake(): void{
    this.service.getCake(this.cakeId).subscribe({
      next: (cake:Cake)=>{
        this.cake= cake;
        console.log(cake);
        
      }
    })

  }

}
