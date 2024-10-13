import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Star } from 'lucide-react'
import { Apartment } from '@/types'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ApartmentCard = ({ apartment }: { apartment: Apartment }) => {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="p-0 items-center">
        <Link href={`/apartment/${apartment.slug}`}>
          <Image
            alt={apartment.name}
            className="aspect-square object-cover rounded"
            height={300}
            src={apartment.images![0]}
            width={300}
          />
        </Link>
      </CardHeader>
      <CardContent className="p-4 grid gap-4">
        <div className="grid gap-1.5 text-sm leading-4">
          <p className="text-sm leading-3">Host: {apartment.hostName}</p>
        </div>
        <div className="grid gap-1.5 text-sm leading-4">
          <Link href={`/apartment/${apartment.slug}`}>
            <h2 className="text-sm font-medium">{apartment.name}</h2>
          </Link>
        </div>
        <div className="flex-between gap-4">
          <p>
            {apartment.rating}
            <Star />
          </p>
          {apartment.stock > 0 ? (
            <p className="font-bold">Ksh{apartment.price}</p>
          ) : (
            <p className="text-destructive">Sold Out</p>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
export default ApartmentCard
