import { useState, useRef } from 'react';

export function useCloudinaryUpload() {
  const [selectedFile, setSelectedFile] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  async function handleOnSubmit(file: File) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'exmgpa2v');

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/da1blr6bb/image/upload`,
        {
          method: 'POST',
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error('Failed to upload to Cloudinary');
      }

      const data = await response.json();
      setSelectedFile(data.secure_url);
      return data.secure_url; // Return the URL
    } catch (error) {
      console.error('Upload Error:', error);
      throw error;
    }
  }

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      try {
        handleOnSubmit(file);
      } catch (error) {
        console.error('Error uploading file to Cloudinary:', error);
        // Handle error
      }
    }
  }

  function handleButtonClick() {
    fileInputRef.current?.click();
  }

  return {
    selectedFile,
    fileInputRef,
    handleFileChange,
    handleButtonClick,
    setSelectedFile,
  };
}
