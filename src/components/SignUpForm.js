import React from 'react';

const SignUpForm = ({ formInfo }) => {
    return (
        <form onSubmit={submitHandler}>
            <input className={formInfo.error ? 'error' : ''} type="text" name="username" placeholder="Name" 
              value={formInfo.username || ''}
              onChange={handleChanges}
              required />

            <input className={formInfo.error ? 'error' : ''} type="email" name="email" placeholder="Email"
              value={formInfo.email || ''}
              onChange={handleChanges}
              required />

            <input className={formInfo.error ? 'error' : ''} type="password" name="password" placeholder="Password"
              value={formInfo.password || ''}
              onChange={handleChanges}
              required />

            <input className={formInfo.error ? 'error' : ''} type="password" name="confirmPassword" placeholder="Confirm Password"
              value={formInfo.confirmPassword || ''}
              onChange={handleChanges}
              required />

            <button type="submit" className={`submit-rectangle sign-in-rectangle ${checkFilled()}`}> Join now </button>
          </form>
    )
}

export default SignUpForm;