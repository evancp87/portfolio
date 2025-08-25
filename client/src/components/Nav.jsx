import React from 'react';
import { Link } from 'react-router-dom';
// navbar for homepage
const Nav = () => {
  // TODO: improve by making json

  const data = [
    {
      link: '/',
      text: 'Home',
    },
    {
      link: 'about',
      text: 'About',
    },
    {
      link: 'projects',
      text: 'Projects',
    },
    {
      link: 'contact',
      text: 'Contact',
    },
    {
      link: 'pdfs/cv.pdf',
      text: 'CV',
    },
  ];
  return (
    <nav className="navigation">
      <ul>
        <li className="navigation__logo navigation__nav-item">EP</li>
      </ul>
      <ul className="navigation__nav-items">
        {data &&
          data.map((d) => (
            <li className="navigation__nav-item" key={d.link}>
              {d.link.startsWith('pdfs') ? (
                <a href={d.link} target="_blank">
                  {d.text}
                </a>
              ) : (
                <Link to={d.link}>{d.text}</Link>
              )}
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default Nav;
