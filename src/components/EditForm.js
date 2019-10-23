import React from 'react';

import uploadImg from '../imgs/upload.png';
import useForm from '../utils/useForm.js';

const EditForm = () => {
  const [formInputs, handleChanges, clearForm] = useForm();

  return (
    <section className="upload-container">
      <div className="upload-top">
        <div className="upload-img-container edit-img-container">
          <img src={uploadImg} alt="upload" />
          <p>Upload image</p>
        </div>

        <form className="upload-form">
          <div className="radio-btns">
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
          <div className="input-container title">
            <label>Title</label>
            <input
              type="text"
              id="title"
              name="sName"
              // value={formInputs.sName}
            />
          </div>

          <div className="input-container country">
            <label>City/Town, State, Country</label>
            <input
              type="text"
              id="location"
              name="sCountry"
              // value={formInputs.sCountry}
            />
          </div>

          <div className="input-container emoji">
            <label>Choose and Emoji for this day</label>
            <input
              type="text"
              id="emoji"
              name="emoji"
              // value={formInputs.emoji}
            />
          </div>

          <div className="input-container tags">
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
      <div className="upload-bottom">
        <label>Your amazing story goes here</label>
        <input
          type="text"
          id="content"
          name="sContent"
          // value={formInputs.sContent}
        />
      </div>
      <div className="upload-btns">
        <button type="button">Cancel</button>
        <button type="submit">Publish</button>
      </div>
    </section>
  );
};

export default EditForm;
