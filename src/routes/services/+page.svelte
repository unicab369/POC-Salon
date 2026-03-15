<script lang="ts">
	import { onMount } from 'svelte';

	interface ServiceItem {
		title: string;
		description: string;
		icon: string;
		href: string;
	}

	const services: ServiceItem[] = [
		{
			title: 'Standard',
			description: 'Random Staff & Room',
			icon: '✦',
			href: '/services/standard'
		},
		{
			title: 'Premium',
			description: 'Design Your Own Journey',
			icon: '◆',
			href: '/services/premium'
		},
		{
			title: 'Homespa',
			description: 'Spa at Your Place',
			icon: '⌂',
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
					<span class="service-icon">{service.icon}</span>
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
		padding: 40px 24px;
		gap: 40px;
		opacity: 0;
		transition: opacity 1.2s ease;
		overflow: hidden;
	}

	.page.visible {
		opacity: 1;
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

	.services-grid {
		position: relative;
		z-index: 1;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 28px;
		max-width: 800px;
	}

	.service-card {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 16px;
		padding: 40px 32px 32px;
		width: 220px;
		border-radius: 20px;
		background: rgba(255,255,255,0.03);
		border: 1px solid rgba(193,154,107,0.12);
		backdrop-filter: blur(10px);
		text-decoration: none;
		color: inherit;
		cursor: pointer;
		transition: background 0.3s, border-color 0.3s, transform 0.3s;
	}

	.service-card:hover {
		background: rgba(193,154,107,0.08);
		border-color: rgba(193,154,107,0.3);
		transform: translateY(-8px);
	}

	.service-icon {
		font-size: 2rem;
		color: #c19a6b;
		line-height: 1;
	}

	.service-title {
		font-family: 'Playfair Display', serif;
		font-size: 1.8rem;
		font-weight: 600;
		color: #e8e0d6;
		letter-spacing: 0.04em;
	}

	.service-desc {
		font-size: 1rem;
		color: #8b7355;
		text-align: center;
		letter-spacing: 0.04em;
		font-weight: 300;
		line-height: 1.5;
	}

	@media (max-width: 640px) {
		.page {
			padding: 40px 16px;
			gap: 32px;
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
