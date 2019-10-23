import React from "react";

class Story extends React.Component {
  constructor() {
    super();
    this.state = {
      user: []
    };
  }

  componentDidMount() {
    fetch("https://pt11expat.herokuapp.com/api/stories/byId/1")
      .then(res => 
         this.setState({ user: res.data }))

      .catch(err => console.log(err));
  }

  render() {
    return (
      <>
        {this.state.user.map(x => {
          return (
            <>
                  
              <div id={x.id}>
                      <h1>{x.sName}</h1>
                      
                <img src={x.sImageUrl} alt={x.sName} />
                      <p>{x.sContent}</p>
                    
              </div>
            </>
          );
        })}
      </>
    );
  }
}

export default Story;
