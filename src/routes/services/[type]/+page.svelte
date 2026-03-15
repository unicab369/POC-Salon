<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	interface Category {
		name: string;
		id: string;
		min: number;
	}

	const categories: Category[] = [
		{ name: 'Body Massage', id: 'body-massage', min: 60 },
		{ name: 'Foot Massage', id: 'foot-massage', min: 45 },
		{ name: 'Hair Wash', id: 'hair-wash', min: 30 },
		{ name: 'Facial', id: 'facial', min: 45 },
		{ name: 'Heel Care', id: 'heel-care', min: 30 },
		{ name: 'Nails', id: 'nails', min: 40 },
		{ name: 'Ear Clean', id: 'ear-clean', min: 20 },
		{ name: 'Barber', id: 'barber', min: 30 },
		{ name: 'VIP Pack', id: 'vip-pack', min: 120 }
	];

	let visible = $state(false);
	let serviceType = $derived($page.params.type);
	let displayType = $derived(serviceType.charAt(0).toUpperCase() + serviceType.slice(1));

	onMount(() => {
		setTimeout(() => {
			visible = true;
		}, 100);
	});
</script>

<svelte:head>
	<title>{displayType} Services — Ngan Ha Spa</title>
</svelte:head>

<main>
	<div class="page" class:visible>
		<div class="header">
			<h1 class="title">{displayType}</h1>
			<div class="divider"></div>
		</div>

		<div class="categories-grid">
			{#each categories as cat}
				<a class="cat-card" href="/services/{serviceType}/{cat.id}">
					<div class="cat-icon">
						{#if cat.id === 'body-massage'}
							<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
								<circle cx="24" cy="8" r="4" />
								<path d="M14 20c2-3 5-5 10-5s8 2 10 5" />
								<path d="M16 20c0 0-2 8-4 14" />
								<path d="M32 20c0 0 2 8 4 14" />
								<path d="M20 25c0 0-1 8-2 14" />
								<path d="M28 25c0 0 1 8 2 14" />
								<path d="M18 28c2 1 5 2 6 2s4-1 6-2" />
							</svg>
						{:else if cat.id === 'foot-massage'}
							<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
								<path d="M16 6c-1 8-3 16-3 22c0 5 2 8 6 10c3 2 7 2 11 1c4-2 7-5 7-10c0-3-2-6-5-7c-3-1-5 0-6 2c-1 2 0 5 2 6" />
								<path d="M19 18l-3 4" />
								<path d="M23 16l-2 5" />
								<path d="M27 15l-1 5" />
								<path d="M31 17l1 4" />
							</svg>
						{:else if cat.id === 'hair-wash'}
							<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
								<circle cx="24" cy="16" r="8" />
								<path d="M16 14c-1-4 0-8 4-10c2-1 5-1 8 0c3 2 4 5 4 8" />
								<path d="M18 24c-2 2-3 5-3 8" />
								<path d="M30 24c2 2 3 5 3 8" />
								<path d="M20 30c0 3-1 6-2 9" />
								<path d="M28 30c0 3 1 6 2 9" />
								<path d="M24 28v12" />
								<path d="M21 36h6" />
							</svg>
						{:else if cat.id === 'facial'}
							<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
								<ellipse cx="24" cy="26" rx="11" ry="14" />
								<path d="M13 20c0-8 5-14 11-14s11 6 11 14" />
								<path d="M13 20c-2 0-3-3-2-6c1-2 2-3 3-2" />
								<path d="M35 20c2 0 3-3 2-6c-1-2-2-3-3-2" />
								<path d="M10 10c2-2 4-4 7-4" />
								<path d="M38 10c-2-2-4-4-7-4" />
								<path d="M14 8c1-2 4-4 10-4s9 2 10 4" />
								<circle cx="20" cy="24" r="1.5" fill="currentColor" />
								<circle cx="28" cy="24" r="1.5" fill="currentColor" />
								<path d="M22 31c1 1 3 1 4 0" />
								<path d="M22 27h4" />
							</svg>
						{:else if cat.id === 'heel-care'}
							<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
								<path d="M12 12c0 0-2 10-2 18c0 4 2 7 6 8h16c4 0 6-2 6-5c0-3-2-5-5-6c-4-1-6 0-6 0c0-4 1-10 1-15" />
								<path d="M16 38v2" />
								<path d="M32 38v2" />
								<path d="M20 30c0 0 2-1 4-1s4 1 4 1" />
								<circle cx="22" cy="24" r="1" fill="currentColor" />
								<circle cx="28" cy="24" r="1" fill="currentColor" />
							</svg>
						{:else if cat.id === 'nails'}
							<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
								<path d="M18 38V22c0-4 3-7 6-7s6 3 6 7v16" />
								<path d="M18 26h12" />
								<ellipse cx="24" cy="20" rx="5" ry="3" />
								<path d="M22 20v-4" />
								<path d="M24 20v-5" />
								<path d="M26 20v-4" />
								<path d="M14 38h20" />
								<path d="M16 38c0 2 2 3 4 3h8c2 0 4-1 4-3" />
							</svg>
						{:else if cat.id === 'ear-clean'}
							<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
								<path d="M30 10c5 2 8 7 8 14c0 8-4 14-10 16c-3 1-5 0-6-2" />
								<path d="M30 10c-2-1-5-2-7-1c-5 1-9 6-9 13c0 5 2 9 5 11" />
								<path d="M22 22c0-2 1-4 3-4s3 2 3 4c0 3-2 5-4 7c-1 1-2 3-1 5" />
							</svg>
						{:else if cat.id === 'barber'}
							<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
								<circle cx="24" cy="10" r="5" />
								<path d="M16 8c0-4 3-7 8-7s8 3 8 7" />
								<path d="M15 14c-1 2-2 5-2 8c0 4 2 7 5 8" />
								<path d="M33 14c1 2 2 5 2 8c0 4-2 7-5 8" />
								<path d="M18 30v8" />
								<path d="M30 30v8" />
								<rect x="14" y="38" width="20" height="4" rx="2" />
								<path d="M20 16v4" />
								<path d="M28 16v4" />
							</svg>
						{:else if cat.id === 'vip-pack'}
							<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
								<path d="M8 18l6-8h20l6 8l-16 22z" />
								<path d="M8 18h32" />
								<path d="M14 10l4 8l6-8" />
								<path d="M34 10l-4 8l-6-8" />
								<path d="M18 18l6 22l6-22" />
							</svg>
						{/if}
					</div>
					<span class="cat-name">{cat.name}</span>
				</a>
			{/each}
		</div>

		<a href="/services" class="back-link">
			<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
				<path d="M19 12H5" /><path d="M12 19l-7-7 7-7" />
			</svg>
			Back
		</a>
	</div>
</main>

<style>
	:global(*) {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	:global(body) {
		background: #0f0f0f;
		color: #e8e0d6;
		font-family: 'Inter', -apple-system, sans-serif;
		overflow-x: hidden;
	}

	main {
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.page {
		position: relative;
		width: 100%;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 120px 24px 120px;
		gap: 36px;
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
		gap: 16px;
		padding: 32px 24px 20px;
	}

	.title {
		font-family: 'Playfair Display', serif;
		font-size: clamp(1.8rem, 5vw, 2.8rem);
		font-weight: 600;
		letter-spacing: 0.06em;
		color: #c19a6b;
		text-align: center;
	}

	.divider {
		height: 1px;
		background: linear-gradient(90deg, transparent, #c19a6b, transparent);
		animation: divider-breathe 16s ease-in-out infinite;
	}

	@keyframes divider-breathe {
		0%, 100% { width: 150px; }
		50% { width: 200px; }
	}

	.categories-grid {
		position: relative;
		z-index: 1;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 16px;
		max-width: 360px;
		width: 100%;
		animation: grid-float 16s ease-in-out infinite;
	}

	@keyframes grid-float {
		0%, 100% { transform: translateY(0); }
		50% { transform: translateY(-10px); }
	}

	.cat-card {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 6px;
		padding: 10px 12px 8px;
		border-radius: 16px;
		background: rgba(255,255,255,0.03);
		border: 1px solid rgba(193,154,107,0.12);
		cursor: pointer;
		color: inherit;
		text-decoration: none;
		transition: background 0.3s, border-color 0.3s;
	}

	.cat-card:hover {
		background: rgba(193,154,107,0.08);
		border-color: rgba(193,154,107,0.3);
	}

	.cat-icon {
		width: 36px;
		height: 36px;
		color: #c19a6b;
	}

	.cat-icon svg {
		width: 100%;
		height: 100%;
	}

	.cat-name {
		font-size: 0.95rem;
		color: #e8e0d6;
		font-weight: 600;
		letter-spacing: 0.02em;
		text-align: center;
		line-height: 1.3;
	}


	main::before,
	main::after {
		content: '';
		position: fixed;
		left: 0;
		width: 100%;
		height: 80px;
		pointer-events: none;
		z-index: 5;
	}

	main::before {
		top: 0;
		background: linear-gradient(to bottom, #0f0f0f 0%, transparent 100%);
	}

	main::after {
		bottom: 0;
		background: linear-gradient(to top, #0f0f0f 0%, transparent 100%);
	}

	.back-link {
		position: fixed;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
		width: calc(100% - 48px);
		max-width: 480px;
		z-index: 10;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		color: #8b7355;
		text-decoration: none;
		font-size: 0.85rem;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		padding: 14px 24px;
		margin-bottom: 20px;
		border: 1px solid rgba(193,154,107,0.2);
		border-radius: 40px;
		transition: color 0.3s, border-color 0.3s, background 0.3s;
	}

	.back-link:hover {
		color: #c19a6b;
		border-color: rgba(193,154,107,0.4);
		background: rgba(193,154,107,0.06);
	}

	@media (max-width: 640px) {
		.page {
			padding: 100px 16px 120px;
			gap: 28px;
		}

		.categories-grid {
			gap: 12px;
		}

		.cat-card {
			padding: 16px 8px 12px;
		}

		.cat-icon {
			width: 34px;
			height: 34px;
		}

		.cat-name {
			font-size: 1.05rem;
		}
	}
</style>
