import React, { useEffect, useState } from "react";
import axios from "axios";
import trash from '../imgs/delete.png';
import {deleteStory} from '../actions';
import { connect } from "react-redux";
import { Link } from "react-router-dom";


function Story(props) {
  const [trip, setTrip] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://pt11expat.herokuapp.com/api/stories/byId/${props.match.params.id}`
      )
      .then(res => {
        setTrip(res.data);
        console.log(res.data);
      })
      .catch(error => console.log(error));
  }, []);





  return (
    <>
      <div className="headoftrip">

        <div className="headbox trip-title">
          <h1>{trip.sName}</h1>
          <h3>from {trip.user}</h3>
          <p>{trip.sCountry}</p>
        </div>

        <div className="headbox trip-edit">
        <Link to={`/edit/${props.match.params.id}`}><button>Edit Post</button>  </Link> 
         
         <img 
         onClick={() => 
          {props.deleteStory(props.match.params.id) 
            props.history.push("/newsfeed")
        console.log('onclick fire')}} 
        className="trash" 
        src={trash} 
        alt="delete diz" 
        />


        </div>

      </div>

      <div className="userstory">

        <div className="usertripinfo">
          <img src={trip.sImageUrl} alt={trip.sName} />
        </div>

        <div className="usertripinfo">
          <h1>{trip.sName}</h1>

          <p>{trip.sContent}</p>
        </div>

     
      </div>

      <div className="upvotes">
        78 upvotes
      </div>



    </>
  );
}

// const mapStateToProps = state => {
//   return {
//     stories: state.stories,
//     isFetching: state.isFetching,
//     error: state.error
//   };
// };

export default connect(
  null,
  { deleteStory }
)(Story);
