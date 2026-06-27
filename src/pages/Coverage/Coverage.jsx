// import React from 'react';

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import { useLoaderData } from "react-router";
import { useRef } from "react";

const Coverage = () => {
    const position = [23.6850, 90.3563];
    const serviceCenters = useLoaderData();
    const mapRef = useRef(null);
    console.log(serviceCenters)
    const handleSearch=e=>{
        e.preventDefault();
        const location = e.target.location.value;
        const district = serviceCenters.find(c=>c.district.toLowerCase().includes(location.toLowerCase()));
        if(district){
            const coord = [district.latitude, district.longitude];
            console.log(coord);
            mapRef.current.flyTo(coord,14)
        }
    }

    return (
        <div className="">
            <h1 className="text-4xl font-bold">We are available in 64 districts</h1>
            <div>
                <form onSubmit={handleSearch}>
                    <label className="input">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input type="search" name="location" className="grow" placeholder="Search" />
                    </label>
                </form>
            </div>
            <div className="mt-4 border-2 w-full">
                <MapContainer center={position}
                    zoom={8}
                    scrollWheelZoom={false}
                    className="h-[800px]"
                    ref={mapRef}
                >
                    <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png">
                    </TileLayer>
                    {
                        serviceCenters.map((serviceCenter, index) => <Marker key={index} position={[serviceCenter.latitude, serviceCenter.longitude]}>
                            <Popup>
                                <strong>{serviceCenter.city}</strong><br />
                                <p>Service Area: {serviceCenter.covered_area.join(', ')}</p>
                            </Popup>
                        </Marker>)
                    }
                </MapContainer>
            </div>
        </div>
    );
};

export default Coverage;