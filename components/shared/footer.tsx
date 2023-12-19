import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <p>&#169; 2023, company name. All right reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
