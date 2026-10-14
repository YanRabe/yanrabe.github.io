<script lang="ts" module>
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import type { Activity } from './contribution-graph-context.svelte';

	export type ContributionGraphCalendarProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
		hideMonthLabels?: boolean;
		children: Snippet<[{ activity: Activity; dayIndex: number; weekIndex: number }]>;
		ref?: HTMLDivElement | null;
	};
</script>

<script lang="ts">
	import { getYear, parseISO } from 'date-fns';
	import { cn } from '#lib/utils';
	import { useContributionGraph } from './contribution-graph-context.svelte';
	import { getMonthLabels } from './contribution-graph-utils';

	let {
		ref = $bindable(null),
		title = 'Contribution Graph',
		hideMonthLabels = false,
		children,
		class: className,
		...restProps
	}: ContributionGraphCalendarProps = $props();

	let visibleYear = $state<number | null>(null);

	const context = useContributionGraph();
	const monthLabels = $derived(getMonthLabels(context.weeks, context.labels.months));

	function updateVisibleYear() {
		if (!ref) return;

		const weekWidth = context.blockSize + context.blockMargin;
		const centerWeek = Math.min(
			context.weeks.length - 1,
			Math.floor((ref.scrollLeft + ref.clientWidth / 2) / weekWidth)
		);
		const activity = context.weeks[centerWeek]?.find((activity) => activity !== undefined);

		visibleYear = activity ? getYear(parseISO(activity.date)) : null;
	}

	$effect(() => {
		if (ref) updateVisibleYear();
	});
</script>

<div class="relative">
	{#if visibleYear !== null}
		<span
			class="year-indicator"
		>
			{visibleYear}
		</span>
	{/if}

	<div
		bind:this={ref}
		onscroll={updateVisibleYear}
		data-slot="contribution-graph-calendar"
		class={cn('no-scrollbar max-w-full scroll-fade-x overflow-x-auto overflow-y-hidden', className)}
		{...restProps}
	>
		<svg
			class="block overflow-visible"
			height={context.height}
			viewBox={`0 0 ${context.width} ${context.height}`}
			width={context.width}
		>
			<title>{title}</title>

			{#if !hideMonthLabels}
				<g data-slot="month-labels" class="selection:fill-selection-foreground fill-current">
					{#each monthLabels as { label, weekIndex } (weekIndex)}
						<text
							dominant-baseline="hanging"
							x={(context.blockSize + context.blockMargin) * weekIndex}
						>
							{label}
						</text>
					{/each}
				</g>
			{/if}

			{#each context.weeks as week, weekIndex}
				{#each week as activity, dayIndex}
					{#if activity}
						{@render children({ activity, dayIndex, weekIndex })}
					{/if}
				{/each}
			{/each}
		</svg>
	</div>
</div>

<style>
	.year-indicator {
		background: var(--ink);
		color: var(--paper);
		position: absolute;
		z-index: 1;
		opacity: 89%;
		top: 10px;
		left: 0px;
		pointer-events: none;
		font-size: 1rem;
	}
</style>
