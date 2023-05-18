import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-scroll';
import AboutMe from '../AboutMe/AboutMe';
import ContactMe from '../ContactMe/ContactMe';
import Portfolio from '../Portfolio/Portfolio';
import Skills from '../Skills/Skills';

export default function LandingPage() {
  return (
    <div className="landing">
      <Menu pointing secondary className="myMenu">
        <Menu.Item
          name='about'
          as={Link}
          to='about'
          smooth={true}
        />
        <Menu.Item
          name='skills'
          as={Link}
          to='skills'
          smooth={true}
        />
        <Menu.Item
          name='portfolio'
          as={Link}
          to='portfolio'
          smooth={true}
        />
        <Menu.Item
          name='contact'
          as={Link}
          to='contact'
          smooth={true}
        />
      </Menu>
      <div className="image-container">
        <img src="https://imgur.com/SgHeyoq.png" alt="Me" style={{width: "100%", height: "auto"}}/>
        <h1 className="photo-text">Sam Berg, Software Engineer</h1>
      </div>
      <div id="about"><AboutMe /></div>
      <div id="skills"><Skills /></div>
      <div id="portfolio"><Portfolio /></div>
      <div id="contact"><ContactMe /></div>
    </div>
  );
}

