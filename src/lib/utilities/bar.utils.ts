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

type BarItemParams = {
	x: number;
	y: number;
	width: number;
	height: number;
	fillOpacity: number;
};

function calculateX(id: number, status: BarItemStatus, isSmallScreen: boolean): number {
	const predefinedPaddingLeft = 22;
	const predefinedGap = 10;
	const baseWidth = isSmallScreen ? 6 : 8;
	let x = predefinedPaddingLeft + id * (predefinedGap + baseWidth);

	// If the Current bar on the left side of the bar we need to add 2px to the x position because of thw width of the Current bar is 10px
	if (
		!isSmallScreen &&
		(status === BarItemStatus.Inactive || status === BarItemStatus.Next) &&
		id > 0
	) {
		x += 2;
	}
	return x;
}

function calculateY(status: BarItemStatus, isSmallScreen: boolean): number {
	switch (status) {
		case BarItemStatus.Current:
			return isSmallScreen ? 22 : 22;
		case BarItemStatus.Next:
		case BarItemStatus.Prev:
			return isSmallScreen ? 28 : 29;
		default:
			return isSmallScreen ? 30 : 31;
	}
}

function calculateWidth(status: BarItemStatus, isSmallScreen: boolean): number {
	if (isSmallScreen) {
		return 6;
	}
	return status === BarItemStatus.Current ? 10 : 8;
}

function calculateHeight(status: BarItemStatus, isSmallScreen: boolean): number {
	switch (status) {
		case BarItemStatus.Current:
			return isSmallScreen ? 36 : 42;
		case BarItemStatus.Next:
		case BarItemStatus.Prev:
			return isSmallScreen ? 24 : 28;
		default:
			return isSmallScreen ? 20 : 24;
	}
}

function calculateFillOpacity(status: BarItemStatus): number {
	switch (status) {
		case BarItemStatus.Current:
		case BarItemStatus.Active:
		case BarItemStatus.Prev:
			return 1;
		case BarItemStatus.Next:
			return 0.6;
		default:
			return 0.4;
	}
}

export function getBarItemParams(
	id: number,
	status: BarItemStatus,
	isSmallScreen: boolean
): BarItemParams {
	return {
		x: calculateX(id, status, isSmallScreen),
		y: calculateY(status, isSmallScreen),
		width: calculateWidth(status, isSmallScreen),
		height: calculateHeight(status, isSmallScreen),
		fillOpacity: calculateFillOpacity(status)
	};
}
