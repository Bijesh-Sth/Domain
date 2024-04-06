import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';

class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <head>
          <title>Bijesh Shrestha</title>
          <link rel="icon" href="/favicon.ico" />
        </head>

        <main>

        
          <h1 className="title">
            Hi, I'm Bijesh Shrestha
          </h1>

          <div className="construction">
            <i className="fas fa-tools fa-4x"></i> 
          </div>
          <h1 className="title">
            The Site is Under Construction
          </h1>

          <p className="description">
            Find me on social media:
          </p>

          <div className="grid">
            <a href="https://github.com/Bijesh-Sth" className="card">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/bijesh-sth/" className="card">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://www.instagram.com/bjs_sth/" className="card">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </main>
      </div>
    );
  }
}

export default Home;
