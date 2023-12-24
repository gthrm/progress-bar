import type { IProgressBar } from '$lib/types/ProgressBar';
import type { IBarItem } from '$lib/types/BarItem';
import { BarItemStatus } from '$lib/types/BarItem';

export function createProgressBarItemsData({
	value,
	min,
	max,
	numberOfItems
}: Omit<IProgressBar, 'optimum'>): IBarItem[] {
	const ratio = (value - min) / (max - min);
	const currentIndex = Math.round(ratio * (numberOfItems - 1));
	const prevIndex = currentIndex - 1;
	const nextIndex = currentIndex + 1;

	return new Array(numberOfItems).fill(null).map((_, i) => {
		let status: BarItemStatus;
		if (i === currentIndex) {
			status = BarItemStatus.Current;
		} else if (i === prevIndex) {
			status = BarItemStatus.Prev;
		} else if (i === nextIndex) {
			status = BarItemStatus.Next;
		} else if (i < currentIndex) {
			status = BarItemStatus.Active;
		} else {
			status = BarItemStatus.Inactive;
		}

		return { id: i, status };
	});
}

export function getStatusClass({ status }: Pick<IBarItem, 'status'>): string {
	return `bar-${status}`;
}
