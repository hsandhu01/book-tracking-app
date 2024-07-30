import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';

const ImageUpload = ({ onUpload }) => {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);

  const onDrop = useCallback(async (acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = async () => {
      const base64data = reader.result;
      setUploading(true);
      setError(null);

      try {
        const res = await axios.post('http://localhost:5000/upload', { data: base64data });
        onUpload(res.data.url);
        setUploading(false);
      } catch (err) {
        setError(err.message);
        setUploading(false);
      }
    };
  }, [onUpload]);

  const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: 'image/*' });

  return (
    <div {...getRootProps()} className="p-4 border-dashed border-4 border-gray-300 rounded-md text-center cursor-pointer">
      <input {...getInputProps()} />
      {uploading ? (
        <p>Uploading...</p>
      ) : (
        <p>Drag 'n' drop a book cover image here, or click to select one</p>
      )}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default ImageUpload;