import React from "react";
import "../static/ResumeTemplate.css";

const templates = [
  { id: 1, imgSrc: "https://placehold.co/300x300", title: "Template 1" },
  { id: 2, imgSrc: "https://placehold.co/300x300", title: "Template 2" },
  { id: 3, imgSrc: "https://placehold.co/300x300", title: "Template 3" },
  { id: 4, imgSrc: "https://placehold.co/300x300", title: "Template 4" },
];

const ResumeTemplates = () => {
  return (
    <section className="templates-section">
      <h2>Resume Templates</h2>
      <div className="templates-grid">
        {templates.map((template) => (
          <div key={template.id} className="template-card">
            <img src={template.imgSrc} alt={template.title} />
            <h3>{template.title}</h3>
            <div className="download-buttons">
              <a href="#" className="download-btn pdf-btn">
                Download PDF
              </a>
              <a href="#" className="download-btn word-btn">
                Download Word
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResumeTemplates;
