import Link from "next/link";
import React from "react";
import { DUMMY_NEWS } from "@/data/dummyNews";
import Image from "next/image";

const NewsPage = () => {
   return (
      <>
         <h1>News Page</h1>
         <ul className="news-list">
            {DUMMY_NEWS.map((newsItem) => (
               <li key={newsItem.id}>
                  <Link href={`/news/${newsItem.slug}`}>
                     <Image src={`/images/news/${newsItem.image}`} alt={newsItem.title} fill />
                     <span>{newsItem.title}</span>
                  </Link>
               </li>
            ))}
         </ul>
      </>
   );
};

export default NewsPage;
