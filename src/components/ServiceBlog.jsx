import React from "react"; 
import "../static/ServiceBlog.css"
import blog1 from "../static/images/slider1.jpg"
import blog2 from "../static/images/analytics_blog.jpg"
import blog3 from "../static/images/corporate_blog.jpg"
import blog4 from "../static/images/cybersecurity_blog.jpg"


export default function ServiceBlog()
{
  return(
    <div className="BlogContainerdiv">
      <div className="BlogContainer">
        <div className="box">
          <div className="boxContent">
            <span className="title">Overview of Fintech Services</span>
            <div className="content">At Engjobhub, we offer a comprehensive range of services designed to streamline the job search and recruitment process.Our platform provides job seekers with access to a diverse array of job posts spanning various industries and career levels. From entry-level positions to executive roles, we connect talented individuals with opportunities that align with their skills, experience, and aspirations.</div>
          </div>
          <div className="blogdiv">
            <img src={blog1} alt="blog"></img>
          </div>
        </div>
      </div>
      <div className="BlogContainer">
        <div className="box">
          <div className="blogdiv">
            <img src={blog2} alt="blog"></img>
          </div>
          <div className="boxContent">
            <span className="title">Engineering Careers</span>
            <div className="content">Engineering is a dynamic and diverse field with exciting career opportunities. Engineers design cutting-edge technology, solve complex problems, and improve infrastructure, shaping the world around us. Whether in aerospace, civil, mechanical, or electrical engineering, professionals in this field drive meaningful advancements in society. With a strong focus on innovation, creativity, and problem-solving, engineers are in high demand across industries, enjoying competitive salaries and career growth. Whether you're a recent graduate or an experienced professional, engineering offers endless possibilities to push boundaries and make a real impact.
              </div>
          </div>
        </div>
      </div>
      <div className="BlogContainer">
        <div className="box">
          <div className="boxContent">
            <span className="title">Top talent for HR recruitment</span>
            <div className="content">At [Your Job Portal Name], we recognize the vital role of human resources in organizational success. We connect HR professionals with top opportunities across industries, whether you're an HR manager seeking leadership or a specialist looking to grow. For employers, we provide targeted recruitment solutions to help attract top talent. With our extensive network and innovative hiring strategies, we’re committed to building high-performing HR teams that drive businesses forward.</div>
          </div>
          <div className="blogdiv">
            <img src={blog3} alt="blog"></img>
          </div>
        </div>
      </div>
      <div className="BlogContainer">
        <div className="box">
          <div className="blogdiv">
            <img src={blog4} alt="blog"></img>
          </div>
          <div className="boxContent">
            <span className="title">Other Trending Posts</span>
            <div className="content">Cyber Security
              <br></br>
              Big Data analytics
              <br></br>
              Blockchain
              <br></br>
              Internet of Things
              <br></br>
              Artificial Intelligence
              <br></br>
              Human resources</div>
          </div>
        </div>
      </div>
    </div>
  )
}