import EventForm from '@/components/shared/event-form'
import { auth } from '@clerk/nextjs'

const CreateEvent = () => {
  const { sessionClaims } = auth()

  const userId = sessionClaims?.userId as string

  return (
    <>
      <section className="bg-primary-50 py-5 md:py-10">
        <h3 className="wrapper text-center sm:text-left">Create Event</h3>
      </section>

      <div className="wrapper my-8">
        <EventForm userId={userId} type="Create" />
      </div>
    </>
  )
}

export default CreateEvent
