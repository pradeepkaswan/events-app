import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { SignedIn, SignedOut } from '@clerk/nextjs'
import { Button } from '../ui/button'
import { UserButton } from '@clerk/nextjs'
import NavItems from './nav-items'
import MobileNav from './mobile-nav'

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <Link href="/" className="w-36">
          {/* <Image
            src="/assets/images/logo.svg"
            width={128}
            height={38}
            alt="logo"
          ></Image> */}
          <p className=" underline underline-offset-2">Logo</p>
        </Link>

        <SignedIn>
          <nav className="md:flex-between hidden w-full max-w-xs">
            <NavItems />
          </nav>
        </SignedIn>

        <div className="flex w-32 justify-end gap-3">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            <MobileNav />
          </SignedIn>
          <SignedOut>
            <Button asChild className="rounded-full" size="lg">
              <Link href="/sign-in">Sign in</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  )
}

export default Header
