import React, { useState, useRef, ChangeEvent } from 'react';
import { useRouter } from 'next/router';
import { CreateJobSeekerProfileRequest } from 'api-requests/account-user';
import { useAuth } from 'hooks/useAuthProvider';
import { PersonalformDatatypes } from '../../PersonalProfileTemplate';

//Styled-Component
import { CustomBtn } from 'styles/globalStyles';
import {
  StepFormContainer,
  StepInputWrapper,
} from '../StepOneP/StepOnePStyles';
import {
  UploaderContent,
  ImageUploadWrapper,
  UploaderBtnWrapper,
  PdfWrapper,
} from './StepTwoPStyles';

interface Props {
  onPrevStep: () => void;
  formData: PersonalformDatatypes;
}

const StepTwoForm = ({ onPrevStep, formData }: Props) => {
  const router = useRouter();
  const { showAlert, resetUser } = useAuth();
  const [selectedFile, setSelectedFile] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [stepTwoFormData, setStepTwoFormData] = useState({
    education: '',
    currentPosition: '',
    experience: '',
    skills: '',
    yearsOfExperience: '',
    cvUrl: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setStepTwoFormData({
      ...stepTwoFormData,
      [name]: value,
    });
  };

  function readFileAsDataURL(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => resolve(reader.result as string);
      reader.onerror = () => reject(new Error('Error reading file'));

      reader.readAsDataURL(file);
    });
  }

  // Upload image to cloudinary
  async function handleOnSubmit(file: File) {
    setIsLoading(true);
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
      stepTwoFormData.cvUrl = data.secure_url; // Set the URL in state
    } catch (error) {
      console.error('Upload Error:', error);
    } finally {
      setIsLoading(false); // Set loading to false when upload completes (success or failure)
    }
  }

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      try {
        const dataUrl = await readFileAsDataURL(file);

        await handleOnSubmit(file);
      } catch (error) {
        console.error('Error uploading file to Cloudinary:', error);
        // Handle error
      }
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click(); // Trigger the click event of the file input
  };

  const handlePrev = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onPrevStep();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Exclude location field before sending data to API
    const token = localStorage.getItem('userToken');

    if (
      stepTwoFormData.currentPosition &&
      selectedFile &&
      stepTwoFormData.education &&
      stepTwoFormData.experience &&
      stepTwoFormData.skills &&
      !Number.isNaN(Number(stepTwoFormData.yearsOfExperience)) &&
      token !== null
    ) {
      try {
        //construct api data to be sent
        const dataToSend = {
          ...formData,
          currentPosition: stepTwoFormData.currentPosition,
          education: stepTwoFormData.education,
          experience: stepTwoFormData.experience,
          skills: stepTwoFormData.skills,
          yearsOfExperience: Number(stepTwoFormData.yearsOfExperience),
          cvUrl: selectedFile,
        };

        // Send dataToSend to your API
        const data = await CreateJobSeekerProfileRequest(dataToSend, token);
        resetUser(data);
        //console.log(dataToSend)
        showAlert(true, 'Profile Updated!', 'success');
        setStepTwoFormData({
          education: '',
          currentPosition: '',
          experience: '',
          skills: '',
          yearsOfExperience: '',
          cvUrl: '',
        });

        //Redirect on successful submission
        router.push('/apply-for-job/home');
      } catch (error: any) {
        showAlert(true, error.message, 'failure');
        // console.log(error.message)
      }
    }
  };

  // console.log(selectedFile, formData)

  return (
    <StepFormContainer onSubmit={handleSubmit}>
      <StepInputWrapper>
        <label>Education</label>
        <input
          type="text"
          name="education"
          id="education"
          placeholder="Enter your education info"
          value={stepTwoFormData.education}
          onChange={handleInputChange}
          required
        />
      </StepInputWrapper>

      <StepInputWrapper>
        <label>Current Position</label>
        <input
          type="text"
          name="currentPosition"
          id="currentPosition"
          placeholder="Enter your current position"
          value={stepTwoFormData.currentPosition}
          onChange={handleInputChange}
          required
        />
      </StepInputWrapper>

      <StepInputWrapper>
        <label>Experience</label>
        <textarea
          name="experience"
          id="experience"
          cols={20}
          rows={4}
          placeholder="Enter Experience(Please separate with line breaks)"
          value={stepTwoFormData.experience}
          onChange={handleInputChange}
          required
        ></textarea>
      </StepInputWrapper>

      <StepInputWrapper>
        <label>Skills</label>
        <input
          type="text"
          name="skills"
          id="skills"
          placeholder="Enter skills(seperate with commas)"
          value={stepTwoFormData.skills}
          onChange={handleInputChange}
          required
        />
      </StepInputWrapper>

      <StepInputWrapper>
        <label>Years of experience</label>
        <input
          type="number"
          name="yearsOfExperience"
          id="yearsOfExperience"
          placeholder="Enter a valid number"
          value={stepTwoFormData.yearsOfExperience}
          onChange={handleInputChange}
          required
        />
      </StepInputWrapper>

      <StepInputWrapper>
        <label>Upload CV</label>
        {isLoading ? ( // Display loading indicator while isLoading is true
          <p>Loading...</p>
        ) : selectedFile ? (
          <PdfWrapper>
            <span>
              <i className="fa-regular fa-file"></i>
            </span>
            <div>
              <h3>CV pdf</h3>
              <p>100% uploaded</p>
            </div>
            <span onClick={() => setSelectedFile('')}>
              <i className="fa-regular fa-trash-can"></i>
            </span>
          </PdfWrapper>
        ) : (
          <ImageUploadWrapper>
            <input
              type="file"
              ref={fileInputRef}
              accept=".pdf" // Specify to accept only PDF files
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />

            <UploaderContent onClick={handleButtonClick}>
              <span>
                <i className="fa-regular fa-cloud-arrow-up"></i>
              </span>
              <p>
                <span>Click to upload</span> or drag and drop PDF(max.800x400px)
              </p>
            </UploaderContent>
          </ImageUploadWrapper>
        )}
      </StepInputWrapper>

      <UploaderBtnWrapper>
        <CustomBtn
          type="submit"
          onClick={handlePrev}
          bgColor="var(--color-bg-100)"
          textColor="var(--color-font-400)"
        >
          Back
        </CustomBtn>
        <CustomBtn type="submit">Proceed</CustomBtn>
      </UploaderBtnWrapper>
    </StepFormContainer>
  );
};

export default StepTwoForm;
