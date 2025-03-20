import CourseGrid from "@/app/components/common/CourseGrid";
import CourseItem from "@/app/components/course/CourseItem";
import Heading from "@/app/components/typography/Heading";
import React from "react";

const page = () => {
  return (
    <>
      <Heading>Khu vực học tập</Heading>
      <CourseGrid>
        <CourseItem />
        <CourseItem />
        <CourseItem />
      </CourseGrid>
    </>
  );
};

export default page;
