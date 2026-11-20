export interface ScheduleDetail {
    label: string;
    value: string;
}

export interface ScheduleItem {
    time: string;
    title: string;
    details?: ScheduleDetail[];
    highlight?: boolean;
}

export interface ScheduleDay {
    id: string;
    iso: string;
    label: string;
    date: string;
    items: ScheduleItem[];
}