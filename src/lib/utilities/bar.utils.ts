import type { IProgressBar } from "$lib/types/ProgressBar";


export function createProgressBarItemsData({value, min, max, optimum, numberOfItems}: IProgressBar) {
    return new Array(numberOfItems).fill(true).map((_, i) => ({
        id: i,
        active: i / numberOfItems <= value,
        preActive: i + 1 / numberOfItems <= value
    }));
}