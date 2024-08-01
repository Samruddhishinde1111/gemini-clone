import React, { useContext } from 'react'
import './main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/context'

const main = () => {

    const{onSent, recentPrompt, showResult, loading, resultData, setInput, input} = useContext(Context)

  return (
    <div className='main'>
        <div className="nav">
            <P>Gemini</P>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">

            {!showResult
            ?<>
            <div className="greet">
                <p><span>Hwllo, Dev.</span></p>
                <p>how can I help you today?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>suggest beautiful places to see on upcoming roadtrip</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>Briefly summarize this concept: Urban planning</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>Brainstorm team bonding activities for our team retreat</p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                    <p>improvr readability of following code</p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>
             </>
             :<div className='result'>

                <div className="result-title">
                    <img src={assets.user_icon} alt="" />
                    <p>{recentPrompt}</p>
                </div>
                <div className="resultData">
                    <img src={assets.gemini_icon} alt="" />
                    <p dangerouslySetInnerHTML={{__html:resultData}}></p>
                </div>
                </div>
        
        }
            
            <div className="main-bottom">
                <div className="search-box">
                    <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here'/>
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src="" alt={assets.mic_icon} />
                        <img onClick={()=>onSent()} src="" alt={assets.send_icon} />
                    </div>
                </div>
                <p className="bottom-info">
                    Gemini may display accurate info
                </p>
            </div>
        </div>
      
    </div>
  )
}

export default main
