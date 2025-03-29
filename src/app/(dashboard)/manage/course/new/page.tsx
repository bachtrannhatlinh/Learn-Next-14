import CourseAddNew from '@/components/course/CourseAddNew';
import Heading from '@/components/typography/Heading';
import { getUserInfo } from '@/lib/actions/user.actions';
import { auth } from '@clerk/nextjs/server';
import React from 'react';

const page = async() => {
  const { userId } = await auth();
  if (!userId) return null;
  const mongoUser = await getUserInfo({ userId });
  if (!mongoUser) return null;

  // Convert mongoUser to a plain object
  const plainUser = JSON.parse(JSON.stringify(mongoUser));

  return (
    <div>
      <Heading>Tạo khoá học mới</Heading>
      <CourseAddNew user={plainUser}></CourseAddNew>
    </div>
  );
};

export default page;