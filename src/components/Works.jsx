import Navigation from './Navigation'
import { Websites, Chatbots } from './Examples'
import Contact from './Contact'

function Works() {
  return (
    <section className="works">
      <div className="container">
        <Navigation />

        <div className="content">
          <h1>My works</h1>

          <h4>Websites</h4>
          <Websites />

          <h4>Chatbots</h4>
          <Chatbots />
          <br />
          <hr />
          <Contact />
        </div>
      </div>
    </section>
  )
}

export default Works