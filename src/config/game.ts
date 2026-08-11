export interface GameCategory {
	id: string;
	label: string;
	description: string;
	icon: string;
	order: number;
}

export interface GameConfig {
	name: string;
	shortName: string;
	description: string;
	tagline: string;
	siteUrl: string;
	/** Public path of this game’s main Hub. Not derived from category or source directory. */
	hubPath: string;
	/** Visible GamePortal H1. Falls back to `${name} Guide & Wiki` when omitted. */
	hubTitle?: string;
	releaseDate: string;
	developer: string;
	publisher: string;
	platforms: readonly string[];
	accentColor: string;
	heroImage?: string;
	logoImage?: string;
	categories: readonly GameCategory[];
}

/**
 * Per-game config. Copy this starter and change this file to launch a new wiki.
 * Category `id` is the information-architecture key and should match a source
 * folder under `src/content/docs/` so sidebar autogenerate can find files.
 * Public URLs are set per page with frontmatter `slug`, not derived from category.
 * `heroImage` / `logoImage` are filenames in `src/assets/`.
 */
export const game: GameConfig = {
	name: 'Agefield High: Rock the School',
	shortName: 'Agefield High',
	description:
		'Agefield High: Rock the School player guide hub covering classes, how to make money, map locations, gameplay, characters, release date and PC system requirements.',
	tagline:
		'An open-world, coming-of-age teen comedy adventure from Refugium Games. The PC version launches on Steam on August 12, 2026.',
	siteUrl: 'https://agefield-high-rock-the-school.vercel.app',
	hubPath: '/agefield-high-rock-the-school/',
	hubTitle:
		'Agefield High: Rock the School Guide — Classes, Money, Map & Gameplay',
	releaseDate: 'August 12, 2026 (PC)',
	developer: 'Refugium Games',
	publisher: 'Refugium Games (PC) / Perp Games (console versions)',
	platforms: ['PC (Steam)', 'PlayStation 5', 'Xbox Series X|S'],
	accentColor: '#a4262c',
	categories: [
		{
			id: 'school-life',
			label: 'School Life',
			description: 'Classes, attendance, grades, and the weekday school system.',
			icon: 'laptop',
			order: 1,
		},
		{
			id: 'world',
			label: 'World & Activities',
			description: 'Money, map locations, and how the open world plays.',
			icon: 'puzzle',
			order: 2,
		},
		{
			id: 'story',
			label: 'Story & People',
			description: 'Confirmed characters from official materials.',
			icon: 'open-book',
			order: 3,
		},
		{
			id: 'game-info',
			label: 'Game Info',
			description: 'Release date, platforms, and PC system requirements.',
			icon: 'information',
			order: 4,
		},
	],
};
