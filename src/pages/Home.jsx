import React from "react"
import SliderHome from "../components/SliderHome"

export default function Home()
{
  const slides = [
    { url: "https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?cs=srgb&dl=pexels-asadphoto-457882.jpg&fm=jpg", title: "beach" },
    { url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8fDA%3D", title: "beach" },
    { url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8fDA%3D", title: "beach" },
    

  ];
  const containerStyles = {
    width: "100%",
    height: "900px",
    padding: "50px 200px 50px 200px",
  };
  return (
    <div style={containerStyles}>
      <SliderHome slides={slides} />
      
    </div>

  )
}