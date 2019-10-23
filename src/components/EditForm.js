import React, { useState, useEffect } from 'react';

import axios from 'axios';

import uploadImg from '../imgs/upload.png';
import useForm from '../utils/useForm.js';

const EditForm = (props) => {
  const [initialData, setInitialData] = useState({});
  const [formInputs, handleChanges, clearForm] = useForm();

  useEffect(() => {
    axios.get(`https://pt11expat.herokuapp.com/api/stories/byId/${props.match.params.id}`)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <section className="upload-container-edit">
      <div className="upload-top-edit">
        <div className="upload-img-container-edit edit-img-container">
          <img src={uploadImg} alt="upload" />
          <p>Upload image</p>
        </div>

        <form className="upload-form-edit">
          <div className="radio-btns-edit">
            <div>
              <label htmlFor="private">Private post</label>
              <input type="radio" id="private" name="post-type" />
              <p>*Only you can see this post.</p>
            </div>
            <div>
              <label htmlFor="public">Public post</label>
              <input type="radio" id="public" name="post-type" />
              <p>*All Expat Journal community can see this post.</p>
            </div>
          </div>
          <div className="input-container-edit title-edit">
            <label>Title</label>
            <input
              type="text"
              id="title"
              name="sName"
              // value={formInputs.sName}
            />
          </div>

          <div className="input-container-edit country-edit">
            <label>City/Town, State, Country</label>
            <input
              type="text"
              id="location"
              name="sCountry"
              // value={formInputs.sCountry}
            />
          </div>

          <div className="input-container-edit emoji-edit">
            <label>Choose and Emoji for this day</label>
            <input
              type="text"
              id="emoji"
              name="emoji"
              // value={formInputs.emoji}
            />
          </div>

          <div className="input-container-edit tags-edit">
            <label>Key words/tags</label>
            <input
              type="text"
              id="tags"
              name="tags"
              //  value={formInputs.tags}
            />
          </div>
        </form>
      </div>
      <div className="upload-bottom-edit">
        <label>Your amazing story goes here</label>
        <textarea
          type="text"
          id="content"
          name="sContent"
          // value={formInputs.sContent}
        />
      </div>
      <div className="upload-btns-edit">
        <button type="button">Cancel</button>
        <button type="submit">Apply Changes</button>
      </div>
    </section>
  );
};

export default EditForm;
