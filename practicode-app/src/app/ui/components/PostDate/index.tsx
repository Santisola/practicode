import React from 'react'
import CalendarIcon from './CalendarIcon'

export const PostDate = ({ date, ...rest }: any) => {
  return (
    <span className='flex items-center gap-1'>
        <CalendarIcon width={16} height={16} />
        <span {...rest}>{date.split('T')[0]}</span>
    </span>
  )
}
