import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import { Link } from "react-router-dom";
import Button from "./Button";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestons] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  // This UseEffect called whenever searchQuery changes
  useEffect(() => {
    // Make this API Call after 200ms

    //Every time searchQuery changes , it will come here
    //And It will call API after 200ms, but If we type characters less than 200ms
    //Then it will destro it and it will come to return, here we are clearing it out
    // This is called debouncing
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();

    setSuggestions(json[1]);

    // Update Cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="opacity-100 sticky top-0 z-50 grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          alt="menu"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKUAAAClCAMAAAAK9c3oAAAAWlBMVEX///8jHyAAAAAfGxwYExXd3d08OTqfnp5ZV1j29vbx8fHl5eXt7e3My8tVVFQ5NzdERESura0JAACQj48QCQtwcHB7eXljYWG6urqCgYHS0dHDw8MRDw+kpKWVLHPlAAAAv0lEQVR4nO3bQU7DMBBA0WDS0iSlLSkJJND7X5MjsBgx0oj3TvBl2RtrpusAAAAAAACA3wyHBOdg5Ovlevx7t7dY5Nw/Z2iPSOW9PaV4X4ZA5ZpV+TEGKj+TKts9ENkNW0txCr7y/SXBV+RWAgAAAEAp43ZKsEyhyOnW+gTz9x6pfCT9Bc9rpHKdcypj/+o1zrLGvazxxgEAAACgkgqzrDXmgmvMWNeYV68x+19jj6LGTkqR/R4AAAAAAAD4V34AZOUk3rd6EFQAAAAASUVORK5CYII="
        />
        <a href="/">
          <img
            className="h-8 mx-2 "
            alt="youtube-logo"
            src="data:image/png;base64,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"
          />
        </a>
      </div>
      <div className="col-span-10 px-10">
        <div>
          <input
            className="px-5 p-2 w-1/2 border border-gray-400 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestons(true)}
          />
          <Link to={"/search?v=" + searchQuery}>
            <button className=" px-5 py-2  border bg-neutral-200 border-gray-400  rounded-r-full">
              Search
            </button>
          </Link>
        </div>
        {showSuggestions && searchQuery.length > 0 && (
          <div className=" fixed bg-white py-2 px-5 w-[38rem] shadow-lg rounded-lg border-gray-100">
            <ul>
              {suggestions.map((s) => (
                <Link key={s} to={"/search?v=" + s}>
                  <li
                    key={s}
                    className="hover:bg-gray-100 "
                    onClick={() => {
                      setShowSuggestons(false);
                      setSearchQuery(s);
                    }}
                  >
                    {s}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="col-span-1">
        <img
          className="h-8"
          alt="user"
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIAAoAMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAwcBBQYEAv/EAD0QAAEDAwICBQgGCwEAAAAAAAABAgMEBREGIQcSEzFBUWEUIlJTcZGSoSOBgrHB0gglMzVCVHKDk+HiJP/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwC8QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADKEFTW0tIiLVVMMKL6yRG/eBOCCmraWrTNLUwzInq5Ed9xNlO8DIAAAAAAAAAAAAAAAAAAHxLIyGN0kjmsY1Muc5cIid6n2Vhxwu9Y222/TVrcvll6m6NcLjzEVNs+KqiL4ZA1t01jqPXl3ms2gE8lt8S8tRdXoqZ9i428Mbr4Hrt/BGzvXp7/AHO4XKremZHrJyIq/Nfep32k9PUemLFTWuhYnJE3z343kf2uXxVTcAVTcOCNnb9NYbnX22rZux/ScyIvyX3KeO2aw1JoS7Q2fX//AKbfMvLT3RiKuPauN/HO6eJcRp9V6fo9TWSotdcxOSVvmPRPOjf2OTxRQNrFI2WNr43NcxyIrXNXKKneh9lX8DrvVut1w01dFVayyz9GmVVfo1VURM9yKionhgtAAAAAAAAAAAAAAAAAAVJrTzuOOkmzfsUgyzPVzfSfjyltlV8b7fV00No1XbWK6os86LJj0FVF92Ux9oC00Mmt0/eaO/WemudA/ngqGI5O9q9rV8UXY2QAwpk1uoLzSWGz1N0r3oyCnYrl33cvYieKrsBW+ist45auSH9isGX46ubMf48xbRVfA6gq6mK76suTOWe8VCrH/QiqqqnhlcfZLUAAAAAAAAAAAAAAAAAENXTw1VNJT1MbZYZWqyRjkyjmr1opKrkTr2TvOJv/ABW0lZJn08te6qnZs6OkZz4Xu5ur5gcbNY9UcLblNXaZifdtOyu5paLdz4vdvt6SdnWh0Vq40aUrGIldLU2+dNnRzwquF7d25/A8C8eNM/yF1/xs/Oae4cUOHVzf0lx0vLUyenJRwq7382QOnuvGfSdIxW0MtTcJ12bHBCqZXs3dg52Cyan4p3GCu1PDJadOwu54aJMo+Xx3339JezqTtIrdxQ4dWuTpLdpeWmk9OOihR3v5sm3TjxpnO9DdE/ts/MBaNLTQ0tPFBTxtjiiajWMYmEaiJhEQmOHsPFfSN7nZTx17qWd64ayrZ0eV7ubq+Z27XI5MpugGQAAAAAAAAAAAAAwvUZIK6byaiqJ0TKxRufj2JkCp9cXi6621U7ROmp1go4P3nVtXbHa3PcmcY7V9h2mleH+ndNU7I6O3xSzonn1NQ1HyPXvyvV7EOU/R9oc6cuF5nXnrK+sdzyqm6o3/AKVylrAReTU/qIvgQeTQeoi+BCUAReTQeoi+BDC0tOvXBF8CEwA5TVWgNO6lpnsrLfHFUKi8lTTtRkjF78p1+xTitDXe7aI1S3Q+pJ1mo5k/VdW7qx/C3PcuMY7F27S4Cqf0gqLl07brxAvR1dBWN6OVqbojv9o1QLWBBRTrU0cE6phZI2vVO7KZJwAAAAAAAAAAABd0woAEcEENPGkVPEyKNOprGo1E+pCQAAAAAAAEc8ENRGsdREyWNetr2o5F+pSQAETHUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/9k="
        />
      </div>
    </div>
  );
};

export default Head;
