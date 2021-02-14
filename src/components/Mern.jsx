import Navigation from './Navigation'
import { Websites } from './Examples'
import Contact from './Contact'
import mern from '../misc/mern.png'

function Mern() {

  return (
    <section className="mern">
      <div className="container">
        <Navigation />
        <article className="content">
          <h1>Javascript everywhere</h1>

          <p>The MERN stack consists of four independent but beautifully complementary technologies that make&mdash;for the most part&mdash;full-stack development easier, faster, maintainable, and more interesting.</p>

          <div><img src={mern} alt="" className="photo" /></div>

          <p>It comprises a database technology&mdash;<span className="fx">MongoDB</span>, a server-side flexible framework&mdash;<span className="fx">Expressjs</span>, a turnaround for UI/UX development&mdash;<span className="fx">Reactjs</span> and the environment which brings them all together&mdash;<span className="fx">Nodejs</span>.</p>

          <p>Javascript is undeniably the most successful programming language in the evolving world, of course not without some potential competitors, and being able to use this language to develop a complete application is a fortune.</p>

          <p>Initially, I did not like Javascript because it was cumbersome to do simple DOM manipulation. What was more frustrating was I couldn't replace it&mdash;the browser just had to read Javascript.</p>

          <p>However, my exposure to the Reactjs library changed everything. I could write Js more like I write Python, building interfaces became easier and I could spend more of my time thinking about the design rather than the code. It was really amazing until it got even more spectacular, I dived into full-stack development and started consuming Expressjs and MongoDB.</p>

          <p>Do you want to see some of the web apps I made using the MERN stack technologies?</p>

          <Websites />

          <Contact />

        </article>
      </div>
    </section>
  )
}

export default Mern