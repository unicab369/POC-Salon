<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import { t, setLocale, type Locale } from '$lib/i18n';

	interface FlagItem {
		emoji: string;
		language: string;
		native: string;
	}

	const flags: FlagItem[] = [
		{ emoji: '🇰🇷', language: 'Korean', native: '한국어' },
		{ emoji: '🇨🇳', language: 'Chinese', native: '中文' },
		{ emoji: '🇬🇧', language: 'English', native: 'English' },
		{ emoji: '🇻🇳', language: 'Vietnamese', native: 'Tiếng Việt' },
		{ emoji: '🇯🇵', language: 'Japanese', native: '日本語' }
	];

	const flagLocaleMap: Record<string, Locale> = {
		Korean: 'ko',
		Chinese: 'zh',
		English: 'en',
		Vietnamese: 'vi',
		Japanese: 'ja'
	};

	function selectLanguage(flag: FlagItem) {
		setLocale(flagLocaleMap[flag.language] ?? 'en');
		goto(`${base}/services`);
	}

	let visible = $state(false);

	onMount(() => {
		setTimeout(() => {
			visible = true;
		}, 100);
	});
</script>

<svelte:head>
	<title>Ngan Ha Spa — Let Us Understand You</title>
</svelte:head>

<main>
	<div class="hero" class:visible>
		<!-- Logo -->
		<div class="logo-section">
			<div class="logo-mark">
				<img src="{base}/logo.png" alt="Ngan Ha Spa Logo" />
			</div>
			<h1 class="salon-name">Ngan Ha</h1>
			<h2 class="mission-text">{$t('home.tagline')}</h2>
			<div class="divider"></div>
		</div>

		<!-- Flags -->
		<div class="flags-orbit">
			{#each flags as flag, i}
				<div class="orbit-ring" style="--idx:{i}; --total:{flags.length}">
					<button
						class="flag-card"
						onclick={() => selectLanguage(flag)}
					>
						<div class="flag-emoji-wrapper">
							<span class="flag-emoji">{flag.emoji}</span>
							<div class="flag-glow"></div>
						</div>
						<span class="flag-native">{flag.native}</span>
					</button>
				</div>
			{/each}
		</div>

		<!-- Address -->
		<footer class="address-section">
			<div class="address-line"></div>
			<div class="address-icon">
				<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
					<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
					<circle cx="12" cy="10" r="3"/>
				</svg>
			</div>
			<p class="address">11 NGO DUC KE, SAI GON WARD<br />HCMC, VIETNAM</p>
			<span class="version">Made By POC-Wizard · v0.0.1</span>
		</footer>
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

	.hero {
		position: relative;
		width: 100%;
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 5vh 24px 5vh;
		gap: 0;
		opacity: 0;
		transition: opacity 1.2s ease;
	}

	.hero.visible {
		opacity: 1;
	}

	/* Logo Section */
	.logo-section {
		position: relative;
		z-index: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 6px;
		animation: float 8s ease-in-out infinite;
	}

	@keyframes float {
		0%, 100% { transform: translateY(0); }
		50% { transform: translateY(-10px); }
	}

	.logo-mark {
		width: 240px;
		height: 240px;
		animation: breathe 6s ease-in-out infinite;
		filter: drop-shadow(0 0 20px rgba(193,154,107,0.4)) drop-shadow(0 0 50px rgba(193,154,107,0.2));
	}

	.logo-mark img {
		width: 100%;
		height: 100%;
		object-fit: contain;
		filter: sepia(0.6) saturate(1.5) brightness(1.1) hue-rotate(-10deg);
	}

	@keyframes breathe {
		0%, 100% { transform: scale(1); }
		50% { transform: scale(1.05); }
	}

	.salon-name {
		font-family: 'Imperial Script', cursive;
		font-size: clamp(2.4rem, 6vw, 3.8rem);
		font-weight: 700;
		letter-spacing: 0.04em;
		color: #c19a6b;
		text-align: center;
		margin-top: -28px;
	}

	.divider {
		width: 180px;
		height: 1px;
		background: linear-gradient(90deg, transparent, #c19a6b, transparent);
		margin-top: 10px;
	}

	.mission-text {
		font-family: 'Playfair Display', serif;
		font-size: clamp(1.2rem, 3vw, 1.8rem);
		font-weight: 400;
		color: #e8e0d6;
		letter-spacing: 0.02em;
		margin-top: -10px;
	}

	/* Flags Orbit */
	.flags-orbit {
		position: relative;
		z-index: 1;
		width: 320px;
		height: 320px;
		margin-top: auto;
		margin-bottom: auto;
		transform: translateY(-30px);
	}

	.orbit-ring {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 0;
		height: 0;
		animation: orbit-ring-spin 160s linear infinite;
		animation-delay: calc(-160s / var(--total) * var(--idx));
	}

	@keyframes orbit-ring-spin {
		from { transform: rotate(0deg) translateY(-150px); }
		to { transform: rotate(360deg) translateY(-150px); }
	}

	.flag-card {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 4px;
		width: 120px;
		height: 120px;
		border-radius: 50%;
		background: rgba(255,255,255,0.03);
		border: 1px solid rgba(193,154,107,0.1);
		backdrop-filter: blur(10px);
		cursor: pointer;
		text-decoration: none;
		transition: background 0.3s, border-color 0.3s;
		animation: card-counter-spin 160s linear infinite;
		animation-delay: calc(-160s / var(--total) * var(--idx));
	}

	@keyframes card-counter-spin {
		from { transform: translate(-50%, -50%) rotate(0deg); }
		to { transform: translate(-50%, -50%) rotate(-360deg); }
	}

	.flag-card:hover {
		background: rgba(193,154,107,0.08);
		border-color: rgba(193,154,107,0.25);
	}

	.flag-emoji-wrapper {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.flag-emoji {
		font-size: 3.2rem;
		line-height: 1;
		display: block;
	}

	.flag-glow {
		position: absolute;
		width: 50px;
		height: 50px;
		border-radius: 50%;
		background: radial-gradient(circle, rgba(193,154,107,0.15) 0%, transparent 70%);
		pointer-events: none;
		animation: pulse 4s ease-in-out infinite;
	}

	@keyframes pulse {
		0%, 100% { opacity: 0.3; transform: scale(0.8); }
		50% { opacity: 0.8; transform: scale(1.3); }
	}

	.flag-native {
		font-size: 0.85rem;
		color: #c19a6b;
		font-weight: 500;
		letter-spacing: 0.02em;
		white-space: nowrap;
	}

	/* Address Section */
	.address-section {
		position: relative;
		z-index: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 14px;
		margin-top: 0;
		transform: translateY(-50px);
	}

	.address-line {
		width: 40px;
		height: 1px;
		background: linear-gradient(90deg, transparent, #4a3f32, transparent);
	}

	.address-icon {
		color: #6b5d4d;
	}

	.address {
		font-size: 0.85rem;
		color: #6b5d4d;
		letter-spacing: 0.12em;
		font-weight: 300;
		text-transform: uppercase;
		text-align: center;
	}

	.version {
		font-size: 0.7rem;
		color: #4a3f32;
		letter-spacing: 0.08em;
		font-weight: 300;
	}

	/* Responsive */
	@media (max-width: 640px) {
		.hero {
			padding: 4vh 16px 3vh;
		}

		.flags-orbit {
			width: 260px;
			height: 260px;
		}

		@keyframes orbit-ring-spin {
			from { transform: rotate(0deg) translateY(-120px); }
			to { transform: rotate(360deg) translateY(-120px); }
		}

		.flag-card {
			width: 95px;
			height: 95px;
		}

		.flag-emoji {
			font-size: 2.6rem;
		}

		.logo-mark {
			width: 160px;
			height: 160px;
		}
	}
</style>
