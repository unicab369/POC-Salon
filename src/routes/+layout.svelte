<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<!-- Milky Way background -->
<div class="milkyway">
	<div class="starfield starfield-1"></div>
	<div class="starfield starfield-2"></div>
	<div class="starfield starfield-3"></div>
	<div class="starfield starfield-4"></div>
	<div class="band-bg"></div>
	<div class="band-glow"></div>
	<div class="band-outer"></div>
	<div class="band-mid"></div>
	<div class="band-core"></div>
	<div class="band-bright"></div>
	<div class="dust dust-1"></div>
	<div class="dust dust-2"></div>
	<div class="dust dust-3"></div>
	<div class="orbit-particle p1"></div>
	<div class="orbit-particle p2"></div>
	<div class="orbit-particle p3"></div>
	<div class="orbit-particle p4"></div>
	<div class="orbit-particle p5"></div>
	<div class="orbit-particle p6"></div>
	<div class="orbit-particle p7"></div>
	<div class="orbit-particle p8"></div>
	<div class="nebula nebula-1"></div>
	<div class="nebula nebula-2"></div>
</div>

<!-- Shooting stars -->
<div class="stars-container">
	{#each Array(5) as _, i}
		<div class="star" style="--i:{i}"></div>
	{/each}
</div>

{@render children()}

<style>
	/* Milky Way */
	.milkyway {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
		z-index: 0;
		overflow: hidden;
		background:
			radial-gradient(ellipse at 50% 60%, rgba(40,25,15,0.4) 0%, transparent 60%),
			radial-gradient(ellipse at 30% 40%, rgba(30,18,10,0.2) 0%, transparent 50%),
			radial-gradient(ellipse at 70% 70%, rgba(35,20,12,0.15) 0%, transparent 45%);
	}

	.starfield {
		position: absolute;
		top: 0;
		left: 0;
		width: 200%;
		height: 200%;
	}

	/* Layer 1 — bright foreground stars, slow drift */
	.starfield-1 {
		background-image:
			radial-gradient(2px 2px at 10% 15%, rgba(255,255,255,0.9), transparent),
			radial-gradient(1.5px 1.5px at 25% 35%, rgba(255,255,255,0.7), transparent),
			radial-gradient(2px 2px at 40% 8%, rgba(255,255,255,0.8), transparent),
			radial-gradient(1.5px 1.5px at 55% 42%, rgba(255,255,255,0.6), transparent),
			radial-gradient(2px 2px at 70% 22%, rgba(255,255,255,0.9), transparent),
			radial-gradient(1.5px 1.5px at 85% 55%, rgba(255,255,255,0.7), transparent),
			radial-gradient(1.5px 1.5px at 15% 68%, rgba(255,255,255,0.8), transparent),
			radial-gradient(1.5px 1.5px at 48% 75%, rgba(255,255,255,0.6), transparent),
			radial-gradient(2px 2px at 92% 12%, rgba(255,255,255,0.8), transparent),
			radial-gradient(1.5px 1.5px at 33% 88%, rgba(255,255,255,0.7), transparent),
			radial-gradient(1.5px 1.5px at 62% 62%, rgba(255,255,255,0.6), transparent),
			radial-gradient(1.5px 1.5px at 78% 80%, rgba(255,255,255,0.7), transparent),
			radial-gradient(2.5px 2.5px at 5% 48%, rgba(255,255,255,0.95), transparent),
			radial-gradient(1.5px 1.5px at 88% 38%, rgba(255,255,255,0.6), transparent),
			radial-gradient(1.5px 1.5px at 44% 52%, rgba(255,255,255,0.8), transparent);
		animation: twinkle1 8s ease-in-out infinite alternate, drift 120s linear infinite;
	}

	/* Layer 2 — mid-depth stars with gold accents, medium drift */
	.starfield-2 {
		background-image:
			radial-gradient(1.5px 1.5px at 5% 45%, rgba(255,255,255,0.8), transparent),
			radial-gradient(2.5px 2.5px at 18% 72%, rgba(255,255,255,0.95), transparent),
			radial-gradient(1.5px 1.5px at 32% 28%, rgba(255,255,255,0.7), transparent),
			radial-gradient(1.5px 1.5px at 58% 15%, rgba(255,255,255,0.6), transparent),
			radial-gradient(2px 2px at 72% 48%, rgba(255,255,255,0.8), transparent),
			radial-gradient(1.5px 1.5px at 95% 65%, rgba(255,255,255,0.7), transparent),
			radial-gradient(1.5px 1.5px at 42% 92%, rgba(255,255,255,0.6), transparent),
			radial-gradient(2.5px 2.5px at 65% 5%, rgba(193,154,107,0.9), transparent),
			radial-gradient(1.5px 1.5px at 28% 55%, rgba(255,255,255,0.6), transparent),
			radial-gradient(1.5px 1.5px at 82% 88%, rgba(255,255,255,0.7), transparent),
			radial-gradient(3px 3px at 50% 35%, rgba(193,154,107,0.8), transparent),
			radial-gradient(1.5px 1.5px at 12% 82%, rgba(255,255,255,0.7), transparent);
		animation: twinkle2 10s ease-in-out infinite alternate, drift 200s linear infinite reverse;
	}

	/* Layer 3 — deep background gold stars, slow drift */
	.starfield-3 {
		background-image:
			radial-gradient(3px 3px at 20% 20%, rgba(193,154,107,0.9), transparent),
			radial-gradient(1.5px 1.5px at 45% 60%, rgba(255,255,255,0.6), transparent),
			radial-gradient(2.5px 2.5px at 75% 35%, rgba(255,255,255,0.8), transparent),
			radial-gradient(1.5px 1.5px at 8% 90%, rgba(255,255,255,0.7), transparent),
			radial-gradient(3px 3px at 90% 25%, rgba(193,154,107,0.7), transparent),
			radial-gradient(1.5px 1.5px at 55% 82%, rgba(255,255,255,0.6), transparent),
			radial-gradient(1.5px 1.5px at 35% 45%, rgba(255,255,255,0.6), transparent),
			radial-gradient(2.5px 2.5px at 68% 72%, rgba(255,255,255,0.8), transparent);
		animation: twinkle3 12s ease-in-out infinite alternate, drift 300s linear infinite;
	}

	/* Layer 4 — dense faint star field for filling gaps */
	.starfield-4 {
		background-image:
			radial-gradient(1.2px 1.2px at 3% 12%, rgba(255,255,255,0.5), transparent),
			radial-gradient(1.2px 1.2px at 14% 48%, rgba(255,255,255,0.4), transparent),
			radial-gradient(1.5px 1.5px at 22% 78%, rgba(255,255,255,0.5), transparent),
			radial-gradient(1.2px 1.2px at 36% 18%, rgba(255,255,255,0.45), transparent),
			radial-gradient(1.5px 1.5px at 41% 65%, rgba(255,255,255,0.5), transparent),
			radial-gradient(1.2px 1.2px at 53% 30%, rgba(255,255,255,0.4), transparent),
			radial-gradient(1.2px 1.2px at 60% 85%, rgba(255,255,255,0.5), transparent),
			radial-gradient(1.5px 1.5px at 67% 10%, rgba(255,255,255,0.45), transparent),
			radial-gradient(1.2px 1.2px at 74% 55%, rgba(255,255,255,0.4), transparent),
			radial-gradient(1.2px 1.2px at 81% 42%, rgba(255,255,255,0.5), transparent),
			radial-gradient(1.5px 1.5px at 88% 72%, rgba(255,255,255,0.45), transparent),
			radial-gradient(1.2px 1.2px at 95% 8%, rgba(255,255,255,0.4), transparent),
			radial-gradient(1.2px 1.2px at 7% 95%, rgba(255,255,255,0.5), transparent),
			radial-gradient(1.5px 1.5px at 30% 55%, rgba(193,154,107,0.5), transparent),
			radial-gradient(1.2px 1.2px at 48% 5%, rgba(255,255,255,0.4), transparent),
			radial-gradient(1.2px 1.2px at 16% 32%, rgba(255,255,255,0.45), transparent),
			radial-gradient(1.5px 1.5px at 84% 20%, rgba(193,154,107,0.4), transparent),
			radial-gradient(1.2px 1.2px at 70% 90%, rgba(255,255,255,0.5), transparent),
			radial-gradient(1.2px 1.2px at 57% 48%, rgba(255,255,255,0.4), transparent),
			radial-gradient(1.2px 1.2px at 92% 60%, rgba(255,255,255,0.45), transparent);
		animation: twinkle4 14s ease-in-out infinite alternate, drift 350s linear infinite reverse;
	}

	/* Dark blue-green background behind the band */
	.band-bg {
		position: absolute;
		top: calc(50% + 50px);
		left: 50%;
		transform: translate(-50%, -50%) rotate(-45deg);
		width: 65vmax;
		height: 35vmin;
		border-radius: 50%;
		background:
			radial-gradient(
				ellipse 50% 100% at 50% 50%,
				rgba(12,50,55,0.8) 0%,
				rgba(10,42,48,0.5) 25%,
				rgba(8,35,40,0.25) 50%,
				transparent 75%
			);
		filter: blur(20px);
	}

	/* Animated glow halo around the band */
	.band-glow {
		position: absolute;
		top: calc(50% + 50px);
		left: 50%;
		width: 60vmax;
		height: 30vmin;
		border-radius: 50%;
		background:
			radial-gradient(
				ellipse 50% 100% at 50% 50%,
				rgba(193,154,107,0.25) 0%,
				rgba(193,154,107,0.12) 25%,
				rgba(139,115,85,0.06) 50%,
				transparent 75%
			);
		filter: blur(40px);
		transform: translate(-50%, -50%) rotate(-45deg);
		animation: glow-pulse 6s ease-in-out infinite alternate;
	}

	@keyframes glow-pulse {
		0% { opacity: 0.2; filter: blur(45px); }
		50% { opacity: 1; filter: blur(30px); }
		100% { opacity: 0.2; filter: blur(45px); }
	}

	@keyframes glow-move {
		0% { transform: translate(-50%, -50%) rotate(-47deg) translateX(-4vw) scale(0.95); }
		50% { transform: translate(-50%, -50%) rotate(-43deg) translateX(10vw) scale(1.1); }
		100% { transform: translate(-50%, -50%) rotate(-47deg) translateX(-4vw) scale(0.95); }
	}

	/* Layered milky way band */
	.band-outer,
	.band-mid,
	.band-core,
	.band-bright {
		position: absolute;
		top: calc(50% + 50px);
		left: 50%;
		border-radius: 50%;
		transform: translate(-50%, -50%) rotate(-45deg);
	}

	/* Wide diffuse outer glow */
	.band-outer {
		width: 54vmax;
		height: 22vmin;
		background:
			radial-gradient(
				ellipse 50% 100% at 50% 50%,
				rgba(193,154,107,0.15) 0%,
				rgba(139,115,85,0.08) 35%,
				rgba(100,80,60,0.03) 55%,
				transparent 80%
			);
		filter: blur(25px);
	}

	/* Mid-density warm layer */
	.band-mid {
		width: 44vmax;
		height: 14vmin;
		background:
			radial-gradient(
				ellipse 45% 100% at 50% 50%,
				rgba(193,154,107,0.35) 0%,
				rgba(193,154,107,0.18) 25%,
				rgba(160,130,90,0.06) 50%,
				transparent 75%
			);
		filter: blur(14px);
	}

	/* Dense bright core */
	.band-core {
		width: 36vmax;
		height: 8vmin;
		background:
			radial-gradient(
				ellipse 40% 100% at 50% 50%,
				rgba(255,255,255,0.2) 0%,
				rgba(193,154,107,0.4) 12%,
				rgba(193,154,107,0.2) 35%,
				rgba(193,154,107,0.05) 60%,
				transparent 80%
			);
		filter: blur(8px);
	}

	/* Thin bright center line */
	.band-bright {
		width: 28vmax;
		height: 3vmin;
		background:
			radial-gradient(
				ellipse 35% 100% at 50% 50%,
				rgba(255,255,255,0.3) 0%,
				rgba(255,240,220,0.15) 20%,
				rgba(193,154,107,0.06) 50%,
				transparent 80%
			);
		filter: blur(4px);
	}

	/* Trailing orbit particles */
	.orbit-particle {
		position: absolute;
		top: calc(50% + 50px);
		left: 50%;
		width: 3px;
		height: 3px;
		border-radius: 50%;
		background: rgba(255,255,255,0.9);
		box-shadow: 0 0 4px 2px rgba(193,154,107,0.4);
		filter: blur(1px);
		transform-origin: 0 0;
	}

	.p1 { animation: ellipse-orbit-a 42s linear infinite; }
	.p2 { animation: ellipse-orbit-b 58s -8s linear infinite; width: 2px; height: 2px; }
	.p3 { animation: ellipse-orbit-a 36s -18s linear infinite; width: 3.5px; height: 3.5px; }
	.p4 { animation: ellipse-orbit-c 65s -5s linear infinite; width: 2px; height: 2px; opacity: 0.8; }
	.p5 { animation: ellipse-orbit-b 48s -25s linear infinite; width: 3px; height: 3px; }
	.p6 { animation: ellipse-orbit-c 72s -40s linear infinite; width: 2px; height: 2px; opacity: 0.75; }
	.p7 { animation: ellipse-orbit-a 55s -32s linear infinite; width: 3px; height: 3px; }
	.p8 { animation: ellipse-orbit-b 80s -50s linear infinite; width: 2px; height: 2px; opacity: 0.8; }

	@keyframes ellipse-orbit-a {
		0%   { transform: translate(-50%,-50%) rotate(-45deg) translate(13vmin, 0); }
		25%  { transform: translate(-50%,-50%) rotate(-45deg) translate(0, -3.5vmin); }
		50%  { transform: translate(-50%,-50%) rotate(-45deg) translate(-13vmin, 0); }
		75%  { transform: translate(-50%,-50%) rotate(-45deg) translate(0, 3.5vmin); }
		100% { transform: translate(-50%,-50%) rotate(-45deg) translate(13vmin, 0); }
	}

	@keyframes ellipse-orbit-b {
		0%   { transform: translate(-50%,-50%) rotate(-45deg) translate(16vmin, 0); }
		25%  { transform: translate(-50%,-50%) rotate(-45deg) translate(0, -5vmin); }
		50%  { transform: translate(-50%,-50%) rotate(-45deg) translate(-16vmin, 0); }
		75%  { transform: translate(-50%,-50%) rotate(-45deg) translate(0, 5vmin); }
		100% { transform: translate(-50%,-50%) rotate(-45deg) translate(16vmin, 0); }
	}

	@keyframes ellipse-orbit-c {
		0%   { transform: translate(-50%,-50%) rotate(-45deg) translate(10vmin, 0); }
		25%  { transform: translate(-50%,-50%) rotate(-45deg) translate(0, -3vmin); }
		50%  { transform: translate(-50%,-50%) rotate(-45deg) translate(-10vmin, 0); }
		75%  { transform: translate(-50%,-50%) rotate(-45deg) translate(0, 3vmin); }
		100% { transform: translate(-50%,-50%) rotate(-45deg) translate(10vmin, 0); }
	}

	/* Dust clouds — warm blobs scattered along the band */
	.dust {
		position: absolute;
		border-radius: 50%;
		filter: blur(40px);
		opacity: 0;
		animation: dust-glow 20s ease-in-out infinite alternate;
	}

	.dust-1 {
		width: 120px;
		height: 50px;
		top: 43%;
		left: 50%;
		background: radial-gradient(ellipse, rgba(193,154,107,0.18) 0%, transparent 70%);
		animation: dust-glow 8s ease-in-out infinite alternate, dust-drift-1 20s ease-in-out infinite;
	}

	.dust-2 {
		width: 100px;
		height: 40px;
		top: 55%;
		left: 50%;
		background: radial-gradient(ellipse, rgba(160,130,90,0.15) 0%, transparent 70%);
		animation: dust-glow 8s -3s ease-in-out infinite alternate, dust-drift-2 24s ease-in-out infinite;
	}

	.dust-3 {
		width: 130px;
		height: 45px;
		top: 48%;
		left: 50%;
		background: radial-gradient(ellipse, rgba(193,154,107,0.12) 0%, transparent 70%);
		animation: dust-glow 8s -6s ease-in-out infinite alternate, dust-drift-3 28s ease-in-out infinite;
	}

	/* Nebula glow — subtle depth along the band */
	.nebula {
		position: absolute;
		border-radius: 50%;
		filter: blur(30px);
		animation: nebula-pulse 15s ease-in-out infinite;
	}

	.nebula-1 {
		width: 300px;
		height: 60px;
		top: 38%;
		left: 50%;
		transform: translate(-50%, -50%) rotate(-45deg);
		background: radial-gradient(ellipse, rgba(193,154,107,0.14) 0%, rgba(139,115,85,0.06) 50%, transparent 75%);
		animation-delay: 0s;
	}

	.nebula-2 {
		width: 250px;
		height: 50px;
		top: 58%;
		left: 50%;
		transform: translate(-50%, -50%) rotate(-45deg);
		background: radial-gradient(ellipse, rgba(180,145,100,0.12) 0%, rgba(139,115,85,0.05) 50%, transparent 75%);
		animation-delay: -9s;
	}

	@keyframes drift {
		from { transform: translate(0, 0); }
		to { transform: translate(-50%, -50%); }
	}

	@keyframes twinkle1 {
		0% { opacity: 0.6; }
		50% { opacity: 1; }
		100% { opacity: 0.7; }
	}

	@keyframes twinkle2 {
		0% { opacity: 0.7; }
		50% { opacity: 0.5; }
		100% { opacity: 1; }
	}

	@keyframes twinkle3 {
		0% { opacity: 0.5; }
		50% { opacity: 0.9; }
		100% { opacity: 0.6; }
	}

	@keyframes twinkle4 {
		0% { opacity: 0.4; }
		50% { opacity: 0.8; }
		100% { opacity: 0.5; }
	}

	@keyframes band-move {
		0% { transform: translate(-50%, -50%) rotate(-47deg) translateX(-4vw) scale(0.95); }
		50% { transform: translate(-50%, -50%) rotate(-43deg) translateX(10vw) scale(1.1); }
		100% { transform: translate(-50%, -50%) rotate(-47deg) translateX(-4vw) scale(0.95); }
	}

	@keyframes dust-glow {
		0% { opacity: 0.15; }
		50% { opacity: 0.8; }
		100% { opacity: 0.15; }
	}

	@keyframes dust-drift-1 {
		0% { transform: rotate(-45deg) translate(-5vw, 2vw); }
		50% { transform: rotate(-45deg) translate(8vw, -5vw); }
		100% { transform: rotate(-45deg) translate(-5vw, 2vw); }
	}

	@keyframes dust-drift-2 {
		0% { transform: rotate(-45deg) translate(4vw, -2vw); }
		50% { transform: rotate(-45deg) translate(-7vw, 4vw); }
		100% { transform: rotate(-45deg) translate(4vw, -2vw); }
	}

	@keyframes dust-drift-3 {
		0% { transform: rotate(-45deg) translate(-3vw, 3vw); }
		50% { transform: rotate(-45deg) translate(6vw, -6vw); }
		100% { transform: rotate(-45deg) translate(-3vw, 3vw); }
	}

	@keyframes nebula-pulse {
		0% { opacity: 0.2; transform: translate(-50%, -50%) rotate(-47deg) scale(0.9) translateX(-3vw); }
		50% { opacity: 0.8; transform: translate(-50%, -50%) rotate(-43deg) scale(1.15) translateX(7vw); }
		100% { opacity: 0.2; transform: translate(-50%, -50%) rotate(-47deg) scale(0.9) translateX(-3vw); }
	}

	/* Shooting stars */
	.stars-container {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
		z-index: 0;
		overflow: hidden;
	}

	.star {
		position: absolute;
		width: 3px;
		height: 3px;
		background: #fff;
		border-radius: 50%;
		opacity: 0;
		transform: rotate(-45deg);
		animation: falling-star 36s var(--delay) linear infinite;
	}

	.star::after {
		content: '';
		position: absolute;
		left: 100%;
		top: 50%;
		transform: translateY(-50%);
		width: 150px;
		height: 1px;
		background: linear-gradient(to left, transparent 0%, rgba(193,154,107,0.3) 60%, rgba(255,255,255,0.8) 100%);
		border-radius: 1px;
	}

	.star:nth-child(1) { --delay: 0s;    --start-x: 90%;  --start-y: -5%;  }
	.star:nth-child(2) { --delay: 7.2s;  --start-x: 105%; --start-y: 25%; }
	.star:nth-child(3) { --delay: 14.4s; --start-x: 75%;  --start-y: -5%;  }
	.star:nth-child(4) { --delay: 21.6s; --start-x: 105%; --start-y: 50%; }
	.star:nth-child(5) { --delay: 28.8s; --start-x: 105%; --start-y: 10%; }

	@keyframes falling-star {
		0% {
			top: var(--start-y);
			left: var(--start-x);
			opacity: 0;
		}
		0.5% {
			opacity: 0.9;
		}
		5% {
			opacity: 0.7;
		}
		6.5% {
			opacity: 0;
		}
		6.67% {
			top: calc(var(--start-y) + 120vh);
			left: calc(var(--start-x) - 120vh);
			opacity: 0;
		}
		100% {
			top: calc(var(--start-y) + 120vh);
			left: calc(var(--start-x) - 120vh);
			opacity: 0;
		}
	}
</style>
