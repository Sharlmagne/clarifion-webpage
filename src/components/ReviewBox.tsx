import profile from '../assets/images/profile.png'
import starsSmall from '../assets/images/stars-small-2.png'
import { BadgeCheck } from 'lucide-react'

export function ReviewBox() {
  return (
    <div className='flex flex-col gap-4 bg-white rounded-md p-6'>
      <div className='flex gap-3 items-center'>
        <img src={profile} alt='profile pic' />
        <div className='flex flex-col gap-2'>
          <img className='h-3 w-20' src={starsSmall} alt='ratings' />
          <div className='flex gap-2 items-center'>
            <span className='font-bold text-[#333]'>Ken T.</span>
            <BadgeCheck className='fill-[#5BB59A] stroke-white w-6 h-6' />
            <p className='text-[#5BB59A]'>Verified Customer</p>
          </div>
        </div>
      </div>
      <p className='leading-[1.5]'>
        “As soon as the Clarifions arrived I put one in my bedroom. This was
        late in the afternoon. When I went to the bedroom in the evening it
        smelled clean. When I went to bed I felt I could breathe better.
        Wonderful.”
      </p>
    </div>
  )
}
