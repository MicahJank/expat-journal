import React from 'react';
import '../css/index.css';

export default function SignUpPage() {
  console.log('Sign up page!');

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
