import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <header id="showcase" className="grid">
          <div className="bg-image"></div>
          <div className="content-wrap">
            <h1>Welcome to Chat</h1>
            <p>
              The best chat app ever made in the entire universe
            </p>

            <Link to='/register' className="btn" >Register</Link>
            <Link to='/login' className="btn" >Login</Link>

          </div>
        </header>

        <main>
          <section id="section-a" className="grid">
            <div className="content-wrap">
              <h2>The best way to approach your friends</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et sunt qui tenetur impedit iste exercitationem
                    dolores in repudiandae? Deserunt amet blanditiis necessitatibus aspernatur harum enim est quibusdam cum
                    eum inventore iste ullam itaque nam possimus, quisquam eaque numquam veniam beatae?
                </p>
            </div>
          </section>


          <section id="section-b" className="grid">
            <div className="content-wrap">
              <h2 className="content-title">
                We make everyone happy
                </h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, sed hic nihil odit quo dolorem asperiores
                    vitae esse quibusdam voluptate.
                </p>

            </div>
          </section>
        </main>

        <footer id="main-footer" className="grid">
          <div>Waffoss Solutions</div>
          <div>Project By Tsvetomir Tsvetkov</div>
        </footer>
      </div>
    );
  }
}

export default Home;
