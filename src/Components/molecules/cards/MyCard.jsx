import { Container } from "react-bootstrap";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import "./myCard.scss";

export const Card = ({ tracks, childClick, location='' }) => {
  const [track, setTrack] = useState(tracks);
  const { album } = track;
  const { artists } = album;

  return (
    <div className="card m-3 bg-dark text-white m-card text-center rounded-1">
      <img
        src={album.images[0].url}
        className=" d-md-block m-card__image width-50 rounded-top"
        alt={album.name}
      />
      <div className="card-body position-relative">
        <h5 className="card-title">{track.name}</h5>
        <p className="card-text">
          <strong>Artists:</strong> {artists[0].name}
        </p>
        <p className="card-text">
          <strong>Album:</strong> {album.name}
        </p>
        <p className="card-text">
          <strong>Duration:</strong> {tracks.duration_ms / 1000 / 60}
        </p>
        <a className="m-card__button position-absolute" id={track.id} onClick={() => childClick(track.id)}>
          {location === "favorites" ? 
          <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-heart-fill"
          color="#1ed760"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
          />
        </svg>
        :
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-heart"
              viewBox="0 0 16 16"
            >
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
            </svg>
            
          }
        </a>
      </div>
    </div>
  );
};

Card.propTypes = {
  value: PropTypes.object,
};
export default Card;
