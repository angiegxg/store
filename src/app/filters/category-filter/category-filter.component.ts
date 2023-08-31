import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetCategoryService } from 'src/app/services/get-category.service';
import { productsActions } from 'src/app/state/actions';

@Component({
  selector: 'app-category-filter',
  templateUrl: './category-filter.component.html',
  styleUrls: ['./category-filter.component.scss']
})
export class CategoryFilterComponent implements OnInit {
  public category: string[] = [];

  constructor(private getCategory: GetCategoryService, private store: Store) {}

  ngOnInit(): void {
    this.getCategory.getCategory().subscribe({
      next: (category) => {
                this.category.push(...category); 
       
      },
      error: (error) => {
        console.error('Error al obtener la categoría:', error);
      }
    });
  }

  filterCategory(event: Event): void {
    event.stopPropagation()
    
    const target = event.target as HTMLSelectElement; // Realizar casting a HTMLSelectElement
  const selectedCategory = target.value;
  
  this.store.dispatch(productsActions.filterForCategories({ category: selectedCategory }));
  }
}
