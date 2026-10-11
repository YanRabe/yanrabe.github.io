<script lang="ts">
	import type { ImageItem } from '#lib/data.js';
	let { images }: { images: ImageItem[] } = $props();
</script>

{#if images.length}
	<div class:single={images.length === 1} class="media-gallery">
		{#each images as image (image.src)}
			<figure><img src={image.src} alt={image.alt} loading="lazy" /></figure>
		{/each}
	</div>
{/if}

<style>
	.media-gallery {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 12px;
		margin-top: 26px;
	}
	.media-gallery.single {
		grid-template-columns: minmax(0, 1fr);
		max-width: 620px;
	}
	figure {
		overflow: hidden;
		aspect-ratio: 4 / 3;
		margin: 0;
		background: var(--mist);
	}
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 500ms cubic-bezier(0.2, 0.8, 0.2, 1);
	}
	figure:hover img {
		transform: scale(1.04);
	}
	@media (max-width: 620px) {
		.media-gallery {
			grid-template-columns: 1fr 1fr;
		}
		.media-gallery.single {
			grid-template-columns: 1fr;
		}
	}
</style>
