import React, { lazy, Suspense, useEffect, useState } from "react";
import { addTrackFavorites } from "../../selectors/dataFavorites";
import { getDataRecomended } from "../../selectors/dataRecomended";
import { Logo } from "../atoms/logo/Logo";
const MyCard = lazy(() => import("../molecules/cards/MyCard"));

export const Home = () => {
  const [recomended, setRecomended] = useState([]);

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      const getRecomended = async () => {
        const { data } = await getDataRecomended(token);
        const { tracks } = data;
        const { items } = tracks;
        setRecomended(items);
      };
      getRecomended();
    }
  }, [localStorage.getItem("token")]);

  const addFavorites = async (id) => {
    let token = localStorage.getItem("token");

    const newRecomended = recomended.filter((item) => item.track.id !== id);
    setRecomended(newRecomended);
    const response = await addTrackFavorites(id, token);
  };

  return (
    <div>
      <Suspense fallback={<Logo />}>
        <h1 className="text-white">Recomendados.</h1>
        <section className="row ">
          <article className="d-flex flex-wrap justify-content-center">
            {recomended.map((item) => (
              <MyCard
                key={item.track.id}
                tracks={item.track}
                childClick={(id) => addFavorites(id)}
              />
            ))}
          </article>
        </section>
      </Suspense>
    </div>
  );
};
