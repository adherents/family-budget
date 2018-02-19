import { Component, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import { CategoriesService } from '../../shared/services/categories.service';
import { Category } from '../../shared/models/category.model';

@Component({
  selector: 'fb-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent {
  @Output() onCategoryAdd = new EventEmitter<Category>();

  constructor(private categoriesService: CategoriesService) { }

  onSubmit(form: NgForm) {
    let { name, amount } = form.value;
    if (amount < 0) amount *= -1;

    const category = new Category(name, amount);

    this.categoriesService.addCategory(category)
      .subscribe((category: Category) => {
        form.reset();
        form.form.patchValue({amount: 1});
        this.onCategoryAdd.emit(category);
      });
  }

}
