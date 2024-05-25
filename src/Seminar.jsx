import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const Seminar = () => {
  const [title, setTitle] = useState('');
  const [place, setPlace] = useState('');
  const [previewImage, setPreviewImage] = useState(null);
  const {user} = useSelector((state)=>state.user)
  console.log(user)
console.log(user.token)
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!previewImage) {
        console.error('Preview image is required');
        return;
      }

      const formData = new FormData();
      formData.append('title', title);
      formData.append('place', place);
      formData.append('previewImage', previewImage);
console.log(Array.from(formData))
      const response = await fetch('http://localhost:3000/seminar', {
        method: 'POST',
        headers:{
          'Authorization': `Bearer ${user.token}`, // Include the Authorization header with the token
          
        },
        body: formData,
      });

      if (response.ok) {
        console.log('Seminar added successfully');
        // Optionally, reset form fields after successful submission
        setTitle('');
        setPlace('');
        setPreviewImage(null);
      } else {
        console.error('Error adding seminar:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding seminar:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} enctype="multipart/form-data">
      <div>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label>Place:</label>
        <input type="text" value={place} onChange={(e) => setPlace(e.target.value)} />
      </div>
      <div>
        <label>Preview Image:</label>
        <input type="file" accept="image/*" onChange={(e) => setPreviewImage(e.target.files[0])} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Seminar;
