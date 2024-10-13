import { apartments } from '@/db/schema'
import { InferSelectModel } from 'drizzle-orm'
// APARTMENTS TYPE MODEL EXPORT
export type Apartment = InferSelectModel<typeof apartments>
