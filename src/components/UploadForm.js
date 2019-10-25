import React, { useState } from 'react';

import { addStory } from '../actions';
import { connect } from 'react-redux';

import uploadImg from '../imgs/upload.png';
import placeholderImg from '../imgs/static.jpg';

import useForm from '../utils/useForm.js';

const UploadForm = (props) => {
    const [formInputs, handleChanges, clearForm] = useForm();
    const user = localStorage.getItem('username');;

    const submitHandler = e => {
        e.preventDefault(); 
        const { sName, sContent } = formInputs;
        props.addStory({ sName, sContent, sImageUrl: placeholderImg, user });
        clearForm();
        props.history.push('/newsfeed');
    }

    const checkFilled = () => {
        if(formInputs.sName && formInputs.sContent) {
          return 'filled';
        } else {
          return '';
        }
      }

    return (
        <section className='upload-container'>
            <div className='upload-top'>
                <div className='upload-img-container'>
                    <img src={uploadImg} alt='upload' />
                    <p>Upload image</p>
                </div>

                <form id='upload-form' onSubmit={submitHandler} className='upload-form'>
                    <div className='radio-btns'>
                        <div className='radio private'>
                            <label htmlFor='private'>Private post</label>
                            <input type="radio" id='private' value='private' name="post-type1" />
                            <span className='circle'></span>
                            <p>*Only you can see this post.</p>
                        </div>
                        <div className='radio public'>
                            <label htmlFor='public'>Public post</label>
                            <input type="radio" id='public' value='public' name="post-type1" />
                            <span className='circle'></span>
                            <p>*All Expat Journal community can see this post.</p>
                        </div>
                    </div>
                    <div className='input-container title'>
                        <label>Title</label>
                        <input 
                        type='text' 
                        id='title'
                        name='sName'
                        required
                        value={formInputs.sName || ''}
                        onChange={handleChanges}
                        placeholder="Enter a title"
                        />
                    </div>

                    <div className='input-container country'>
                        <label>City/Town, State, Country</label>
                        <input 
                        type='text' 
                        id='location'
                        name='sCountry'
                        value={formInputs.sCountry || ''}
                        onChange={handleChanges}
                        placeholder="Enter a location"
                        />
                    </div>

                    <div className='input-container emoji'>
                        <label>Choose and Emoji for this day</label>
                        <input 
                        type='text' 
                        id='emoji'
                        name='emoji'
                        value={formInputs.emoji || ''}
                        onChange={handleChanges}
                        placeholder="Enter an emoji"
                        />
                    </div>

                    <div className='input-container tags'>
                        <label>Key words/tags</label>
                        <input 
                        type='text' 
                        id='tags'
                        name='tags'
                        value={formInputs.tags || ''}
                        onChange={handleChanges}
                        placeholder="Enter some tags"
                        />
                    </div>

                </form>
            </div>
            <div className='upload-bottom'>
                <label>Your amazing story goes here</label>
                    <textarea 
                    type='text' 
                    id='content'
                    name='sContent'
                    required
                    value={formInputs.sContent || ''}
                    onChange={handleChanges}
                    placeholder="Enter your story"
                    />
            </div>
            <div className='upload-btns'>
                <button className='cancel' onClick={() => props.history.push('/newsfeed')} type='button'>Cancel</button>
                <button className={`publish ${checkFilled()}`} form='upload-form' type='submit'>Publish</button>
            </div>
        </section>
    )
}

export default connect(null, { addStory })(UploadForm);
