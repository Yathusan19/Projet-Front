import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"; 

export default function Map() {
    const { isLoaded } = useLoadScript({
        GoogleMapApiKey: "AIzaSyBuaJmUts7zPf8_RF5fxr2sBwIdRvQTDFM",
    })

    if (!isLoaded) return <div>Loading...</div>
    return(
        <ShowMap/>
    )
}

function ShowMap(){
    return <GoogleMap 
            zoom={10} 
            center={{ lat:44, lng: -80 }} 
            className="show-map">
            </GoogleMap>
}