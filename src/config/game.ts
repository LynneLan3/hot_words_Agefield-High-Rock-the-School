export interface GameCategory {
	id: string;
	label: string;
	description: string;
	icon: string;
	order: number;
}

export interface GamePortalQuestion {
	label: string;
	href: string;
}

export interface GamePortalConfig {
	/** Compact question chips on the Hub. Each href should point at a real guide. */
	popularQuestions?: readonly GamePortalQuestion[];
	/** Recently Updated list. Defaults to true when omitted. */
	showRecentlyUpdated?: boolean;
	/** Max items in Recently Updated. Defaults to 3. */
	maxRecent?: number;
	/** Compact About / Game Info on the Hub. Defaults to true when omitted. */
	showAbout?: boolean;
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
	/** Optional Hub portal presentation. GamePortal reads this; do not fork the component per game. */
	portal?: GamePortalConfig;
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
	portal: {
		popularQuestions: [
			{
				label: 'What classes are in Agefield High?',
				href: '/agefield-high-rock-the-school/classes/',
			},
			{
				label: 'Can you skip class in Agefield High?',
				href: '/agefield-high-rock-the-school/classes/',
			},
			{
				label: 'How do you make money in Agefield High?',
				href: '/agefield-high-rock-the-school/how-to-make-money/',
			},
			{
				label: 'Is there a map in Agefield High?',
				href: '/agefield-high-rock-the-school/map-locations/',
			},
			{
				label: 'Does Agefield High support controllers?',
				href: '/agefield-high-rock-the-school/system-requirements/',
			},
			{
				label: 'When does Agefield High release?',
				href: '/agefield-high-rock-the-school/release-date/',
			},
		],
		showRecentlyUpdated: true,
		maxRecent: 3,
		showAbout: false,
	},
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
