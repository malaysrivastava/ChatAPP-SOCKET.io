import React from'react';



import onlineIcon from '../../icons/onlineIcon.png';
import closeIcon from '../../icons/closeIcon.png';


import './InfoBar.css';
const InfoBar =({room}) =>(
   <>
    <div className="infobar" style={{display: 'flex',
    'align-items': 'center',
    'justify-content': 'space-between',
    background: '#99862f',
    'border-radius': '4px 4px 0 0',
    height: '60px',
    width: '100%'}}>
    <div className="leftInnerContainer" style={{'flex': '0.5',
        display: 'flex',
        'align-items': 'center',
        'margin-left': '5%',
        color:'white'}}>
    <img className="onlineIcon" src={onlineIcon} alt="online image" style={{
        'margin-right': '15%'
      }}/>
    <h3>{room}</h3>
    </div>
    <div className="rightInnerContainter" style={{display: 'flex',
    'flex':'0.5',
    'justify-content': 'flex-end',
    'margin-right': '5%'}}>
    <a  className="offlineIcon" href="/"><img src={closeIcon} alt="close image" /></a>
    </div>
    </div>
    </>
    )

export default InfoBar;