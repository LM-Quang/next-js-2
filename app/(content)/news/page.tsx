import React from "react";
import { DUMMY_NEWS } from "@/data/dummyNews";
import NewsList from "@/components/NewsList";

const NewsPage = () => {
   return (
      <>
         <h1>News Page</h1>
         <NewsList news={DUMMY_NEWS} />
      </>
   );
};

export default NewsPage;
