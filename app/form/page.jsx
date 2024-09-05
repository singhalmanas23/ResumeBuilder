"use client"
import React, { useState } from 'react';
import ResumePreview from '@/components/ResumePreview';

const FormPage = () => {
  const [educationFields, setEducationFields] = useState([{ school: "", degree: "", year: "" ,marks:""}]);
  const [experienceFields, setExperienceFields] = useState([{ company: "", position: "", year: "" }]);
  const [projectFields, setProjectFields] = useState([{ title: "", description: "", techStack: "", duration: "" }]);
  const [extraCurricular, setExtraCurricular] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    linkedin: "",
    github: "",
    portfolio: "",
    education: educationFields,
    experience: experienceFields,
    projects: projectFields,
    extraCurricular: ""
  });

  const addEducationField = () => {
    setEducationFields([...educationFields, { school: "", degree: "", year: "" ,marks:""}]);
  };

  const addExperienceField = () => {
    setExperienceFields([...experienceFields, { company: "", position: "", year: "" }]);
  };

  const addProjectField = () => {
    setProjectFields([...projectFields, { title: "", description: "", techStack: "", duration: "" }]);
  };

  const handleEducationChange = (index, event) => {
    const values = [...educationFields];
    values[index][event.target.name] = event.target.value;
    setEducationFields(values);
    setFormData({ ...formData, education: values });
  };

  const handleExperienceChange = (index, event) => {
    const values = [...experienceFields];
    values[index][event.target.name] = event.target.value;
    setExperienceFields(values);
    setFormData({ ...formData, experience: values });
  };

  const handleProjectChange = (index, event) => {
    const values = [...projectFields];
    values[index][event.target.name] = event.target.value;
    setProjectFields(values);
    setFormData({ ...formData, projects: values });
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="container mx-auto flex flex-row mt-10 space-x-10">
      <div className="w-1/2 p-6 border-2 rounded-xl border-neutral-600 text-white">
        <h2 className="text-5xl mb-6 text-orange-400 font-serif text-center border-2 border-neutral-600 rounded-xl py-2 px-1">
          Create Your Resume
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="flex flex-wrap mb-4">
            <div className="w-1/2 pr-2">
              <label htmlFor="firstName" className="block text-sm font-medium mb-1">First Name</label>
              <input type="text" id="firstName" name="firstName" placeholder="Manas" required className="w-full p-2 border border-neutral-600 rounded-xl" onChange={handleChange} />
            </div>
            <div className="w-1/2 pl-2">
              <label htmlFor="lastName" className="block text-sm font-medium mb-1">Last Name</label>
              <input type="text" id="lastName" name="lastName" placeholder="Singhal" required className="w-full p-2 border border-neutral-600 rounded-xl" onChange={handleChange} />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
            <input type="email" id="email" name="email" placeholder="xyz@gmail.com" required className="w-full p-2 border border-neutral-600 rounded-xl" onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="linkedin" className="block text-sm font-medium mb-1">LinkedIn Profile</label>
            <input type="text" id="linkedin" name="linkedin" placeholder="https://xyz.linkedin" required className="w-full p-2 border border-neutral-600 rounded-xl" onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="github" className="block text-sm font-medium mb-1">GitHub Profile</label>
            <input type="text" id="github" name="github" placeholder="https://xyz.github" required className="w-full p-2 border border-neutral-600 rounded-xl" onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="portfolio" className="block text-sm font-medium mb-1">Portfolio Link</label>
            <input type="text" id="portfolio" name="portfolio" placeholder="https://xyz.me" required className="w-full p-2 border border-neutral-600 rounded-xl" onChange={handleChange} />
          </div>
          <div className="border-2 border-neutral-600 py-3 px-4 rounded-xl">
            <h3 className="text-xl mb-4">Education</h3>
            {educationFields.map((field, index) => (
              <div key={index} className="mb-4">
                <input type="text" name="school" placeholder="School" value={field.school} onChange={(event) => handleEducationChange(index, event)} className="w-full p-2 mb-2 border border-neutral-600 rounded-xl" />
                <input type="text" name="degree" placeholder="Degree" value={field.degree} onChange={(event) => handleEducationChange(index, event)} className="w-full p-2 mb-2 border border-neutral-600 rounded-xl" />
                <input type="text" name="year" placeholder="Year" value={field.year} onChange={(event) => handleEducationChange(index, event)} className="w-full p-2 border border-neutral-600 rounded-xl" />
                <input type="text" name="marks" placeholder="Cgpa or percentager" value={field.marks} onChange={(event) => handleEducationChange(index, event)} className="w-full p-2 border border-neutral-600 rounded-xl mt-3" />
              </div>
            ))}
            <button type="button" onClick={addEducationField} className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-4 rounded-xl">Add Education</button>
          </div>
          <div className="border-2 border-neutral-600 py-3 px-4 rounded-xl">
            <h3 className="text-xl mb-4">Experience</h3>
            {experienceFields.map((field, index) => (
              <div key={index} className="mb-4">
                <input type="text" name="company" placeholder="Company" value={field.company} onChange={(event) => handleExperienceChange(index, event)} className="w-full p-2 mb-2 border border-neutral-600 rounded-xl" />
                <input type="text" name="position" placeholder="Position" value={field.position} onChange={(event) => handleExperienceChange(index, event)} className="w-full p-2 mb-2 border border-neutral-600 rounded-xl" />
                <input type="text" name="year" placeholder="Year" value={field.year} onChange={(event) => handleExperienceChange(index, event)} className="w-full p-2 border border-neutral-600 rounded-xl" />
              </div>
            ))}
            <button type="button" onClick={addExperienceField} className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-4 rounded-xl">Add Experience</button>
          </div>
          <div className="border-2 border-neutral-600 py-3 px-4 rounded-xl">
            <h3 className="text-xl mb-4">Projects</h3>
            {projectFields.map((field, index) => (
              <div key={index} className="mb-4">
                <input type="text" name="title" placeholder="Project Title" value={field.title} onChange={(event) => handleProjectChange(index, event)} className="w-full p-2 mb-2 border border-neutral-600 rounded-xl" />
                <input type="text" name="description" placeholder="Project Description" value={field.description} onChange={(event) => handleProjectChange(index, event)} className="w-full p-2 mb-2 border border-neutral-600 rounded-xl" />
                <input type="text" name="techStack" placeholder="Tech Stack Used" value={field.techStack} onChange={(event) => handleProjectChange(index, event)} className="w-full p-2 mb-2 border border-neutral-600 rounded-xl" />
                <input type="text" name="duration" placeholder="Project Duration" value={field.duration} onChange={(event) => handleProjectChange(index, event)} className="w-full p-2 border border-neutral-600 rounded-xl" />
              </div>
            ))}
            <button type="button" onClick={addProjectField} className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-4 rounded-xl">Add Project</button>
          </div>
          <div>
            <h3 className="text-xl mb-4">Extra-Curricular Activities</h3>
            <input type="text" id="extra_curricular" name="extra_curricular" className="w-full p-2 border border-neutral-600 rounded-xl" onChange={handleChange} />
          </div>
          <div className="flex flex-row gap-20">
            <button type="submit" className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 rounded-xl text-white">Submit</button>
            <button type="submit" className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 rounded-xl text-white">Enhance with AI</button>
          </div>
        </form>
      </div>
      <div className="w-1/2">
        <ResumePreview resumeData={formData} />
      </div>
    </div>
  );
};

export default FormPage;
