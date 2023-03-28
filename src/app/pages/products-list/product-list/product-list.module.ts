import { NgModule } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductListComponent } from './product-list.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
	declarations: [ProductListComponent],
	exports: [ProductListComponent],
	imports: [CommonModule, MatCardModule, MatListModule, MatProgressBarModule, MatIconModule, MatButtonModule],
})
export class ProductListModule {}
