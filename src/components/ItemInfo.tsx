import itemPreviewSmall from '../assets/images/item-preview-small.png'
import itemPreviewLarge from '../assets/images/item-preview-large.png'
import stars from '../assets/images/stars.png'
import paymentOptions from '../assets/images/payment-options.png'
import guarantee from '../assets/images/guarantee.png'
import { ArrowRight, Check } from 'lucide-react'
import { Icons } from './ui/Icons.tsx'

export function ItemInfo() {
  return (
    <div className='flex flex-col gap-6 lg:gap-8'>
      <p className='leading-[1.4] text-[24px] text-black text-center sm:text-[32px] lg:text-start'>
        <span className='text-primary'>ONE TIME ONLY</span> Special Price For 6
        Extra Clarifion For Only
        <span className='text-primary'>$14</span> each ($84.00 total!)
      </p>
      <img
        className='object-cover lg:hidden'
        src={itemPreviewLarge}
        alt='Item Preview'
      />
      <div className='flex gap-6'>
        <div className='bg-primary w-[80px] h-[80px] min-w-[80px] min-h-[80px] md:min-w-[134px] md:min-h-[134px] md:w-[134px] md:h-[134px] flex justify-center items-center rounded-md'>
          <img src={itemPreviewSmall} alt='item preview small' />
        </div>
        <div className='flex flex-col justify-between w-full'>
          <div className='flex justify-between items-center'>
            <h3>Clarifion Air Ionizer</h3>
            <div className='flex items-center gap-2'>
              <p className='line-through'>$180</p>
              <span className='text-primary text-[22px] font-semibold'>
                $84
              </span>
            </div>
          </div>
          <div>
            <img src={stars} alt='ratings' />
          </div>
          <div className='flex items-center gap-2'>
            <input type='radio' />
            12 left in Stock
          </div>
          <p className='hidden lg:block'>
            Simply plug a Clarifion into any standard outlet and replace bulky,
            expensive air purifiers with a simple.
          </p>
        </div>
      </div>
      <p className='lg:hidden text-center'>
        Simply plug a Clarifion into any standard outlet and replace bulky,
        expensive air purifiers with a simple.
      </p>
      <div className='flex flex-col gap-4 text-sm leading-[1.6] md:text-md'>
        <div className='flex gap-3 items-center'>
          <Check className='w-6 h-6 stroke-primary' />
          <p>
            Negative Ion Technology may{' '}
            <span className='font-bold'>help with allergens</span>
          </p>
        </div>
        <div className='flex gap-3 items-center'>
          <Check className='w-6 h-6  stroke-primary' />
          <p>
            Designed for <span className='font-bold'>air rejuvenation</span>
          </p>
        </div>
        <div className='flex gap-3 items-center'>
          <Check className='w-6 h-6 stroke-primary' />
          <p>
            <span className='font-bold'>Perfect for every room</span> in all
            types of places
          </p>
        </div>
      </div>
      <div className='flex items-center gap-4 py-3 px-4 rounded-lg bg-primaryLight'>
        <div className='w-8 h-8 min-h-8 min-w-8 bg-primary flex justify-center items-center text-white rounded-full'>
          %
        </div>
        <p>
          Save <span className='text-primary'>53%</span> and get{' '}
          <span className='text-primary'>6 extra Clarifision</span> for only{' '}
          <span className='text-primary'>$14 Each.</span>
        </p>
      </div>
      <div className='flex flex-col items-center gap-3'>
        <button className='py-4 px-16 w-full bg-accent flex items-center justify-center gap-4 text-white text-sm rounded-full whitespace-nowrap md:text-md'>
          <span>YES - CLAIM MY DISCOUNT</span>
          <ArrowRight className='w-6 h-6' />
        </button>
        <div className='w-full flex flex-wrap py-2 px-4 items-center justify-center gap-4 text-[12px] border border-gray-300 rounded-md whitespace-nowrap lg:flex-nowrap'>
          <p>Free Shipping</p>
          <div className='h-6 w-[1px] bg-gray-300' />
          <div className='flex items-center gap-4'>
            <Icons.lock
              height={'12px'}
              width={'12px'}
              stroke='hsl(0, 0%, 60%)'
            />
            <p>Secure 256-bit SSL encryption.</p>
          </div>
          <div className='hidden h-6 w-[1px] bg-gray-300 lg:block' />
          <div className='h-[1px] w-full bg-gray-300 lg:hidden' />
          <div>
            <img src={paymentOptions} alt='Payment Options' />
          </div>
        </div>
        <a href='/' className='text-red-500 underline mt-2 text-[18px]'>
          NO THANKS, I DON'T WANT THIS.
        </a>
      </div>
      <div className='flex gap-4 items-center'>
        <img src={guarantee} alt='guarantee' />
        <p className='text-sm md:text-md'>
          If you are not completely thrilled with your Clarifion - We have a{' '}
          <span className='font-bold'>30 day satisfaction guarantee.</span>{' '}
          Please refer to our return policy at the bottom of the page for more
          details. Happy Shopping!
        </p>
      </div>
    </div>
  )
}
