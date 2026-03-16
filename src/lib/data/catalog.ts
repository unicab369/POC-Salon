import { derived } from 'svelte/store';
import { locale } from '$lib/i18n';
import servicesData from './services.json';
import en from './translations/en.json';
import ko from './translations/ko.json';
import zh from './translations/zh.json';
import vi from './translations/vi.json';
import ja from './translations/ja.json';

export interface DurationOption {
	minutes: number;
	label: string;
	priceVND: number;
}

export interface CatalogService {
	id: string;
	name: string;
	description: string;
	durations: DurationOption[];
	bestSeller?: boolean;
	basePrice: number;
}

export interface CatalogCategory {
	id: string;
	name: string;
	minMinutes: number;
	services: CatalogService[];
}

export interface CatalogExperience {
	id: string;
	title: string;
	description: string;
}

interface TranslationFile {
	experiences: Record<string, { title: string; description: string }>;
	categories: Record<string, string>;
	services: Record<string, { name: string; description: string }>;
}

const translationMap: Record<string, TranslationFile> = { en, ko, zh, vi, ja };

function buildDurations(basePrice: number): DurationOption[] {
	const round = (n: number) => Math.round(n / 10000) * 10000;
	return [
		{ minutes: 45, label: '45 mins', priceVND: basePrice },
		{ minutes: 60, label: '60 mins', priceVND: round(basePrice * 1.3) },
		{ minutes: 70, label: '70 mins', priceVND: round(basePrice * 1.5) },
		{ minutes: 90, label: '90 mins', priceVND: round(basePrice * 1.85) },
		{ minutes: 120, label: '120 mins', priceVND: round(basePrice * 2.4) },
		{ minutes: 180, label: '180 mins', priceVND: round(basePrice * 3.5) },
		{ minutes: 240, label: '240 mins', priceVND: round(basePrice * 4.5) },
	];
}

export const catalog = derived(locale, ($locale) => {
	const tr = translationMap[$locale] ?? translationMap.en;
	const fallback = translationMap.en;

	const experiences: CatalogExperience[] = servicesData.experiences.map((exp) => {
		const t = tr.experiences[exp.id] ?? fallback.experiences[exp.id];
		return {
			id: exp.id,
			title: t?.title ?? exp.id,
			description: t?.description ?? '',
		};
	});

	const categories: CatalogCategory[] = servicesData.categories.map((cat) => {
		const catName = tr.categories[cat.id] ?? fallback.categories[cat.id] ?? cat.id;
		const rawServices = (servicesData.services as Record<string, { id: string; basePrice: number; bestSeller?: boolean }[]>)[cat.id] ?? [];

		const services: CatalogService[] = rawServices.map((svc) => {
			const svcTr = tr.services[svc.id] ?? fallback.services[svc.id];
			return {
				id: svc.id,
				name: svcTr?.name ?? svc.id,
				description: svcTr?.description ?? '',
				durations: buildDurations(svc.basePrice),
				bestSeller: svc.bestSeller,
				basePrice: svc.basePrice,
			};
		});

		return {
			id: cat.id,
			name: catName,
			minMinutes: cat.minMinutes,
			services,
		};
	});

	return { experiences, categories };
});
