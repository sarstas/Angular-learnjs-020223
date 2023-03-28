import { Directive, EventEmitter, HostListener, Output } from '@angular/core';
// import { LoadDirection } from './load-scroll.interface';
import { isScrollReachedBottomOffset, isScrollReachedTopOffset } from './utils';
import { LoadDirection } from './load-direction.const';

@Directive({
	selector: '[appScrollWithLoading]',
})
export class ScrollWithLoadingDirective {
	@Output() loadData = new EventEmitter<LoadDirection>();

	private prevScrollTop = -1;

	@HostListener('scroll', ['$event.target'])
	onScroll({ scrollTop, clientHeight, scrollHeight }: HTMLElement) {
		const prevScrollTop = this.prevScrollTop;
		const lowerScrollPosition = scrollHeight - clientHeight;

		this.prevScrollTop = scrollTop;

		const shouldLoadMessagesDown = isScrollReachedBottomOffset(scrollTop, lowerScrollPosition, prevScrollTop);

		if (shouldLoadMessagesDown) {
			this.loadData.emit(LoadDirection.After);

			return;
		}

		const shouldLoadMessagesTop = isScrollReachedTopOffset(scrollTop, prevScrollTop);

		if (shouldLoadMessagesTop) {
			this.loadData.emit(LoadDirection.Before);

			return;
		}
	}
}
