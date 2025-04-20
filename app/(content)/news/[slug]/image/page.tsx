"use client";

import { DUMMY_NEWS } from "@/data/dummyNews";
import Image from "next/image";
import { notFound, useParams } from "next/navigation";
import React from "react";

const ImagePage = () => {
   const params = useParams<{ slug: string }>();
   const newsItemSlug = params.slug;
   const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsItemSlug);

   if (!newsItem) {
      return notFound();
   }

   return (
      <div className="fullscreen-image">
         <Image src={`/images/news/${newsItem.image}`} alt={newsItem.title} fill />
      </div>
   );
};

export default ImagePage;
