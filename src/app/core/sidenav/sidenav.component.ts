import {
	AfterContentInit,
	Component,
	ContentChildren,
	EventEmitter,
	Input,
	OnInit,
	Output,
	QueryList,
	ViewChild,
	ViewContainerRef,
} from '@angular/core';
import { IProduct } from '../../shared/products/product.interface';
import { MatDrawer } from '@angular/material/sidenav';
import { MatListItem } from '@angular/material/list';

@Component({
	selector: 'app-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements AfterContentInit {
	@ViewChild(MatDrawer, { static: true })
	private matDrawer!: MatDrawer;

	@ContentChildren(MatListItem, { read: ViewContainerRef, descendants: true })
	matLists!: QueryList<ViewContainerRef>;

	public ngAfterContentInit() {
		this.matLists.changes.subscribe(console.log);
	}

	public toggleSidenavOpened() {
		this.matDrawer.toggle();
	}
}
