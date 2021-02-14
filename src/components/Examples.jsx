import mySBT from '../misc/mySBT.png'
import myPortfolio from '../misc/meta-image.png'
import amandaSBT from '../misc/amanda-mysbt.png'
import feedible from '../misc/feedible.jpeg'
import aufmevic from '../misc/aufmevic.png'
import jabu from '../misc/jabu.jpeg'

export function Chatbots() {

  return (
    <div className="works-container chatbots-work">
      <div className="work-box" onClick={() => window.open("https://webchat.snatchbot.me/649c7fca980c20c94b4f1dd22da1bf305bb5c112e64e2d56cc255c121f30d2aaS")}>
        <img src={feedible} alt="" className="work-box-image" />
        <article className="work-box-text">
          <p>Juliana</p>
          <p>Juliana is the virtual assistant and online sales-person for a retaurant, Feedible Grills.</p>
          <p className="framework-spec">&bull; Snatchbot</p>
        </article>
      </div>

      <div className="work-box" onClick={() => window.open("https://webchat.snatchbot.me/607f663ab107d6f81486e150e63e792cec8cc12b4088c89c7f036f2db2d859c2")}>
        <img src={aufmevic} alt="" className="work-box-image" />
        <article className="work-box-text">
          <p>Aufmevic</p>
          <p>This chatbot helps Aufmevic Nig. Limited to manage customers and collect orders online. Aufmevic Nig. Limited is a well-established Nigerian company specialized in the fabrication, supply, installation and maintenance of shade structures.</p>
          <p className="framework-spec">&bull; Snatchbot</p>
        </article>
      </div>

      <div className="work-box" onClick={() => window.open("https://webchat.snatchbot.me/d45beaeeb6dfa2b9d97e7f2629a091e4155fad3afdcdd845a9615e45f0037e06")}>
        <img src={jabu} alt="" className="work-box-image" />
        <article className="work-box-text">
          <p>Joe</p>
          <p>Joe is an online registrar for the Centre for Distance Learning, Joseph Ayo Babalola University. Joe takes the details of students who want to attend the university and he provides answers to common questions regarding admission.</p>
          <p className="framework-spec">&bull; Snatchbot</p>
        </article>
      </div>
      <p>...and more!</p>
    </div>
  )
}


export function Websites() {
  return (

    <ul className="web-apps-list">
      <li onClick={() => window.open("http://mysbt.space")} className="web-app-container">
        <div className="web-app-icon">
          <img src={mySBT} alt="" />
        </div>
        <div className="web-app-content">
          <p className="web-app-title">mySBT | Chatbots everywhere, your business everywhere!</p>
          <p className="web-app-description">
            How is the feeling of running your business online 24/7 everywhere, reaching everyone even while you sleep? We develop chatbots to do that and even more for you!
        </p>
          <p className="web-app-url"><em>mysbt.space</em></p>
        </div>
      </li>

      <li onClick={() => window.open("http://amanda.mysbt.space")} className="web-app-container">
        <div className="web-app-icon">
          <img src={amandaSBT} alt="" />
        </div>
        <div className="web-app-content">
          <p className="web-app-title">Amanda&reg; | Artificial intelligence for the market</p>
          <p className="web-app-description">
            Amanda® recommends your business to one million and one people surfing the internet for interesting stuff. She attends to your clients and prospects in a human-like approach, completing your sales and keeping customers intrigued.
        </p>
          <p className="web-app-url"><em>amanda.mysbt.space</em></p>
        </div>
      </li>

      <li onClick={() => window.open("https://michael-peter.github.io")} className="web-app-container">
        <div className="web-app-icon">
          <img src={myPortfolio} alt="" />
        </div>
        <div className="web-app-content">
          <p className="web-app-title">Michael Peter | Full-stack developer &amp; Chatbot Engineer</p>
          <p className="web-app-description">
            Get help creating amazing web apps and a chatbot to manage your clients! Do you have a design already, or you need help with that too? Connect with the best developer in the world!
          </p>
          <p className="web-app-url"><em>michael-peter.github.io</em></p>
        </div>
      </li>

      <p>...and more</p>
    </ul>
  )
}