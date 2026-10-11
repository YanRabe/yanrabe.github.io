<script lang="ts">
	import { profile, socialLinks } from '#lib/data.js';
</script>

<footer class="site-footer">
	<div class="footer-inner">
		<div>
			<p class="footer-kicker">
				Please feel free to contact me.
			</p>
			<a class="footer-email" href="mailto:yan.rabefaniraka@etu.inp-n7.fr"
				>yan.rabefaniraka@etu.inp-n7.fr</a
			>
		</div>
		<div class="footer-meta">
			<div class="socials">
				{#each socialLinks as link (link.href)}
					<a
						{...{ href: link.href }}
						target={link.external ? '_blank' : undefined}
						rel={link.external ? 'noreferrer' : undefined}>{link.label}</a
					>
				{/each}
			</div>
			<p>
				© Copyright 2025 {profile.name}. Hosted by GitHub
				Pages.
			</p>
		</div>
	</div>
</footer>

<style>
	.site-footer {
		border-top: 1px solid var(--line);
		padding: 46px 0 56px;
	}
	.footer-inner {
		display: flex;
		align-items: end;
		justify-content: space-between;
		max-width: 1180px;
		margin: 0 auto;
		padding: 0 32px;
	}
	.footer-kicker {
		margin: 0 0 8px;
		color: var(--coral);
		font-family: var(--font-mono);
		font-size: 0.67rem;
		letter-spacing: 0.1em;
		text-transform: uppercase;
	}
	.footer-email {
		color: var(--ink);
		font-family: var(--font-display);
		font-size: clamp(1.15rem, 2vw, 1.7rem);
		text-decoration: none;
	}
	.footer-meta {
		color: var(--muted);
		font-family: var(--font-mono);
		font-size: 0.64rem;
		text-align: right;
		text-transform: uppercase;
	}
	.footer-meta p {
		margin: 20px 0 0;
	}
	.socials {
		display: flex;
		flex-wrap: wrap;
		justify-content: end;
		gap: 15px;
	}
	.socials a {
		color: var(--muted);
		text-decoration: none;
	}
	.socials a:hover {
		color: var(--coral);
	}
	@media (max-width: 620px) {
		.site-footer {
			margin-top: 72px;
		}
		.footer-inner {
			display: block;
			padding: 0 20px;
		}
		.footer-meta {
			margin-top: 28px;
			text-align: left;
		}
		.socials {
			justify-content: start;
		}
	}
</style>
