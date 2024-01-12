import clarifion from '@/assets/images/clarifion-logo.png'
import mcafeeMed from '@/assets/images/mcafee-med.png'
import nortonMed from '@/assets/images/norton-med.png'

export function Header() {
  return (
    <div className='mt-10 w-full mx-auto bg-white flex justify-between py-[30px] px-4 sm:px-8 lg:mt-14 lg:container '>
      <div>
        <img src={clarifion} alt='Logo' />
      </div>
      <div className='flex gap-8'>
        <img src={mcafeeMed} alt='Logo' />
        <img src={nortonMed} alt='Logo' />
      </div>
    </div>
  )
}
