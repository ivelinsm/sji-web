import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Products are data entries: structure, imagery, and flags live here;
 * all user-facing strings stay in src/i18n/*.json referenced via `key`
 * (e.g. key "products.aquaviva" → products.aquaviva.name / .desc / .sizes).
 */
const products = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/products' }),
  schema: ({ image }) =>
    z.object({
      key: z.string(),
      category: z.enum(['waters', 'drinks', 'concentrates']),
      image: image(),
      badgeKey: z.string(),
      badgeVariant: z.enum(['primary', 'secondary', 'neutral']).default('secondary'),
      hasFlavors: z.boolean().default(false),
      hasSizes: z.boolean().default(true),
      noteKey: z.string().optional(),
      featured: z.boolean().default(false),
      b2bOnly: z.boolean().default(false),
      order: z.number(),
    }),
});

export const collections = { products };
