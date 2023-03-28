import { Component, ViewEncapsulation } from '@angular/core';
import { applicationConfigMock } from './shared/application-config/application-config.mock';
import { productsMock } from './shared/products/product.mock';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	encapsulation: ViewEncapsulation.Emulated,
	interpolation: ['{{', '}}'],
})
export class AppComponent {
	// readonly applicationConfig = applicationConfigMock;
	//
	// readonly product = productsMock;
	//
	// public isSidenavOpened = true;
	//
	// public needViewPopup = false;
	//
	// public toggleSidenavOpened() {
	// 	this.isSidenavOpened = !this.isSidenavOpened;
	// }
	//
	// public onClick(event: MouseEvent) {
	// 	event.stopPropagation();
	// 	this.isSidenavOpened = true;
	// 	console.log('Menu click', event);
	// }
	//
	// public showPopUp(event: boolean) {
	// 	this.needViewPopup = event;
	// }
	readonly applicationConfig = applicationConfigMock;

	isBoxShadowActive = false;
}
