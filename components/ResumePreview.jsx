const ResumePreview = ({ resumeData }) => {
    return (
      <div className="resume-preview border p-6 bg-white text-black">
        <h1 className="text-center text-2xl font-bold">{`${resumeData.firstName} ${resumeData.lastName}`}</h1>
        <p className="text-center">{resumeData.email} | {resumeData.linkedin} | {resumeData.github} | {resumeData.portfolio}</p>
        
        <h2 className="text-xl mt-4 font-semibold">Education</h2>
        {resumeData.education.map((edu, index) => (
          <div key={index}>
            <p>{edu.school} | {edu.degree} | {edu.year}</p>
          </div>
        ))}
  
        <h2 className="text-xl mt-4 font-semibold">Projects</h2>
        {resumeData.projects.map((project, index) => (
          <div key={index}>
            <p><strong>{project.title}</strong></p>
            <p>{project.description}</p>
            <p><em>{project.techStack}</em></p>
            <p>{project.duration}</p>
          </div>
        ))}
  
        <h2 className="text-xl mt-4 font-semibold">Experience</h2>
        {resumeData.experience.map((exp, index) => (
          <div key={index}>
            <p>{exp.company} | {exp.position} | {exp.year}</p>
          </div>
        ))}
  
        <h2 className="text-xl mt-4 font-semibold">Extra-Curricular Activities</h2>
        <p>{resumeData.extra_curricular}</p>
      </div>
    );
  };
  
  export default ResumePreview;
  