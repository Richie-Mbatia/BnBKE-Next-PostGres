'use server'
import { desc } from 'drizzle-orm'
import db from '@/db/drizzle'
import { apartments } from '@/db/schema'
export async function getLatestApartments() {
  const data = await db.query.apartments.findMany({
    orderBy: [desc(apartments.createdAt)],
    limit: 4,
  })
  return data
}
