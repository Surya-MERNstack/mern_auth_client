// eslint-disable-next-line no-unused-vars
import React from 'react';

export default function About() {
  return (
    <div className='container py-4'>
      <h1 className='display-4 font-weight-bold mb-4 text-dark'>About</h1>
      <p className='mb-4 text-secondary'>
        This is a MERN (MongoDB, Express, React, Node.js) stack application with
        authentication. It allows users to sign up, log in, and log out, and
        provides access to protected routes only for authenticated users.
      </p>
      <p className='mb-4 text-secondary'>
        The front-end of the application is built with React and uses React
        Router for client-side routing. The back-end is built with Node.js and
        Express, and uses MongoDB as the database. Authentication is implemented
        using JSON Web Tokens (JWT).
      </p>
      <p className='mb-4 text-secondary'>
        This application is intended as a starting point for building full-stack
        web applications with authentication using the MERN stack. Feel free to
        use it as a template for your own projects!
      </p>
    </div>
  );
}
