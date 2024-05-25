import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const Blog = () => {
  const [title, setTitle] = useState('');
  const [points, setPoints] = useState({});
  const [previewImage, setPreviewImage] = useState(null);
  const [previewImageUrl, setPreviewImageUrl] = useState('');
  const [para, setPara] = useState('');
  const [tags, setTags] = useState([]);
  const [newPointName, setNewPointName] = useState('');
  const [newPointContent, setNewPointContent] = useState('');
  const [newPointImage, setNewPointImage] = useState(null);
  const [newPointImageUrl, setNewPointImageUrl] = useState('');
  const [newPointImages, setNewPointImages] = useState([]);
  const [pointImages, setPointImages] = useState([]);
const{user} = useSelector((state)=>state.user)
  const handleAddPoint = () => {
    if (newPointName && newPointContent && newPointImage) {
      setNewPointImages([...newPointImages, newPointImage]);
      setPoints({
        ...points,
        [newPointName]: { content: newPointContent },
      });
      setNewPointName('');
      setNewPointContent('');
      setNewPointImage(null);
      setNewPointImageUrl('');
    }
  };

  const handleImageChange = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      if (type === 'preview') {
        setPreviewImage(file);
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreviewImageUrl(reader.result);
        };
        reader.readAsDataURL(file);
      } else if (type === 'point') {
        setNewPointImage(file);
        const reader = new FileReader();
        reader.onloadend = () => {
          setNewPointImageUrl(reader.result);
        };
        reader.readAsDataURL(file);
      } else if (type === 'pointImage') {
        // Handling point images
        setPointImages([...pointImages, file]);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const pointsArray = Object.keys(points).map((key) => ({
      key,
      content: points[key].content,
    }));

    const pointsObject = {};
    pointsArray.forEach((point) => {
      pointsObject[point.key] = { content: point.content };
    });

    const formData = new FormData();
    formData.append('title', title);
    formData.append('para', para);
    formData.append('tags', tags.join(','));
    formData.append('previewImage', previewImage);
    formData.append('points', JSON.stringify(pointsObject)); // Pass pointsObject instead of pointsArray

    newPointImages.forEach((image, index) => {
      formData.append(`pointImages[${index}]`, image);
    });

    pointImages.forEach((image, index) => {
      formData.append(`pointImages[${index}]`, image);
    });

    try {
   

      const response = await fetch('https://cms-for-course-and-authentification.vercel.app/blogs', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY2NTA5NGFmM2Y5ZDNiNjk2YjY3Njc0NiIsIm5hbWUiOiJBREFSU0ggR1VSSkFSIiwiZW1haWwiOiJhZGFyc2hAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmEkMTAkQ1ludThUQklmcXFETzdOcDEwNHk5dXNMaktvbWdYbWNRZHlaOWhDTDd1cGY3ZksvQURhdjYiLCJhdXRob3JpemF0aW9uIjp0cnVlLCJfX3YiOjB9LCJpYXQiOjE3MTY2MzQxOTJ9.qdoSLqotYRB1MG2LyoQE0FUCwfIAkCAGDLvBqLc2NeU'}`,
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Blog posted successfully:', data);
    } catch (error) {
      console.error('Error posting blog:', error);
    }
  };
console.log(previewImage)
console.log(points)

console.log(pointImages)

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <div>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>
      <div>
        <label>Paragraph:</label>
        <textarea value={para} onChange={(e) => setPara(e.target.value)} required />
      </div>
      <div>
        <label>Preview Image:</label>
        <input type="file" onChange={(e) => handleImageChange(e, 'preview')} required />
        {previewImageUrl && <img src={previewImageUrl} alt="Preview" style={{ maxWidth: '100px' }} />}
      </div>
      <div>
        <label>Tags (comma separated):</label>
        <input type="text" value={tags.join(', ')} onChange={(e) => setTags(e.target.value.split(', '))} />
      </div>
      <div>
        <label>Add Point:</label>
        <input type="text" placeholder="Point Name" value={newPointName} onChange={(e) => setNewPointName(e.target.value)} required />
        <input type="file" onChange={(e) => handleImageChange(e, 'point')} required />
        {newPointImageUrl && <img src={newPointImageUrl} alt="New Point" style={{ maxWidth: '100px' }} />}
        <input type="text" placeholder="Point Content" value={newPointContent} onChange={(e) => setNewPointContent(e.target.value)} required />
        <button type="button" onClick={handleAddPoint}>Add Point</button>
      </div>
      <div>
        <h3>Points</h3>
        {Object.keys(points).map((key) => (
          <div key={key}>
            <strong>{key}:</strong>
            <p>{points[key].content}</p>
          </div>
        ))}
      </div>
      <div>
        <button type="submit">Post Blog</button>
      </div>
    </form>
  );
};

export default Blog;
