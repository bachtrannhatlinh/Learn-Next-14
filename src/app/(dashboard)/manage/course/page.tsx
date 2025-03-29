import UpdateCoursePage from '@/pages/update-course-page';
import Heading  from '@/components/typography/Heading';

export interface UpdateCoursePageRootProps {
  searchParams: {
    slug: string;
  };
}

function UpdateCoursePageRoot({ searchParams }: UpdateCoursePageRootProps) {
  return (
    <>
      <Heading>Cập nhật khóa học</Heading>
      <UpdateCoursePage slug={searchParams.slug} />
    </>
  );
}

export default UpdateCoursePageRoot;
