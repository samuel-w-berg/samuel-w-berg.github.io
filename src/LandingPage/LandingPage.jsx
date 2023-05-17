import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import AboutMe from '../AboutMe/AboutMe';
import ContactMe from '../ContactMe/ContactMe';
import Portfolio from '../Portfolio/Portfolio';
import Skills from '../Skills/Skills';

// import your styles and any other dependencies

export default function LandingPage() {
  return (
    <div className="landing">
      <Menu pointing secondary>
        <Menu.Item
          name='about'
          as={Link}
          to='/about'
        />
        <Menu.Item
          name='skills'
          as={Link}
          to='/skills'
        />
        <Menu.Item
          name='portfolio'
          as={Link}
          to='/portfolio'
        />
        <Menu.Item
          name='contact'
          as={Link}
          to='/contact'
        />
      </Menu>
      <h1>Hello, I'm Sam</h1>
      <AboutMe />
      <Skills />
      <Portfolio />
      <ContactMe />
    </div>
  );
}

