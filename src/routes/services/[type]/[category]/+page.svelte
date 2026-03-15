<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	interface Service {
		name: string;
		description: string;
		priceVND: number;
		bestSeller?: boolean;
	}

	interface Category {
		name: string;
		id: string;
		services: Service[];
	}

	const categories: Category[] = [
		{
			name: 'Body Massage', id: 'body-massage',
			services: [
				{ name: 'Traditional Vietnamese', description: 'Full body relaxation using ancient Vietnamese techniques with warm herbal oils', priceVND: 450000, bestSeller: true },
				{ name: 'Deep Tissue', description: 'Intense pressure targeting deep muscle layers to release chronic tension', priceVND: 550000 },
				{ name: 'Aromatherapy Bliss', description: 'Gentle strokes combined with premium essential oils for total mind-body harmony', priceVND: 500000 },
				{ name: 'Hot Stone Therapy', description: 'Heated basalt stones placed along energy points to melt away stress', priceVND: 650000 },
				{ name: 'Thai Stretch', description: 'Dynamic stretching and pressure point work inspired by Thai healing traditions', priceVND: 500000 },
				{ name: 'Four Hands Massage', description: 'Two therapists work in synchronized rhythm for a deeply immersive experience', priceVND: 800000 },
				{ name: 'Bamboo Rolling', description: 'Warm bamboo sticks rolled along muscles to ease tension and boost circulation', priceVND: 580000 },
				{ name: 'Herbal Compress', description: 'Steamed herbal poultice pressed along the body to soothe aches and inflammation', priceVND: 520000 }
			]
		},
		{
			name: 'Foot Massage', id: 'foot-massage',
			services: [
				{ name: 'Reflexology', description: 'Targeted pressure on reflex points to restore balance and improve circulation', priceVND: 350000, bestSeller: true },
				{ name: 'Herbal Foot Soak', description: 'Warm herbal bath followed by a soothing foot and calf massage', priceVND: 300000 },
				{ name: 'Deep Foot Relief', description: 'Intensive treatment for tired feet focusing on arches and heels', priceVND: 400000 },
				{ name: 'Foot & Leg Combo', description: 'Complete lower body treatment from toes to knees with warm oil', priceVND: 450000 },
				{ name: 'Detox Foot Therapy', description: 'Cleansing foot treatment with charcoal wrap and pressure point massage', priceVND: 380000 },
				{ name: 'Ginger Foot Wrap', description: 'Warming ginger paste wrap to improve blood flow and relieve cold feet', priceVND: 320000 },
				{ name: 'Salt Scrub & Soak', description: 'Himalayan salt exfoliation followed by mineral-rich warm water soak', priceVND: 360000 },
				{ name: 'Plantar Relief', description: 'Specialized deep pressure therapy targeting plantar fascia and heel pain', priceVND: 420000 }
			]
		},
		{
			name: 'Hair Wash', id: 'hair-wash',
			services: [
				{ name: 'Signature Wash', description: 'Relaxing shampoo with scalp massage using premium herbal products', priceVND: 200000, bestSeller: true },
				{ name: 'Deep Conditioning', description: 'Nourishing treatment to restore shine and strength to damaged hair', priceVND: 300000 },
				{ name: 'Scalp Detox', description: 'Deep cleansing treatment to remove buildup and stimulate hair growth', priceVND: 350000 },
				{ name: 'Hot Oil Treatment', description: 'Warm coconut oil massage into scalp and hair for deep hydration', priceVND: 280000 },
				{ name: 'Herbal Rinse', description: 'Traditional Vietnamese herb-infused rinse for healthy glossy hair', priceVND: 250000 },
				{ name: 'Keratin Smooth', description: 'Professional keratin infusion to tame frizz and add lasting silky shine', priceVND: 400000 },
				{ name: 'Charcoal Purify', description: 'Activated charcoal cleanse to draw out impurities and refresh oily scalps', priceVND: 320000 },
				{ name: 'Minty Cool Wash', description: 'Peppermint-infused shampoo with cooling scalp massage for instant freshness', priceVND: 230000 }
			]
		},
		{
			name: 'Facial', id: 'facial',
			services: [
				{ name: 'Classic Glow Facial', description: 'Deep cleansing, exfoliation and hydrating mask for radiant skin', priceVND: 400000, bestSeller: true },
				{ name: 'Anti-Aging Lift', description: 'Firming treatment with collagen boost and gentle micro-current therapy', priceVND: 600000 },
				{ name: 'Acne Clear', description: 'Purifying treatment with salicylic acid and calming blue LED light', priceVND: 450000 },
				{ name: 'Vitamin C Brightening', description: 'Luminous treatment to fade dark spots and even out skin tone', priceVND: 500000 },
				{ name: 'Hydra Rescue', description: 'Intensive moisture infusion for dry and dehydrated skin types', priceVND: 420000 },
				{ name: 'Gold Leaf Luxury', description: 'Pure gold leaf mask to boost radiance and promote cellular renewal', priceVND: 750000 },
				{ name: 'Oxygen Boost', description: 'High-pressure oxygen spray to plump skin and reduce fine lines instantly', priceVND: 550000 },
				{ name: 'Sensitive Calm', description: 'Ultra-gentle treatment with aloe and chamomile for reactive and redness-prone skin', priceVND: 430000 }
			]
		},
		{
			name: 'Heel Care', id: 'heel-care',
			services: [
				{ name: 'Smooth Heel Treatment', description: 'Exfoliation and deep moisturizing to soften rough cracked heels', priceVND: 250000, bestSeller: true },
				{ name: 'Paraffin Wax Wrap', description: 'Warm paraffin coating to lock in moisture and heal dry skin', priceVND: 300000 },
				{ name: 'Callus Removal', description: 'Professional removal of hardened skin with gentle buffing tools', priceVND: 200000 },
				{ name: 'Heel Repair Mask', description: 'Overnight-style intensive mask treatment for severely damaged heels', priceVND: 280000 },
				{ name: 'Foot Peel & Polish', description: 'Chemical peel to reveal baby-soft skin followed by nourishing cream', priceVND: 320000 },
				{ name: 'Shea Butter Wrap', description: 'Rich shea butter heated wrap to deeply nourish and restore cracked heels', priceVND: 270000 },
				{ name: 'Pumice & Oil Ritual', description: 'Traditional pumice stone buffing followed by warm essential oil massage', priceVND: 220000 },
				{ name: 'Heel Recovery Plus', description: 'Multi-step clinical treatment combining peel, mask and sealing balm', priceVND: 380000 }
			]
		},
		{
			name: 'Nails', id: 'nails',
			services: [
				{ name: 'Gel Manicure', description: 'Long-lasting gel polish with cuticle care and hand massage', priceVND: 300000, bestSeller: true },
				{ name: 'Classic Pedicure', description: 'Full nail shaping, cuticle treatment, polish and foot massage', priceVND: 250000 },
				{ name: 'Nail Art Design', description: 'Custom hand-painted nail art with premium designs of your choice', priceVND: 400000 },
				{ name: 'Acrylic Extensions', description: 'Professional acrylic nail extensions with shape and length options', priceVND: 500000 },
				{ name: 'Mani-Pedi Combo', description: 'Complete manicure and pedicure package with gel polish finish', priceVND: 450000 },
				{ name: 'Dip Powder Nails', description: 'Durable dip powder application for a natural look with lasting color', priceVND: 350000 },
				{ name: 'Nail Repair & Strengthen', description: 'Damaged nail restoration with protein bond treatment and protective coat', priceVND: 280000 },
				{ name: 'Luxury Hand Spa', description: 'Full hand treatment with scrub, mask, paraffin dip and gel polish finish', priceVND: 550000 }
			]
		},
		{
			name: 'Ear Clean', id: 'ear-clean',
			services: [
				{ name: 'Traditional Ear Clean', description: 'Gentle ear cleaning with specialized bamboo tools and soft touch', priceVND: 150000, bestSeller: true },
				{ name: 'Ear Candling', description: 'Holistic ear candling therapy to remove buildup and promote relaxation', priceVND: 200000 },
				{ name: 'Deep Clean & Massage', description: 'Thorough cleaning followed by soothing ear and temple massage', priceVND: 250000 },
				{ name: 'Ear Acupressure', description: 'Pressure point stimulation on the ear to relieve stress and headaches', priceVND: 180000 },
				{ name: 'Premium Ear Spa', description: 'Full ear treatment with cleaning, massage, warm compress and oils', priceVND: 300000 },
				{ name: 'Warm Oil Ear Soak', description: 'Gentle warm herbal oil dripped into the ear canal for deep soothing relief', priceVND: 220000 },
				{ name: 'ASMR Ear Therapy', description: 'Feather-light tools and soft brushing designed for deep relaxation and tingles', priceVND: 280000 },
				{ name: 'Ear & Scalp Combo', description: 'Combined ear cleaning with invigorating scalp massage for full head relaxation', priceVND: 350000 }
			]
		},
		{
			name: 'Barber', id: 'barber',
			services: [
				{ name: 'Classic Haircut', description: 'Precision cut with consultation, wash, and professional styling', priceVND: 200000, bestSeller: true },
				{ name: 'Hot Towel Shave', description: 'Traditional straight razor shave with hot towel and aftershave balm', priceVND: 250000 },
				{ name: 'Beard Trim & Shape', description: 'Expert beard grooming with trimming, shaping and conditioning oil', priceVND: 150000 },
				{ name: 'Hair Color', description: 'Professional hair coloring service with premium ammonia-free dyes', priceVND: 400000 },
				{ name: 'Cut & Shave Combo', description: 'Complete grooming package with haircut, shave and styling finish', priceVND: 350000 },
				{ name: 'Fade & Design', description: 'Precision skin fade with optional razor line designs and patterns', priceVND: 280000 },
				{ name: 'Grey Blend Camo', description: 'Natural-looking grey coverage blended seamlessly into existing hair color', priceVND: 350000 },
				{ name: 'Scalp Treatment', description: 'Deep cleansing scalp therapy with exfoliation and revitalizing serum', priceVND: 300000 }
			]
		},
		{
			name: 'VIP Pack', id: 'vip-pack',
			services: [
				{ name: 'Royal Treatment', description: 'Three-hour full body experience with massage, facial and foot care', priceVND: 1500000, bestSeller: true },
				{ name: 'Couples Retreat', description: 'Side-by-side spa session for two with champagne and private room', priceVND: 2500000 },
				{ name: 'Executive Refresh', description: 'Quick ninety-minute package with massage, facial and hair wash', priceVND: 900000 },
				{ name: 'Full Day Escape', description: 'All-inclusive five-hour journey through every spa service we offer', priceVND: 3000000 },
				{ name: 'Birthday Special', description: 'Celebration package with cake, decorations and premium spa services', priceVND: 2000000 },
				{ name: 'Bridal Glow Package', description: 'Pre-wedding prep with facial, body scrub, mani-pedi and hair styling', priceVND: 3500000 },
				{ name: 'Corporate Wellness', description: 'Group booking for teams with massage, foot care and refreshments included', priceVND: 1800000 },
				{ name: 'Monthly Membership', description: 'Four premium visits per month with priority booking and ten percent savings', priceVND: 4000000 }
			]
		}
	];

	const VND_TO_USD = 25000;

	let visible = $state(false);
	let serviceType = $derived($page.params.type);
	let categoryId = $derived($page.params.category);
	let category = $derived(categories.find(c => c.id === categoryId));
	let selectedServices = $state<Set<string>>(new Set());

	let totalVND = $derived(() => {
		if (!category) return 0;
		return category.services
			.filter(s => selectedServices.has(s.name))
			.reduce((sum, s) => sum + s.priceVND, 0);
	});

	let totalUSD = $derived(() => {
		return (totalVND() / VND_TO_USD).toFixed(2);
	});

	function toggleService(name: string) {
		const next = new Set(selectedServices);
		if (next.has(name)) {
			next.delete(name);
		} else {
			next.add(name);
		}
		selectedServices = next;
	}

	function formatVND(amount: number): string {
		return amount.toLocaleString('vi-VN') + 'đ';
	}

	onMount(() => {
		setTimeout(() => {
			visible = true;
		}, 100);
	});
</script>

<svelte:head>
	<title>{category?.name ?? 'Services'} — Ngan Ha Spa</title>
</svelte:head>

<main>
	<div class="page" class:visible>
		<div class="header">
			<h1 class="title">{category?.name ?? 'Services'}</h1>
			<div class="divider"></div>
		</div>

		{#if category}
			<div class="service-list">
				{#each category.services as service}
					<button
						class="service-item"
						class:selected={selectedServices.has(service.name)}
						onclick={() => toggleService(service.name)}
					>
						<div class="service-info">
							<span class="service-name">{service.name}</span>
							<p class="service-desc">{service.description}</p>
						</div>
						<div class="service-end">
							{#if service.bestSeller}
								<span class="best-seller">Best Seller</span>
							{/if}
							<span class="service-price">{formatVND(service.priceVND)}</span>
						</div>
					</button>
				{/each}
			</div>

		{:else}
			<p class="not-found">Category not found.</p>
		{/if}

		<footer class="footer-actions">
			{#if totalVND() > 0}
				<div class="total-bar">
					<span class="total-label">Total</span>
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
				<button class="btn btn-next" disabled={selectedServices.size === 0}>Next</button>
			</div>
		</footer>
	</div>
</main>

<style>
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
		gap: 24px;
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
		padding: 20px 24px 40px;
		background: linear-gradient(to bottom, #0f0f0f 50%, transparent);
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

	.service-list {
		display: flex;
		flex-direction: column;
		gap: 10px;
		width: 100%;
		max-width: 480px;
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
		background: rgba(193,154,107,0.1);
		border-color: rgba(193,154,107,0.4);
	}

	.service-info {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 4px;
	}

	.service-name {
		font-size: 0.95rem;
		font-weight: 600;
		color: #e8e0d6;
		letter-spacing: 0.02em;
	}

	.service-desc {
		font-size: 0.8rem;
		color: #8b7355;
		line-height: 1.5;
		font-weight: 300;
	}

	.service-end {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		gap: 6px;
		min-width: fit-content;
	}

	.best-seller {
		font-size: 0.6rem;
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
		font-size: 0.85rem;
		font-weight: 600;
		color: #c19a6b;
		white-space: nowrap;
		margin-top: 2px;
	}

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
		font-size: 0.75rem;
		color: #3d8a60;
		font-weight: 400;
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
		padding: 20px 24px 20px;
		padding-top: 40px;
		background: linear-gradient(to top, #0f0f0f 70%, transparent);
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

	.btn-next:disabled {
		opacity: 0.4;
		cursor: not-allowed;
	}

	.not-found {
		color: #8b7355;
		font-size: 1rem;
	}

	@media (max-width: 640px) {
		.page {
			padding: 100px 16px 120px;
			gap: 20px;
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
	}
</style>
