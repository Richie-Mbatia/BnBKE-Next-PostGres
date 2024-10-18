import { notFound } from 'next/navigation'
import ApartmentImages from '@/components/shared/apartment/apartment-images'
import ApartmentPrice from '@/components/shared/apartment/apartment-price'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { getApartmentBySlug } from '@/lib/actions/apartment.actions'
import { APP_NAME } from '@/lib/constants'
import { Button } from '@/components/ui/button'

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}) {
  const apartment = await getApartmentBySlug(params.slug)
  if (!apartment) {
    return { title: 'Apartment not found' }
  }
  return {
    title: `${apartment.name} - ${APP_NAME}`,
    description: apartment.description,
  }
}
const ApartmentDetails = async ({
  params: { slug },
}: {
  params: { slug: string }
  searchParams: { page: string; color: string; size: string }
}) => {
  const apartment = await getApartmentBySlug(slug)
  if (!apartment) notFound()
  return (
    <>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-5">
          <div className="col-span-2">
            <ApartmentImages images={apartment.images!} />
          </div>
          <div className="col-span-2 flex flex-col w-full  gap-8 p-5">
            <div className="flex flex-col gap-6">
              <p className="p-medium-16 rounded-full bg-grey-500/10   text-grey-500">
                {apartment.hostName} {apartment.category}
              </p>
              <h1 className="h3-bold">{apartment.name}</h1>
              <p>
                {apartment.rating} of {apartment.numReviews} reviews
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="flex gap-3">
                  <ApartmentPrice
                    value={Number(apartment.price)}
                    className="p-bold-20 rounded-full bg-green-500/10 px-5 py-2 text-green-700"
                  />
                </div>
              </div>
            </div>
            <div>
              <p>Description:</p>
              <p>{apartment.description}</p>
            </div>
          </div>
          <div>
            <Card>
              <CardContent className="p-4">
                <div className="mb-2 flex justify-between">
                  <div>Price</div>
                  <div>
                    <ApartmentPrice value={Number(apartment.price)} />
                  </div>
                </div>
                <div className="mb-2 flex justify-between">
                  <div>Status</div>
                  {apartment.stock > 0 ? (
                    <Badge variant="outline">Available</Badge>
                  ) : (
                    <Badge variant="destructive">Sold Out</Badge>
                  )}
                </div>
                {apartment.stock !== 0 && (
                  <div className=" flex-center">
                    <Button className="w-full">Book Space</Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}
export default ApartmentDetails
