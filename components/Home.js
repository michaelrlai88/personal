import React from 'react';
import { Link } from 'react-scroll';

import theme from '../styles/theme';

const Home = () => {
  return (
    <div className='outer-container' id='home'>
      <div className='inner-container'>
        <div className='hello'>Hi, my name is</div>
        <div className='name'>Michael</div>
        <div className='job'>Web Developer</div>
        <Link to='work' offset={-60} smooth={true} spy={true}>
          <button>View my work</button>
        </Link>
      </div>

      <style jsx>{`
        .outer-container {
          height: 100vh;
          color: ${theme.colors.white};

          padding: 0 20px;
        }

        @media ${theme.breakpoints.md} {
          .outer-container {
            padding: 0 60px;
          }
        }

        .inner-container {
          max-width: 800px;
          margin: 0 auto;
          padding-top: 120px;
        }

        button {
          margin-top: 60px;
          border: none;
          border-radius: 2px;
          font-size: 16px;
          padding: 12px 24px;
          font-weight: 100;
          background-color: ${theme.colors.primaryDark};
          color: white;
          text-transform: uppercase;
        }

        button:hover {
          background-color: ${theme.colors.primaryExtraDark};
          cursor: pointer;
        }

        .hello {
          font-size: 36px;
          color: ${theme.colors.grey};
          font-weight: 600;
        }

        .name {
          font-weight: 600;
          font-size: 80px;
          color: ${theme.colors.white};
        }

        .job {
          margin-top: 0px;
          font-weight: 200;
          font-size: 48px;
          color: ${theme.colors.grey};
        }
      `}</style>
    </div>
  );
};

export default Home;
