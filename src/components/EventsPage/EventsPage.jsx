import './eventsPage.css';
import EPImg from '../../assets/EventsPage.png'
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaCalendarAlt } from 'react-icons/fa';
import {FaAngleRight} from 'react-icons/fa';

const EventsPage = ({ eventList }) => {
  console.log(eventList)
  return (
    <div className="ep-cont">
        <img src={EPImg} alt="Events Page" className="ep-img" /> 
        <div className='ep-text'>
              <div className="ep-title">{eventList.title}</div> 
              <div className='ep-text-sub'>Hosted by {eventList.host}</div>
          </div>
        <div className='ep-row-flex'>
            <FaCalendarAlt className='ep-icons'/>
            <div className='ep-col-flex'>
                <div className='ep-text-prim'>{new Date(eventList.start_time).toUTCString()}</div>
                <div className='ep-text-sec'>to {eventList.end_time}</div>        
            </div>  
            <FaAngleRight className='ep-arrow'/>  
        </div>
        <div className='ep-row-flex'>
            <FaMapMarkerAlt className='ep-icons'/>  
            <div className='ep-col-flex'>
                <div className='ep-text-prim'>{eventList.address_line1}</div>
                <div className='ep-text-sec'>{eventList.address_line2}</div>        
            </div>
            <FaAngleRight className='ep-arrow'/>  
        </div>    
    </div>
  )
}

export default EventsPage