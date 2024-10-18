import { cn } from '@/lib/utils'
const ApartmentPrice = ({
  value,
  className,
}: {
  value: number
  className?: string
}) => {
  const stringValue = value.toString()
  const [intValue, floatValue] = stringValue.includes('.')
    ? stringValue.split('.')
    : [stringValue, '']
  return (
    <p className={cn('text-2xl', className)}>
      <span className="text-xs align-super">Kshs</span>
      {intValue}
      <span className="text-xs align-super">{floatValue}</span>
      <span className="text-xs">/Night</span>
    </p>
  )
}
export default ApartmentPrice
