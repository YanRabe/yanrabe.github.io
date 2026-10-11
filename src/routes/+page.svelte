<script lang="ts">
	import SectionHeading from '#lib/components/SectionHeading.svelte';
	import { homepageHighlights, profile, socialLinks } from '#lib/data.js';
	import { resolve } from '$app/paths';
</script>

<svelte:head>
	<title>{profile.name} · Computer science & imagery</title>
	<meta
		name="description"
		content="The personal portfolio of Yan Rabefaniraka, a computer science student at ENSEEIHT in Toulouse."
	/>
</svelte:head>

<div class="page-wrap home">
	<section class="hero" aria-labelledby="intro-title">
		<div class="hero-copy">
			<p class="eyebrow">Computer graphics engineering student</p>
			<h1 id="intro-title">Yan Rabefaniraka</h1>
			<div class="hero-actions">
				<a class="button button-primary" href={resolve('/cv')}>Cv <span>↗</span></a><a
					class="button button-quiet"
					href="#about">More info <span>↓</span></a
				>
			</div>
		</div>
		<div class="hero-aside">
			<div class="portrait-frame">
				<img src={profile.portrait} alt="Portrait of Yan Rabefaniraka" />
			</div>
			<div class="location-note">
				<span class="dot"></span><span>Currently in<br /><strong>{profile.location}</strong></span>
			</div>
		</div>
	</section>

	<section id="about" class="intro-section" aria-labelledby="about-title">
		<SectionHeading eyebrow="" title="About me" description="3rd Year at ENSEEIHT" />

		<div class="intro-grid">
			{#each homepageHighlights as highlight (highlight.number)}
				<div class="intro-body">
					<p>{highlight.text}</p>
				</div>
			{/each}
		</div>
	</section>

	<section class="path-section" aria-labelledby="path-title">
		<div>
			<h2 class="eyebrow">Additional Links</h2>
		</div>
		<div class="path-links">
			<a href={resolve('/engineering-course')}><span>01</span> Engineering Course ✏️ <b>↗</b></a><a
				href={resolve('/sustainability-civic-engagement')}
				><span>02</span> Sustainaibility & Civic Engagement <b>↗</b></a
			><a href={resolve('/sport-other-activities')}
				><span>03</span> Sports & Other Activities <b>↗</b></a
			>
		</div>
	</section>
</div>

<style>
	.home {
		overflow: hidden;
	}
	.hero {
		display: grid;
		grid-template-columns: minmax(0, 1.3fr) minmax(260px, 0.7fr);
		gap: 80px;
		align-items: center;
		min-height: 310px;
		padding: 62px 0 110px;
	}
	.eyebrow {
		margin: 0;
		color: var(--coral);
		font-size: 0.68rem;
		letter-spacing: 0.1em;
		text-transform: uppercase;
	}
	h1,
	h2,
	p {
		margin-top: 0;
	}
	h1 {
		max-width: 760px;
		margin: 20px 0 28px;
		font-family: var(--font-display);
		font-size: clamp(4.2rem, 9vw, 8.8rem);
		font-weight: 500;
		letter-spacing: -0.07em;
		line-height: 0.83;
	}
	.hero-lede {
		max-width: 570px;
		color: var(--muted);
		font-size: 1.12rem;
		line-height: 1.6;
	}
	.hero-actions {
		display: flex;
		flex-wrap: wrap;
		gap: 22px;
		margin-top: 36px;
	}
	.button {
		display: inline-flex;
		align-items: center;
		gap: 18px;
		padding: 13px 18px;
		font-family: var(--font-mono);
		font-size: 0.68rem;
		letter-spacing: 0.06em;
		text-decoration: none;
		text-transform: uppercase;
	}
	.button span {
		font-size: 1rem;
	}
	.button-primary {
		background: var(--ink);
		color: var(--paper);
	}
	.button-primary:hover {
		background: var(--coral);
	}
	.button-quiet {
		border-bottom: 1px solid var(--line);
		color: var(--ink);
		padding-right: 0;
		padding-left: 0;
	}
	.button-quiet:hover {
		border-color: var(--coral);
		color: var(--coral);
	}
	.hero-aside {
		position: relative;
		max-width: 330px;
		margin-left: auto;
	}
	.portrait-frame {
		position: relative;
		aspect-ratio: 0.79;
		background: var(--mist);
	}
	.portrait-frame::before {
		position: absolute;
		z-index: -1;
		inset: 18px -18px -18px 18px;
		border: 1px solid var(--coral);
		content: '';
	}
	.portrait-frame img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		filter: saturate(0.8);
	}
	.location-note {
		display: flex;
		gap: 10px;
		margin-top: 24px;
		color: var(--muted);
		font-family: var(--font-mono);
		font-size: 0.67rem;
		line-height: 1.45;
		text-transform: uppercase;
	}
	.location-note strong {
		color: var(--ink);
		font-weight: 500;
	}
	.dot {
		width: 9px;
		height: 9px;
		margin-top: 3px;
		border-radius: 50%;
		background: var(--coral);
	}
	.intro-section,
	.highlight-section,
	.path-section {
		padding: 18px 0;
		border-top: 1px solid var(--line);
	}
	.intro-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 40px;
	}
	.intro-statement p {
		max-width: 420px;
		margin: 0;
		font-family: var(--font-display);
		font-size: clamp(1.8rem, 3.4vw, 3.6rem);
		letter-spacing: -0.04em;
		line-height: 1.02;
	}
	.intro-body {
		border-top: 1px solid var(--line);
		max-width: 480px;
		color: var(--muted);
		line-height: 1.75;
	}
	.intro-body p + p {
		margin-top: 24px;
	}
	.section-bar {
		display: flex;
		justify-content: space-between;
		align-items: start;
		margin-bottom: 48px;
	}
	.path-section h2 {
		margin: 0;
		font-family: var(--font-display);
		font-size: clamp(2.4rem, 5vw, 5.2rem);
		font-weight: 500;
		letter-spacing: -0.06em;
		line-height: 0.9;
		text-align: right;
	}
	.highlight-list {
		border-top: 1px solid var(--line);
	}
	.highlight {
		display: grid;
		grid-template-columns: 100px 1fr 28px;
		gap: 24px;
		align-items: start;
		border-bottom: 1px solid var(--line);
		padding: 28px 0;
	}
	.highlight-number {
		color: var(--coral);
		font-family: var(--font-mono);
		font-size: 0.7rem;
	}
	.highlight p {
		max-width: 560px;
		margin: 0;
		color: var(--muted);
		line-height: 1.6;
	}
	.arrow {
		color: var(--coral);
		font-size: 1.2rem;
	}
	.path-section {
		display: grid;
		grid-template-columns: 0.8fr 1.2fr;
		gap: 80px;
		align-items: end;
	}
	.path-section h2 {
		text-align: left;
	}
	.path-links {
		border-top: 1px solid var(--line);
	}
	.path-links a {
		display: grid;
		grid-template-columns: 55px 1fr 25px;
		gap: 12px;
		align-items: center;
		border-bottom: 1px solid var(--line);
		padding: 13px 0;
		color: var(--ink);
		font-family: var(--font-display);
		font-size: 1.2rem;
		text-decoration: none;
	}
	.path-links a span {
		color: var(--coral);
		font-family: var(--font-mono);
		font-size: 0.68rem;
	}
	.path-links b {
		color: var(--coral);
		font-weight: 400;
		text-align: right;
	}
	.path-links a:hover {
		color: var(--coral);
		padding-left: 8px;
	}
	.contact-strip {
		display: flex;
		justify-content: space-between;
		gap: 30px;
		border-top: 1px solid var(--line);
		padding: 30px 0 0;
	}
	.contact-links {
		display: flex;
		flex-wrap: wrap;
		justify-content: end;
		gap: 24px;
	}
	.contact-links a {
		color: var(--ink);
		font-family: var(--font-mono);
		font-size: 0.68rem;
		text-decoration: none;
		text-transform: uppercase;
	}
	.contact-links span {
		color: var(--coral);
	}
	@media (max-width: 760px) {
		.hero {
			grid-template-columns: 1fr;
			gap: 50px;
			min-height: auto;
			padding: 64px 0 90px;
		}
		.hero-aside {
			margin: 0 18px 0 0;
		}
		.intro-grid,
		.path-section {
			gap: 24px;
			padding: 40px 0;
		}
		.section-bar {
			display: block;
		}
	}
	@media (max-width: 520px) {
		h1 {
			font-size: clamp(3.7rem, 19vw, 5.5rem);
		}
		.intro-section,
		.highlight-section,
		.path-section {
			padding: 76px 0;
		}
		.highlight {
			grid-template-columns: 45px 1fr 20px;
			gap: 10px;
		}
		.contact-strip {
			display: block;
		}
		.contact-links {
			justify-content: start;
			margin-top: 20px;
		}
	}
</style>
