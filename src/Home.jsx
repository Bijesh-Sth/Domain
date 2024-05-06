import React from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';

class Home extends React.Component {
  render() {
    return (
      <>
        <main className="px-10">
          <section className="min-h-screen"> 
            <nav className="py-10 mb-10 flex justify-between">
              <h1 className="text-xl font-Roboto font-bold">Bijesh Shrestha</h1>
              <ul className="flex justify-center items-center">
                <li><BsFillMoonStarsFill className="text-2xl cursor-pointer"/></li>
                <li><a href='#' className="bg-cyan-500 text-white font-xl px-4 py-2 ml-3 rounded-md">Resume</a></li>
              </ul>
            </nav>
            <div>
              <h1>
                Bijesh Shrestha
              </h1>
              <h2>
                Web Developer
              </h2>
            </div>
          </section>
        </main>

      </>    
      );
  }
}

export default Home;
