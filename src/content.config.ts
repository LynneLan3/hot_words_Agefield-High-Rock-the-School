import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import { GUIDE_STATUSES } from './lib/status';

export const collections = {
	docs: defineCollection({
		loader: docsLoader(),
		schema: docsSchema({
			extend: ({ image }) =>
				z.object({
					category: z.string().optional(),
					status: z.enum(GUIDE_STATUSES).optional(),
					featured: z.boolean().default(false),
					cover: image().optional(),
					quickAnswer: z.string().optional(),
					related: z.array(z.string()).optional(),
				}),
		}),
	}),
};
