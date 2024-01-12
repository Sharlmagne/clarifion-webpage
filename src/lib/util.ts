import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Removes the time from a date.
 * @param date - The date to remove the time from.
 * @param formatAsString - Whether to return the date as a string.
 * @example removeTimeFromDate(new Date('2021-01-01T12:00:00.000Z')) // 2021-01-01
 */
