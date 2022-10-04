import './eventsPage.css';
import EPImg from '../../assets/EventsPage.png'

const EventsPage = () => {
  return (
    <div className="ep-cont" maxWidth="sm">
        <img src={EPImg} alt="Events Page" className="ep-img" /> 
        <div className='ep-text'>
              <div className="ep-title">Birthday Bash</div> 
              <div className='ep-text-sub'>Hosted by Elysia</div>
          </div>
        <div className='ep-row-flex'>
            <div className='ep-col-flex'>
                <div className='ep-text-prim'>18 August 6:00PM</div>
                <div className='ep-text-sec'>to 19 August 1:00PM UTC + 10</div>        
            </div>    
        </div>
        <div className='ep-row-flex'>
            <div className='ep-col-flex'>
                <div className='ep-text-prim'>Street Name</div>
                <div className='ep-text-sec'>Suburb, State, Postcode</div>        
            </div>    
        </div>    
    </div>
  )
}

export default EventsPage