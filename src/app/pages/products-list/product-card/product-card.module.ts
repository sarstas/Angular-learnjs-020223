import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ProductListComponent } from '../product-list/product-list.component';

@NgModule({
	declarations: [ProductCardComponent],
	exports: [ProductCardComponent],
	imports: [CommonModule, MatCardModule, MatListModule, MatProgressBarModule, MatIconModule, MatButtonModule],
})
export class ProductCardModule {}
