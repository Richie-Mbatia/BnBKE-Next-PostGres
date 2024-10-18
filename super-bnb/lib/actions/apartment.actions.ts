'use server'
import { desc, eq } from 'drizzle-orm'
import db from '@/db/drizzle'
import { apartments } from '@/db/schema'
export async function getLatestApartments() {
  const data = await db.query.apartments.findMany({
    orderBy: [desc(apartments.createdAt)],
    limit: 4,
  })
  return data
}

export async function getApartmentBySlug(slug: string) {
  return await db.query.apartments.findFirst({
    where: eq(apartments.slug, slug),
  })
}
