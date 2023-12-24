import { BarItemStatus } from '$lib/types/BarItem';
import { createProgressBarItemsData } from './bar.utils';

describe('createProgressBarItemsData', () => {
	test('should create correct number of items', () => {
		const result = createProgressBarItemsData({ value: 50, min: 0, max: 100, numberOfItems: 7 });
		expect(result.length).toBe(7);
	});

	test('should set correct status for each item', () => {
		const result = createProgressBarItemsData({ value: 50, min: 0, max: 100, numberOfItems: 7 });

		expect(result[0].status).toBe(BarItemStatus.Active);
		expect(result[1].status).toBe(BarItemStatus.Active);
		expect(result[2].status).toBe(BarItemStatus.Prev);
		expect(result[3].status).toBe(BarItemStatus.Current);
		expect(result[4].status).toBe(BarItemStatus.Next);
		expect(result[5].status).toBe(BarItemStatus.Inactive);
		expect(result[6].status).toBe(BarItemStatus.Inactive);
	});

	test('should handle minimum value', () => {
		const result = createProgressBarItemsData({ value: 0, min: 0, max: 100, numberOfItems: 7 });
		expect(result[0].status).toBe(BarItemStatus.Current);
		expect(result[1].status).toBe(BarItemStatus.Next);
		result.slice(2).forEach((item) => {
			expect(item.status).toBe(BarItemStatus.Inactive);
		});
	});

	test('should handle maximum value', () => {
		const result = createProgressBarItemsData({ value: 100, min: 0, max: 100, numberOfItems: 7 });
		expect(result[6].status).toBe(BarItemStatus.Current);
		expect(result[5].status).toBe(BarItemStatus.Prev);
		result.slice(0, -2).forEach((item) => {
			expect(item.status).toBe(BarItemStatus.Active);
		});
	});

	test('should handle value outside range', () => {
		const result = createProgressBarItemsData({ value: 150, min: 0, max: 100, numberOfItems: 7 });
		result.forEach((item) => {
			expect(item.status).toBe(BarItemStatus.Active);
		});
	});
});
