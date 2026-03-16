import { writable, derived } from 'svelte/store';
import { browser } from '$app/environment';
import en from './en.json';
import ko from './ko.json';
import zh from './zh.json';
import vi from './vi.json';
import ja from './ja.json';

export type Locale = 'en' | 'ko' | 'zh' | 'vi' | 'ja';

const translations: Record<Locale, Record<string, string>> = { en, ko, zh, vi, ja };

function getInitialLocale(): Locale {
	if (browser) {
		const stored = localStorage.getItem('locale');
		if (stored && stored in translations) return stored as Locale;
	}
	return 'en';
}

export const locale = writable<Locale>(getInitialLocale());

export function setLocale(l: Locale) {
	locale.set(l);
	if (browser) {
		localStorage.setItem('locale', l);
	}
}

export const t = derived(locale, ($locale) => {
	const dict = translations[$locale] ?? translations.en;
	return (key: string): string => dict[key] ?? translations.en[key] ?? key;
});
