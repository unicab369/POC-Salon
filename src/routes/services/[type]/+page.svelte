<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	interface Category {
		name: string;
		icon: string;
	}

	const categories: Category[] = [
		{ name: 'Body Massage', icon: '💆' },
		{ name: 'Foot Massage', icon: '🦶' },
		{ name: 'Hair Wash', icon: '🧴' },
		{ name: 'Facial', icon: '✨' },
		{ name: 'Heel Care', icon: '🩹' },
		{ name: 'Nails', icon: '💅' },
		{ name: 'Ear Clean', icon: '👂' },
		{ name: 'Barber', icon: '✂️' },
		{ name: 'VIP Pack', icon: '👑' }
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
				<button class="cat-card">
					<span class="cat-icon">{cat.icon}</span>
					<span class="cat-name">{cat.name}</span>
				</button>
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
		padding: 40px 24px;
		gap: 36px;
		opacity: 0;
		transition: opacity 1.2s ease;
	}

	.page.visible {
		opacity: 1;
	}

	.header {
		position: relative;
		z-index: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 16px;
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
		width: 180px;
		height: 1px;
		background: linear-gradient(90deg, transparent, #c19a6b, transparent);
	}

	.categories-grid {
		position: relative;
		z-index: 1;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 16px;
		max-width: 400px;
		width: 100%;
	}

	.cat-card {
		display: flex;
		align-items: center;
		gap: 14px;
		padding: 18px 20px;
		border-radius: 16px;
		background: rgba(255,255,255,0.03);
		border: 1px solid rgba(193,154,107,0.12);
		backdrop-filter: blur(10px);
		cursor: pointer;
		color: inherit;
		font-family: inherit;
		transition: background 0.3s, border-color 0.3s, transform 0.3s;
	}

	.cat-card:hover {
		background: rgba(193,154,107,0.08);
		border-color: rgba(193,154,107,0.3);
		transform: translateY(-4px);
	}

	.cat-icon {
		font-size: 1.6rem;
		line-height: 1;
		flex-shrink: 0;
	}

	.cat-name {
		font-size: 0.9rem;
		color: #e8e0d6;
		font-weight: 500;
		letter-spacing: 0.02em;
	}

	.back-link {
		position: relative;
		z-index: 1;
		display: inline-flex;
		align-items: center;
		gap: 8px;
		color: #8b7355;
		text-decoration: none;
		font-size: 0.85rem;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		padding: 12px 32px;
		border: 1px solid rgba(193,154,107,0.2);
		border-radius: 40px;
		transition: color 0.3s, border-color 0.3s, background 0.3s;
		margin-top: 8px;
	}

	.back-link:hover {
		color: #c19a6b;
		border-color: rgba(193,154,107,0.4);
		background: rgba(193,154,107,0.06);
	}

	@media (max-width: 640px) {
		.page {
			padding: 40px 16px;
			gap: 28px;
		}

		.categories-grid {
			gap: 12px;
		}

		.cat-card {
			padding: 14px 16px;
		}

		.cat-icon {
			font-size: 1.4rem;
		}

		.cat-name {
			font-size: 0.82rem;
		}
	}
</style>
