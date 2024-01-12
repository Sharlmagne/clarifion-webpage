import { Icons } from '@/components/ui/Icons'
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const headerItems = [
  {
    icon: <Icons.checkmark />,
    text: '30-DAY SATISFACTION GUARANTEE',
  },
  {
    icon: <Icons.truck />,
    text: 'FREE SHIPPING ON ORDERS OVER $40.00',
  },
  {
    icon: <Icons.heart />,
    text: '50,000+ HAPPY CUSTOMERS',
  },
  {
    icon: <Icons.syncCheckmark />,
    text: '100% MONEY BACK GUARANTEE',
  },
]

function HeaderItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className='flex items-center justify-center'>
      <div className='mr-2'>{icon}</div>
      <div className='whitespace-nowrap'>{text}</div>
    </div>
  )
}

export function HeaderBar() {
  const [currentHeaderItem, setCurrentHeaderItem] = useState(0)

  function nextHeaderItem() {
    setCurrentHeaderItem((prevState) => prevState + 1)
  }

  function prevHeaderItem() {
    setCurrentHeaderItem((prevState) => prevState - 1)
  }

  return (
    <div className='fixed top-0 bg-primaryDark w-full py-2 text-white font-light lg:py-4'>
      <div className='hidden px-8 container mx-auto lg:flex justify-between items-center'>
        {headerItems.map((item, index) => (
          <HeaderItem icon={item.icon} text={item.text} key={index} />
        ))}
      </div>
      <div className='px-4 flex text-sm justify-between items-center sm:px-8 lg:hidden'>
        <button onClick={prevHeaderItem} disabled={currentHeaderItem === 0}>
          <ChevronLeft size={28} />
        </button>
        <HeaderItem
          icon={headerItems[currentHeaderItem].icon}
          text={headerItems[currentHeaderItem].text}
        />
        <button
          onClick={nextHeaderItem}
          disabled={headerItems.length === currentHeaderItem + 1}>
          <ChevronRight size={28} />
        </button>
      </div>
    </div>
  )
}
