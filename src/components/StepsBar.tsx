import { Check } from 'lucide-react'
import { cn } from '../lib/util.ts'

type StepIconProps = {
  step?: number
  checked?: boolean
  outline?: boolean
}
function StepIcon({ step, checked, outline }: StepIconProps) {
  return (
    <div
      className={cn(
        'w-10 h-10 rounded-full flex items-center justify-center text-white',
        step && !outline && 'bg-primary',
        checked && !outline && 'bg-[#85BF55]',
        outline && step && 'border-2 border-primary text-primary',
      )}>
      {checked && <Check className='w-6 h-6' />}
      {!checked && <p className='text-xl'>{step}</p>}
    </div>
  )
}

export function StepsBar() {
  return (
    <div className='flex justify-between mt-16 mb-10'>
      <div className='flex items-center gap-4'>
        <StepIcon checked />
        <p className='text-xl'>Step 1: Cart Review</p>
      </div>
      <div className='flex items-center gap-4'>
        <StepIcon checked />
        <p className='text-xl'>Step 2: Checkout</p>
      </div>
      <div className='flex items-center gap-4'>
        <StepIcon step={3} />
        <p className='text-xl font-bold'>Step 3: Special Offer</p>
      </div>
      <div className='flex items-center gap-4'>
        <StepIcon step={4} outline />
        <p className='text-xl'>Step 4: Confirmation</p>
      </div>
    </div>
  )
}
