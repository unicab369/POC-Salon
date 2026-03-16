<script lang="ts">
	let { title, inline = false }: { title: string; inline?: boolean } = $props();
</script>

<div class="header" class:inline>
	<h1 class="title">{title}</h1>
	<div class="divider"></div>
</div>

<style>
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

	.header.inline {
		position: relative;
		flex-shrink: 0;
		background: #0f0f0f;
		padding: 12px 24px 16px;
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
</style>
