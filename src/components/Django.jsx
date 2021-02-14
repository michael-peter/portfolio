import Navigation from './Navigation'
import django from '../misc/django.png'
import Contact from './Contact'

function Django() {
  return (
    <section className="django" id="django">
      <div className="container">
        <Navigation />
        <article className="content">
          <h1>Intelligent web apps</h1>

          <p>Python was the first programming language I learned, and it would compete with Javascript if I had to choose which language I am more comfortable with.</p>

          <div><img src={django} alt="" className="photo" /></div>

          <p>The django framework is a Python implementation of web application development. And of course, owing to the ubiquity of Python in the AI world, it can't be denied how intelligent and amazing web apps would be if they were made with django.</p>

          <p>A typical example is writing a chatbot software that could deliver the sophisticated batteries of Natural Language Processing that Python boasts of. Since django works on the server, there is no limitation to the methods we choose to develop the front-end.</p>

          <p>Intelligence coupled with simplicity and usability is what I imagine of if I were to power my Reactjs interface with Python's django. What do you think?</p>

          <Contact />
        </article>
      </div>
    </section>
  )
}

export default Django