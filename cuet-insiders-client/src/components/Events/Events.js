import React, { useEffect, useState } from "react";
import './Events.css'
import { Button, Row } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import Event from "./Event";
import { exclamation} from "../Home/SVGs";
import { useLoaderData } from "react-router-dom";

const Events = () => {

    const events = useLoaderData();

    const [query, setQuery] = useState("");
    const [query2, setQuery2] = useState("name");
    const filteredEvents = events.filter((item) => {
        if (query2 === "platform")
            return item.platform.toLowerCase().includes(query.toLowerCase());
        else if (query2 === "department")
            return item.department.toLowerCase().includes(query.toLowerCase());
        else return item.name.toLowerCase().includes(query.toLowerCase());
    });

    const handleChange = (e) => {
        e.preventDefault();
        setQuery("");
        const val = e.target.value;
        setQuery2(val);
    };

    return (
        <div className="container">
            {/* <h2 className="text-center pt-3">Upcomming Events {exclamation}</h2> */}
            <div>
                <form className="d-flex mt-4 mb-4 controls">
                    <select className="text-center me-2 rounded" onChange={handleChange}>
                        <option value="name">Event</option>
                        <option value="department">Department</option>
                    </select>

                    <input
                        className="me-2"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        type="search"
                    />
                    <Button variant="outline-dark"><FaSearch/></Button>
                </form>
            </div>
            
            <div className="events pb-5">
                {filteredEvents.map((event) => (
                <Event key={event.eventId} event={event}></Event>
                ))}
            </div>
        </div>
    );
};

export default Events;
