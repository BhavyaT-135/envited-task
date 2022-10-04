import './createPage.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const CreatePage = ({eventList, setEventList}) => {
    const [currEvent, setCurrEvent] = useState({});

    const addEvent = async (event) => {
 
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        let payload = {
            title: data.get('eventTitle'),
            address_line1: data.get('addressLine1'),
            address_line2: data.get('addressLine2'),
            host: data.get('hostName'),
            start_time: data.get('startTime'),
            end_time: data.get('endTime')
        }
        Object.keys(payload).forEach(key => {
            if (payload[key] === null || payload[key] === "") {
                delete payload[key];
            }
        });
        setCurrEvent(payload);
    }

    useEffect(() => {
    setEventList(currEvent);
  }, [setEventList, currEvent]);

    return (
        <Container className="cp-cont" maxWidth="sm">
          <div className="cp-textDiv">
                <div className="cp-text">Please enter the</div>
                <Typography 
                    fontSize="36px"
                    fontWeight="700"  
                    font="helvetica"
                    marginBottom="-10px"
                    marginTop="-10px"
                    sx={{
                        backgroundcolor: "primary",
                        backgroundImage: `linear-gradient(90deg, #8456EC 24.2%, #E87BF8 120.46%);`,
                        backgroundSize: "100%",
                        backgroundRepeat: "repeat",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                    }}>
                    Event
                </Typography>
                <div className="cp-text">details below!</div>
            </div>
            <form className="cp-form" onSubmit={addEvent}>
                <div className="cp-form-row">
                    <label className="cp-label">Event Title</label>
                    <input className="cp-input" type="text" placeholder="Event Title" name="eventTitle" id="eventTitle" />
                </div>
                <div className="cp-form-row"> 
                    <label className="cp-label">Event Host</label>
                    <input className="cp-input" type="text" placeholder="Event Host" name="hostName" id='hostName'/>
                </div>
                <div className="cp-form-row">
                    <label className="cp-label">Start Time</label>
                    <input className="cp-input" type="datetime-local" name="startTime" id='startTime'/>
                </div>
                <div className="cp-form-row">
                    <label className="cp-label">End Time</label>
                    <input className="cp-input" type="datetime-local" name="endTime" id='endTime'/>
                </div>
                <div className="cp-form-row">
                    <label className="cp-label">Address Line 1</label>
                    <input className="cp-input" type="text" placeholder="Address Line 1" name="addressLine1" id='addressLine1'/>
                </div>
                <div className="cp-form-row">
                    <label className="cp-label">Address Line 2</label>
                    <input className="cp-input" type="text" placeholder="Address Line 2" name="addressLine2" id='addressLine2'/>
                </div>
                <button className="cp-button" type="submit">
                    🎉Create Event
                </button>
                <Link to='/events' className='cp-link'>▶ Go to Events Page!</Link>
            </form>   
        </Container>
    )
}

export default CreatePage