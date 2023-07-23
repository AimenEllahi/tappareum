import Image from 'next/image'
import { Inter } from 'next/font/google'
import dynamic from 'next/dynamic'

const DynamicScene = dynamic(() => import('@/components/scene'),
  {}
);

const DynamicNavbar = dynamic(() => import('@/components/navbar'),
  {}
);

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <div>
        {/* <DynamicNavbar /> */}
        <DynamicScene />
      </div>
      
  )
}