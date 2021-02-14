import { useState, useContext } from "react"
import { ViewContext } from '../ViewContext'
import letsTalk1 from '../misc/letstalk4.png'
import letsTalk2 from '../misc/letstalk2.png'
import letsTalk3 from '../misc/letstalk3.png'
import letsTalk4 from '../misc/letstalk1.png'
import { SiUpwork, SiFiverr } from 'react-icons/si'

function Contact() {

  const { name } = useContext(ViewContext)

  const [contact, setContact] = useState(false)

  const [message, setMessage] = useState()

  const encodeMessage = {
    subject: encodeURI(`Client | ${name.toUpperCase()}`),
    body: encodeURI(message)
  }

  const onClickHandler = (e) => {

    if (e.target.id === "mail") window.open(`mailto:michaelpeter.ai@gmail.com?subject=${encodeMessage.subject}&body=${encodeMessage.body}`)

    if (e.target.id === "whatsapp") window.open(`https://wa.me/2348136020773?text=${encodeMessage.body}`)
  }

  return (
    <>
      <p>Let's connect and talk about your next project</p>
      {
        contact ?
          <div className="contact-container">
            <div className="contact-area">
              <p className="contact-question">What would you like to tell me?</p>
              <textarea name="message" id="message" cols="20" rows="5" className="contact-message" placeholder="Type your message here and we'll start the conversation from there :)" onChange={(e) => setMessage(e.target.value)} value={message}>
              </textarea>
            </div>
            <div className="contact-options">
              <button className="contact-mail" id="mail" onClick={onClickHandler}>Send as mail</button>
              <button className="contact-whatsapp" id="whatsapp" onClick={onClickHandler}>Send as WhatsApp message</button>
            </div>

            <hr />
            <p style={{ display: "flex", alignItems: "center" }}>You can also hire me on these freelancing sites...&nbsp;
              <span style={{ color: "green", fontSize: "30px" }}>
                <a href="https://www.upwork.com/freelancers/~0124c41b8b14579817" target="_blank" rel="noreferrer" style={{ color: "inherit", textDecoration: "none" }}><SiUpwork /></a>
              </span>
              &nbsp;&nbsp;&nbsp;
              <span style={{ color: "darkgreen", fontSize: "30px" }}>
                <a href="https://www.fiverr.com/peterhmichael" target="_blank" rel="noreferrer" style={{ color: "inherit", textDecoration: "none" }}><SiFiverr /></a>
              </span></p>
          </div> :

          <div className="connect-graphics">
            {
              (name === "mern") ?
                <img src={letsTalk1} alt="" /> :
                (name === "django") ?
                  <img src={letsTalk2} alt="" /> :
                  (name === "dialogflow") ?
                    <img src={letsTalk3} alt="" /> :
                    <img src={letsTalk4} alt="" />
            }
          </div>
      }

      <button onClick={() => setContact(!contact)} className="connect">{contact ? "Close connect" : "Connect"}</button>

    </>
  )
}

export default Contact