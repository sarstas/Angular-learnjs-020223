import { borderOffset } from './border-offset.const';

export function isScrollReachedTopOffset(scrollTop: number, prevScrollTop: number): boolean {
	return scrollTop < borderOffset && scrollTop < prevScrollTop;
}

export function isScrollReachedBottomOffset(
	scrollTop: number,
	lowerScrollPosition: number,
	prevScrollTop: number,
): boolean {
	return lowerScrollPosition - scrollTop < borderOffset && scrollTop > prevScrollTop;
}
