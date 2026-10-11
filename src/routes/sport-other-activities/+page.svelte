<script lang="ts">
	import MediaGallery from '#lib/components/MediaGallery.svelte';
	import SectionHeading from '#lib/components/SectionHeading.svelte';
	import { activitySections } from '#lib/data.js';
</script>

<svelte:head
	><title>Beyond class · Yan Rabefaniraka</title><meta
		name="description"
		content="Yan Rabefaniraka's hobbies, sports, photography, music and 3D work."
	/></svelte:head
>

<div class="page-wrap activities-page">
	<SectionHeading
		eyebrow=""
		title="Sports & Other Activities"
		description="This section is where I talk about my personal hobbies and favourite sports."
	/>
	<div class="activity-grid">
		{#each activitySections as section, index (section.title)}<article class="activity-card">
				<div class="activity-top">
					<span>0{index + 1}</span>
					<h2>{section.title}</h2>
				</div>
				<p class="activity-intro">{section.intro}</p>
				{#each section.body ?? [] as paragraph (paragraph)}<p>
						{paragraph}
					</p>{/each}{#if section.links}<div class="activity-links">
						{#each section.links as link (link.href)}<a
								class="text-link"
								{...{ href: link.href }}
								target="_blank"
								rel="noreferrer">{link.label} ↗</a
							>{/each}
					</div>{/if}<MediaGallery images={section.images ?? []} />
			</article>{/each}
	</div>
</div>

<style>
	.activities-page {
		max-width: 1240px;
	}
	.activity-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2px;
		background: var(--line);
		border: 1px solid var(--line);
	}
	.activity-card {
		background: var(--paper);
		padding: 32px;
	}
	.activity-card:nth-child(3) {
		grid-column: span 2;
	}
	.activity-top {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		gap: 20px;
		border-bottom: 1px solid var(--line);
		padding-bottom: 20px;
	}
	.activity-top span {
		color: var(--coral);
		font-family: var(--font-mono);
		font-size: 0.67rem;
	}
	.activity-card h2 {
		margin: 0;
		font-family: var(--font-display);
		font-size: clamp(1.8rem, 3.5vw, 3rem);
		font-weight: 500;
		letter-spacing: -0.06em;
	}
	.activity-card p:not(.activity-intro) {
		max-width: 520px;
		color: var(--muted);
		line-height: 1.7;
	}
	.activity-intro {
		margin: 26px 0 16px;
		color: var(--ink);
		font-family: var(--font-display);
		font-size: 1.2rem;
		line-height: 1.25;
	}
	.activity-links {
		margin: 22px 0;
	}
	@media (max-width: 720px) {
		.activity-grid {
			grid-template-columns: 1fr;
		}
		.activity-card:nth-child(3) {
			grid-column: auto;
		}
		.activity-card {
			padding: 24px 20px;
		}
	}
</style>
