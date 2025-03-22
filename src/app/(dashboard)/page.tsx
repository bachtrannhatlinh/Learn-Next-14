import React from 'react'
import CourseItem from '@/components/course/CourseItem'
import Heading from '@/components/typography/Heading'
import { createUser } from '@/lib/actions/user.actions'

const page = async() => {
  const user = await createUser({
    clerkId: '123',
    username: 'john_doe1',
    email_address: 'sieutromkid13251@gmail.com',
    name: 'John Doe',
  })

  return (
    <div className='p-3'>
      <Heading>Khám phá</Heading>
      <div className='grid grid-cols-3 gap-8 mt-8'>
        <CourseItem />
        <CourseItem />
        <CourseItem />
      </div>
    </div>
  )
}

export default page
