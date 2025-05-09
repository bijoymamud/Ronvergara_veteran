import React from 'react';
import mentalLogo from "../../assets/mental_health_logo.png";
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const MedicalPositionDetails = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
const navigate = useNavigate()
  const onSubmit = (data) => {
    console.log("medicalPorsiton",data); 
    localStorage.setItem("medical_position_details", JSON.stringify(data))
    navigate("/crash_details")
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 pt-24 pb-10 mt-10">
      <div className="md:p-6 p-2 rounded-lg w-full max-w-4xl flex py- flex-col justify-between">
        {/* Header Section (Centered Image and Text) */}
         <div className="bg-[#002B5C] w-full rounded-lg p-6 mb-6 flex flex-col items-center">
                                            <div className="w-52 h-52 bg-purple-600 rounded-full flex items-center justify-center mb-3">
                                              <img src={mentalLogo} alt="Mental Health Logo" className="w-32 h-32 object-cover" />
                                            </div>
                                            <h1 className="text-white text-2xl font-medium mt-2">Mental Health</h1>
                                          </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-5">
          {/* Did You Work In A Medical Position Or Other Position Where You Witnessed Severe Accidents/Deaths Frequently? */}
          <label className="block text-lg font-medium text-gray-700">
            Did You Work In A Medical Position Or Other Position Where You Witnessed Severe Accidents/Deaths Frequently?
            <select
              {...register("medicalPosition", { required: "This field is required" })}
              className={`mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm ${errors.medicalPosition ? 'border-red-500' : ''}`}
            >
              <option value="yes" selected>Yes</option>
              <option value="no">No</option>
            </select>
            {errors.medicalPosition && <span className="text-red-500 text-sm">{errors.medicalPosition.message}</span>}
          </label>

          {/* Dates Of Incident */}
          <label className="block text-lg font-medium text-gray-700">
            Dates Of Incident
            <input
              {...register("incidentDates", { required: "This field is required" })}
              type="date"
              className={`mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm ${errors.incidentDates ? 'border-red-500' : ''}`}
              placeholder="MM/DD/YYYY"
            />
            {errors.incidentDates && <span className="text-red-500 text-sm">{errors.incidentDates.message}</span>}
          </label>

          {/* Location Of Incident */}
          <label className="block text-lg font-medium text-gray-700">
            Location Of Incident
            <input
              {...register("incidentLocation", { required: "This field is required" })}
              type="text"
              className={`mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm ${errors.incidentLocation ? 'border-red-500' : ''}`}
              placeholder="Enter location"
            />
            {errors.incidentLocation && <span className="text-red-500 text-sm">{errors.incidentLocation.message}</span>}
          </label>

          {/* Type Of Incident */}
          <label className="block text-lg font-medium text-gray-700">
            Type Of Incident
            <select
              {...register("incidentType", { required: "This field is required" })}
              className={`mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm ${errors.incidentType ? 'border-red-500' : ''}`}
            >
              <option value="accident">Accident</option>
              <option value="injury">Injury</option>
              <option value="assault">Assault</option>
              <option value="naturalDisaster">Natural Disaster</option>
              <option value="other">Other</option>
            </select>
            {errors.incidentType && <span className="text-red-500 text-sm">{errors.incidentType.message}</span>}
          </label>

          {/* Specific Details Of Incident */}
          <label className="block text-lg font-medium text-gray-700 pb-10">
            Specific Details Of Incident
            <textarea
              {...register("incidentDetails", { required: "This field is required" })}
              className={`mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm h-32 resize-none ${errors.incidentDetails ? 'border-red-500' : ''}`}
              placeholder="Enter details here..."
            />
            {errors.incidentDetails && <span className="text-red-500 text-sm">{errors.incidentDetails.message}</span>}
          </label>

       <div className="flex justify-center gap-10 md:mt-6 mt-20 md:pb-10 ">
                                            
                                             <button
                                            
                                              type="submit"
                                              className="bg-[#B31942] text-white py-2 px-6 md:px-20 md:w-[200px] w-[150px] rounded-md hover:bg-[#aa2b4d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 font-semibold"
                                            >
                                              Continue
                                            </button>
                                     
                                        <div>
                                             <Link
                                              type="button"
                                              className="bg-white text-blue-800 py-2 px-6 md:px-20 md:w-[200px] w-[150px] border border-blue-800 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 font-semibold"
                                              onClick={() => window.history.back()}
                                            >
                                              Back
                                            </Link>
                                        </div>
                                          </div>

        </form>

     
      </div>
    </div>
  );
};

export default MedicalPositionDetails;