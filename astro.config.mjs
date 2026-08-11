// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { game } from './src/config/game.ts';
import { sidebarFromCategories } from './src/config/sidebar.ts';

// https://astro.build/config
export default defineConfig({
	site: game.siteUrl,
	trailingSlash: 'always',
	integrations: [
		starlight({
			title: game.shortName,
			description: game.description,
			lastUpdated: true,
			...(game.logoImage
				? { logo: { src: `./src/assets/${game.logoImage}`, alt: game.name } }
				: {}),
			customCss: ['./src/styles/custom.css'],
			head: [
				{
					tag: 'style',
					content: `:root { --game-accent: ${game.accentColor}; }`,
				},
				{
					tag: 'meta',
					attrs: { name: 'twitter:card', content: 'summary' },
				},
			],
			sidebar: sidebarFromCategories(),
			components: {
				PageTitle: './src/components/overrides/PageTitle.astro',
				Footer: './src/components/overrides/Footer.astro',
				SiteTitle: './src/components/overrides/SiteTitle.astro',
			},
		}),
	],
});
