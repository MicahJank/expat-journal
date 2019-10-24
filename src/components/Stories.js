import React, { useEffect, useState } from "react";
import axios from "axios";

function Story(props) {
  const [trip, setTrip] = useState([]);

  useEffect(() => {
    axios
      .get(`https://pt11expat.herokuapp.com/api/stories/byId/${props.match.params.id}`)
      .then(res => {
        setTrip(res.data);
        console.log(res.data);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      <div className="userstory">
        <div className="usertripinfo">
          <img src={trip.sImageUrl} alt={trip.sName} />
        </div>

        <div className="usertripinfo">
          <h1>{trip.sName}</h1>

          <p>{trip.sContent}</p>
        </div>
      </div>
    </>
  );
}

export default Story;
