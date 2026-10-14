<script lang="ts">
	import { UnderlineToBackground } from '#lib/components/fancy/underline-to-background';
	import { DitherShader } from '#lib/components/magic/dither-shader';
	import { Floating, FloatingElement } from '#lib/components/fancy/parallax-floating';
	import kiteImage from '#lib/assets/Roll_2 _first_batch-6.jpg';
	import busStop from '#lib/assets/bus stop transparent.png';
	import revachol from '#lib/assets/revachol transparent.png';

	import { homepageHighlights, profile } from '#lib/data.js';
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
		<div class="hero-background" aria-hidden="true">
			<DitherShader
				src={kiteImage}
				gridSize={3}
				ditherMode="bayer"
				colorMode="original"
				invert={false}
				animated={false}
				animationSpeed={0.02}
				primaryColor="#000000"
				secondaryColor="#f5f5f5"
				threshold={0.2}
				objectFit="cover"
				class="h-9/10 w-7/8"
			/>
		</div>
		<div class="hero-copy">
			<p class="eyebrow">Computer graphics engineering student</p>
			<h1 id="intro-title">Yan <UnderlineToBackground
					as="span"
					targetTextColor="var(--coral)"
					underlineHeightRatio=0.0625
					underlinePaddingRatio=0.05
					class="name-highlight"
				>Rabefaniraka</UnderlineToBackground
			></h1>
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
		<Floating class="hero-decorations" sensitivity={0.6} easingFactor={0.04}>
			<FloatingElement depth={0.5} class="decoration decoration-revachol">
				<img src={revachol} alt="" />
			</FloatingElement>

			<FloatingElement depth={0.5} class="decoration decoration-bus-stop">
				<img src={busStop} alt="" />
			</FloatingElement>
		</Floating>
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
			<a href={resolve('/engineering-course')}><span>01</span> Engineering Course <b>↗</b></a><a
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
		overflow: visible;
	}
	.hero {
		display: grid;
		grid-template-columns: minmax(0, 1.3fr) minmax(260px, 0.7fr);
		gap: 80px;
		align-items: center;
		min-height: 310px;
		padding: 62px 0 110px;
		position: relative;
		isolation: isolate;
	}
	.hero-background {
		position: absolute;
		z-index: -1;
		inset: 0;
		overflow: hidden;
		opacity: 0.6;
	}
	:global(.section-decorations) {
		position: absolute;
		inset: 0;
		overflow: visible;
		pointer-events: none;
	}

	:global(.decoration) {
		position: absolute;
		opacity: 0.84;
	}

	:global(.decoration img) {
		display: block;
		width: 100%;
		height: auto;
	}

	:global(.decoration-revachol) {
		top: 0;
		right: -10%;
		width: clamp(256px, 5vw, 512px);
	}

	:global(.decoration-bus-stop) {
		top: 29%;
		left: -16%;
		width: clamp(256px, 5vw, 512px);
	}

	@media (max-width: 760px) {
		:global(.section-decoration) {
			display: none;
		}
	}
	.intro-section,
	.path-section {
		position: relative;
		isolation: isolate;
	}
	.intro-section > :not(.section-decoration),
	.path-section > :not(.section-decoration) {
		position: relative;
		z-index: 1;
	}
	.eyebrow {
		margin: 0;
		color: var(--coral);
		font-size: 0.8rem;
		font-weight: 500;
		line-height: 0.7;
		letter-spacing: 0.05em;
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
	:global(.name-highlight) {
		cursor: pointer;
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
		border-right: 1px solid var(--line);
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
	.path-section {
		padding: 18px 0;
		border-top: 1px solid var(--line);
	}
	.intro-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 40px;
	}
	.intro-body {
		border-top: 1px solid var(--line);
		max-width: 480px;
		color: var(--muted);
		line-height: 1.75;
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
	@media (max-width: 760px) {
		.hero {
			grid-template-columns: 1fr;
			gap: 36px;
			min-height: auto;
			padding: 48px 0 64px;
		}
		.hero-aside {
			width: min(100% - 18px, 330px);
			margin: 0 18px 0 0;
		}
		.intro-grid {
			grid-template-columns: 1fr;
			gap: 24px;
		}
		.path-section {
			grid-template-columns: 1fr;
			gap: 24px;
		}
	}
	@media (max-width: 520px) {
		.hero-aside {
			width: 96px;
			margin: -12px 18px 0 auto;
		}
		.portrait-frame {
			aspect-ratio: 1;
		}
		.portrait-frame::before {
			inset: 8px -8px -8px 8px;
		}
		.location-note {
			gap: 6px;
			margin-top: 12px;
			font-size: 0.55rem;
		}
		.dot {
			width: 7px;
			height: 7px;
		}
		h1 {
			font-size: clamp(2.8rem, 13vw, 4.2rem);
			line-height: 0.92;
			overflow-wrap: anywhere;
		}
		.intro-section,
		.path-section {
			padding: 40px 0;
		}
		.path-links a {
			grid-template-columns: 36px minmax(0, 1fr) 20px;
			gap: 8px;
			font-size: 1.05rem;
		}
	}
</style>
