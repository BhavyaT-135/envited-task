import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import EventsPage from "./components/EventsPage/EventsPage";
import LandingPage from "./components/LandingPage/LandingPage";
import CreatePage from "./components/CreatePage/CreatePage";

function App() {
  const [eventList, setEventList] = useState({
      title: "Treasure Hunt",
      address_line1: "33, Street No. 32",
      address_line2: "NY City",
      host: "Bhavya Tewari",
      start_time: "19 August 2023 5:00 PM",
      end_time: "19 August 2023 9:00 PM",
  });


  return (
    <Router>
    <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/create" element={<CreatePage eventList = {eventList} setEventList={setEventList} />} />
        <Route path="/events" element={<EventsPage eventList= {eventList} />} />
    </Routes>
  </Router>
  );
}

export default App;
