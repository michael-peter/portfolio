import { useContext } from 'react'
import { ViewContext } from '../ViewContext'
import { SiWhatsapp } from 'react-icons/si'
import displayPicture from '../misc/michael-display.png'

function Main() {

  const { mobile } = useContext(ViewContext)

  return (
    <section className="main-section">
      <article className="propaganda">
        <h1>Design. Develop. <span className="fx">Deploy.</span></h1>
        <p>Got big ideas like me? Why don't we <span className="fx">{"<code/>"}</span> them into life :)</p>
        {mobile && <img src={displayPicture} alt="" />}
        <a href="https://wa.me/2348136020773" target="_blank" rel="noreferrer" className="whatsapp-button"><SiWhatsapp />&nbsp;Let's discuss</a>
      </article>
    </section>
  )
}

export default Main