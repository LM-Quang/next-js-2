import NewsList from "@/components/NewsList";
import { getLatestNews } from "@/lib/news";
import React from "react";

const LastestNewsPage = () => {
   const latestNews = getLatestNews();

   return (
      <>
         <h2>Lastest News</h2>
         <NewsList news={latestNews} />
      </>
   );
};

export default LastestNewsPage;
