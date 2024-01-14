import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='text-white-800'>
        <p>Copyright 2023 JS MASTERT PRO | ALL RIGHTS RESERVED</p>

        <div className="flex gap-x-9">
            <Link href='/terms-of-use'>Terms & Conditions</Link>
            <Link href='/privacy-policy'>Privacy Policy</Link>
        </div>
    </footer>
  )
}

export default Footer