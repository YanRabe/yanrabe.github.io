<script lang="ts">
	import { navItems, profile } from '#lib/data.js';
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
	import { AnimatedThemeToggler } from '#lib/components/magic/animated-theme-toggler';

	let menuOpen = $state(false);

	function isActive(href: string) {
		return href === '/' ? page.url.pathname === '/' : page.url.pathname.startsWith(href);
	}
</script>

<header class="site-header">
	<div class="header-inner">
		<a class="wordmark" href={resolve('/')} aria-label={`${profile.name} home`}>
			<span class="wordmark-mark">YR</span>
			<span>{profile.name}</span>
		</a>
		<button
			class="menu-toggle"
			type="button"
			aria-expanded={menuOpen}
			aria-controls="site-nav"
			onclick={() => (menuOpen = !menuOpen)}
		>
			<span>{menuOpen ? 'Close' : 'Menu'}</span>
			<span class="menu-icon" aria-hidden="true">{menuOpen ? '×' : '＋'}</span>
		</button>
		<div class="header-actions">
			<nav id="site-nav" class:open={menuOpen} aria-label="Main navigation">
				{#each navItems as item (item.href)}
					<a
						class:active={isActive(item.href)}
						href={resolve(item.href)}
						aria-current={isActive(item.href) ? 'page' : undefined}
						onclick={() => (menuOpen = false)}>{item.label}</a
					>
				{/each}
			</nav>
			<AnimatedThemeToggler class="theme-toggle" aria-label="Toggle color theme" />
		</div>
	</div>
</header>

<style>
	.site-header {
		position: sticky;
		top: 0;
		z-index: 20;
		border-bottom: 1px solid var(--line);
		background: color-mix(in srgb, var(--paper) 92%, transparent);
		backdrop-filter: blur(18px);
	}
	.header-actions {
		display: flex;
		align-items: center;
		gap: 24px;
	}

	.theme-toggle {
		display: grid;
		width: 40px;
		height: 40px;
		place-items: center;
		border: 1px solid var(--line);
		border-radius: 50%;
		background: transparent;
		color: var(--ink);
		cursor: pointer;
	}
	.header-inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		min-height: 72px;
		max-width: 1180px;
		margin: 0 auto;
		padding: 0 32px;
	}
	.wordmark {
		display: inline-flex;
		align-items: center;
		gap: 12px;
		color: var(--ink);
		font-family: var(--font-display);
		font-size: 0.88rem;
		font-weight: 700;
		letter-spacing: 0.02em;
		text-decoration: none;
	}
	.wordmark-mark {
		display: grid;
		width: 36px;
		height: 36px;
		place-items: center;
		border-radius: 50%;
		background: var(--coral);
		color: var(--paper);
		font-family: var(--font-mono);
		font-size: 0.68rem;
	}
	nav {
		display: flex;
		align-items: center;
		gap: 28px;
	}
	nav a {
		position: relative;
		padding: 8px 0;
		color: var(--muted);
		font-family: var(--font-mono);
		font-size: 0.68rem;
		letter-spacing: 0.08em;
		text-decoration: none;
		text-transform: uppercase;
	}
	nav a::after {
		position: absolute;
		right: 0;
		bottom: 0;
		left: 0;
		height: 2px;
		background: var(--coral);
		content: '';
		transform: scaleX(0);
		transform-origin: left;
		transition: transform 180ms ease;
	}
	nav a:hover,
	nav a.active {
		color: var(--ink);
	}
	nav a:hover::after,
	nav a.active::after {
		transform: scaleX(1);
	}
	.menu-toggle {
		display: none;
		border: 0;
		background: transparent;
		color: var(--ink);
		font-family: var(--font-mono);
		font-size: 0.68rem;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}
	.menu-icon {
		margin-left: 8px;
		color: var(--coral);
		font-size: 1.25rem;
		vertical-align: middle;
	}
	@media (max-width: 720px) {
		.header-inner {
			min-height: 64px;
			padding: 0 20px;
		}
		.wordmark span:last-child {
			max-width: 150px;
			line-height: 1.1;
		}
		.menu-toggle {
			display: block;
		}
		nav {
			position: absolute;
			top: 64px;
			right: 0;
			left: 0;
			display: none;
			flex-direction: column;
			align-items: stretch;
			gap: 0;
			border-bottom: 1px solid var(--line);
			background: var(--paper);
			padding: 8px 20px 16px;
		}
		nav.open {
			display: flex;
		}
		nav a {
			padding: 14px 0;
		}
	}
</style>
