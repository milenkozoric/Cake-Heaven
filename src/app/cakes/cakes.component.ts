import { Component, OnInit } from '@angular/core';
import { Cake } from '../model/cake.model';
import { CakesService } from '../service/cakes.service';

@Component({
  selector: 'app-cakes',
  templateUrl: './cakes.component.html',
  styleUrls: ['./cakes.component.css'],
})
export class CakesComponent implements OnInit {
  cakes: Cake[] = [];

  ingredients: String[] = [];

  constructor(private service: CakesService) {}
  params = {
    filter: {
      ingredients: '',
    },
    sort: 'name',
    sortDirection: 'asc',
  };

  ngOnInit(): void {
    this.getCakes();
    this.getIngredients();
  }

  getCakes(): void {
    this.service.getCakes(this.params).subscribe({
      next: (cakes: Cake[]) => {
        this.cakes = cakes;
      },
    });
  }

  getIngredients(): void {
    this.service.getIngredients().subscribe({
      next: (ingredients: String[]) => {
        this.ingredients = ingredients;
      },
    });
  }

  onFilterIngredients(event: Event): void {
    this.params.filter.ingredients = (event.target as HTMLInputElement).value;
    this.getCakes();
  }
}
