import { Component, Output, EventEmitter, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { CategoriesService } from '../../shared/services/categories.service';
import { Category } from '../../shared/models/category.model';

@Component({
  selector: 'fb-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnDestroy {
  @Output() onCategoryAdd = new EventEmitter<Category>();
  sub1: Subscription;

  constructor(private categoriesService: CategoriesService) { }

  onSubmit(form: NgForm) {
    let { name, amount } = form.value;
    if (amount < 0) amount *= -1;

    const category = new Category(name, amount);

    this.sub1 = this.categoriesService.addCategory(category)
      .subscribe((category: Category) => {
        form.reset();
        form.form.patchValue({amount: 1});
        this.onCategoryAdd.emit(category);
      });
  }

  ngOnDestroy() {
    if(this.sub1) this.sub1.unsubscribe();
  }

}
