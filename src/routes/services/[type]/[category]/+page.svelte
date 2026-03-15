<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	interface DurationOption {
		minutes: number;
		label: string;
		priceVND: number;
	}

	interface Service {
		name: string;
		description: string;
		durations: DurationOption[];
		bestSeller?: boolean;
	}

	interface Category {
		name: string;
		id: string;
		services: Service[];
	}

	function buildDurations(basePrice: number): DurationOption[] {
		const round = (n: number) => Math.round(n / 10000) * 10000;
		return [
			{ minutes: 45, label: '45 min', priceVND: basePrice },
			{ minutes: 60, label: '60 min', priceVND: round(basePrice * 1.3) },
			{ minutes: 70, label: '70 min', priceVND: round(basePrice * 1.5) },
			{ minutes: 90, label: '90 min', priceVND: round(basePrice * 1.85) },
		];
	}

	const categories: Category[] = [
		{
			name: 'Body Massage', id: 'body-massage',
			services: [
				{ name: 'Traditional Vietnamese', description: 'Full body relaxation using ancient Vietnamese techniques with warm herbal oils', durations: buildDurations(450000), bestSeller: true },
				{ name: 'Deep Tissue', description: 'Intense pressure targeting deep muscle layers to release chronic tension', durations: buildDurations(550000) },
				{ name: 'Aromatherapy Bliss', description: 'Gentle strokes combined with premium essential oils for total mind-body harmony', durations: buildDurations(500000) },
				{ name: 'Hot Stone Therapy', description: 'Heated basalt stones placed along energy points to melt away stress', durations: buildDurations(650000) },
				{ name: 'Thai Stretch', description: 'Dynamic stretching and pressure point work inspired by Thai healing traditions', durations: buildDurations(500000) },
				{ name: 'Four Hands Massage', description: 'Two therapists work in synchronized rhythm for a deeply immersive experience', durations: buildDurations(800000) },
				{ name: 'Bamboo Rolling', description: 'Warm bamboo sticks rolled along muscles to ease tension and boost circulation', durations: buildDurations(580000) },
				{ name: 'Herbal Compress', description: 'Steamed herbal poultice pressed along the body to soothe aches and inflammation', durations: buildDurations(520000) }
			]
		},
		{
			name: 'Foot Massage', id: 'foot-massage',
			services: [
				{ name: 'Reflexology', description: 'Targeted pressure on reflex points to restore balance and improve circulation', durations: buildDurations(350000), bestSeller: true },
				{ name: 'Herbal Foot Soak', description: 'Warm herbal bath followed by a soothing foot and calf massage', durations: buildDurations(300000) },
				{ name: 'Deep Foot Relief', description: 'Intensive treatment for tired feet focusing on arches and heels', durations: buildDurations(400000) },
				{ name: 'Foot & Leg Combo', description: 'Complete lower body treatment from toes to knees with warm oil', durations: buildDurations(450000) },
				{ name: 'Detox Foot Therapy', description: 'Cleansing foot treatment with charcoal wrap and pressure point massage', durations: buildDurations(380000) },
				{ name: 'Ginger Foot Wrap', description: 'Warming ginger paste wrap to improve blood flow and relieve cold feet', durations: buildDurations(320000) },
				{ name: 'Salt Scrub & Soak', description: 'Himalayan salt exfoliation followed by mineral-rich warm water soak', durations: buildDurations(360000) },
				{ name: 'Plantar Relief', description: 'Specialized deep pressure therapy targeting plantar fascia and heel pain', durations: buildDurations(420000) }
			]
		},
		{
			name: 'Hair Wash', id: 'hair-wash',
			services: [
				{ name: 'Signature Wash', description: 'Relaxing shampoo with scalp massage using premium herbal products', durations: buildDurations(200000), bestSeller: true },
				{ name: 'Deep Conditioning', description: 'Nourishing treatment to restore shine and strength to damaged hair', durations: buildDurations(300000) },
				{ name: 'Scalp Detox', description: 'Deep cleansing treatment to remove buildup and stimulate hair growth', durations: buildDurations(350000) },
				{ name: 'Hot Oil Treatment', description: 'Warm coconut oil massage into scalp and hair for deep hydration', durations: buildDurations(280000) },
				{ name: 'Herbal Rinse', description: 'Traditional Vietnamese herb-infused rinse for healthy glossy hair', durations: buildDurations(250000) },
				{ name: 'Keratin Smooth', description: 'Professional keratin infusion to tame frizz and add lasting silky shine', durations: buildDurations(400000) },
				{ name: 'Charcoal Purify', description: 'Activated charcoal cleanse to draw out impurities and refresh oily scalps', durations: buildDurations(320000) },
				{ name: 'Minty Cool Wash', description: 'Peppermint-infused shampoo with cooling scalp massage for instant freshness', durations: buildDurations(230000) }
			]
		},
		{
			name: 'Facial', id: 'facial',
			services: [
				{ name: 'Classic Glow Facial', description: 'Deep cleansing, exfoliation and hydrating mask for radiant skin', durations: buildDurations(400000), bestSeller: true },
				{ name: 'Anti-Aging Lift', description: 'Firming treatment with collagen boost and gentle micro-current therapy', durations: buildDurations(600000) },
				{ name: 'Acne Clear', description: 'Purifying treatment with salicylic acid and calming blue LED light', durations: buildDurations(450000) },
				{ name: 'Vitamin C Brightening', description: 'Luminous treatment to fade dark spots and even out skin tone', durations: buildDurations(500000) },
				{ name: 'Hydra Rescue', description: 'Intensive moisture infusion for dry and dehydrated skin types', durations: buildDurations(420000) },
				{ name: 'Gold Leaf Luxury', description: 'Pure gold leaf mask to boost radiance and promote cellular renewal', durations: buildDurations(750000) },
				{ name: 'Oxygen Boost', description: 'High-pressure oxygen spray to plump skin and reduce fine lines instantly', durations: buildDurations(550000) },
				{ name: 'Sensitive Calm', description: 'Ultra-gentle treatment with aloe and chamomile for reactive and redness-prone skin', durations: buildDurations(430000) }
			]
		},
		{
			name: 'Heel Care', id: 'heel-care',
			services: [
				{ name: 'Smooth Heel Treatment', description: 'Exfoliation and deep moisturizing to soften rough cracked heels', durations: buildDurations(250000), bestSeller: true },
				{ name: 'Paraffin Wax Wrap', description: 'Warm paraffin coating to lock in moisture and heal dry skin', durations: buildDurations(300000) },
				{ name: 'Callus Removal', description: 'Professional removal of hardened skin with gentle buffing tools', durations: buildDurations(200000) },
				{ name: 'Heel Repair Mask', description: 'Overnight-style intensive mask treatment for severely damaged heels', durations: buildDurations(280000) },
				{ name: 'Foot Peel & Polish', description: 'Chemical peel to reveal baby-soft skin followed by nourishing cream', durations: buildDurations(320000) },
				{ name: 'Shea Butter Wrap', description: 'Rich shea butter heated wrap to deeply nourish and restore cracked heels', durations: buildDurations(270000) },
				{ name: 'Pumice & Oil Ritual', description: 'Traditional pumice stone buffing followed by warm essential oil massage', durations: buildDurations(220000) },
				{ name: 'Heel Recovery Plus', description: 'Multi-step clinical treatment combining peel, mask and sealing balm', durations: buildDurations(380000) }
			]
		},
		{
			name: 'Nails', id: 'nails',
			services: [
				{ name: 'Gel Manicure', description: 'Long-lasting gel polish with cuticle care and hand massage', durations: buildDurations(300000), bestSeller: true },
				{ name: 'Classic Pedicure', description: 'Full nail shaping, cuticle treatment, polish and foot massage', durations: buildDurations(250000) },
				{ name: 'Nail Art Design', description: 'Custom hand-painted nail art with premium designs of your choice', durations: buildDurations(400000) },
				{ name: 'Acrylic Extensions', description: 'Professional acrylic nail extensions with shape and length options', durations: buildDurations(500000) },
				{ name: 'Mani-Pedi Combo', description: 'Complete manicure and pedicure package with gel polish finish', durations: buildDurations(450000) },
				{ name: 'Dip Powder Nails', description: 'Durable dip powder application for a natural look with lasting color', durations: buildDurations(350000) },
				{ name: 'Nail Repair & Strengthen', description: 'Damaged nail restoration with protein bond treatment and protective coat', durations: buildDurations(280000) },
				{ name: 'Luxury Hand Spa', description: 'Full hand treatment with scrub, mask, paraffin dip and gel polish finish', durations: buildDurations(550000) }
			]
		},
		{
			name: 'Ear Clean', id: 'ear-clean',
			services: [
				{ name: 'Traditional Ear Clean', description: 'Gentle ear cleaning with specialized bamboo tools and soft touch', durations: buildDurations(150000), bestSeller: true },
				{ name: 'Ear Candling', description: 'Holistic ear candling therapy to remove buildup and promote relaxation', durations: buildDurations(200000) },
				{ name: 'Deep Clean & Massage', description: 'Thorough cleaning followed by soothing ear and temple massage', durations: buildDurations(250000) },
				{ name: 'Ear Acupressure', description: 'Pressure point stimulation on the ear to relieve stress and headaches', durations: buildDurations(180000) },
				{ name: 'Premium Ear Spa', description: 'Full ear treatment with cleaning, massage, warm compress and oils', durations: buildDurations(300000) },
				{ name: 'Warm Oil Ear Soak', description: 'Gentle warm herbal oil dripped into the ear canal for deep soothing relief', durations: buildDurations(220000) },
				{ name: 'ASMR Ear Therapy', description: 'Feather-light tools and soft brushing designed for deep relaxation and tingles', durations: buildDurations(280000) },
				{ name: 'Ear & Scalp Combo', description: 'Combined ear cleaning with invigorating scalp massage for full head relaxation', durations: buildDurations(350000) }
			]
		},
		{
			name: 'Barber', id: 'barber',
			services: [
				{ name: 'Classic Haircut', description: 'Precision cut with consultation, wash, and professional styling', durations: buildDurations(200000), bestSeller: true },
				{ name: 'Hot Towel Shave', description: 'Traditional straight razor shave with hot towel and aftershave balm', durations: buildDurations(250000) },
				{ name: 'Beard Trim & Shape', description: 'Expert beard grooming with trimming, shaping and conditioning oil', durations: buildDurations(150000) },
				{ name: 'Hair Color', description: 'Professional hair coloring service with premium ammonia-free dyes', durations: buildDurations(400000) },
				{ name: 'Cut & Shave Combo', description: 'Complete grooming package with haircut, shave and styling finish', durations: buildDurations(350000) },
				{ name: 'Fade & Design', description: 'Precision skin fade with optional razor line designs and patterns', durations: buildDurations(280000) },
				{ name: 'Grey Blend Camo', description: 'Natural-looking grey coverage blended seamlessly into existing hair color', durations: buildDurations(350000) },
				{ name: 'Scalp Treatment', description: 'Deep cleansing scalp therapy with exfoliation and revitalizing serum', durations: buildDurations(300000) }
			]
		},
		{
			name: 'VIP Pack', id: 'vip-pack',
			services: [
				{ name: 'Royal Treatment', description: 'Three-hour full body experience with massage, facial and foot care', durations: buildDurations(1500000), bestSeller: true },
				{ name: 'Couples Retreat', description: 'Side-by-side spa session for two with champagne and private room', durations: buildDurations(2500000) },
				{ name: 'Executive Refresh', description: 'Quick ninety-minute package with massage, facial and hair wash', durations: buildDurations(900000) },
				{ name: 'Full Day Escape', description: 'All-inclusive five-hour journey through every spa service we offer', durations: buildDurations(3000000) },
				{ name: 'Birthday Special', description: 'Celebration package with cake, decorations and premium spa services', durations: buildDurations(2000000) },
				{ name: 'Bridal Glow Package', description: 'Pre-wedding prep with facial, body scrub, mani-pedi and hair styling', durations: buildDurations(3500000) },
				{ name: 'Corporate Wellness', description: 'Group booking for teams with massage, foot care and refreshments included', durations: buildDurations(1800000) },
				{ name: 'Monthly Membership', description: 'Four premium visits per month with priority booking and ten percent savings', durations: buildDurations(4000000) }
			]
		}
	];

	const VND_TO_USD = 25000;

	let visible = $state(false);
	let serviceType = $derived($page.params.type);
	let categoryId = $derived($page.params.category);
	let category = $derived(categories.find(c => c.id === categoryId));
	type BodyPref = 'focus' | 'avoid' | '';
	type TherapistPref = 'male' | 'female' | 'random';
	type StrengthPref = 'light' | 'medium' | 'strong';
	const bodyAreas = ['Head', 'Neck', 'Shoulder', 'Arm', 'Back', 'Thigh', 'Calf', 'Foot'] as const;

	let selectedServices = $state<Map<string, number>>(new Map());
	let popupService = $state<Service | null>(null);
	let showBodyCustomize = $state(false);
	let pendingBodyService = $state<{ name: string; minutes: number } | null>(null);
	let bodyPrefs = $state<Record<string, BodyPref>>(Object.fromEntries(bodyAreas.map(a => [a, '' as BodyPref])));
	let therapistPref = $state<TherapistPref>('random');
	let strengthPref = $state<StrengthPref>('medium');
	let snackbar = $state('');
	let snackbarTimeout: ReturnType<typeof setTimeout>;

	let canScrollUp = $state(false);
	let canScrollDown = $state(false);
	let listEl = $state<HTMLElement | null>(null);
	let listMask = $state('');

	let bodyCanScrollUp = $state(false);
	let bodyCanScrollDown = $state(false);
	let bodyScrollEl = $state<HTMLElement | null>(null);
	let bodyMask = $state('');

	function buildMask(el: HTMLElement): { up: boolean; down: boolean; mask: string } {
		const up = el.scrollTop > 10;
		const down = el.scrollTop + el.clientHeight < el.scrollHeight - 10;
		const top = up ? 'transparent 0%, black 30px' : 'black 0%';
		const bottom = down ? 'black calc(100% - 30px), transparent 100%' : 'black 100%';
		return { up, down, mask: `linear-gradient(to bottom, ${top}, ${bottom})` };
	}

	function checkScroll() {
		if (!listEl) return;
		const r = buildMask(listEl);
		canScrollUp = r.up;
		canScrollDown = r.down;
		listMask = r.mask;
	}

	function checkBodyScroll() {
		if (!bodyScrollEl) return;
		const r = buildMask(bodyScrollEl);
		bodyCanScrollUp = r.up;
		bodyCanScrollDown = r.down;
		bodyMask = r.mask;
	}

	let totalVND = $derived(() => {
		if (!category) return 0;
		let sum = 0;
		for (const [name, minutes] of selectedServices) {
			const service = category.services.find(s => s.name === name);
			if (service) {
				const dur = service.durations.find(d => d.minutes === minutes);
				if (dur) sum += dur.priceVND;
			}
		}
		return sum;
	});

	let totalUSD = $derived(() => {
		return (totalVND() / VND_TO_USD).toFixed(2);
	});

	function dismissSnackbar() {
		clearTimeout(snackbarTimeout);
		snackbar = '';
	}

	function handleServiceTap(service: Service) {
		dismissSnackbar();
		if (selectedServices.has(service.name)) {
			const next = new Map(selectedServices);
			next.delete(service.name);
			selectedServices = next;
		} else {
			popupService = service;
		}
	}

	function selectDuration(minutes: number) {
		if (!popupService) return;
		if (categoryId === 'body-massage') {
			pendingBodyService = { name: popupService.name, minutes };
			bodyPrefs = Object.fromEntries(bodyAreas.map(a => [a, '' as BodyPref]));
			therapistPref = 'random';
			strengthPref = 'medium';
			showBodyCustomize = true;
			requestAnimationFrame(() => { popupService = null; });
		} else {
			const next = new Map(selectedServices);
			next.set(popupService.name, minutes);
			selectedServices = next;
			popupService = null;
		}
	}

	function toggleBodyPref(area: string) {
		const cycle: BodyPref[] = ['', 'focus', 'avoid'];
		const current = bodyPrefs[area] ?? '';
		const idx = cycle.indexOf(current);
		bodyPrefs[area] = cycle[(idx + 1) % cycle.length];
		bodyPrefs = { ...bodyPrefs };
	}

	function confirmBodyCustomize() {
		if (!pendingBodyService) return;
		const next = new Map(selectedServices);
		next.set(pendingBodyService.name, pendingBodyService.minutes);
		selectedServices = next;
		showBodyCustomize = false;
		pendingBodyService = null;
	}

	function closeBodyCustomize() {
		showBodyCustomize = false;
		pendingBodyService = null;
	}

	function closePopup() {
		popupService = null;
	}

	function handleBackdropKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape') {
			closePopup();
			closeBodyCustomize();
		}
	}

	function handleNext() {
		if (selectedServices.size === 0) {
			clearTimeout(snackbarTimeout);
			snackbar = 'Please add at least one service';
			snackbarTimeout = setTimeout(() => { snackbar = ''; }, 3000);
			return;
		}
		// TODO: navigate to next step
	}

	function getSelectedPrice(service: Service): number {
		const minutes = selectedServices.get(service.name);
		if (minutes == null) return service.durations[0].priceVND;
		const dur = service.durations.find(d => d.minutes === minutes);
		return dur ? dur.priceVND : service.durations[0].priceVND;
	}

	function getSelectedLabel(service: Service): string | null {
		const minutes = selectedServices.get(service.name);
		if (minutes == null) return null;
		const dur = service.durations.find(d => d.minutes === minutes);
		return dur ? dur.label : null;
	}

	function formatVND(amount: number): string {
		return amount.toLocaleString('vi-VN') + 'đ';
	}

	onMount(() => {
		setTimeout(() => {
			visible = true;
			checkScroll();
		}, 100);
	});
</script>

<svelte:head>
	<title>{category?.name ?? 'Services'} — Ngan Ha Spa</title>
</svelte:head>

<svelte:window onkeydown={handleBackdropKeydown} />

{#snippet pageHeader(text: string)}
	<div class="header">
		<h1 class="title">{text}</h1>
		<div class="divider"></div>
	</div>
{/snippet}

<main>
	<div class="page" class:visible>
		{@render pageHeader(category?.name ?? 'Services')}

		{#if category}
			<div class="service-list-wrapper">
				<div class="scroll-hint scroll-hint-up" class:visible={canScrollUp}>
					<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
						<path d="M18 15l-6-6-6 6" />
					</svg>
				</div>
				<div class="scroll-hint scroll-hint-down" class:visible={canScrollDown}>
					<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
						<path d="M6 9l6 6 6-6" />
					</svg>
				</div>
			<div class="service-list" bind:this={listEl} onscroll={checkScroll} style="-webkit-mask-image: {listMask}; mask-image: {listMask}">
				{#each category.services as service}
					<button
						class="service-item"
						class:selected={selectedServices.has(service.name)}
						onclick={() => handleServiceTap(service)}
					>
						<div class="service-info">
							<span class="service-name">{service.name}</span>
							<p class="service-desc">{service.description}</p>
						</div>
						<div class="service-end">
							{#if service.bestSeller}
								<span class="best-seller">Best Seller</span>
							{/if}
							<span class="service-price">{formatVND(getSelectedPrice(service))}</span>
							{#if selectedServices.has(service.name)}
								<span class="service-min">{selectedServices.get(service.name)} min</span>
							{/if}
						</div>
					</button>
				{/each}
			</div>
			</div>

		{:else}
			<p class="not-found">Category not found.</p>
		{/if}

		<footer class="footer-actions">
			{#if totalVND() > 0}
				<div class="total-bar">
					<span class="total-label">Total <span class="total-count">({selectedServices.size} selected)</span></span>
					<div class="total-prices">
						<span class="total-vnd">{formatVND(totalVND())}</span>
						<span class="total-usd">~${totalUSD()}</span>
					</div>
				</div>
			{/if}
			<div class="footer-buttons">
				<a href="/services/{serviceType}" class="btn btn-back">
					<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
						<path d="M19 12H5" /><path d="M12 19l-7-7 7-7" />
					</svg>
					Back
				</a>
				<button class="btn btn-next" onclick={handleNext}>Next</button>
			</div>
		</footer>
	</div>
</main>

{#if snackbar}
	<div class="snackbar">{snackbar}</div>
{/if}

{#if popupService}
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div class="popup-backdrop" onclick={closePopup} onkeydown={handleBackdropKeydown}>
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<div class="popup-sheet" onclick={(e) => e.stopPropagation()} onkeydown={(e) => e.stopPropagation()}>
			<button class="popup-close" onclick={closePopup} aria-label="Close">
				<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					<path d="M18 6L6 18" /><path d="M6 6l12 12" />
				</svg>
			</button>

			<div class="popup-header">
				<h2 class="popup-title">{popupService.name}</h2>
				<p class="popup-desc">{popupService.description}</p>
			</div>

			<div class="duration-grid">
				{#each popupService.durations as dur}
					<button class="duration-card" onclick={() => selectDuration(dur.minutes)}>
						<span class="dur-time">{dur.label}</span>
						<span class="dur-price">{formatVND(dur.priceVND)}</span>
						<span class="dur-usd">~${(dur.priceVND / VND_TO_USD).toFixed(2)}</span>
					</button>
				{/each}
			</div>
		</div>
	</div>
{/if}

{#if showBodyCustomize}
	<div class="body-modal">
		{@render pageHeader('Customize Your Massage')}
		<div class="body-scroll-wrapper">
			<div class="scroll-hint scroll-hint-up" class:visible={bodyCanScrollUp}>
				<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					<path d="M18 15l-6-6-6 6" />
				</svg>
			</div>
			<div class="scroll-hint scroll-hint-down" class:visible={bodyCanScrollDown}>
				<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					<path d="M6 9l6 6 6-6" />
				</svg>
			</div>
		<div class="body-modal-scroll" bind:this={bodyScrollEl} onscroll={checkBodyScroll} style="-webkit-mask-image: {bodyMask}; mask-image: {bodyMask}">
			<div class="customize-section">
				<h3 class="section-label">Therapist</h3>
				<div class="option-row">
					<button class="option-btn" class:active={therapistPref === 'random'} onclick={() => therapistPref = 'random'}>Random</button>
					<button class="option-btn" class:active={therapistPref === 'male'} onclick={() => therapistPref = 'male'}>Male</button>
					<button class="option-btn" class:active={therapistPref === 'female'} onclick={() => therapistPref = 'female'}>Female</button>
				</div>
			</div>

			<div class="customize-section">
				<h3 class="section-label">Strength</h3>
				<div class="option-row">
					<button class="option-btn" class:active={strengthPref === 'light'} onclick={() => strengthPref = 'light'}>Light</button>
					<button class="option-btn" class:active={strengthPref === 'medium'} onclick={() => strengthPref = 'medium'}>Medium</button>
					<button class="option-btn" class:active={strengthPref === 'strong'} onclick={() => strengthPref = 'strong'}>Strong</button>
				</div>
			</div>

			<div class="customize-section">
				<h3 class="section-label">Focus Areas</h3>
				<p class="body-popup-desc">Tap to toggle: Focus, Avoid, or skip</p>

				<div class="body-layout">
					<div class="body-figure">
						<svg viewBox="0 0 120 320" fill="none" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">
							<!-- Head -->
							<circle cx="60" cy="24" r="16" stroke={bodyPrefs['Head'] === 'focus' ? '#50c878' : bodyPrefs['Head'] === 'avoid' ? '#e85454' : '#6b5d4d'} fill={bodyPrefs['Head'] === 'focus' ? 'rgba(80,200,120,0.15)' : bodyPrefs['Head'] === 'avoid' ? 'rgba(232,84,84,0.15)' : 'rgba(107,93,77,0.08)'} />
							<!-- Neck -->
							<rect x="54" y="40" width="12" height="14" rx="4" stroke={bodyPrefs['Neck'] === 'focus' ? '#50c878' : bodyPrefs['Neck'] === 'avoid' ? '#e85454' : '#6b5d4d'} fill={bodyPrefs['Neck'] === 'focus' ? 'rgba(80,200,120,0.15)' : bodyPrefs['Neck'] === 'avoid' ? 'rgba(232,84,84,0.15)' : 'rgba(107,93,77,0.08)'} />
							<!-- Shoulders -->
							<path d="M42 56 Q30 58 22 70" stroke={bodyPrefs['Shoulder'] === 'focus' ? '#50c878' : bodyPrefs['Shoulder'] === 'avoid' ? '#e85454' : '#6b5d4d'} stroke-width="8" fill="none" opacity="0.6" />
							<path d="M78 56 Q90 58 98 70" stroke={bodyPrefs['Shoulder'] === 'focus' ? '#50c878' : bodyPrefs['Shoulder'] === 'avoid' ? '#e85454' : '#6b5d4d'} stroke-width="8" fill="none" opacity="0.6" />
							<!-- Torso / Back -->
							<rect x="34" y="54" width="52" height="70" rx="10" stroke={bodyPrefs['Back'] === 'focus' ? '#50c878' : bodyPrefs['Back'] === 'avoid' ? '#e85454' : '#6b5d4d'} fill={bodyPrefs['Back'] === 'focus' ? 'rgba(80,200,120,0.15)' : bodyPrefs['Back'] === 'avoid' ? 'rgba(232,84,84,0.15)' : 'rgba(107,93,77,0.08)'} />
							<!-- Arms -->
							<rect x="10" y="70" width="16" height="60" rx="8" stroke={bodyPrefs['Arm'] === 'focus' ? '#50c878' : bodyPrefs['Arm'] === 'avoid' ? '#e85454' : '#6b5d4d'} fill={bodyPrefs['Arm'] === 'focus' ? 'rgba(80,200,120,0.15)' : bodyPrefs['Arm'] === 'avoid' ? 'rgba(232,84,84,0.15)' : 'rgba(107,93,77,0.08)'} />
							<rect x="94" y="70" width="16" height="60" rx="8" stroke={bodyPrefs['Arm'] === 'focus' ? '#50c878' : bodyPrefs['Arm'] === 'avoid' ? '#e85454' : '#6b5d4d'} fill={bodyPrefs['Arm'] === 'focus' ? 'rgba(80,200,120,0.15)' : bodyPrefs['Arm'] === 'avoid' ? 'rgba(232,84,84,0.15)' : 'rgba(107,93,77,0.08)'} />
							<!-- Thighs -->
							<rect x="34" y="128" width="22" height="60" rx="10" stroke={bodyPrefs['Thigh'] === 'focus' ? '#50c878' : bodyPrefs['Thigh'] === 'avoid' ? '#e85454' : '#6b5d4d'} fill={bodyPrefs['Thigh'] === 'focus' ? 'rgba(80,200,120,0.15)' : bodyPrefs['Thigh'] === 'avoid' ? 'rgba(232,84,84,0.15)' : 'rgba(107,93,77,0.08)'} />
							<rect x="64" y="128" width="22" height="60" rx="10" stroke={bodyPrefs['Thigh'] === 'focus' ? '#50c878' : bodyPrefs['Thigh'] === 'avoid' ? '#e85454' : '#6b5d4d'} fill={bodyPrefs['Thigh'] === 'focus' ? 'rgba(80,200,120,0.15)' : bodyPrefs['Thigh'] === 'avoid' ? 'rgba(232,84,84,0.15)' : 'rgba(107,93,77,0.08)'} />
							<!-- Calves -->
							<rect x="36" y="192" width="18" height="60" rx="8" stroke={bodyPrefs['Calf'] === 'focus' ? '#50c878' : bodyPrefs['Calf'] === 'avoid' ? '#e85454' : '#6b5d4d'} fill={bodyPrefs['Calf'] === 'focus' ? 'rgba(80,200,120,0.15)' : bodyPrefs['Calf'] === 'avoid' ? 'rgba(232,84,84,0.15)' : 'rgba(107,93,77,0.08)'} />
							<rect x="66" y="192" width="18" height="60" rx="8" stroke={bodyPrefs['Calf'] === 'focus' ? '#50c878' : bodyPrefs['Calf'] === 'avoid' ? '#e85454' : '#6b5d4d'} fill={bodyPrefs['Calf'] === 'focus' ? 'rgba(80,200,120,0.15)' : bodyPrefs['Calf'] === 'avoid' ? 'rgba(232,84,84,0.15)' : 'rgba(107,93,77,0.08)'} />
							<!-- Feet -->
							<ellipse cx="45" cy="264" rx="12" ry="8" stroke={bodyPrefs['Foot'] === 'focus' ? '#50c878' : bodyPrefs['Foot'] === 'avoid' ? '#e85454' : '#6b5d4d'} fill={bodyPrefs['Foot'] === 'focus' ? 'rgba(80,200,120,0.15)' : bodyPrefs['Foot'] === 'avoid' ? 'rgba(232,84,84,0.15)' : 'rgba(107,93,77,0.08)'} />
							<ellipse cx="75" cy="264" rx="12" ry="8" stroke={bodyPrefs['Foot'] === 'focus' ? '#50c878' : bodyPrefs['Foot'] === 'avoid' ? '#e85454' : '#6b5d4d'} fill={bodyPrefs['Foot'] === 'focus' ? 'rgba(80,200,120,0.15)' : bodyPrefs['Foot'] === 'avoid' ? 'rgba(232,84,84,0.15)' : 'rgba(107,93,77,0.08)'} />
						</svg>
					</div>

					<div class="body-areas">
						{#each bodyAreas as area}
							<button class="body-area-btn" class:focus={bodyPrefs[area] === 'focus'} class:avoid={bodyPrefs[area] === 'avoid'} onclick={() => toggleBodyPref(area)}>
								<span class="area-name">{area}</span>
								<span class="area-status">
									{#if bodyPrefs[area] === 'focus'}
										<span class="status-badge status-focus">Focus</span>
									{:else if bodyPrefs[area] === 'avoid'}
										<span class="status-badge status-avoid">Avoid</span>
									{:else}
										<span class="status-badge status-blank">—</span>
									{/if}
								</span>
							</button>
						{/each}
					</div>
				</div>
			</div>
		</div>
		</div>

		<div class="body-footer">
			<button class="btn-body-close" onclick={closeBodyCustomize}>Close</button>
			<button class="btn-body-ok" onclick={confirmBodyCustomize}>OK</button>
		</div>
	</div>
{/if}

<style>
	main {
		height: 100vh;
		display: flex;
	}

	.page {
		position: relative;
		width: 100%;
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 50px 24px 160px;
		gap: 8px;
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

	.service-list-wrapper {
		position: relative;
		width: 100%;
		max-width: 480px;
		flex: 1;
		min-height: 0;
	}

	.service-list {
		display: flex;
		flex-direction: column;
		gap: 10px;
		width: 100%;
		height: 100%;
		overflow-y: auto;
		scrollbar-width: none;
		-ms-overflow-style: none;
		padding: 4px 0 60px;
	}

	.service-list::-webkit-scrollbar {
		display: none;
	}

	.scroll-hint {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		z-index: 5;
		color: rgba(193,154,107,0.6);
		pointer-events: none;
		opacity: 0;
		transition: opacity 0.3s;
	}

	.scroll-hint.visible {
		opacity: 1;
	}

	.scroll-hint-up {
		top: -16px;
		animation: bounce-up 2s ease-in-out infinite;
	}

	.scroll-hint-down {
		bottom: -28px;
		animation: bounce-down 2s ease-in-out infinite;
	}

	@keyframes bounce-up {
		0%, 100% { transform: translateX(-50%) translateY(0); }
		50% { transform: translateX(-50%) translateY(-5px); }
	}

	@keyframes bounce-down {
		0%, 100% { transform: translateX(-50%) translateY(0); }
		50% { transform: translateX(-50%) translateY(5px); }
	}

	.service-item {
		display: flex;
		align-items: flex-start;
		gap: 12px;
		padding: 16px;
		border-radius: 14px;
		background: rgba(255,255,255,0.03);
		border: 1px solid rgba(193,154,107,0.12);
		cursor: pointer;
		color: inherit;
		font-family: inherit;
		text-align: left;
		transition: background 0.3s, border-color 0.3s;
	}

	.service-item:hover {
		background: rgba(193,154,107,0.06);
		border-color: rgba(193,154,107,0.25);
	}

	.service-item.selected {
		background: rgba(193,154,107,0.15);
		border-color: rgba(193,154,107,0.6);
		box-shadow: 0 0 16px rgba(193,154,107,0.15), inset 0 0 20px rgba(193,154,107,0.05);
	}

	.service-info {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 4px;
	}

	.service-name {
		font-size: 1.1rem;
		font-weight: 600;
		color: #e8e0d6;
		letter-spacing: 0.02em;
	}

	.service-desc {
		font-size: 0.9rem;
		color: #8b7355;
		line-height: 1.5;
		font-weight: 300;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	.service-end {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		gap: 6px;
		min-width: fit-content;
	}

	.best-seller {
		font-size: 0.7rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: #0f0f0f;
		background: #c19a6b;
		padding: 2px 8px;
		border-radius: 20px;
		white-space: nowrap;
	}


	.service-price {
		font-size: 1rem;
		font-weight: 600;
		color: #c19a6b;
		white-space: nowrap;
		margin-top: 2px;
	}

	.service-min {
		font-size: 0.7rem;
		font-weight: 600;
		letter-spacing: 0.06em;
		color: #50c878;
		background: rgba(80,200,120,0.12);
		padding: 3px 10px;
		border-radius: 20px;
		border: 1px solid rgba(80,200,120,0.35);
		white-space: nowrap;
	}

	/* Popup */
	.popup-backdrop {
		position: fixed;
		inset: 0;
		z-index: 100;
		background: rgba(0,0,0,0.6);
		backdrop-filter: blur(6px);
		-webkit-backdrop-filter: blur(6px);
		display: flex;
		align-items: flex-end;
		justify-content: center;
		animation: fadeIn 0.2s ease;
	}

	.popup-sheet {
		position: relative;
		width: 100%;
		max-width: 480px;
		background: #1a1a1a;
		border-top-left-radius: 24px;
		border-top-right-radius: 24px;
		padding: 32px 24px 40px;
		animation: slideUp 0.3s ease;
	}

	.popup-close {
		position: absolute;
		top: 16px;
		right: 16px;
		background: rgba(255,255,255,0.08);
		border: none;
		border-radius: 50%;
		width: 36px;
		height: 36px;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		color: #8b7355;
		transition: background 0.2s, color 0.2s;
	}

	.popup-close:hover {
		background: rgba(255,255,255,0.14);
		color: #c19a6b;
	}

	.popup-header {
		margin-bottom: 24px;
	}

	.popup-title {
		font-family: 'Playfair Display', serif;
		font-size: 1.3rem;
		font-weight: 600;
		color: #c19a6b;
		letter-spacing: 0.04em;
		margin-bottom: 8px;
	}

	.popup-desc {
		font-size: 1rem;
		color: #8b7355;
		line-height: 1.5;
		font-weight: 300;
	}

	.duration-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 12px;
	}

	.duration-card {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 6px;
		padding: 20px 12px;
		border-radius: 14px;
		background: rgba(255,255,255,0.04);
		border: 1px solid rgba(193,154,107,0.15);
		cursor: pointer;
		color: inherit;
		font-family: inherit;
		transition: background 0.2s, border-color 0.2s, transform 0.15s;
	}

	.duration-card:hover {
		background: rgba(193,154,107,0.1);
		border-color: rgba(193,154,107,0.4);
		transform: scale(1.02);
	}

	.duration-card:active {
		transform: scale(0.98);
	}

	.dur-time {
		font-size: 1rem;
		font-weight: 600;
		color: #e8e0d6;
		letter-spacing: 0.02em;
	}

	.dur-price {
		font-size: 1.1rem;
		font-weight: 600;
		color: #c19a6b;
	}

	.dur-usd {
		font-size: 0.95rem;
		color: #8b7355;
		font-weight: 500;
	}

	/* Body customization modal */
	.body-modal {
		position: fixed;
		inset: 0;
		z-index: 100;
		background: #0f0f0f;
		display: flex;
		flex-direction: column;
		animation: fadeIn 0.25s ease;
	}

	.body-modal > .header {
		position: relative;
		flex-shrink: 0;
		background: #0f0f0f;
		padding: 24px 24px 16px;
	}

	.body-scroll-wrapper {
		position: relative;
		flex: 1;
		min-height: 0;
	}

	.body-modal-scroll {
		flex: 1;
		overflow-y: auto;
		padding: 32px 24px 24px;
		scrollbar-width: none;
		-ms-overflow-style: none;
	}

	.body-modal-scroll::-webkit-scrollbar {
		display: none;
	}

	.customize-section {
		margin-bottom: 28px;
	}

	.section-label {
		font-size: 0.85rem;
		font-weight: 600;
		color: #8b7355;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		margin-bottom: 12px;
	}

	.option-row {
		display: flex;
		gap: 10px;
	}

	.option-btn {
		flex: 1;
		padding: 14px 0;
		border-radius: 12px;
		background: rgba(255,255,255,0.03);
		border: 1px solid rgba(107,93,77,0.2);
		color: #8b7355;
		font-size: 0.95rem;
		font-weight: 500;
		font-family: inherit;
		cursor: pointer;
		transition: background 0.2s, border-color 0.2s, color 0.2s;
	}

	.option-btn.active {
		background: rgba(193,154,107,0.12);
		border-color: rgba(193,154,107,0.5);
		color: #c19a6b;
	}

	.body-popup-desc {
		font-size: 0.9rem;
		color: #8b7355;
		margin-bottom: 16px;
	}

	.body-layout {
		display: flex;
		gap: 20px;
		align-items: stretch;
	}

	.body-figure {
		flex-shrink: 0;
		width: 120px;
		display: flex;
		align-items: center;
	}

	.body-figure svg {
		width: 100%;
		height: auto;
	}

	.body-areas {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 6px;
	}

	.body-area-btn {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 14px 16px;
		border-radius: 12px;
		background: rgba(255,255,255,0.03);
		border: 1px solid rgba(107,93,77,0.2);
		cursor: pointer;
		color: inherit;
		font-family: inherit;
		transition: background 0.2s, border-color 0.2s;
	}

	.body-area-btn.focus {
		background: rgba(80,200,120,0.08);
		border-color: rgba(80,200,120,0.4);
	}

	.body-area-btn.avoid {
		background: rgba(232,84,84,0.08);
		border-color: rgba(232,84,84,0.4);
	}

	.area-name {
		font-size: 1rem;
		font-weight: 500;
		color: #e8e0d6;
	}

	.status-badge {
		font-size: 0.75rem;
		font-weight: 600;
		letter-spacing: 0.06em;
		padding: 3px 12px;
		border-radius: 20px;
	}

	.status-focus {
		color: #50c878;
		background: rgba(80,200,120,0.15);
		border: 1px solid rgba(80,200,120,0.3);
	}

	.status-avoid {
		color: #e85454;
		background: rgba(232,84,84,0.15);
		border: 1px solid rgba(232,84,84,0.3);
	}

	.status-blank {
		color: #6b5d4d;
		background: rgba(107,93,77,0.1);
		border: 1px solid rgba(107,93,77,0.2);
	}

	.body-footer {
		display: flex;
		gap: 12px;
		padding: 16px 24px 24px;
		background: #0f0f0f;
		flex-shrink: 0;
	}

	.btn-body-close, .btn-body-ok {
		flex: 1;
		padding: 14px 0;
		border-radius: 40px;
		font-size: 0.9rem;
		font-weight: 600;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		cursor: pointer;
		font-family: inherit;
		transition: background 0.3s, border-color 0.3s, color 0.3s;
	}

	.btn-body-close {
		background: transparent;
		border: 1px solid rgba(193,154,107,0.2);
		color: #8b7355;
	}

	.btn-body-close:hover {
		border-color: rgba(193,154,107,0.4);
		color: #c19a6b;
		background: rgba(193,154,107,0.06);
	}

	.btn-body-ok {
		background: rgba(193,154,107,0.15);
		border: 1px solid rgba(193,154,107,0.4);
		color: #c19a6b;
	}

	.btn-body-ok:hover {
		background: rgba(193,154,107,0.25);
		border-color: #c19a6b;
	}

	@keyframes fadeIn {
		from { opacity: 0; }
		to { opacity: 1; }
	}

	@keyframes slideUp {
		from { transform: translateY(100%); }
		to { transform: translateY(0); }
	}

	/* Total bar */
	.total-bar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 16px 20px;
		border-radius: 14px;
		background: linear-gradient(135deg, rgba(80,170,120,0.18), rgba(60,140,100,0.1));
		border: 1px solid rgba(80,170,120,0.5);
		box-shadow: 0 4px 24px rgba(80,170,120,0.15);
		width: 100%;
	}

	.total-label {
		font-size: 0.9rem;
		font-weight: 600;
		color: #50aa78;
		letter-spacing: 0.04em;
		text-transform: uppercase;
	}

	.total-count {
		text-transform: none;
		font-weight: 400;
		font-size: 0.8rem;
	}

	.total-prices {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		gap: 2px;
	}

	.total-vnd {
		font-size: 1.15rem;
		font-weight: 700;
		color: #50aa78;
	}

	.total-usd {
		font-size: 1rem;
		color: #3d8a60;
		font-weight: 600;
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
		padding: 16px 0 20px;
		background: #0f0f0f;
	}

	.footer-buttons {
		display: flex;
		gap: 12px;
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
		transition: background 0.3s, border-color 0.3s, color 0.3s, opacity 0.3s;
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

	.btn-next {
		background: rgba(193,154,107,0.15);
		border: 1px solid rgba(193,154,107,0.4);
		color: #c19a6b;
	}

	.btn-next:hover:not(:disabled) {
		background: rgba(193,154,107,0.25);
		border-color: #c19a6b;
	}

	.not-found {
		color: #8b7355;
		font-size: 1rem;
	}

	.snackbar {
		position: fixed;
		bottom: 100px;
		left: 50%;
		transform: translateX(-50%);
		z-index: 200;
		background: rgba(232,84,84,0.9);
		color: #fff;
		font-size: 0.85rem;
		font-weight: 500;
		padding: 12px 24px;
		border-radius: 12px;
		white-space: nowrap;
		animation: snackIn 0.3s ease, snackOut 0.4s ease 2.6s forwards;
	}

	@keyframes snackIn {
		from { opacity: 0; transform: translateX(-50%) translateY(10px); }
		to { opacity: 1; transform: translateX(-50%) translateY(0); }
	}

	@keyframes snackOut {
		from { opacity: 1; }
		to { opacity: 0; }
	}

	@media (max-width: 640px) {
		.page {
			padding: 90px 16px 150px;
			gap: 16px;
		}

		.service-item {
			padding: 12px;
			gap: 10px;
		}

		.service-name {
			font-size: 0.88rem;
		}

		.service-desc {
			font-size: 0.75rem;
		}

		.service-price {
			font-size: 0.8rem;
		}

		.popup-sheet {
			padding: 28px 20px 36px;
		}

		.duration-card {
			padding: 16px 10px;
		}

		.footer-actions {
			padding: 16px 16px 20px;
		}
	}
</style>
