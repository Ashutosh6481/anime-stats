import React from "react";
import { useParams } from "react-router-dom";
import anime from "../assets/anime.json";
// import assets from "../assets/assets";

const Anime = () => {
  const { id } = useParams();
  console.log(anime[id]);
  return (
    <>
      <div className="background-div">
        {/* <h1 className="title">{id}</h1> */}
        <img src={anime[id].logo} className="anime-logo"></img>
        <div className="article-body-div">
          <div className="article-div">
            {/* <p
              id="article"
              dangerouslySetInnerHTML={{ __html: anime[0].article }}
            >
              {anime[0].article[0]}
            </p> */}
            <img src={anime[id].banner} className="gif" />
            <p id="article">{anime[id].article[0]}</p>
            <img src={anime[id].gif[0]} className="gif" />
            <p id="article">{anime[id].article[1]}</p>
            <img src={anime[id].gif[1]} className="gif" />
            <p id="article">{anime[id].article[2]}</p>
            <img src={anime[id].gif[2]} className="gif" />
            <p id="article">{anime[id].article[3]}</p>
            <img src={anime[id].gif[3]} className="gif" />
            <p id="article">{anime[id].article[4]}</p>
            <img src={anime[id].gif[4]} className="gif" />
            <p id="article">{anime[id].article[5]}</p>

          </div>
        </div>
      </div>
    </>
  );
};

export default Anime;
