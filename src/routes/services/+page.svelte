<script lang="ts">
	import { onMount } from 'svelte';

	interface ServiceItem {
		title: string;
		description: string;
		id: string;
		href: string;
	}

	const services: ServiceItem[] = [
		{
			title: 'Standard',
			description: 'Random Staff & Room',
			id: 'standard',
			href: '/services/standard'
		},
		{
			title: 'Premium',
			description: 'Design Your Own Journey',
			id: 'premium',
			href: '/services/premium'
		},
		{
			title: 'Homespa',
			description: 'Spa at Your Place',
			id: 'homespa',
			href: '/services/homespa'
		}
	];

	let visible = $state(false);

	onMount(() => {
		setTimeout(() => {
			visible = true;
		}, 100);
	});
</script>

<svelte:head>
	<title>Select Service — Ngan Ha Spa</title>
</svelte:head>

<main>
	<div class="page" class:visible>
		<div class="header">
			<h1 class="title">Select Service</h1>
			<div class="divider"></div>
		</div>

		<div class="services-grid">
			{#each services as service}
				<a class="service-card" href={service.href}>
					<div class="service-icon">
						{#if service.id === 'standard'}
							<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
								<circle cx="24" cy="24" r="16" />
								<path d="M24 14v10l7 5" />
								<circle cx="24" cy="24" r="3" fill="currentColor" />
							</svg>
						{:else if service.id === 'premium'}
							<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
								<path d="M24 6l5 10l11 2l-8 8l2 11l-10-5l-10 5l2-11l-8-8l11-2z" />
							</svg>
						{:else if service.id === 'homespa'}
							<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
								<path d="M6 24l18-16l18 16" />
								<path d="M10 22v16a2 2 0 002 2h24a2 2 0 002-2V22" />
								<path d="M18 40V30a2 2 0 012-2h8a2 2 0 012 2v10" />
								<path d="M20 18c0 0 2 3 4 3s4-3 4-3" />
							</svg>
						{/if}
					</div>
					<h2 class="service-title">{service.title}</h2>
					<p class="service-desc">{service.description}</p>
				</a>
			{/each}
		</div>

		<a href="/" class="back-link">
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
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
	}

	.page {
		position: relative;
		width: 100%;
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 24px;
		gap: 24px;
		opacity: 0;
		transition: opacity 1.2s ease;
		overflow: hidden;
	}

	.page.visible {
		opacity: 1;
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

	.services-grid {
		position: relative;
		z-index: 1;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 28px;
		max-width: 800px;
		animation: grid-float 16s ease-in-out infinite;
	}

	@keyframes grid-float {
		0%, 100% { transform: translateY(0); }
		50% { transform: translateY(-10px); }
	}

	.service-card {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: clamp(8px, 1.5vh, 16px);
		padding: clamp(12px, 2vh, 24px) 32px;
		width: 220px;
		height: 20vh;
		border-radius: 24px;
		background: rgba(255,255,255,0.03);
		border: 1px solid rgba(193,154,107,0.15);
		text-decoration: none;
		color: inherit;
		cursor: pointer;
		transition: background 0.4s, border-color 0.4s, box-shadow 0.4s;
	}

	.service-card:hover {
		background: rgba(193,154,107,0.1);
		border-color: rgba(193,154,107,0.4);
		box-shadow: 0 12px 40px rgba(193,154,107,0.1);
	}

	.service-icon {
		width: clamp(36px, 5vh, 56px);
		height: clamp(36px, 5vh, 56px);
		color: #c19a6b;
		padding: clamp(6px, 1vh, 10px);
		border-radius: 50%;
		background: rgba(193,154,107,0.08);
		border: 1px solid rgba(193,154,107,0.15);
		flex-shrink: 0;
	}

	.service-icon svg {
		width: 100%;
		height: 100%;
	}

	.service-title {
		font-family: 'Playfair Display', serif;
		font-size: clamp(1rem, 2vh, 1.6rem);
		font-weight: 600;
		color: #e8e0d6;
		letter-spacing: 0.04em;
	}

	.service-desc {
		font-size: clamp(0.7rem, 1.5vh, 0.9rem);
		color: #8b7355;
		text-align: center;
		letter-spacing: 0.04em;
		font-weight: 300;
		line-height: 1.4;
	}

	@media (max-width: 640px) {
		.page {
			padding: 16px;
			gap: 20px;
		}

		.services-grid {
			gap: 20px;
		}

		.service-card {
			width: 100%;
			max-width: 280px;
			padding: 32px 24px 24px;
		}
	}
</style>
