<script lang="ts">
	import './layout.css';
	import SiteFooter from '#lib/components/SiteFooter.svelte';
	import SiteHeader from '#lib/components/SiteHeader.svelte';
	import { AnimatedThemeToggler } from "#lib/components/magic/animated-theme-toggler";
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<title>Yan Rabefaniraka · Computer science & imagery</title>
	<meta
		name="description"
		content="The portfolio of Yan Rabefaniraka, a computer science student in Toulouse."
	/>
</svelte:head>

<SiteHeader />
<main id="main-content">{@render children()}</main>
<SiteFooter />
