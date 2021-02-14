import { useState, useContext } from 'react'
import { ViewContext } from '../ViewContext'
import { FcAbout, FcGoogle } from 'react-icons/fc'
import { FaNetworkWired, FaReact, FaRobot, FaPython } from 'react-icons/fa'
import { SiDjango, SiGithub, SiLinkedin, SiTwitter, SiFacebook } from 'react-icons/si'
import { ImPen, ImPencil } from 'react-icons/im'
import michaelAvatar from '../misc/michael-peter.png'
import picture from '../misc/michael-peter.jpg'
import { RiMenuFoldFill } from 'react-icons/ri'

function MobileMenu() {

  const { name, dispatch } = useContext(ViewContext)
  const [menu, setMenu] = useState(false)
  const [zoom, setZoom] = useState('')


  const onClickHandler = (e) => {
    switch (e.target.id || e.target.parentNode.id || e.target.parentNode.parentNode.id || e.target.parentNode.parentNode.parentNode.id) {
      case 'iabout':
        dispatch({ type: 'SET_ABOUT' })
        break
      case 'iworks':
        dispatch({ type: 'SET_WORKS' })
        break
      case 'imern':
        dispatch({ type: 'SET_MERN' })
        break
      case 'idjango':
        dispatch({ type: 'SET_DJANGO' })
        break
      case 'idialogflow':
        dispatch({ type: 'SET_DIALOGFLOW' })
        break
      case 'isnatchbot':
        dispatch({ type: 'SET_SNATCHBOT' })
        break
      case 'ipython':
        dispatch({ type: 'SET_PYTHON' })
        break
      case 'iwebcontent':
        dispatch({ type: 'SET_WEBCONTENT' })
        break
      case 'iarticle':
        dispatch({ type: 'SET_ARTICLE' })
        break
      default:
        dispatch({ type: 'SET_MAIN' })
    }
  }

  return (
    <div className={`mobile-menu ${menu ? "active" : ""}`}>
      <div className="mobile-menu-section" onTouchMove={() => setMenu(false)}>
        {menu ?
          <>
            <div className="top-section" onTouchMove={() => setMenu(!menu)}>
              <img onClick={() => (zoom === '') ? setZoom('zoom') : setZoom('')} src={picture} alt="" className={`picture ${zoom}`} />
              <div className="bio">
                <p className="name"><strong>Michael Peter</strong></p>
                <p className="about">I am passionate about what I do, that is why my works always amaze people. It would be nice working with you too.</p>
              </div>
            </div>

            <ul className="social-links">
              <li><a href="https://github.com/michael-peter" target="_blank" rel="noreferrer"><SiGithub /></a></li>
              <li><a href="https://linkedin.com/in/peterhmichael" target="_blank" rel="noreferrer"><SiLinkedin /></a></li>
              <li><a href="https://twitter.com/PeterHMichael" target="_blank" rel="noreferrer"><SiTwitter /></a></li>
              <li><a href="https://facebook.com/MichaelPeter.me" target="_blank" rel="noreferrer"><SiFacebook /></a></li>
            </ul>
          </>
          :
          <div className="menu-button">
            <img src={michaelAvatar} alt="" />
            <RiMenuFoldFill onClick={() => setMenu(!menu)} />
          </div>
        }


        <div className="bottom-section">
          <div className="menu-list">
            <div>
              <div id="iabout" className={`iabout ${(name === "about") ? "active" : ""}`} onClick={onClickHandler}><FcAbout /><em>{menu ? "About me" : ""}</em></div>
              <div id="iworks" className={`iworks ${(name === "works") ? "active" : ""}`} onClick={onClickHandler}><FaNetworkWired /><em>{menu ? "My works" : ""}</em></div>
            </div>

            <div>

              <div id="imern" className={`ireact ${(name === "mern") ? "active" : ""}`} onClick={onClickHandler}><FaReact /><em>{menu ? " Mern stack" : ""}</em></div>

              <div id="idjango" className={`idjango ${(name === "django") ? "active" : ""}`} onClick={onClickHandler}><SiDjango /><em>{menu ? " Django" : ""}</em></div>

              <div id="idialogflow" className={`idalogflow ${(name === "dialogflow") ? "active" : ""}`} onClick={onClickHandler}><FcGoogle /><em>{menu ? " Dialogflow" : ""}</em></div>

              <div id="isnatchbot" className={`isnatchbot ${(name === "snatchbot") ? "active" : ""}`} onClick={onClickHandler}><span><FaRobot /><em>{menu ? " Snatchbot" : ""}</em></span></div>

              <div id="ipython" className={`ipython ${(name === "python") ? "active" : ""}`} onClick={onClickHandler}><FaPython /><em>{menu ? " Python" : ""}</em></div>

              <div id="iwebcontent" className={`iwebcontent ${(name === "webcontent") ? "active" : ""}`} onClick={onClickHandler}><ImPen /><em>{menu ? " Web content" : ""}</em></div>

              <div id="iarticle" className={`iarticle ${(name === "article") ? "active" : ""}`} onClick={onClickHandler}><ImPencil /><em>{menu ? " Article writing" : ""}</em></div>

            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default MobileMenu