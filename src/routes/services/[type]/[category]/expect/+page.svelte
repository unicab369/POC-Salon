<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import { t } from '$lib/i18n';

	let visible = $state(false);
	let serviceType = $derived($page.params.type);
	let categoryId = $derived($page.params.category);

	interface SelectedService {
		name: string;
		minutes: number;
		price: number;
	}

	let selectedItems: SelectedService[] = $derived.by(() => {
		try {
			const raw = $page.url.searchParams.get('services');
			if (raw) return JSON.parse(raw) as SelectedService[];
		} catch {}
		return [];
	});

	let totalMinutes = $derived(selectedItems.reduce((sum: number, s: SelectedService) => sum + s.minutes, 0));

	function formatVND(amount: number): string {
		return amount.toLocaleString('vi-VN') + 'đ';
	}

	let stepLabels = $derived([$t('expect.step.preparing'), $t('expect.step.service'), $t('expect.step.feedback')]);

	onMount(() => {
		setTimeout(() => { visible = true; }, 100);
	});
</script>

<svelte:head>
	<title>What to Expect? — Ngan Ha Spa</title>
</svelte:head>

<main>
	<div class="page" class:visible>
		<div class="header">
			<h1 class="title">{$t('expect.title')}</h1>
			<div class="divider"></div>
		</div>

		<div class="progress-container">
			{#each stepLabels as label, i}
				{#if i > 0}
					<div class="step-line" class:active={i === 0}></div>
				{/if}
				<div class="step">
					<div class="step-circle" class:active={i === 0}>
						{#if i === 0}
							<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
								<circle cx="12" cy="12" r="3" />
								<path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
							</svg>
						{:else if i === 1}
							<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
								<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
							</svg>
						{:else}
							<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
								<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
							</svg>
						{/if}
					</div>
					<span class="step-label" class:active={i === 0}>{label}</span>
				</div>
			{/each}
		</div>

		<div class="sections">
			<div class="section">
				<h2 class="step-detail-title">{$t('expect.step.preparing')}</h2>
				<div class="step-detail-items">
					<div class="step-detail-card">
						<span class="step-detail-name">{$t('expect.footwash.title')}</span>
						<p class="step-detail-desc">{$t('expect.footwash.desc')}</p>
					</div>
					<p class="step-detail-note">{$t('expect.preparing.note')}</p>
				</div>
			</div>

			<div class="section">
				<h2 class="step-detail-title">{$t('expect.step.service')}</h2>
				<div class="step-detail-items">
					<div class="step-detail-card services-combined-card">
						{#each selectedItems as item, i}
							<div class="service-card-head">
								<span class="service-card-num">{i + 1}.</span>
								<span class="step-detail-name">{item.name}</span>
								<span class="service-card-mins">{item.minutes} min</span>
							</div>
						{/each}
						<div class="service-total-row-inline">
							<svg class="service-total-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
								<circle cx="12" cy="12" r="10" />
								<path d="M12 6v6l4 2" />
							</svg>
							<span class="service-total-label">{$t('expect.totalServiceTime')}</span>
							<span class="service-total-value">{totalMinutes} min</span>
						</div>
					</div>
					<p class="step-detail-note">{$t('expect.therapistSwap')}</p>
				</div>
			</div>

			<div class="section">
				<h2 class="step-detail-title">{$t('expect.step.feedback')}</h2>
				<div class="step-detail-items">
					<div class="step-detail-card">
						<span class="step-detail-name">{$t('expect.feedback.title')}</span>
						<p class="step-detail-desc">{$t('expect.feedback.desc')}</p>
					</div>
				</div>
			</div>
		</div>

		<footer class="footer-actions">
			<a href="{base}/services/{serviceType}/{categoryId}" class="btn btn-back">
				<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
					<path d="M19 12H5" /><path d="M12 19l-7-7 7-7" />
				</svg>
				{$t('expect.back')}
			</a>
		</footer>
	</div>
</main>

<style>
	main {
		height: 100vh;
		display: flex;
	}

	.page {
		position: relative;
		width: 100%;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 50px 24px 120px;
		overflow-y: auto;
		opacity: 0;
		transition: opacity 1.2s ease;
	}

	.page.visible {
		opacity: 1;
	}

	.header {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 10;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 12px;
		padding: 12px 24px 16px;
		background: linear-gradient(to bottom, #0f0f0f 50%, transparent);
	}

	.title {
		font-family: 'Playfair Display', serif;
		font-size: clamp(1.4rem, 4vw, 2rem);
		font-weight: 600;
		letter-spacing: 0.06em;
		color: #c19a6b;
		text-align: center;
	}

	.divider {
		width: 180px;
		height: 1px;
		background: linear-gradient(90deg, transparent, #c19a6b, transparent);
	}

	.progress-container {
		display: flex;
		align-items: flex-start;
		justify-content: center;
		width: 100%;
		max-width: 420px;
		margin-top: 0;
	}

	.step {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 12px;
	}

	.step-circle {
		width: 52px;
		height: 52px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		background: rgba(107,93,77,0.12);
		border: 2px solid #6b5d4d;
		flex-shrink: 0;
		transition: all 0.3s;
	}

	.step-circle.active {
		background: rgba(193,154,107,0.18);
		border-color: #c19a6b;
		box-shadow: 0 0 20px rgba(193,154,107,0.25);
	}

	.step-circle svg {
		width: 22px;
		height: 22px;
		color: #6b5d4d;
	}

	.step-circle.active svg {
		color: #c19a6b;
	}

	.step-label {
		font-size: 0.85rem;
		font-weight: 600;
		color: #6b5d4d;
		letter-spacing: 0.04em;
		transition: color 0.3s;
		white-space: nowrap;
	}

	.step-label.active {
		color: #c19a6b;
	}

	.step-line {
		height: 2px;
		flex: 1;
		min-width: 40px;
		background: #6b5d4d;
		margin-top: 26px;
		transition: background 0.3s;
	}

	.step-line.active {
		background: #c19a6b;
	}

	/* Sections */
	.sections {
		width: 100%;
		max-width: 420px;
		margin-top: 36px;
		display: flex;
		flex-direction: column;
		gap: 23px;
	}

	.section {
		display: flex;
		flex-direction: column;
		gap: 0;
	}

	.step-detail-title {
		font-size: 0.72rem;
		font-weight: 600;
		color: #6b6b6b;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		margin-bottom: 12px;
		text-align: center;
	}

	.step-detail-items {
		display: flex;
		flex-direction: column;
		gap: 4px;
	}

	.step-detail-card {
		padding: 16px;
		border-radius: 14px;
		background: rgba(255,255,255,0.03);
		border: 1px solid rgba(193,154,107,0.12);
	}

	.step-detail-name {
		font-size: 1rem;
		font-weight: 600;
		color: #e8e0d6;
		display: block;
		margin-bottom: 4px;
	}

	.step-detail-desc {
		font-size: 0.9rem;
		color: #8b7355;
		line-height: 1.5;
		font-weight: 300;
	}

	.step-detail-note {
		font-size: 0.85rem;
		color: #8b7355;
		line-height: 1.6;
		font-weight: 300;
		font-style: italic;
		padding: 12px 16px;
		text-align: center;
	}

	/* Service step cards */
	.services-combined-card {
		display: flex;
		flex-direction: column;
		gap: 12px;
		padding: 16px;
	}

	.service-card-head {
		display: flex;
		align-items: center;
		gap: 8px;
	}

	.service-card-num {
		font-size: 0.85rem;
		font-weight: 600;
		color: #8b7355;
		min-width: 24px;
	}

	.service-card-head .step-detail-name {
		flex: 1;
		margin-bottom: 0;
	}

	.service-card-mins {
		font-size: 0.8rem;
		font-weight: 600;
		letter-spacing: 0.06em;
		color: #c19a6b;
		background: rgba(193,154,107,0.1);
		padding: 3px 10px;
		border-radius: 20px;
		border: 1px solid rgba(193,154,107,0.25);
		white-space: nowrap;
	}

	.service-total-row-inline {
		display: flex;
		align-items: center;
		gap: 10px;
		padding: 12px 0 0;
		margin-top: 4px;
		border-top: 1px solid rgba(193,154,107,0.12);
	}

	.service-total-icon {
		width: 18px;
		height: 18px;
		color: #8b7355;
		flex-shrink: 0;
	}

	.service-total-label {
		flex: 1;
		font-size: 0.85rem;
		font-weight: 600;
		color: #e8e0d6;
		letter-spacing: 0.04em;
	}

	.service-total-value {
		font-size: 1rem;
		font-weight: 700;
		color: #c19a6b;
	}

	.footer-actions {
		position: fixed;
		bottom: 0;
		width: 100%;
		max-width: 480px;
		left: 50%;
		transform: translateX(-50%);
		z-index: 10;
		display: flex;
		flex-direction: column;
		gap: 12px;
		padding: 16px 24px 20px;
		background: #0f0f0f;
	}

	.btn {
		flex: 1;
		padding: 14px 0;
		border-radius: 40px;
		font-size: 0.85rem;
		font-weight: 600;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		cursor: pointer;
		font-family: inherit;
		text-align: center;
		text-decoration: none;
		transition: background 0.3s, border-color 0.3s, color 0.3s;
	}

	.btn-back {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		background: transparent;
		border: 1px solid rgba(193,154,107,0.2);
		color: #8b7355;
	}

	.btn-back:hover {
		border-color: rgba(193,154,107,0.4);
		color: #c19a6b;
		background: rgba(193,154,107,0.06);
	}

	@media (max-width: 640px) {
		.page {
			padding: 90px 16px 120px;
		}

		.footer-actions {
			padding: 16px 16px 20px;
		}
	}
</style>
