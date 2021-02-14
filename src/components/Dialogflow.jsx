import Navigation from './Navigation'
import dialogflow from '../misc/dialogflow.png'
import Contact from './Contact'

function Dialogflow() {
  return (
    <section className="django">
      <div className="container">
        <Navigation />
        <article className="content">
          <h1>Robots on the internet</h1>

          <div><img src={dialogflow} alt="" className="photo" /></div>

          <p>You probably didn't know you can already own a robot, not neccesarily a physical one. A class of software robots called chatbots are performing well in the business ecosystem, getting leads and setting offices online while the doors are closed and the employees sleeping.</p>

          <p>How does it feel to have a software like the Google Assistant, or the Amazon Alexa work for you, attending to your customers and keeping repititive tasks in check?</p>

          <p>After learning the Python programming language, I discovered the indispensability of the chatbot technology. It means enterprenuers won't have to worry managing thousands of customer requests at the same time, and companies on budget won't even have to hire more workers if they could pay me <span className="fx">$200</span> to build a chatbot for them.</p>

          <p>Chatbots are as ubiquitous as the internet, at just every virtual place you can think of&mdash;social media, websites, mobile apps, hardwares, etc. That means your business can be everywhere as well. <span className="fx">Send me a message to get started</span>!</p>

          <Contact />
        </article>
      </div>
    </section>
  )
}

export default Dialogflow