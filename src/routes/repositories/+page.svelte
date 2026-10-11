<script lang="ts">
	import SectionHeading from '#lib/components/SectionHeading.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	function prettifyRepositoryName(name: string): string {
		return name
			.replace(/_/g, ' ')
			.replace(/\s+/g, ' ')
			.trim()
			.replace(/\b\w/g, (char) => char.toUpperCase());
	}
</script>

<svelte:head>
	<title>Repositories · Yan Rabefaniraka</title>
	<meta name="description" content="My Public GitHub repositories." />
</svelte:head>

<div class="page-wrap repositories-page">
	<SectionHeading
		eyebrow=""
		title="Repositories"
		description="A selection of my public GitHub projects."
	/>

	{#if data.error}
		<p class="error">{data.error}</p>
	{:else if data.repositories.length === 0}
		<p class="empty">No repositories found.</p>
	{:else}
		<div class="repository-grid">
			{#each data.repositories as repository (repository.id)}
				<article class="repository-card">
					<div>
						<p class="repository-language">
							{repository.language ?? 'Project'}
						</p>

						<h2>{prettifyRepositoryName(repository.name)}</h2>

						<p class="description">
							{repository.description ?? 'No description provided.'}
						</p>
					</div>

					<div class="repository-footer">
						<div class="topics">
							{#each repository.topics.slice(0, 4) as topic (topic)}
								<span>{topic}</span>
							{/each}
						</div>

						<a class="text-link" href={repository.html_url} target="_blank" rel="noreferrer">
							View on GitHub ↗
						</a>
					</div>
				</article>
			{/each}
		</div>
	{/if}
</div>

<style>
	.repository-grid {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 2px;
		background: var(--line);
		border: 1px solid var(--line);
	}

	.repository-card {
		display: flex;
		min-height: 260px;
		flex-direction: column;
		justify-content: space-between;
		background: var(--paper);
		padding: 28px;
	}

	.repository-language {
		margin: 0 0 16px;
		color: var(--coral);
		font-family: var(--font-mono);
		font-size: 0.68rem;
		text-transform: uppercase;
	}

	.repository-card h2 {
		margin: 0;
		font-family: var(--font-display);
		font-size: clamp(1.2rem, 2vw, 1.8rem);
		font-weight: 500;
		line-height: 1.2;
		overflow-wrap: anywhere;
	}

	.description {
		color: var(--muted);
		line-height: 1.6;
	}

	.repository-footer {
		margin-top: 28px;
	}

	.topics {
		display: flex;
		flex-wrap: wrap;
		gap: 7px;
		margin-bottom: 20px;
	}

	.topics span {
		border: 1px solid var(--line);
		padding: 6px 8px;
		color: var(--muted);
		font-family: var(--font-mono);
		font-size: 0.62rem;
	}

	.error {
		color: var(--coral);
	}

	@media (max-width: 700px) {
		.repository-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
