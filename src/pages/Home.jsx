import React from "react"
import SliderHome from "../components/SliderHome";
import HomePageForm from "../components/HomePageForm";
import CardSlider from "../components/CardSlider";
import CompanySlider from "../components/CompanySlider";
export default function Home()
{
  const slides = [
    { url: "https://media.istockphoto.com/id/918365088/photo/african-american-man-browsing-work-online-using-job-search-computer-app.jpg?s=612x612&w=0&k=20&c=AkT-aylthGQumNMO8aTJG8d5sJdUwNPN4oIp83CE0GY=", title: "job" },
    { url: "https://engjobhub.com/img/-man-working-at-night-with-computer.jpg", title: "job" },
    { url: "https://media.istockphoto.com/id/1307598870/photo/male-indian-hr-recruiter-or-employer-holding-cv-having-online-virtual-job-interview-meeting.jpg?s=612x612&w=0&k=20&c=EPiNSwYCJbbXOsNqlkHrXtDCIxZ4pU3L-97ZWF_FPgc=", title: "beach" },
    

  ];
  const containerStyles = {
    width: "100%",
    height: "850px",
    margin:"100px 0px 0px 0px",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
  };

  return (
    <>
      <div style={containerStyles}>
        <SliderHome slides={slides} />
      </div>
      <CardSlider/>
      <HomePageForm/>
      <CompanySlider/>
    </>
  )
}