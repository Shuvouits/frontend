"use client"
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

function notFound() {
  return (
    <div className='flex items-center justify-center h-screen flex-col'>
        <img src='/404.svg' width={500} height={500} alt='404'  className='object-contain'/>
        <Link href={'/'}>
        <Button>Back To Home</Button>
        </Link>

    </div>
  )
}

export default notFound