<script lang="ts">
	import SectionHeading from '#lib/components/SectionHeading.svelte';
	import { engineeringSemesters } from '#lib/data.js';
</script>

<svelte:head
	><title>Engineering course · Yan Rabefaniraka</title><meta
		name="description"
		content="Yan Rabefaniraka's computer science engineering course at ENSEEIHT."
	/></svelte:head
>

<div class="page-wrap content-narrow course-page">
	<SectionHeading
		eyebrow=""
		title="Engineering Course"
		description="This section details my progress through my Engineering Master's Degree. It will be regularly updated."
	/>
	<div class="course-intro">
		<span class="big-mark" aria-hidden="true">N7</span>
	</div>
	<div class="semester-grid">
		{#each engineeringSemesters as semester (semester.title)}
			<article class="semester">
				<div class="semester-heading">
					<span>{semester.year}</span>
					<h2>{semester.title}</h2>
				</div>
				<ul>
					{#each semester.items as item (item)}<li>{item}</li>{/each}
				</ul>
			</article>
		{/each}
	</div>
</div>

<style>
	.course-page {
		padding-bottom: 40px;
	}
	.course-intro {
		display: grid;
		grid-template-columns: 1fr 2fr;
		gap: 40px;
		align-items: center;
		margin: 0 0 84px;
		padding: 28px 0;
		border-top: 1px solid var(--line);
		border-bottom: 1px solid var(--line);
	}
	.big-mark {
		color: var(--coral);
		font-family: var(--font-display);
		font-size: clamp(5rem, 15vw, 11rem);
		font-weight: 500;
		letter-spacing: -0.1em;
		line-height: 0.7;
	}
	.semester-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 72px 80px;
	}
	.semester {
		border-top: 2px solid var(--ink);
		padding-top: 18px;
	}
	.semester-heading {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		gap: 20px;
	}
	.semester-heading span {
		color: var(--coral);
		font-family: var(--font-mono);
		font-size: 0.64rem;
		text-transform: uppercase;
	}
	.semester h2 {
		margin: 0;
		font-family: var(--font-display);
		font-size: 1.6rem;
		font-weight: 500;
		letter-spacing: -0.04em;
	}
	ul {
		margin: 28px 0 0;
		padding: 0;
		list-style: none;
	}
	li {
		border-top: 1px solid var(--line);
		padding: 12px 0;
		color: var(--muted);
		line-height: 1.45;
	}
	li::before {
		margin-right: 9px;
		color: var(--coral);
		content: '↗';
	}
	@media (max-width: 680px) {
		.course-intro {
			grid-template-columns: 1fr;
			gap: 25px;
			margin-bottom: 60px;
		}
		.big-mark {
			font-size: 7rem;
		}
		.semester-grid {
			grid-template-columns: 1fr;
			gap: 52px;
		}
	}
</style>
