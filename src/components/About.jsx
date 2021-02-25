import Navigation from './Navigation'
import Contact from './Contact'
import aboutMePhoto from '../misc/aboutmephoto.png'

function About() {
  return (
    <section className="about-page">
      <div className="container">
        <Navigation />
        <div className="content">
          <h1>About me</h1><hr />
          <div className="essay">
            <p>I have written epistles all over the world but it feels difficult to write about myself. However, I designed a summary about me below and I hope you get thrilled. Also, I want you to know that I'm a wonderful person.</p><br/>
          </div>
          <div className="about-container">
            <div className="about-me-texts">
              <div className="info-class">
                <h3>Personal stuff</h3>
                <p><strong>First name: </strong>Michael</p>
                <p><strong>Last name: </strong>Peter</p>
                <p><strong>Other name: </strong>Honore</p>
                <p><strong>Age: </strong>20</p>
                <p><strong>Email: </strong>michaelpeter.ai@gmail.com</p>
                <p><strong>Location: </strong>Lagos, Nigeria</p>
              </div>

              <div className="info-class">
                <h3>The academia</h3>
                <p><strong>Education: </strong>Undergraduate</p>
                <p><strong>Is studying: </strong>True</p>
                <p><strong>School: </strong>University of Lagos, Nigeria</p>
                <p><strong>Programme: </strong>B.Sc., Biochemistry</p>
                <p><strong>Expected to graduate: </strong>2022</p>
                <em>Don't mind me, I like biochemistry</em>
              </div>
            </div>

            <div className="about-me-photo">

              <div className="how-i-work">
                <p><strong>Freelance: </strong>True</p>
                <p><strong>Contract: </strong>True</p>
                <p><strong>Open-source: </strong>True</p>
                <p><strong>Full-time employment: </strong>If I like the pay</p>
              </div>
              <img src={aboutMePhoto} alt="" />
            </div>
          </div>

          <div className="talk-business">

            <div className="info-class">
              <h3>Skills I've acquired</h3>

              <article className="skill-box">
                <h4>Python</h4>
                <p><strong>Locale: </strong>Machine Learning &amp; Web Development</p>
                <p><strong>Since: </strong>2019</p>
                <p><strong>Mastery:&nbsp;&nbsp;</strong><span className="meter meter-python"></span>&nbsp;72%</p>
                <p><strong>Personal note: </strong>Pandas, Numpy, Scikit-Learn, Nltk, Tensorflow, add to this list. Python is my pot if the project is artificial intelligence, or if it uses artificial intelligence.</p>
              </article>

              <article className="skill-box">
                <h4>Nodejs</h4>
                <p><strong>Locale: </strong>Web &amp; App Development</p>
                <p><strong>Since: </strong>2020</p>
                <p><strong>Mastery:&nbsp;&nbsp;</strong><span className="meter meter-js"></span>&nbsp;89%</p>
                <p><strong>Personal note: </strong>Javascript wasn't my friend until Node. Node exposed me to a world in which Javascript can do pretty much everything simple and sweet. I aspire to advance through the ranks and use Js to create the most amazing technologies that other developers can also use.</p>
              </article>

              <article className="skill-box">
                <h4>Basic Web Development Stack</h4>
                <p><strong>Locale: </strong>Static Web Development</p>
                <p><strong>Since: </strong>2019</p>
                <p><strong>HTML:&nbsp;&nbsp;</strong><span className="meter meter-html"></span>&nbsp;95%</p>
                <p><strong>CSS:&nbsp;&nbsp;</strong><span className="meter meter-css"></span>&nbsp;97%</p>
                <p><strong>DOM Javascript:&nbsp;&nbsp;</strong><span className="meter meter-domjs"></span>&nbsp;80%</p>
                <p><strong>Personal note: </strong>Of course, we all started with HTML/CSS/Js. However, for me, I spent quite a length of time coding in pure HTML/CSS/Js, and this really helped me to grasp the big frameworks with full decisiveness.</p>
              </article>

              <article className="skill-box">
                <h4>Web Frameworks</h4>
                <p><strong>Locale: </strong>Full-stack Web Development</p>
                <p><strong>Since: </strong>2020</p>
                <p><strong>Reactjs:&nbsp;&nbsp;</strong><span className="meter meter-reactjs"></span>&nbsp;83%</p>
                <p><strong>Expressjs:&nbsp;&nbsp;</strong><span className="meter meter-expressjs"></span>&nbsp;70%</p>
                <p><strong>MongoDB:&nbsp;&nbsp;</strong><span className="meter meter-mongodb"></span>&nbsp;64%</p>
                <p><strong>Django:&nbsp;&nbsp;</strong><span className="meter meter-django"></span>&nbsp;79%</p>
                <p><strong>Flask:&nbsp;&nbsp;</strong><span className="meter meter-flask"></span>&nbsp;72%</p>
                <p><strong>Personal note: </strong>As you can see, I seem to be very ambitious about software development, having learnt a good sum of exquisite technologies. I don't know where this is taking me but I'm sure I'll be the best developer in the world.</p>
              </article>

              <article className="skill-box">
                <h4>Artificial Intelligence</h4>
                <p><strong>Locale: </strong>NLP &amp; Chatbot Development</p>
                <p><strong>Since: </strong>2019</p>
                <p><strong>Dialogflow:&nbsp;&nbsp;</strong><span className="meter meter-bot"></span>&nbsp;99%</p>
                <p><strong>Snatchbot:&nbsp;&nbsp;</strong><span className="meter meter-bot"></span>&nbsp;99%</p>
                <p><strong>Chatfuel:&nbsp;&nbsp;</strong><span className="meter meter-bot"></span>&nbsp;99%</p>
                <p><strong>Python NLP:&nbsp;&nbsp;</strong><span className="meter meter-bot"></span>&nbsp;99%</p>
                <p><strong>Personal note: </strong>I was a zealous biochemist before I became a computer geek. Chatbot development was the first digital skill I learnt and I can do wonders with these technologies.</p>
              </article>

              <article className="skill-box">
                <h4>Copywriting</h4>
                <p><strong>Locale: </strong>Content/technical writing, documentation, web copies</p>
                <p><strong>Since: </strong>2016</p>
                <p><strong>Mastery:&nbsp;&nbsp;</strong><span className="meter meter-bot"></span>&nbsp;99%</p>
                <p><strong>Personal note: </strong>I admit that I'm a technical writer. Even still, my humor allows me to write simple and irresistible web content.</p>
              </article>

              <article className="skill-box">
                <h4>Education</h4>
                <p><strong>Locale: </strong>Tutor &amp; speaker</p>
                <p><strong>Since: </strong>2012</p>
                <p><strong>Mastery:&nbsp;&nbsp;</strong><span className="meter meter-bot"></span>&nbsp;99%</p>
                <p><strong>Personal note: </strong>For topics I'm eloquent in, as represented by my skills above, perhaps, I'm the best educator you can ever find in the world. I can teach angels!</p>
              </article>
            </div>
            <Contact />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About