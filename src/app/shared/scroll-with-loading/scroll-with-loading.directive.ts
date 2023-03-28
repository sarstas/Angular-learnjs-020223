import { Directive, EventEmitter, Output } from '@angular/core';
import { LoadDirection } from './load-scroll.interface';

@Directive({
	selector: '[appScrollWithLoading]',
})
export class ScrollWithLoadingDirective {
	@Output() loadData = new EventEmitter<LoadDirection>();

	private prevScrollTop = -1;

	// constructor() {}
}
