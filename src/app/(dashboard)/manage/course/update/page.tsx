import UpdateCoursePage from "@/pages/update-course-page";
import Heading from "@/components/typography/Heading";

export interface UpdateCoursePageRootProps {
  searchParams: {
    slug: string;
  };
}

async function UpdateCoursePageRoot({
  searchParams,
}: UpdateCoursePageRootProps) {
  const { slug } = await searchParams;
  return (
    <div>
      <Heading>Cập nhật khóa học</Heading>
      <UpdateCoursePage slug={slug} />
    </div>
  );
}

export default UpdateCoursePageRoot;
