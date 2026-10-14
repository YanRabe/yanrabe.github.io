<script lang="ts" module>
	import type { Snippet } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";

	export interface FloatingProps extends HTMLAttributes<HTMLDivElement> {
		children?: Snippet;
		sensitivity?: number;
		easingFactor?: number;
		class?: string;
	}
</script>

<script lang="ts">
	import { onMount } from "svelte";
	import { useMousePosition } from "#lib/hooks/use-mouse-position.svelte";
	import { cn } from "#lib/utils";

	import { setFloatingContext } from "./floating-context.svelte";

	type FloatingElementState = {
		element: HTMLDivElement;
		depth: number;
		currentPosition: { x: number; y: number };
	};

	let {
		children,
		sensitivity = 1,
		easingFactor = 0.05,
		class: className,
		...props
	}: FloatingProps = $props();

	let container = $state<HTMLDivElement | null>(null);
	const elements = new Map<string, FloatingElementState>();
	const mousePosition = useMousePosition(() => container);
	let reducedMotion = $state(false);

	setFloatingContext({
		registerElement(id, element, depth) {
			elements.set(id, {
				element,
				depth,
				currentPosition: { x: 0, y: 0 },
			});
		},
		unregisterElement(id) {
			elements.delete(id);
		},
	});

	onMount(() => {
		const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
		const updateMotionPreference = () => (reducedMotion = motionPreference.matches);
		updateMotionPreference();
		motionPreference.addEventListener("change", updateMotionPreference);

		let frame = 0;
		const animate = () => {
			elements.forEach((state) => {
				if (reducedMotion) {
					state.currentPosition.x = 0;
					state.currentPosition.y = 0;
					state.element.style.transform = "translate3d(0, 0, 0)";
					return;
				}

				const strength = (state.depth * sensitivity) / 20;
				const targetX = mousePosition.x * strength;
				const targetY = mousePosition.y * strength;
				state.currentPosition.x += (targetX - state.currentPosition.x) * easingFactor;
				state.currentPosition.y += (targetY - state.currentPosition.y) * easingFactor;
				state.element.style.transform = `translate3d(${state.currentPosition.x}px, ${state.currentPosition.y}px, 0)`;
			});
			frame = requestAnimationFrame(animate);
		};

		frame = requestAnimationFrame(animate);
		return () => {
			cancelAnimationFrame(frame);
			motionPreference.removeEventListener("change", updateMotionPreference);
		};
	});
</script>

<div
	bind:this={container}
	class={cn("absolute top-0 left-0 h-full w-full", className)}
	{...props}
>
	{@render children?.()}
</div>
