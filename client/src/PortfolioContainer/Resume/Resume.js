import React, { useState, useEffect } from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'
import './Resume.css'
import Footer from "../../PortfolioContainer/Footer/Footer";


const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0)
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({})

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return

    Animations.animations.fadeInScreen(props.id)
  }
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className='resume-heading'>
        <div className='resume-main-heading'>
          <div className='heading-bullet'></div>
          <span>{props.heading ? props.heading : ''}</span>
          {props.fromDate && props.toDate ? (
            <div className='heading-date'>
              {props.fromDate + '-' + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className='resume-sub-heading'>
          <span>{props.subHeading ? props.subHeading : ''}</span>
        </div>
        <div className='resume-heading-description'>
          <span>{props.description ? props.description : ''}</span>
        </div>
      </div>
    )
  }

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: 'Education', logoSrc: 'education.svg' },
    { label: 'Work History', logoSrc: 'work-history.svg' },
    { label: 'Programming Skills', logoSrc: 'programming-skills.svg' },
    { label: 'Projects', logoSrc: 'projects.svg' },
    { label: 'Interests', logoSrc: 'interests.svg' },
  ]

  //here we have
  const programmingSkillsDetails = [
    { skill: 'JavaScript', ratingPercentage: 60 },
    { skill: 'React JS', ratingPercentage: 65 },
    { skill: 'Python', ratingPercentage: 60 },
    { skill: 'Django', ratingPercentage: 60 },
    { skill: 'Express JS', ratingPercentage: 50 },
    { skill: 'Node JS', ratingPercentage: 65 },
    { skill: 'Mongo Db', ratingPercentage: 50 },
    { skill: 'HTML5', ratingPercentage: 80 },
    { skill: 'CSS', ratingPercentage: 80 },
  ];

  const projectsDetails = [
    {
      title: 'Personal Portfolio Website',
      duration: { fromDate: '2021', toDate: '2021' },
      description:
        'A Personal Portfolio website to showcase all my details and projects at one place.',
      subHeading: 'Technologies Used: React JS, Bootsrap',
    },
    {
      title: 'Ecommerce Web App',
      duration: { fromDate: '2021', toDate: '2021' },
      description:
      <p>Online ecommerce website for showcasing and selling products onlne with PayPal payment system integration.</p>,
      subHeading: 
      <p>
        Technologies Used:  React Native, Mongo DB, Express Js, Node Js, Redux.
        <br />
        <a href='https://youtu.be/VD3t54gW14U'><i className="fa fa-play-circle icon"> Watch Demo</i></a>
      </p>,
      
      
    },
  ]

  const resumeDetails = [
    <div className='resume-screen-container' key='education'>
      <ResumeHeading
        heading={'devCodeCamp'}
        subHeading={'Full Stack Software Developer Certificate'}
        fromDate={'2021'}
        toDate={'2021'}
      />
      <ResumeHeading
        heading={'William Jessup University'}
        subHeading={'Business Management'}
        fromDate={'2014'}
        toDate={'2015'}
      />
      <ResumeHeading
        heading={'Airman Leadership School'}
        subHeading={'Frontline Management'}
        fromDate={'2009'}
        toDate={'2009'}
      />
    </div>,
  
  

    /* WORK EXPERIENCE */
    <div className='resume-screen-container' key='work-experience'>
      <div className='experience-container'>
        <ResumeHeading
          heading={'Spotify'}
          subHeading={'Agile Coach'}
          fromDate={'2017'}
          toDate={'2021'}
        />
        <div className='experience-description'>
          <span className='resume-description-text'>
            Spotify is a digital music, podcast, and video streaming service
            that gives the user access to content from artists all over the
            world.
          </span>
        </div>
        <div className='experience-description'>
          <span className='resume-description-text'>
            - Coached individuals, Squads, and Tribes to make things easier,
            better, and faster
          </span>
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
    className="resume-screen-container programming-skills-container"
    key="programming-skills"
  >
    {programmingSkillsDetails.map((skill, index) => (
      <div className="skill-parent" key={index}>
        <div className="heading-bullet"></div>
        <span>{skill.skill}</span>
        <div className="skill-percentage">
          <div
            style={{ width: skill.ratingPercentage + "%" }}
            className="active-percentage-bar"
          ></div>
        </div>
      </div>
    ))}
  </div>,

    /* PROJECTS */
    <div className='resume-screen-container' key='projects'>
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className='resume-screen-container' key='interests'>
    <ResumeHeading
    heading="Coaching"
    description="My mission is to be a catalyst for growth, transformation, and perseverance in both myself and others through relationships and collaborative work. 🏆"
    />
    <ResumeHeading
    heading="Music"
    description="Listening to and playing music is something that my life would feel incomplete without. 🎸"
    />
    <ResumeHeading
    heading="Creating"
    description="I like to learning how to do new things as a creative outlet for all the ideas I have. Whether it's in the kitchen, on the synth, building with Lego, or creating cool new apps, I love to create. 🦾"
    />
    </div>,
  ]

  const handleCarousal = (index) => {
    let offsetHeight = 360

    let newCarousalOffset = {
      style: { transform: 'translateY(' + index * offsetHeight * -1 + 'px)' },
    }

    setCarousalOffsetStyle(newCarousalOffset)
    setSelectedBulletIndex(index)
  }

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? 'bullet selected-bullet' : 'bullet'
        }
        key={index}
      >
        <img
          className='bullet-logo'
          src={require (`../../assets/Resume/${bullet.logoSrc}`)}
          alt='oops...no internet connection'
        />
        <span className='bullet-label'>{bullet.label}</span>
      </div>
    ))
  }

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className='resume-details-carousal'
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    )
  }

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe()
    }
  }, [fadeInSubscription])

  return (
    <div
      className='resume-container screen-container fade-in'
      id={props.id || ''}
    >
      <div className='resume-content'>
        <ScreenHeading title={'Resume'} subHeading={'My formal Bio Details'} />
        <div className='resume-card'>
          <div className='resume-bullets'>
            <div className='bullet-container'>
              <div className='bullet-icons'></div>
              <div className='bullets'>{getBullets()}</div>
            </div>
          </div>

          <div className='resume-bullet-details'>{getResumeScreens()}</div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Resume
