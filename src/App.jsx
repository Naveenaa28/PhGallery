import React, { useState, useCallback } from 'react';
import ImageUploader from './components/ImageUploader'; // Updated path

const App = () => {
  const [files, setFiles] = useState([]);

  const handleUpload = useCallback((newFiles) => {
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  }, []);

  const handleDelete = useCallback((index) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  }, []);

  return (
    <div>
      <h1>Drag & drop some files here, or click to select files</h1>
      <ImageUploader onUpload={handleUpload} />
      <ul>
        {files.map((file, index) => (
          <li key={index}>
            <img src={file.preview} alt={`preview ${index}`} style={{ width: '100px' }} />
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
