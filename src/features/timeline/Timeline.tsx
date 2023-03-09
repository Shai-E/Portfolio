import { useEffect } from 'react';
import './Timeline.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Emulator } from '../emulator/Emulator';

interface TimelineProps {
  position?: string; children?: any; description?:string; organization?: string; dates?: string;index: number;
}

export function TimelineStep ({position, description, children, dates, organization, index}:TimelineProps) {
  return (<div className={`container ${index % 2 === 0 ? 'left' : 'right' }`}>
    <div data-aos={`fade-${index % 2 !== 0 ? 'left' : 'right' }`} data-aos-easing="spring"
     data-aos-duration="400" className="content">
      <h2>{position}</h2>
      <h3>{organization}</h3>
      <h6>{dates}</h6>
      {children}
      <p>{description}</p>
    </div>
  </div>
  )
}

export function Timeline() {

  useEffect(()=>{
    AOS && AOS.init();
  },[AOS])

  const data = [
    {
      organization: "IDI Ventures",
      position:"React Native Developer – Mobile Team",
      dates:"2021 – TODAY",
      children:<Emulator/>, 
      description:"Developing a new trading platform. Have implemented all types of navigation with fully  customized designs. Have dealt with optimizing performance in long real-time changing lists  (due to socket connections that change the trading value constantly). Have created reusable  components for quick full control over the app and custom hooks for reusable logic. Have  implemented the dark mode, key based localization with i18n, and search logic. Used Redux  Toolkit for global state management. Used mostly Reanimated for handling animations."
    },
    {
      organization: "8200 Alumni Consultants",
      position:"Webmaster",
      dates:"2021",
      // children:<Emulator/>, 
      description:"Building fully responsive landing pages. Have worked with several styling and animation  libraries, and have created some cool features such as this Wheel of Fortune tweakable  component: https://shai-e.github.io/wheel/ "
    },
    {
      organization: "8200 Alumni Consultants",
      position:"Webmaster",
      dates:"2021",
      // children:<Emulator/>, 
      description:"Building fully responsive landing pages. Have worked with several styling and animation  libraries, and have created some cool features such as this Wheel of Fortune tweakable  component: https://shai-e.github.io/wheel/ "
    },
  ]

  return (
    <div className="timeline">
      {data.map((props, index)=><TimelineStep key={index} {...props} index={index} />)}
    </div>
  );
}
