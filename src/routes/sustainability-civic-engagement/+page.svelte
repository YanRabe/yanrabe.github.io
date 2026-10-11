<script lang="ts">
	import MediaGallery from '#lib/components/MediaGallery.svelte';
	import SectionHeading from '#lib/components/SectionHeading.svelte';
	import { civicSections } from '#lib/data.js';
</script>

<svelte:head
	><title>Civic life · Yan Rabefaniraka</title><meta
		name="description"
		content="Yan Rabefaniraka's civic engagement, association work and sustainability choices."
	/></svelte:head
>

<div class="page-wrap content-narrow civic-page">
	<SectionHeading
		eyebrow=""
		title="Sustainaibility & Civic Engagement"
		description="This section details my personal engagements for non-profit associations and sustainable behaviour"
	/>
	<div class="sections-list">
		{#each civicSections as section, index (section.title)}<article class="story">
				<div class="story-index">0{index + 1}</div>
				<div class="story-content">
					<p class="story-label">{section.intro}</p>
					<h2>{section.title}</h2>
					{#each section.body ?? [] as paragraph (paragraph)}<p class="story-body">
							{paragraph}
						</p>{/each}{#if section.links}<div class="story-links">
							{#each section.links as link (link.href)}<a
									class="text-link"
									{...{ href: link.href }}
									target="_blank"
									rel="noreferrer">{link.label} ↗</a
								>{/each}
						</div>{/if}<MediaGallery images={section.images ?? []} />
				</div>
			</article>{/each}
	</div>
</div>

<style>
	.sections-list {
		border-top: 1px solid var(--line);
	}
	.story {
		display: grid;
		grid-template-columns: 120px minmax(0, 1fr);
		gap: 24px;
		border-bottom: 1px solid var(--line);
		padding: 46px 0 60px;
	}
	.story-index {
		color: var(--coral);
		font-family: var(--font-mono);
		font-size: 0.68rem;
	}
	.story-content {
		max-width: 700px;
	}
	.story-label {
		margin-bottom: 14px;
		color: var(--coral);
		font-family: var(--font-mono);
		font-size: 0.67rem;
		letter-spacing: 0.04em;
		text-transform: uppercase;
	}
	.story h2 {
		margin-bottom: 24px;
		font-family: var(--font-display);
		font-size: clamp(2rem, 4vw, 3.8rem);
		font-weight: 500;
		letter-spacing: -0.06em;
		line-height: 0.95;
	}
	.story-body {
		max-width: 640px;
		color: var(--muted);
		line-height: 1.75;
	}
	.story-links {
		display: flex;
		flex-wrap: wrap;
		gap: 22px;
		margin-top: 24px;
	}
	@media (max-width: 620px) {
		.story {
			grid-template-columns: 42px minmax(0, 1fr);
			gap: 10px;
			padding: 34px 0 44px;
		}
	}
</style>
