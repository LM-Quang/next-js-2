import { News } from "@/type/News";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NewsList = ({ news }: { news: News[] }) => {
   return (
      <ul className="news-list">
         {news.map((newsItem) => (
            <li key={newsItem.id}>
               <Link href={`/news/${newsItem.slug}`}>
                  <Image
                     src={`/images/news/${newsItem.image}`}
                     alt={newsItem.title}
                     width={250}
                     height={250}
                  />
                  <span>{newsItem.title}</span>
               </Link>
            </li>
         ))}
      </ul>
   );
};

export default NewsList;
