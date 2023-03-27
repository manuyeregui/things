import React from 'react'

export default function ButtonBox({ children, theme }) {
  return (
    <div className='grid grid-cols-4 w-full font-nunito '>{children}</div>
  )
}
