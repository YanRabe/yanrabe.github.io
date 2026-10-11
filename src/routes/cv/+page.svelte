<script lang="ts">
	import SectionHeading from '#lib/components/SectionHeading.svelte';
	import { cvSections, frenchCvHref, profile } from '#lib/data.js';
</script>

<svelte:head
	><title>CV · {profile.name}</title><meta
		name="description"
		content="The English CV of Yan Rabefaniraka, computer science student at ENSEEIHT."
	/></svelte:head
>

<div class="page-wrap content-narrow cv-page">
	<div class="cv-top">
		<SectionHeading
			eyebrow=""
			title="Cv"
			description="This page acts as my English CV. the downloadable one is in French."
		/><a class="download-button" {...{ href: frenchCvHref }} target="_blank" rel="noreferrer"
			>Download French CV <span>↓</span></a
		>
	</div>
	<div class="cv-sections">
		{#each cvSections as section (section.title)}<section class="cv-section">
				<h2>{section.title}</h2>
				{#if section.entries}{#each section.entries as entry (entry.heading)}<article
							class="cv-entry"
						>
							<div>
								<h3>{entry.heading}</h3>
								<p class="entry-meta">{entry.meta}</p>
							</div>
							<div>
								<p>{entry.text}</p>
								{#if entry.tags}<div class="tags">
										{#each entry.tags as tag (tag)}<span>{tag}</span>{/each}
									</div>{/if}{#if entry.href}<a
										class="text-link"
										{...{ href: entry.href }}
										target="_blank"
										rel="noreferrer">See More↗</a
									>{/if}
							</div>
						</article>{/each}{:else if section.items}<div class="skill-cloud">
						{#each section.items as item, index (`${section.title}-${index}`)}<span>{item}</span>{/each}
					</div>{/if}
			</section>{/each}
	</div>
</div>

<style>
	.cv-top {
		position: relative;
	}
	.download-button {
		display: inline-flex;
		align-items: center;
		gap: 16px;
		margin: -24px 0 70px;
		background: var(--coral);
		padding: 14px 18px;
		color: var(--paper);
		font-family: var(--font-mono);
		font-size: 0.67rem;
		text-decoration: none;
		text-transform: uppercase;
	}
	.download-button:hover {
		background: var(--ink);
	}
	.download-button span {
		font-size: 1rem;
	}
	.cv-section {
		border-top: 2px solid var(--ink);
		padding: 24px 0 64px;
	}
	.cv-section > h2 {
		margin: 0 0 32px;
		color: var(--coral);
		font-family: var(--font-mono);
		font-size: 0.7rem;
		letter-spacing: 0.1em;
		text-transform: uppercase;
	}
	.cv-entry {
		display: grid;
		grid-template-columns: 1fr 1.2fr;
		gap: 45px;
		border-top: 1px solid var(--line);
		padding: 24px 0;
	}
	.cv-entry h3 {
		margin: 0 0 8px;
		font-family: var(--font-display);
		font-size: 1.45rem;
		font-weight: 500;
		letter-spacing: -0.04em;
		line-height: 1.1;
	}
	.entry-meta {
		margin: 0;
		color: var(--coral);
		font-family: var(--font-mono);
		font-size: 0.65rem;
		text-transform: uppercase;
	}
	.cv-entry > div:last-child p {
		margin: 0;
		color: var(--muted);
		line-height: 1.7;
	}
	.tags,
	.skill-cloud {
		display: flex;
		flex-wrap: wrap;
		gap: 7px;
	}
	.tags {
		margin: 18px 0;
	}
	.tags span,
	.skill-cloud span {
		border: 1px solid var(--line);
		padding: 7px 10px;
		color: var(--muted);
		font-family: var(--font-mono);
		font-size: 0.62rem;
	}
	.skill-cloud {
		gap: 10px;
	}
	.skill-cloud span:nth-child(3n) {
		border-color: var(--coral);
		color: var(--ink);
	}
	@media (max-width: 620px) {
		.download-button {
			margin-top: -8px;
			margin-bottom: 48px;
		}
		.cv-entry {
			grid-template-columns: 1fr;
			gap: 14px;
		}
	}
</style>
