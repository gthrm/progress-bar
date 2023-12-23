export enum BarItemStatus {
    Active = 'active',
    Prev = 'prev',
    Current = 'current',
    Next = 'next',
    Inactive = 'inactive'
}

export interface IBarItem {
    id: number;
    status: BarItemStatus;
}