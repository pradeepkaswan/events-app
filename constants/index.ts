export const headerLinks = [
  { title: 'Home', route: '/' },
  { title: 'Create an event', route: '/events/create' },
  { title: 'Profile', route: '/profile' },
]

export const eventDefaultValues = {
  title: '',
  description: '',
  venue: '',
  imageUrl: '',
  categoryId: '',
  startDate: new Date(),
  endDate: new Date(),
}
