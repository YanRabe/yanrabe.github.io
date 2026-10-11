<script lang="ts">
	let {
		eyebrow,
		title,
		description = ''
	}: { eyebrow: string; title: string; description?: string } = $props();
</script>

<div class="section-heading">
	<p class="eyebrow">{eyebrow}</p>
	<h2>{title}</h2>
	{#if description}<p class="description">{description}</p>{/if}
</div>

<style>
	.section-heading {
		display: grid;
		grid-template-columns: 120px minmax(0, 1fr);
		column-gap: 24px;
		align-items: baseline;
		margin-bottom: 48px;
	}
	.eyebrow {
		margin: 0;
		color: var(--coral);
		font-family: var(--font-mono);
		font-size: 0.68rem;
		letter-spacing: 0.1em;
		text-transform: uppercase;
	}
	h2 {
		margin: 0;
		color: var(--ink);
		font-family: var(--font-display);
		font-size: clamp(2rem, 5vw, 4.6rem);
		font-weight: 500;
		letter-spacing: -0.03em;
		line-height: 0.96;
	}
	.description {
		grid-column: 2;
		max-width: 560px;
		margin: 18px 0 0;
		color: var(--muted);
		font-size: 1rem;
		line-height: 1.65;
	}
	@media (max-width: 620px) {
		.section-heading {
			display: block;
			margin-bottom: 32px;
		}
		.eyebrow {
			margin-bottom: 14px;
		}
	}
</style>
