import { IconPlay } from "@/components/icons";
import Image from "next/image";
import React from "react";

import { getCourseBySlug } from "@/lib/actions/course.actions";
import { Button } from "@/components/ui/button";

function BoxInfo({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-lg p-5">
      <h4 className="text-sm text-slate-400 font-normal">{title}</h4>
      <h3 className="font-bold">{children}</h3>
    </div>
  );
}

function BoxSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <h2 className="font-bold text-xl mb-5">{title}</h2>
      <div className="mb-10">{children}</div>
    </>
  );
}

const page = async ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  const data = await getCourseBySlug({
    slug: params.slug,
  });
  if (!data) return null;

  const videoId = data.intro_url.split("v=")[1];
  return (
    <div className="grid lg:grid-cols-[2fr_1fr] gap-10 min-h-screen">
      <div>
        <div className="relative aspect-video mb-5">
          {typeof data.intro_url === "string" ? (
            <>
              <iframe
                width="895"
                height="503"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="Phao - 2 Phut Hon (KAIZ Remix) | TikTok Vietnamese Music 2020"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                className="w-full b-full object-fill"
              ></iframe>
            </>
          ) : (
            <Image
              src="https://cdn.pixabay.com/photo/2019/10/11/00/08/sunset-4540772_1280.jpg"
              alt=""
              fill
              className="w-full h-full object-cover rounded-lg"
            />
          )}
        </div>
        <h1 className="font-bold text-3xl mb-5">{data.title}</h1>

        <BoxSection title="Mô tả">
          <div className="loading-normal mb-10">{data.description}</div>
        </BoxSection>

        <BoxSection title="Thông tin">
          <div className="grid grid-cols-4 gap-5 mb-10">
            <BoxInfo title="Bài học">100</BoxInfo>
            <BoxInfo title="Lượt xem">10.000</BoxInfo>
            <BoxInfo title="Trình độ">Trung bình</BoxInfo>
            <BoxInfo title="Thời gian">100h45ph</BoxInfo>
          </div>
        </BoxSection>

        <BoxSection title="Yêu cầu">
          <div className="loading-normal mb-10">
            {data.info.requirements.map((requirement, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="text-primary">-</span>
                <span>{requirement}</span>
              </div>
            ))}
          </div>
        </BoxSection>

        <BoxSection title="Lợi ích">
          <div className="loading-normal mb-10">
            {data.info.benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="text-primary">-</span>
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </BoxSection>

        <BoxSection title="Q.A">
          <div className="loading-normal mb-10">
            {data.info.qa.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="text-primary">-</span>
                <span>{item.question}</span>
                <span>{item.answer}</span>
              </div>
            ))}
          </div>
        </BoxSection>
      </div>
      <div>
        <div className="bg-white p-5 rounded-lg">
          <div className="flex items-center gap-2 mb-3">
            <strong className="text-primary text-xl font-bold">
              {data.price}
            </strong>
            <span className="text-slate-400 line-through text-sm">
              {data.sale_price}
            </span>
            <span className="ml-auto inline-block px-3 py-1 rounded-lg bg-primary text-primary bg-opacity-10 font-semibold text-sm">
              {Math.floor((data.price / data.sale_price) * 100)}
            </span>
          </div>
          <h3 className="font-bold mb-3 text-sm">Khoá học gồm có:</h3>
          <ul className="mb-5 flex flex-col gap-2 text-sm text-slate-500">
            <li className="flex items-center gap-2">
              <IconPlay className="size-4" />
              <span>30h học</span>
            </li>
            <li className="flex items-center gap-2">
              <IconPlay className="size-4" />
              <span>Video full HD</span>
            </li>
            <li className="flex items-center gap-2">
              <IconPlay className="size-4" />
              <span>Có nhóm hỗ trợ</span>
            </li>
            <li className="flex items-center gap-2">
              <IconPlay className="size-4" />
              <span>Tài liệu kèm theo</span>
            </li>
          </ul>
          <Button className="bg-primary w-full mb-5">Mua khoá học</Button>
        </div>
      </div>
    </div>
  );
};

export default page;
