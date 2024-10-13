import ApartmentList from '@/components/shared/apartment/apartment-list'
import { getLatestApartments } from '@/lib/actions/apartment.actions'
import { APP_DESCRIPTION, APP_NAME } from '@/lib/constants'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: `${APP_NAME} - ${APP_DESCRIPTION}`,
}
export default async function Home() {
  const latestApartments = await getLatestApartments()
  return (
    <div>
      <ApartmentList title="Latest Apartments" data={latestApartments} />
    </div>
  )
}
