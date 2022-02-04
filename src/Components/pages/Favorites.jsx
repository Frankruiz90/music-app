import axios from "axios";
import React, { Suspense, lazy, useEffect, useState } from "react";
import { BASEURL } from "../../constants/Constans";
import {
  getDataFavorites,
  deleteTrackFavorites,
} from "../../selectors/dataFavorites";
import { Logo } from "../atoms/logo/Logo";
// import MyCard from "../molecules/cards/MyCard";
const MyCard = lazy(() => import("../molecules/cards/MyCard"));

export const Favorites = () => {
  const [searchKey, setSearchKey] = useState("");
  const [artists, setArtists] = useState([]);
  const [favorits, setFavorits] = useState([]);

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      const getFavorites = async () => {
        const { data } = await getDataFavorites(token);
        const { items } = data;
        setFavorits(items);
      };
      getFavorites();
    }
  }, []);

  const search = async (e) => {
    e.preventDefault();
    const { data } = await axios.get(`${BASEURL}/v1/search`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      params: {
        q: searchKey,
        type: "artist",
      },
    });
    setArtists(data.artists.items);
  };
  const removeTrack = async (id) => {
    let token = localStorage.getItem("token");

    const newFavorites = favorits.filter((item) => item.track.id !== id);
    setFavorits(newFavorites);
    const response = await deleteTrackFavorites(id, token);
  };
  return (
    <div className="">
      {/* <form onSubmit={search}>
        <input type="text" onChange={(e) => setSearchKey(e.target.value)} />
        <button type={"submit"}>Search</button>
      </form> */}
      <Suspense fallback={<Logo />}>
        <h1 className="text-white">Favoritos</h1>
        <section className="row ">
          <article className="d-flex flex-wrap justify-content-center">
            {favorits.map((item) => (
              <MyCard
                key={item.track.id}
                tracks={item.track}
                location={"favorites"}
                childClick={(id) => removeTrack(id)}
              />
            ))}
          </article>
        </section>
      </Suspense>
    </div>
  );
};
