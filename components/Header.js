import React from 'react';
import { Link } from 'react-scroll';

import theme from '../styles/theme';

/*



    &:hover {
      cursor: pointer;
      color: ${colors.white};
    }
  }
`; */

const Header = () => {
  return (
    <div className='outer-container'>
      <div className='inner-container'>
        <div className='logo'>
          <Link to='home' offset={-60}>
            Michael Lai
          </Link>
        </div>
        <div>
          <ul>
            <li>
              <Link
                activeClass='active'
                to='home'
                offset={-60}
                spy={true}
                smooth={true}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                activeClass='active'
                to='about'
                offset={-60}
                spy={true}
                smooth={true}
              >
                About
              </Link>
            </li>
            <li>
              <Link to='work' offset={-60} spy={true} smooth={true}>
                Work
              </Link>
            </li>
            <li>
              <Link to='contact' offset={-60} spy={true} smooth={true}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <style jsx>{`
        .outer-container {
          position: sticky;
          top: 0;
          box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
          padding: 0 20px;
        }

        @media ${theme.breakpoints.md} {
          .outer-container {
            padding: 0 60px;
          }
        }

        .inner-container {
          max-width: 1000px;
          margin: 0 auto;
          height: 60px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 20px;
          font-weight: 600;
          text-transform: uppercase;
          color: ${theme.colors.white};
        }

        .logo:hover {
          cursor: pointer;
        }

        ul {
          display: flex;
        }

        li {
          list-style-type: none;
          margin: 0 12px;
          text-transform: uppercase;
          color: ${theme.colors.grey};
          font-size: 16px;
          font-weight: 300;
        }

        li:hover {
          cursor: pointer;
          color: ${theme.colors.white};
        }

        .active {
          color: ${theme.colors.primary};
        }
      `}</style>
    </div>
  );
};

export default Header;
