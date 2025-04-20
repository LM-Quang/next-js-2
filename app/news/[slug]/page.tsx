"use client";

import { DUMMY_NEWS } from "@/data/dummyNews";
import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import React from "react";

const NewsDetailPage = () => {
   const params = useParams<{ slug: string }>();
   const newsSlug = params.slug;
   const newsItem = DUMMY_NEWS.find((newItem) => newItem.slug === newsSlug);

   if (!newsItem) {
      notFound();
   }

   return (
      <article className="news-article">
         <header>
            <Link href={`/news/${newsItem.slug}/image`}>
               <Image
                  src={`/images/news/${newsItem?.image}`}
                  alt={newsItem.title}
                  width={125}
                  height={125}
               />
            </Link>
            <h1>{newsItem.title}</h1>
            <time dateTime={newsItem.date}>{newsItem.date}</time>
         </header>
         <p>{newsItem.content}</p>
      </article>
   );
};

export default NewsDetailPage;
