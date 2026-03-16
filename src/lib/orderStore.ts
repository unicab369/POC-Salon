import { writable } from 'svelte/store';

export interface ServiceSelection {
	minutes: number;
	therapist: 'male' | 'female' | 'random';
	strength: 'light' | 'medium' | 'strong';
}

export interface DurationOption {
	minutes: number;
	label: string;
	priceVND: number;
}

export interface ServiceDef {
	name: string;
	description: string;
	durations: DurationOption[];
	bestSeller?: boolean;
}

/** categoryId -> Map<serviceName, ServiceSelection> */
export const ordersByCategory = writable<Record<string, Map<string, ServiceSelection>>>({});

export function getOrCreateCategoryOrders(categoryId: string, current: Record<string, Map<string, ServiceSelection>>): Map<string, ServiceSelection> {
	return current[categoryId] ?? new Map();
}

export function setCategoryOrders(categoryId: string, selections: Map<string, ServiceSelection>) {
	ordersByCategory.update(all => {
		if (selections.size === 0) {
			const { [categoryId]: _, ...rest } = all;
			return rest;
		}
		return { ...all, [categoryId]: selections };
	});
}
