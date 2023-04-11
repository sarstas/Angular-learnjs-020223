import { AfterViewInit, Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { of } from 'rxjs';
import { LoadDirection } from 'src/app/shared/scroll-with-loading/load-direction.const';
import { IProduct } from '../../../shared/products/product.interface';
import { productsMock } from '../../../shared/products/product.mock';
import { ProductCardComponent } from '../product-card/product-card.component';
// import { LoadDirection } from '../../../shared/scroll-with-loading/load-scroll.interface';

@Component({
	selector: 'app-product-list',
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit, AfterViewInit {
	@ViewChildren('card', { read: ProductCardComponent })
	cards!: QueryList<ProductCardComponent>;

	public products: IProduct[] | undefined = undefined;

	public ngOnInit() {
		setTimeout(() => {
			this.products = productsMock;
		}, 3000);
	}

	public ngAfterViewInit() {
		this.cards.changes.subscribe((cards: QueryList<ProductCardComponent>) => {
			cards.forEach(value => {
				console.log('value', value);
			});
		});
	}

	public onLoadData(direction: LoadDirection) {
		console.log(direction);
	}

	public getProducts(): IProduct[] | undefined {
		return this.products;
	}
}
