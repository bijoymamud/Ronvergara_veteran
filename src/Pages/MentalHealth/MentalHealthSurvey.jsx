import React from 'react';
import mentalLogo from '../../assets/mental_health_logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const MentalHealthSurvey = () => {
const navigate = useNavigate() 

const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Handle form submission
  const onSubmit = (data) => {
    console.log('Form Data:', data);
    localStorage.setItem("mental_health_survey", JSON.stringify(data))
    navigate("/mental_health_details")
  
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 mt-10">
      <div className="m:p-6 p-2 rounded-lg w-full max-w-4xl h-[75vh] flex flex-col justify-between">
        {/* Header Section (Centered Image and Text) */}
        <div className="bg-[#002B5C] w-full rounded-lg p-6 mb-6 flex flex-col items-center">
          <div className="w-52 h-52 bg-purple-600 rounded-full flex items-center justify-center mb-3">
            <img src={mentalLogo} alt="Mental Health Logo" className="w-32 h-32 object-cover" />
          </div>
          <h1 className="text-white text-2xl font-medium mt-2">Mental Health</h1>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 flex-grow mt-10">
          <label className="block text-[18px] font-medium text-gray-700">
            How Stressful Was Your Job On A Scale Of 1-10?
            <select
              {...register('mentail_stressLevel', { required: 'Please select a stress level' })}
              className="mt-1 block w-full text-[14px] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="1-3">1-3: Low Stress</option>
              <option value="4-6">4-6: Moderate Stress</option>
              <option value="7-9">7-9: High Stress</option>
              <option value="10">10: Extremely High Stress</option>
            </select>
            {errors.stressLevel && (
              <p className="text-red-500 text-sm mt-1">{errors.stressLevel.message}</p>
            )}
          </label>
        </form>

        {/* Buttons Section (At the Bottom) */}
        <div className="flex justify-center gap-10 md:mt-6 mt-20 pb-10 md:pb-0">
          <button
            type="submit"
            onClick={handleSubmit(onSubmit)}
            className="bg-[#B31942] text-white py-2 px-6 md:px-20 md:w-[200px] w-[150px] rounded-md hover:bg-[#aa2b4d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 font-semibold"
          >
            Continue
          </button>
          <div>
            <Link
              to="#"
              className="bg-white text-blue-800 py-2 px-6 md:px-20 md:w-[200px] w-[150px] border border-blue-800 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 font-semibold"
              onClick={() => window.history.back()}
            >
              Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentalHealthSurvey;


// import React from 'react';
// import mentalLogo from "../../assets/mental_health_logo.png";
// import { Link } from 'react-router-dom';

// const MentalHealthSurvey = () => {
//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100 mt-10">
//       <div className=" m:p-6 p-2 rounded-lg  w-full max-w-4xl h-[75vh]  flex flex-col justify-between">
//         {/* Header Section (Centered Image and Text) */}
//         {/* Header with Icon */}
//                 <div className="bg-[#002B5C] w-full rounded-lg p-6  mb-6 flex flex-col items-center">
//                <div className="w-52 h-52 bg-purple-600 rounded-full flex items-center justify-center mb-3">
//           <img src={mentalLogo} alt="" className="w-32 h-32 object-cover" />
//         </div>
        
        
//                   <h1 className="text-white text-2xl font-medium mt-2">Mental Health</h1>
//                 </div>

//         {/* Form Section */}
//         <form className="space-y-4 flex-grow mt-10">
//           <label className="block text-[18px] font-medium text-gray-700">
//             How Stressful Was Your Job On A Scale Of 1-10?
//             <select className="mt-1 block w-full text-[14px] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
//               <option value="1-3">1-3: Low Stress</option>
//               <option value="4-6" selected>4-6: Moderate Stress</option>
//               <option value="7-9">7-9: High Stress</option>
//               <option value="10">10: Extremely High Stress</option>
//             </select>
//           </label>
//         </form>

//         {/* Buttons Section (At the Bottom) */}
//              <div className="flex justify-center gap-10 md:mt-6 mt-20 pb-10 md:pb-0">
//                                <button 
//                                 type="submit"
//                                >
//                                 {/* <Link
//                                 // to="/mental_health_details"
//                                  type="submit"
//                                  className="bg-[#B31942] text-white py-2 px-6 md:px-20 md:w-[200px] w-[150px] rounded-md hover:bg-[#aa2b4d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 font-semibold"
//                                >
//                                </Link> */}
//                                Continue
//                                </button>
//                            <div>
//                                 <Link
//                                  type="button"
//                                  className="bg-white text-blue-800 py-2 px-6 md:px-20 md:w-[200px] w-[150px] border border-blue-800 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 font-semibold"
//                                  onClick={() => window.history.back()}
//                                >
//                                  Back
//                                </Link>
//                            </div>
//                              </div>
//       </div>
//     </div>
//   );
// };

// export default MentalHealthSurvey;