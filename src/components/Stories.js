import React, { useEffect, useState } from "react";
import axios from "axios";
import trash from '../imgs/delete.png';
import save from '../imgs/save-button-1.png';
import {deleteStory} from '../actions';
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function Story(props) {
  const [trip, setTrip] = useState([]);
  // const [currentUser, setCurrentUser] = useState(localStorage.getItem('username'));

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


  // const TripActions = () => {
  //   if(currentUser === trip.user) {
  //     return (
  //       <div className="headbox trip-edit">
  //         <Link to={`/edit/${props.match.params.id}`}><button>Edit Post</button>  </Link> 
          
  //         <img 
  //         onClick={() => 
  //           {props.deleteStory(props.match.params.id) 
  //             props.history.push("/newsfeed")

  //         console.log('onclick fire')}} 
  //         className="trash" 
  //         src={trash} 
  //         alt="delete diz" 
  //         />
  //       </div>
  //     )
  //   } else {
  //     return (
  //       <div>
  //         <div>
  //           <p>Upvote</p>
  //         </div>
  //         <div>
  //           <img src={save} alt="save story button" />
  //           <p>Save</p>
  //         </div>
  //       </div>
  //     )
  //   }
  // }

  return (
    <div className="edit-page">
      <div className="big-box">

        <div className="top-bar">

    
<div className="top-bar-box">
<h1>{trip.sName}</h1>
            <h3>from {trip.user}</h3>
            <p>{trip.sCountry}</p>
</div>

<div className="top-bar-box">
<Link className="edit-button" to={`/edit/${props.match.params.id}`}>Edit Post </Link>
<img
                onClick={() => {
                  props.deleteStory(props.match.params.id);
                  props.history.push("/newsfeed");
                  console.log("onclick fire");
                }}
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
            <p>{trip.sContent}</p>
          </div>
        </div>

        <div className="upvotes">78 upvotes</div>
      </div>
    </div>
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
