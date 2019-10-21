import React from 'react';

// import imgs
import logo from '../imgs/LogoEJ.png';
import group from '../imgs/group-svgrepo-com.png';
import uploader from '../imgs/icon-uploader-2.png';
import save from '../imgs/save-button-2.png';

export default function SignUpPage() {
  return (
    <div className="auth-page">
      <div className="hero-section">
        <div className="auth-nav-bar">
          <img src={logo} alt="expat journal logo" />
          <button className="auth-nav-bar-sign-in" disabled>
            Sign in
          </button>
        </div>

        <h1>Expat Journal</h1>
        <h3>Experiences to remember and share</h3>
      </div>

      <div className="auth-form">
        <h2>Sign up to start your journal</h2>

        <form>
          <input type="text" 
          name="name" 
          placeholder="Name" 
          required />

          <input 
          type="email" 
          name="email" 
          placeholder="Email" 
          required />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <input
            type="password"
            name="confirm-password"
            placeholder="Confirm Password"
            required
          />
          <button type="submit" className="submit-rectangle">
            Join now
          </button>
        </form>
      </div>

      <div className="auth-bottom-section">
        <h2>About Expat Journal</h2>

        <div className="auth-bottom-section-img-row">
          <div>
            <img src={uploader} alt="upload" />
            <p>
              Upload experiences about living abroad. Share your storeis or keep
              them private as your personal journal.
            </p>
          </div>
          <div>
            <img src={group} alt="group" />
            <p>
              Join and participate in groups of the locations you choose.
              Discover areas around where you live.
            </p>
          </div>
          <div>
            <img src={save} alt="save" />
            <p>
              Save content of interest from other expatriates that you find
              interesting and might want to review later.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
