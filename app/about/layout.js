import React from 'react'
import Link from 'next/link'

// all the page.js files will go through this `layout.js` 
// (in children variable) file


export const metadata = {
  title: "About Us",
  description: "about us page",
};

function AboutLayout({ children }) {
  return (
    <div>
       <nav className='mt-5 mb-5'>
          <ul className="flex gap-5">
             <li><Link href="/about/mission">Mission</Link></li>
             <li><Link href="/about/vision">Vision</Link></li>
           </ul>
       </nav>
       { children }
    </div>
  )
}

export default AboutLayout
