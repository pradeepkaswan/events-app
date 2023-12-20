import { Button } from '@/components/ui/button'
import { Collection } from 'mongoose'
import Link from 'next/link'

const ProfilePage = () => {
  return (
    <>
      <section className="bg-primary-50 py-5 md:py-10">
        <div className="wrapper flex items-center justify-center sm:justify-between">
          <h3 className="text-center sm:text-left">My Tickets</h3>
          <Button asChild className="hidden sm:flex">
            <Link href="/#events">Explore More Events</Link>
          </Button>
        </div>
      </section>

      <section className="wrapper my-8">{/* <Collection data={} /> */}</section>
    </>
  )
}

export default ProfilePage
