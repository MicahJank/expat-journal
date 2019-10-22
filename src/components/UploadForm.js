import React from 'react';

import axios from 'axios';

import uploadImg from '../imgs/upload.png';
import useForm from '../utils/useForm.js';

const UploadForm = () => {
    const [formInputs, handleChanges, clearForm] = useForm();

    const submitHandler = e => {
        e.preventDefault();
        const { sName, sContent, } = formInputs;
        axios.post(' https://pt11expat.herokuapp.com/api/stories/new/', { sName, sContent })
            .then(res => {
                console.log(res);
            })
            .catch(err => console.log(err));
        clearForm();
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
                        <div>
                            <label htmlFor='private'>Private post</label>
                            <input type="radio" id='private' value='private' name="post-type" />
                            <p>*Only you can see this post.</p>
                        </div>
                        <div>
                            <label htmlFor='public'>Public post</label>
                            <input type="radio" id='public' value='public' name="post-type" />
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
                        />
                    </div>

                </form>
            </div>
            <div className='upload-bottom'>
                <label>Your amazing story goes here</label>
                    <input 
                    type='text' 
                    id='content'
                    name='sContent'
                    required
                    value={formInputs.sContent || ''}
                    onChange={handleChanges}
                    />
            </div>
            <div className='upload-btns'>
                <button type='button'>Cancel</button>
                <button form='upload-form' type='submit'>Publish</button>
            </div>
        </section>
    )
}

export default UploadForm;
