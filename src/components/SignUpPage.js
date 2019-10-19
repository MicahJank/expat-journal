import React from 'react';
import '../css/index.css';

// import imgs
import logo from '../imgs/LogoEJ.png';
import group from '../imgs/group-svgrepo-com.png';
import uploader from '../imgs/icon-uploader-2.png';
import save from '../imgs/save-button-2.png';
import background from '../imgs/typewriter-801921_1920.jpg';

// <img src={logo} alt="expat journal logo" />

// console to help me remember which page i'm working on!
console.log('Sign up page!');

export default function SignUpPage() {
  return (
    <div>
      <h2>Sign up to start your journal</h2>

      <form>
        <input type="text" name="name" placeholder="Name" required></input>
        <input type="email" name="email" placeholder="Email" required></input>
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        ></input>
        <input
          type="password"
          name="confirm-password"
          placeholder="Confirm Password"
          required
        ></input>
        <button type="submit">Join now</button>
      </form>
    </div>
  );
}
