import Navigation from './Navigation'
import Contact from './Contact'

function Article() {
  return (
    <section className="article">
      <div className="container">
        <Navigation />
        <article className="content">
          <h1>Words like they are meant for you!</h1>

          <p>I don't get bored of writing, it is simply my thing. I have come a long way in this pursuit from my elementary education, when I first learnt to write essays and formulate hilarious tortoise-stories.</p>

          <p>Blog posts, email copies, executive summaries, documentations, tutorials and everything in-between.</p>

          <p>You can read some of my stories on Medium <a href="https://medium.com/@micha.el" target="_blank" rel="noreferrer">here.</a></p>

          <Contact />
        </article>
      </div>
    </section>
  )
}

export default Article