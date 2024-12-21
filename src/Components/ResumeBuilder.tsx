"use client";
import React, { useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";

const ResumeBuilder: React.FC = () => {
  const [resumeData, setResumeData] = useState<Record<string, any>>({
    name: "",
    email: "",
    phone: "",
    address: "",
    Job_Title: "",
    education: {
      Institution: "",
      Location: "",
      Degree_Type: "",
      Field_of_study: "",
      Start_Month:"",
      End_Month:"",
      Percentage:"",
    
    },
    Experiance:{
      company_Name:"",
      Employer:"",
      Job_title:"",
      startmonth:"",
      endmonth:"",
      location:"",
      description:""
    },
    Skills:{
      Add_languages:"",
      Add_frameworks:"",
      Add_tools:"",
      Add_databases:""
 },
 Projects:{
  Project_Name:"",
  Technologies_Used:"",
  Project_Link:"",
  Description:""
 },
 Certifications:{
  Certificate_Name:"",
  Certificate_Link:"",
  Issued_by:""

 }
  });

  const handleInputChange = (
    section: string,
    key: string | null,
    value: string
  ) => {
    if (key) {
      setResumeData((prevState) => ({
        ...prevState,
        [section]: {
          ...(prevState[section] as Record<string, string>),
          [key]: value,
        },
      }));
    } else {
      setResumeData((prevState) => ({
        ...prevState,
        [section]: value,
      }));
    }
  };

  const resumeRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    content: () => resumeRef.current || null,
    documentTitle: "My_Resume",
  });

  return (
    <div className="flex h-screen bg-gray-200">
      {/* Input Form */}
      <div className="w-1/3 bg-gray-100 p-6 overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Resume Details</h2>

        {/* Personal Information */}
        <div className="mb-4">
          <details>
          <summary className="text-lg font-semibold mb-2">
          Personal Information
          </summary>
          <input
            type="text"
            placeholder="Full Name"
            className="block w-full mb-2 p-2 border border-gray-300 rounded"
            value={resumeData.name}
            onChange={(e) => handleInputChange("name", null, e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="block w-full mb-2 p-2 border border-gray-300 rounded"
            value={resumeData.email}
            onChange={(e) => handleInputChange("email", null, e.target.value)}
          />
          <input
            type="text"
            placeholder="Phone"
            className="block w-full mb-2 p-2 border border-gray-300 rounded"
            value={resumeData.phone}
            onChange={(e) => handleInputChange("phone", null, e.target.value)}
          />
          <textarea
            placeholder="Address"
            className="block w-full mb-2 p-2 border border-gray-300 rounded"
            value={resumeData.address}
            onChange={(e) => handleInputChange("address", null, e.target.value)}
          />
          <input
            type="text"
            placeholder="Job Title (e.g., Full Stack Developer)"
            className="block w-full mb-2 p-2 border border-gray-300 rounded"
            value={resumeData.Job_Title}
            onChange={(e) => handleInputChange("Job_Title", null, e.target.value)}
          />
          </details>
        </div>

        {/* Education */}
        <div className="mb-4">
          <details>
            <summary className="text-lg font-semibold mb-2">

          Education
            </summary>
          <input
            type="text"
            placeholder="Institution"
            className="block w-full mb-2 p-2 border border-gray-300 rounded"
            value={resumeData.education.Institution}
            onChange={(e) =>
              handleInputChange("education", "Institution", e.target.value)
            }
          />
          <input
            type="text"
            placeholder="Location"
            className="block w-full mb-2 p-2 border border-gray-300 rounded"
            value={resumeData.education.Location}
            onChange={(e) =>
              handleInputChange("education", "Location", e.target.value)
            }
          />
          <input
            type="text"
            placeholder="Degree Type"
            className="block w-full mb-2 p-2 border border-gray-300 rounded"
            value={resumeData.education.Degree_Type}
            onChange={(e) =>
              handleInputChange("education", "Degree_Type", e.target.value)
            }
          />
          <input
            type="text"
            placeholder="Field of study"
            className="block w-full mb-2 p-2 border border-gray-300 rounded"
            value={resumeData.education.Field_of_study}
            onChange={(e) =>
              handleInputChange("education", "Field_of_study", e.target.value)
            }
          />
          <input
            type="text"
            placeholder=" Start Month /Year"
            className="block w-full mb-2 p-2 border border-gray-300 rounded"
            value={resumeData.education.Start_Month}
            onChange={(e) =>
              handleInputChange("education", "Start_Month", e.target.value)
            }
          />
          <input
            type="text"
            placeholder=" End Month /Year"
            className="block w-full mb-2 p-2 border border-gray-300 rounded"
            value={resumeData.education.End_Month}
            onChange={(e) =>
              handleInputChange("education", "End_Month", e.target.value)
            }
          />
          <input
            type="number"
            placeholder="Percentage"
            className="block w-full mb-2 p-2 border border-gray-300 rounded"
            value={resumeData.education.Percentage}
            onChange={(e) =>
              handleInputChange("education", "Percentage", e.target.value)
            }
          />
          </details>
        </div>
        {/* Experiance */}
        <div className="mb-4">
          <details>
            <summary className="text-lg font-semibold mb-2">Experiance</summary>
          <input
            type="text"
            placeholder="company name"
            className="block w-full mb-2 p-2 border border-gray-300 rounded"
            value={resumeData.Experiance.company_Name}
            onChange={(e) =>
              handleInputChange("Experiance", "company_Name", e.target.value)
            }/>
          <input
            type="text"
            placeholder="Employer"
            className="block w-full mb-2 p-2 border border-gray-300 rounded"
            value={resumeData.Experiance.Employer}
            onChange={(e) =>
              handleInputChange("Experiance", "Employer", e.target.value)
            }
          />
          <input
            type="text"
            placeholder="Job Title"
            className="block w-full mb-2 p-2 border border-gray-300 rounded"
            value={resumeData.Experiance.Job_title}
            onChange={(e) =>
              handleInputChange("Experiance", "Job_title", e.target.value)
            }
          />
          <input
            type="text"
            placeholder="Start month"
            className="block w-full mb-2 p-2 border border-gray-300 rounded"
            value={resumeData.Experiance.startmonth}
            onChange={(e) =>
              handleInputChange("Experiance", "startmonth", e.target.value)
            }
          />
          <input
            type="text"
            placeholder="End month"
            className="block w-full mb-2 p-2 border border-gray-300 rounded"
            value={resumeData.Experiance.endmonth}
            onChange={(e) =>
              handleInputChange("Experiance", "endmonth", e.target.value)
            }
          />
           <input
            type="text"
            placeholder="location"
            className="block w-full mb-2 p-2 border border-gray-300 rounded"
            value={resumeData.Experiance.location}
            onChange={(e) =>
              handleInputChange("Experiance", "location", e.target.value)
            }
            
          />
          <input
            type="text"
            placeholder="description"
            className="block w-full mb-2 p-2 border border-gray-300 rounded"
            value={resumeData.Experiance.description}
            onChange={(e) =>
              handleInputChange("Experiance", "description", e.target.value)
            }
            
          />
          
          </details>
        </div>

        {/* Skills */}
        <div className="mb-4">
          <details>
            <summary className="text-lg font-semibold mb-2">

          Skillsets
            </summary>
            <input
            type="text"
            placeholder="Add_languages"
            className="block w-full mb-2 p-2 border border-gray-300 rounded"
            value={resumeData.Skills.Add_languages}
            onChange={(e) =>
              handleInputChange("Skills", "Add_languages", e.target.value)
            }
            
          />
          <input
            type="text"
            placeholder="Add frameworks"
            className="block w-full mb-2 p-2 border border-gray-300 rounded"
            value={resumeData.Skills.Add_frameworks}
            onChange={(e) =>
              handleInputChange("Skills", "Add_frameworks", e.target.value)
            }
            
          />
          <input
            type="text"
            placeholder="Add tools"
            className="block w-full mb-2 p-2 border border-gray-300 rounded"
            value={resumeData.Skills.Add_tools}
            onChange={(e) =>
              handleInputChange("Skills", "Add_tools", e.target.value)
            }
            
          />
          <input
            type="text"
            placeholder="Add database"
            className="block w-full mb-2 p-2 border border-gray-300 rounded"
            value={resumeData.Skills.Add_databases}
            onChange={(e) =>
              handleInputChange("Skills", "Add_databases", e.target.value)
            }
            
          />
          
          </details>
        </div>

        {/* Projects */}
        <div className="mb-4">
          <details>
            <summary className="text-lg font-semibold mb-2">

          Projects
            </summary>
            <input
            type="text"
            placeholder="Project Name"
            className="block w-full mb-2 p-2 border border-gray-300 rounded"
            value={resumeData.Projects.Project_Name}
            onChange={(e) =>
              handleInputChange("Projects", "Project_Name", e.target.value)
            }
            
          />
           <input
            type="text"
            placeholder="Project Link"
            className="block w-full mb-2 p-2 border border-gray-300 rounded"
            value={resumeData.Projects.Project_Link}
            onChange={(e) =>
              handleInputChange("Projects", "Project_Link", e.target.value)
            }
            
          />
          <input
            type="text"
            placeholder="Technologies Used"
            className="block w-full mb-2 p-2 border border-gray-300 rounded"
            value={resumeData.Projects.Technologies_Used}
            onChange={(e) =>
              handleInputChange("Projects", "Technologies_Used", e.target.value)
            }
            
          />
         
          <input
            type="text"
            placeholder="Description"
            className="block w-full mb-2 p-2 border border-gray-300 rounded"
            value={resumeData.Projects.Description}
            onChange={(e) =>
              handleInputChange("Projects", "Description", e.target.value)
            }
            
          />
          
          </details>
        </div>
        {/* Certifications */}
        <div className="mb-4">
          <details>
            <summary className="text-lg font-semibold mb-2">Certifications</summary>
            <input
            type="text"
            placeholder="Certificate Name"
            className="block w-full mb-2 p-2 border border-gray-300 rounded"
            value={resumeData.Certifications.Certificate_Name}
            onChange={(e) =>
              handleInputChange("Certifications", "Certificate_Name", e.target.value)
            }
            
          />
          <input
            type="text"
            placeholder="Certificate Link"
            className="block w-full mb-2 p-2 border border-gray-300 rounded"
            value={resumeData.Certifications.Certificate_Link}
            onChange={(e) =>
              handleInputChange("Certifications", "Certificate_Link", e.target.value)
            }
            
          />
          
          
          
          
          </details>
        </div>

        {/* Download Button */}
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handlePrint}
        >
          Download Resume
        </button>
      </div>

      {/* Resume Preview */}
      <div className="w-2/3 p-6 bg-white" ref={resumeRef}>
        <div className=" border shadow-md mx-20  px-10 py-10 h-screen">
        <h1 className="text-3xl font-bold text-center">{resumeData.name}</h1>
        <h2 className="text-sm font-light text-center"> {resumeData.Job_Title}</h2>
        <p className="text-center text-sm mb-6">
          {resumeData.email} | {resumeData.phone} | {resumeData.address} 
        </p>
            {/* Education Part */}
        <div className="mt-6">
          <h2 className="text-xl font-medium mb-2">Education</h2>
          <hr className="bg-black py-[1px]" />
          <div className="flex justify-between">
            <div>
              <h1>{resumeData.education.Institution}</h1>
            </div>
            <div>
              <h1>{resumeData.education.Location}</h1>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex">
              <h1>{resumeData.education.Degree_Type}:</h1>
              <h1>{resumeData.education.Field_of_study}</h1>
            </div>
            <div className="flex gap-2">
              <h1>{resumeData.education.Start_Month}-</h1>
              <h1>{resumeData.education.End_Month}</h1>

            </div>
          </div>
          <p>
             {" "}
            {/* {resumeData.education.Degree_Type} */}
            {/* {resumeData.education.Start_Month}
            {resumeData.education.End_Month} */}


          </p>
          <p>Percentage: {resumeData.education.Percentage}%</p>
        </div>
            {/*Experaince  */}
            <div className="mt-6">
             <h2 className="text-xl font-bold mb-2">Experiance</h2>
             <div className="flex gap-2">
              <h1>{resumeData.Experiance.company_Name}</h1>|
              <h1>{resumeData.Experiance.Employer}</h1>
             </div>
             <p>
              {resumeData.Experiance.Job_title}
            {resumeData.Experiance.startmonth}  {resumeData.Experiance.endmonth}  {resumeData.Experiance.location}
            </p>
           
            <p> {resumeData.Experiance.description}</p>
          </div>
            {/* SKILLS */}
        <div className="mt-6">
          <h2 className="text-xl font-bold mb-2">SKILLS</h2>
          <div className="flex gap-10">
          <h1>Programming Languages:</h1>
          <p>{resumeData.Skills.Add_languages}</p>
          </div>
          <div className="flex gap-10">
          <h1>Libraries / Frameworks:</h1>
          <p>{resumeData.Skills.Add_frameworks}</p>
          </div>
          <div className="flex gap-10">
          <h1>Tools/Platform:</h1>
          <p>{resumeData.Skills.Add_tools}</p>
          </div>
          <p>Databases:{resumeData.Skills.Add_databases}</p> 

        </div>
        {/* Projects */}
        <div className="mt-6">
          <h2 className="text-xl font-bold mb-2">Projects</h2>
          <div className="flex justify-between">
          <div className="flex gap-2">
          <p>{resumeData.Projects.Project_Name}</p>
          <a href={resumeData.Projects.Project_Link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline hover:text-blue-700">
          Link</a>        
          </div>
          <div>
          <p>{resumeData.Projects.Technologies_Used}</p> 
          </div>
          </div>
          {/* <p>{resumeData.Projects.Project_Link}</p> */}
          <p>{resumeData.Projects.Description}</p> 
          </div>
        {/* Certifications */}
        <div className="mt-6">
          <h2 className="text-xl font-bold mb-2">Certifications</h2>
          <p>{resumeData.Certifications.Certificate_Name}</p>
          <p>{resumeData.Certifications.Certificate_Link}</p> 
          

        </div>
      </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;
