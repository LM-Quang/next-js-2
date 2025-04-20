"use client";

import { getAvailableNewsMonths, getAvailableNewsYears, getNewsForYearAndMonth } from "@/lib/news";
import Link from "next/link";
import NewsList from "@/components/NewsList";
import { getNewsForYear } from "@/lib/news";
import { useParams } from "next/navigation";
import React from "react";

const FilteredNewsPage = () => {
   const params = useParams<{ filter: string }>();
   const filter = params.filter;

   const selectedYear = Number(filter?.[0]);
   const selectedMonth = Number(filter?.[1]);

   let news;
   let links = getAvailableNewsYears();
   let newsContent = <p>No news found</p>;

   if (selectedYear && !selectedMonth) {
      news = getNewsForYear(selectedYear);
      links = getAvailableNewsMonths(selectedYear);
   }

   if (selectedYear && selectedMonth) {
      news = getNewsForYearAndMonth(selectedYear, selectedMonth);
      links = [];
   }

   if (news && news.length > 0) {
      newsContent = <NewsList news={news} />;
   }

   if (
      (selectedYear && !getAvailableNewsYears().includes(selectedYear)) ||
      (selectedMonth && !getAvailableNewsMonths(selectedYear).includes(selectedMonth))
   ) {
      throw new Error("Invalid filter!");
   }

   return (
      <>
         <header id="archive-header">
            <nav>
               <ul>
                  {links.map((link) => {
                     const href = selectedYear
                        ? `/archive/${selectedYear}/${link}`
                        : `/archive/${link}`;

                     return (
                        <li key={link}>
                           <Link href={href}>{link}</Link>
                        </li>
                     );
                  })}
               </ul>
            </nav>
         </header>
         {newsContent}
      </>
   );
};

export default FilteredNewsPage;
