import Link from 'next/link'
import { Button } from '../../components/ui/button'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <section className="bg-primary-50 py-5 md:py-10">
        <div className="wrapper grid grid-col-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-4">
            <h1 className="leading-tight">
              Discover the Best Local Events & Things to Do
            </h1>
            <p>
              Find events curated by local organizers or create your own event
              and sell tickets.
            </p>
            <Button size="lg" asChild className="button w-full sm:w-fit">
              <Link href="#events">Find your next event</Link>
            </Button>
          </div>

          <Image
            src="/assets/images/hero.png"
            width={1000}
            height={1000}
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
            alt="hero"
          />
        </div>
      </section>

      <section
        id="events"
        className="wrapper my-8 flex flex-col gap-8 md:gap-12"
      >
        <div>Search events</div>
        <div>Category Filter</div>
      </section>
    </>
  )
}
