import { Icons } from './ui/Icons'

export function Footer() {
  return (
    <div className='px-16 bg-primaryDark h-[88px] text-white w-full font-light'>
      <div className='container mx-auto h-full flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          <p>Copyright (c) 2023</p>
          <div className='bg-white h-6 w-[1px]' />
          <p>Clarifionsupport@clarifion.com</p>
        </div>
        <div className='flex items-center gap-4'>
          <Icons.lock stroke='white' />
          <p>Secure 256-bit SSL encryption.</p>
        </div>
      </div>
    </div>
  )
}
