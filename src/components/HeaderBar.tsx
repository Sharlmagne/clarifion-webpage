import { Icons } from './ui/Icons'

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

export function HeaderBar() {
  return (
    <div className='bg-primaryDark w-full h-[50px] text-white font-light'>
      <div className='container mx-auto h-full flex justify-between items-center'>
        {headerItems.map((item, index) => (
          <div key={index} className='flex items-center justify-center'>
            <div className='mr-2'>{item.icon}</div>
            <div className='whitespace-nowrap'>{item.text}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
