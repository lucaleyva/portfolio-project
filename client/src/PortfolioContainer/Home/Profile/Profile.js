import React from "react";
import Typical from "react-typical";
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";

export default function Profile() {
  return (
    <div className='profile-container'>
      <div className='profile-parent'>
        <div className='profile-details'>
          <div className='profile-colz'>
            <div className='colz-icon'>
              <a href='https://www.linkedin.com/in/lucaleyva/'>
                <i className='fa fa-linkedin'></i>
              </a>
              &nbsp;
              <a href='https://github.com/lucaleyva'>
                <i className='fa fa-github-square'></i>
              </a>
              &nbsp;
              <a href='https://instagram.com/_lucaxp?utm_medium=copy_link'>
                <i className='fa fa-instagram'></i>
              </a>
              &nbsp;
              <a href='https://www.youtube.com/channel/UCWbSW6oelMabpAjN5yYs5cQ'>
                <i className='fa fa-youtube-square'></i>
              </a>
              &nbsp;
              <a href='https://twitter.com/luca_codes'>
                <i className='fa fa-twitter-square'></i>
              </a>
            </div>
          </div>

          <div className='profile-details-name'>
            <span className='primary-text'>
              &nbsp; Hello&#44; I&#39;m{' '}
              <span className='highlighted-text'>Luca Leyva</span>
            </span>
          </div>

          <div className='profile-details-role'>
            <span className='primary-text'>
              &nbsp;
              <h1>
                &nbsp;
                <Typical
                  loop={Infinity}
                  steps={[
                    'Full Stack Developer 💻',
                    1000,
                    'ex-Spotify 🎧',
                    1000,
                    'Agile Coach 🚀',
                    1000,
                    'US Air Force Veteran 🪖',
                    1000,
                  ]}
                />
              </h1>
              <span className='profile-role-tagline'>
                Skilled at quickly delivering quality products that delight
                customers.
              </span>
            </span>
          </div>

          <div className="profile-options">
            <button className="btn primary-btn"
            onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            > Hire Me </button>
            <a href='resume.pdf' download='Luca Leyva.pdf'>
              <button className='btn highlighted-btn'>Get Resume</button>
            </a>
          </div>
        </div>
        <div className='profile-picture'>
          <div className='profile-picture-background'></div>
        </div>
      </div>
    </div>
  )
}
