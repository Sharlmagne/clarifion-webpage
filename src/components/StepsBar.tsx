import { Check } from 'lucide-react'
import { cn } from '@/lib/util'
import React from 'react'

type StepIconProps = {
  step?: number
  checked?: boolean
  outline?: boolean
}

type StepItemProps = {
  icon: React.ReactNode
  step: number
  children: React.ReactNode
  highlighted?: boolean
}

function StepIcon({ step, checked, outline }: StepIconProps) {
  return (
    <div
      className={cn(
        'w-8 h-8 rounded-full flex items-center justify-center text-white md:w-10 md:h-10 ',
        step && !outline && 'bg-primary',
        checked && !outline && 'bg-[#85BF55]',
        outline && step && 'border-2 border-primary text-primary',
      )}>
      {checked && <Check className='w-6 h-6' />}
      {!checked && <p className='text-xl'>{step}</p>}
    </div>
  )
}

function StepItem({ icon, step, children, highlighted }: StepItemProps) {
  return (
    <div className='flex flex-col text-center items-center gap-2 lg:flex-row lg:gap-4'>
      {icon}
      <p
        className={cn(
          'text-sm sm:text-lg whitespace-nowrap flex flex-col lg:text-xl lg:flex-row gap-1',
          highlighted && 'font-bold',
        )}>
        <span className='hidden lg:block'>{`Step ${step}:`}</span>
        {children}
      </p>
    </div>
  )
}

export function StepsBar() {
  return (
    <div className='flex justify-between my-8 lg:mt-16 lg:mb-10'>
      <StepItem icon={<StepIcon checked />} step={1}>
        Cart Review
      </StepItem>
      <StepItem icon={<StepIcon checked />} step={2}>
        Checkout
      </StepItem>
      <StepItem icon={<StepIcon step={3} />} step={3} highlighted>
        Special Offer
      </StepItem>
      <StepItem icon={<StepIcon step={4} outline />} step={4}>
        Confirmation
      </StepItem>
    </div>
  )
}
