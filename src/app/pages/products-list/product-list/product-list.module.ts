import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ProductCardModule } from '../product-card/product-card.module';
import { ScrollWithLoadingModule } from '../../../shared/scroll-with-loading/scroll-with-loading.module';

@NgModule({
	declarations: [ProductListComponent],
	exports: [ProductListComponent],
	imports: [
		CommonModule,
		MatCardModule,
		MatListModule,
		MatProgressBarModule,
		MatIconModule,
		MatButtonModule,
		MatProgressSpinnerModule,
		ProductCardModule,
		ScrollWithLoadingModule,
	],
})
export class ProductListModule {}
