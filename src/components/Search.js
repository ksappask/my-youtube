import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { YOUTUBE_API_KEY } from "../utils/constants";

import { YOUTUBE_SEARCH_QUERY_API } from "../utils/constants";

const Search = () => {
  const [searchData, setSearchData] = useState([]);
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("v");
  console.log("Query => " + searchQuery);
  var searchText = searchQuery.replace(/\s+/g, "+");
  var searchDataCopy = searchData;
  console.log("Query => " + searchText);
  useEffect(() => {
    getSearchData();
  }, [searchQuery]);

  const getSearchData = async () => {
    const data = await fetch(
      YOUTUBE_SEARCH_QUERY_API + searchText + "&key=" + YOUTUBE_API_KEY
    );
    const json = await data.json();

    setSearchData(json.items);
    console.log(json.items);
  };

  return (
    <div>
      {searchDataCopy != undefined &&
        searchDataCopy.map((m) => (
          <Link key={m.id.videoId} to={"/watch?v=" + m.id.videoId}>
            <div className=" flex   m-6 p-2 w-[1200px] h-[200px] shadow-lg bg-slate-100 rounded-lg">
              <img
                className="rounded-lg"
                alt="thumbnail"
                src={m.snippet.thumbnails.medium.url}
              />

              <ul className="px-2 mx-2 ">
                <li className="font-bold text-2xl">{m.snippet.title}</li>
                <li className="my-5 text-lg">{m.snippet.description}</li>
                <li className="my-5 text-sm">{m.snippet.channelTitle}</li>
              </ul>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default Search;
