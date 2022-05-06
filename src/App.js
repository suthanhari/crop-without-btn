import './App.css';
import React, { useState } from 'react';
import ImageCropper from './component/GetCropped';

function App() {

  const [imageToCrop, setImageToCrop] = useState(undefined);
  const [croppedImage, setCroppedImage] = useState(undefined);

  const onUploadFile = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      const reader = new FileReader();

      reader.addEventListener('load', () =>
        setImageToCrop(reader.result)
      );

      reader.readAsDataURL(event.target.files[0]);
    }
  };


  return (
    <>
      <div className='container'>
        
        <div className='row'>
          <div className='col-lg-6'>

            <input
              type="file"
              accept="image/*"
              onChange={onUploadFile}
            />
            <div>
              <ImageCropper
                imageToCrop={imageToCrop}
                onImageCropped={(croppedImage) => setCroppedImage(croppedImage)}
              />
            </div>
            {
              croppedImage &&
              <div>
                <h2>Cropped Image</h2>
                <img
                  alt="Cropped Image"
                  src={croppedImage}
                />
              </div>
            }
          </div>
        </div>

      </div>
    </>
  );
}

export default App;
