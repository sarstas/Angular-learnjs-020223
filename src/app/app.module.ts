import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from './core/header/header.module';
import { SidenavModule } from './core/sidenav/sidenav.module';
import { ProductCardModule } from './pages/products-list/product-card/product-card.module';
import { PopupHostComponent } from './core/popup-host/popup-host.component';
import { PopupHostModule } from './core/popup-host/popup-host.module';
import { MatIconModule } from '@angular/material/icon';
import { ScrollWithLoadingDirective } from './shared/scroll-with-loading/scroll-with-loading.directive';
import { MatListModule } from '@angular/material/list';
import { ProductListModule } from './pages/products-list/product-list/product-list.module';

@NgModule({
	declarations: [AppComponent, ScrollWithLoadingDirective],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		HeaderModule,
		SidenavModule,
		ProductCardModule,
		PopupHostModule,
		MatIconModule,
		MatListModule,
		ProductListModule,
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
