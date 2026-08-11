import type { ImageMetadata } from 'astro';

const assets = import.meta.glob<{ default: ImageMetadata }>('../assets/*.{svg,png,jpg,jpeg,webp,avif}', {
	eager: true,
});

export function resolveGameAsset(filename?: string) {
	if (!filename) return undefined;
	return assets[`../assets/${filename}`]?.default;
}
