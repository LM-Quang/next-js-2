"use client";

import { DUMMY_NEWS } from "@/data/dummyNews";
import Image from "next/image";
import { notFound, useParams, useRouter } from "next/navigation";
import React from "react";

const InterceptedImagePage = () => {
   const router = useRouter();
   const params = useParams<{ slug: string }>();

   const newsItemSlug = params.slug;
   const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsItemSlug);

   if (!newsItem) {
      return notFound();
   }

   return (
      <>
         <div className="modal-backdrop" onClick={router.back} />
         <dialog className="modal" open>
            <div className="fullscreen-image">
               <Image
                  src={`/images/news/${newsItem.image}`}
                  alt={newsItem.title}
                  height={750}
                  width={730}
               />
            </div>
         </dialog>
      </>
   );
};

export default InterceptedImagePage;
