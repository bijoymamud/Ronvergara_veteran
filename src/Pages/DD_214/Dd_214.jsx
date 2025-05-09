import React, { useState } from 'react';

const DD214 = () => {
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  return (
    <section className="h-screen bg-gray-200 flex flex-col justify-center items-center pt-10 px-2 md:px-0">
      <h1 className="text-[#0A3161] md:text-4xl text-xl text-center font-bold pb-10">DD-214 Upload & Auto-Population</h1>
      <div className="bg-white md:p-20 flex items-center justify-center md:h-[50vh] md:w-[50vw] h-[60vh] w-full md:px-0 shadow-lg rounded-lg">
        <div className="flex flex-col items-center justify-center">
          {uploadedFile ? (
            <div className="text-center px-2 md:px-0">
              <h2 className="text-xl font-semibold mb-4">Uploaded File:</h2>
              {uploadedFile.type.startsWith('image/') ? (
                <img
                  src={URL.createObjectURL(uploadedFile)}
                  alt="Uploaded file preview"
                  className="max-w-full max-h-64 rounded-md"
                />
              ) : (
                <p className="text-gray-600">{uploadedFile.name}</p>
              )}
              <button
                onClick={() => setUploadedFile(null)}
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                Remove File
              </button>
            </div>
          ) : (
            <div className="text-center">
              <h1 className="text-2xl font-bold mb-8">Upload File</h1>
              <div className="border-2 border-dashed border-blue-500 w-80 h-40 flex items-center justify-center rounded-md">
                <label className="flex flex-col items-center cursor-pointer">
                  <svg
                    className="w-8 h-8 text-blue-500 mb-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                  <span className="text-blue-500">Click to Upload or drag and drop</span>
                  <span className="text-gray-400 text-sm">(Max. file size: 50 MB)</span>
                  <input
                    type="file"
                    className="hidden"
                    accept="*/*"
                    onChange={handleFileUpload}
                  />
                </label>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DD214;