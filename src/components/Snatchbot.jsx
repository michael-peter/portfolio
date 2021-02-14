import Navigation from './Navigation'
import snatchbot from '../misc/snatchbot.png'
import Contact from './Contact'
import { Chatbots } from './Examples'

function Snatchbot() {
  return (
    <section className="snatchbot">
      <div className="container">
        <Navigation />
        <article className="content">
          <h1>A simpler way to make chatbots</h1>

          <div><img src={snatchbot} alt="" className="photo" /></div>

          <p>Snatchbot comes with all the spices that chatbot applications need&mdash;quick replies, cards and scrollable galleries, response types, simpler webhook integration, easier deployment, flexible customization and much more.</p>

          <p>Building chatbots with snatchbot is quicker, but that does not rob the app of the basic intelligence we would expect from a software claiming to represent one before their golden customers.</p>

          <p>To make a chatbot for you, I would need information about your business, what exactly you want people to do when they communicate with your robot, to which we can even give a fancy name, and also the grade of your bot's intelligence (which is proportional to the amount you'll pay). The development is fast and the price is cheap.</p>

          <p>Even so, your chatbot retains all the necessary functions that are needed to promote your business and serve your customers right. Well, except things you do not specify. <span className="fx">Let's make a chatbot for you</span>!</p>

          <p>Want to see some examples?</p>

          <Chatbots />

          <Contact />
        </article>
      </div>
    </section>
  )
}

export default Snatchbot