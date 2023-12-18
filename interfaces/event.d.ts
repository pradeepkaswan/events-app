/**
 * Event interface
 */
declare interface EventInterface {
  _id: string
  title: string
  description?: string
  venue?: string
  imageUrl: string
  startDate: Date
  endDate: Date
  price?: string
  isFree: boolean
  url?: string
  category: { _id: string; name: string }
  organizer: { _id: string; firstName: string; lastName: string }
}
