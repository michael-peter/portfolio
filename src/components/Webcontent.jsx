import Navigation from './Navigation'
import Contact from './Contact'

function Webcontent() {
  return (
    <section className="webcontent">
      <div className="container">
        <Navigation />
        <article className="content">
          <h1>A talking website</h1>

          <p>You have been on my profile for a while, so you kinda know how my words flow. If you like my expression and choice of words, then you probably would be confident to have me write the content of your websites.</p>

          <p>A web content is supposed to be simple, readable and understandable by anyone who visits such site, except you want to filter people who are not shakespare out of your site, but that won't be nice 😅</p>

          <p>Communication is important and is what invites people to buy your ideas. When people receive offers, they want to know if they understand it well enough and if they can communicate with the seller. Your offers have to be simple in words so that visitors can understand and engage with them.</p>

          <p>However, simple words are not enough. To catch humans, you need a "sweet tongue", some characteristic sum of words that are difficult to ignore. You need convincing statements and promising headers.</p>

          <p>You need a talented copywriter. <span className="fx">You need me!</span></p>

          <p>At clients' request, I provide copywriting assistance with all of my remaining services such as web development and chatbot development. My humour, if the client wishes so, is imbued in my chatbot applications and the web pages I code. So, apart from the awesome design that glues people's attention to the website, the words don't let them go either.</p>

          <Contact />
        </article>
      </div>
    </section>
  )
}

export default Webcontent