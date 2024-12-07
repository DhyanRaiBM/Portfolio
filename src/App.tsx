import {
  backendExperience,
  frontendExperience,
  miniProjects,
  projects,
} from './constants';
import './index.css';

const App = () => {
  return (
    <div>
      <nav id='desktop-nav'>
        <div className='logo'>Dhyan Rai</div>
        <div>
          <ul className='nav-links'>
            <li>
              <a href='#about'>About</a>
            </li>
            <li>
              <a href='#experience'>Experience</a>
            </li>
            <li>
              <a href='#projects'>Projects</a>
            </li>
          </ul>
        </div>
      </nav>

      <section id='profile'>
        <div className='section__pic-container' id='proImg'>
          <img
            id='profileImage'
            src='/assets/p-shadow.jpg'
            alt='Dhyan Rai profile picture Here'
            style={{}}
          />
        </div>
        <div className='section__text'>
          <p className='section__text__p1'>Hello, I'm</p>
          <h1 className='title'>Dhyan Rai </h1>
          <p className='section__text__p2'>FullStack Developer</p>
          <div className='btn-container'>
            <button
              className='btn btn-color-2'
              onClick={() => window.open('/assets/resume.pdf')}
            >
              Download CV
            </button>
            <button
              className='btn btn-color-1'
              onClick={() =>
                (window.location.href = 'mailto:dhyanraibm@gmail.com')
              }
            >
              Contact
            </button>
          </div>
          <div id='socials-container'>
            <img
              src='/assets/linkedin.png'
              alt='My LinkedIn profile'
              className='icon'
              onClick={() =>
                (window.location.href =
                  'https://www.linkedin.com/in/dhyan-rai-bm/')
              }
            />
            <img
              src='/assets/github.png'
              alt='My Github profile'
              className='icon'
              onClick={() =>
                (window.location.href = 'https://github.com/DhyanRaiBM')
              }
            />
          </div>
        </div>
      </section>
      <section id='about'>
        <p className='section__text__p1'>Get To Know More</p>
        <h1 className='title'>About Me</h1>
        <div className='section-container'>
          <div
            id='aboutMobile'
            className='about-details-container'
            style={{
              justifyContent: 'start',
            }}
          >
            <div
              className='about-containers'
              style={{
                margin: '32px 0',
                ...(window.innerWidth < 640 && { alignItems: 'center' }),
              }}
            >
              <div className='details-container'>
                <img
                  src='/assets/experience.png'
                  alt='Experience icon'
                  className='icon'
                />
                <h3>Experience</h3>
                <p>
                  1 year of <br />
                  FullStack Development
                </p>
              </div>
              <div className='details-container'>
                <img
                  src='/assets/education.png'
                  alt='Education icon'
                  className='icon'
                />
                <h3>Education</h3>
                <p>
                  Bachelor's in Computer Applications
                  <br />
                </p>
              </div>
            </div>
            <div className='text-container'>
              <p>
                Hey there! I'm a developer who loves building things and solving
                problems. Whether it's a new project or just tackling daily
                challenges, I'm always curious and eager to learn something new.
                From creating user-friendly interfaces to fine-tuning backend
                systems, I'm always up for fresh challenges and ready to make a
                difference.
              </p>
            </div>
          </div>
          <div
            id='aboutMobile'
            className='about-details-container'
            style={{
              justifyContent: 'start',
              margin: '32 0 32',
              minWidth: '40%',
            }}
          >
            <div className='about-containers'>
              <div className='details-container'>
                <img
                  src='/assets/postship.svg'
                  alt='Experience icon'
                  className='icon'
                />
                <h3>Presently with </h3>
                <p>
                  <b>Postship</b>
                  <br />
                  <b>as a Software Developer</b>
                </p>
              </div>
            </div>
            <div className='text-container'>
              <p>
                I'm currently working at Postship as a Software Developer. I
                specialize in building user-friendly interfaces and designing
                robust backend systems.
              </p>
            </div>
          </div>
        </div>
        <img
          src='/assets/arrow.png'
          alt='Arrow icon'
          className='icon arrow'
          onClick={() => (window.location.href = './#experience')}
        />
      </section>
      <section id='experience'>
        <p className='section__text__p1'>Explore My</p>
        <h1 className='title'>Experience and Skills</h1>
        <div className='experience-details-container'>
          <div className='about-containers'>
            <div className='details-container'>
              <h2 className='experience-sub-title'>Frontend Development</h2>
              <div id='exp' className='article-container'>
                {frontendExperience.map((exp, idx) => (
                  <article key={idx}>
                    <img
                      src={exp.imgSrc}
                      alt='Experience icon'
                      className='icon'
                    />
                    <div>
                      <h3>{exp.title}</h3>
                      <p>{exp.level}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <div className='details-container'>
              <h2 className='experience-sub-title'>Backend and Tools </h2>
              <div id='exp' className='article-container'>
                {backendExperience.map((exp, idx) => (
                  <article key={idx}>
                    <img
                      src={exp.imgSrc}
                      alt='Experience icon'
                      className='icon'
                    />
                    <div>
                      <h3>{exp.title}</h3>
                      <p>{exp.level}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
        <img
          src='/assets/arrow.png'
          alt='Arrow icon'
          className='icon arrow'
          onClick={() => (window.location.href = './#projects')}
        />
      </section>
      <section id='projects'>
        <p className='section__text__p1'>Browse My Recent</p>
        <h1 className='title'>Projects</h1>
        <div className='experience-details-container'>
          <div className='project-container'>
            {projects.map((project) => (
              <div className='details-container color-container'>
                <div className='article-container'>
                  <img
                    src={project.imgSrc}
                    alt={project.imgAlt}
                    className='project-img'
                  />
                </div>
                <h2 className='experience-sub-title project-title'>
                  {project.projectTitle}
                </h2>
                <div className='btn-container'>
                  <button
                    className='btn btn-color-2'
                    onClick={() => window.open(project.sourceCodeLink)}
                  >
                    Source Code
                  </button>
                  {project.liveDemoLink && (
                    <button
                      className='btn btn-color-1'
                      onClick={() => window.open(project.liveDemoLink)}
                    >
                      Live Demo
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <img
          src='/assets/arrow.png'
          alt='Arrow icon'
          className='icon arrow'
          onClick={() => (window.location.href = './#contact')}
        />
      </section>
      <section id='projects'>
        <p className='section__text__p1'>Projects built by me as a learner :</p>
        <p className='section__text__p1'>
          Projects may take upto a minute to load, Please wait.
        </p>
        {/* <h1 className="title">Projects</h1> */}
        <div className='experience-details-container'>
          <div className='sub-project-container'>
            {miniProjects.map((project) => (
              <div className='details-container color-container'>
                <div className='article-container'>
                  <img
                    src={project.imgSrc}
                    alt={project.imgAlt}
                    className='project-img'
                  />
                </div>
                <h2
                  style={{ fontSize: '20px' }}
                  className='experience-sub-title project-title'
                >
                  {project.projectTitle}
                </h2>
                <div className='btn-container'>
                  <button
                    className='btn1 btn-color-2'
                    onClick={() => window.open(project.sourceCodeLink)}
                  >
                    Source Code
                  </button>
                  {project.liveDemoLink && (
                    <button
                      className='btn btn-color-1'
                      onClick={() => window.open(project.liveDemoLink)}
                    >
                      Live Demo
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <footer className='footer'>
        <nav>
          <div className='nav-links-container'>
            <ul className='nav-links'>
              <li>
                <a href='#about'>About</a>
              </li>
              <li>
                <a href='#experience'>Experience</a>
              </li>
              <li>
                <a href='#projects'>Projects</a>
              </li>
            </ul>
          </div>
        </nav>
        <p>Copyright &#169; 2024 Dhyan Rai. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;
