/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import ApartmentCard from './apartment-card'
import { Apartment } from '@/types'
const ApartmentList = ({
  title,
  data,
}: {
  title: string
  data: Apartment[]
}) => {
  return (
    <>
      <h2 className="h2-bold">{title}</h2>
      {data.length > 0 ? (
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {data.map((apartment: Apartment) => (
              <ApartmentCard key={apartment.slug} apartment={apartment} />
            ))}
          </div>
        </div>
      ) : (
        <div>
          <p>No Apartment found</p>
        </div>
      )}
    </>
  )
}
export default ApartmentList
