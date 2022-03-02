import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function Detail() {
  const param = useParams();
  const [detail, setDetail] = React.useState();
  React.useEffect(() => {
    axios.get(`https://www.omdbapi.com/?apikey=33b27cf1&i=${param.id}`).then(
      (response) => {
        setDetail(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  return (
    <>
      {detail ? (
        <div>
          <img src={detail.Poster} />
          <li>"Title": {detail.Title} </li>
          <li>"Year": {detail.Year}</li>
          <li>"Rated": {detail.Rated}</li>
          <li>"Released": {detail.Released}</li>
          <li>"Runtime": {detail.Runtime}</li>
          <li>"Genre": {detail.Genre}</li>
          <li>"Director": {detail.Director}</li>
          <li>"Writer": {detail.Writer}</li>
          <li>"Actors": {detail.Actors}</li>
          <li>"Plot": {detail.Plot}</li>
          <li>"Language": {detail.Language}</li>
          <li>"Country": {detail.Country}</li>
          <li>"Awards": {detail.Awards}</li>
          <li>"Ratings": {detail.Ratings[0].Value}</li>
          <li>"Ratings source": {detail.Ratings[0].soucre}</li>
        </div>
      ) : (
        <>...</>
      )}
      <Link to="/"> Back </Link>
    </>
  );
}
