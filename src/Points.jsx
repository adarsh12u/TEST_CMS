import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function PointForm() {
  const {user} = useSelector((state)=>state.user)
  const [points, setPoints] = useState({});
const[v,setv]=  useState();
  const addPoint = (customKey) => {
    setPoints(prevPoints => {
      return {
        ...prevPoints,
        [customKey]: { text: '', image: '' }
      };
    });
  };

  const handleTextChange = (key, event) => {
    const newText = event.target.value;
    setPoints(prevPoints => ({
      ...prevPoints,
      [key]: { ...prevPoints[key], text: newText }
    }));
  };

  const handleImageChange = (key, event) => {
    const newImage = event.target.files[0];
    console.log(newImage)
    setPoints(prevPoints => ({
      ...prevPoints,
      [key]: { ...prevPoints[key], image: newImage }
    }));
  };

  const handleAddPoint = () => {
    const customKey = document.getElementById('customKeyInput').value;
    if (customKey.trim() !== '') {
      addPoint(customKey);
    } else {
      alert('Please enter a valid custom key.');
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
let i=0;
     for(var key in points){
        
     

    const formData = new FormData();
    
 formData.append('title',"adarsh")
 formData.append('para',"para")
 const fileObject = points[key].image ;
 var newObject  = {
  'lastModified'     : fileObject.lastModified,
  'lastModifiedDate' : fileObject.lastModifiedDate,
  'name'             : fileObject.name,
  'size'             : fileObject.size,
  'type'             : fileObject.type
};  

// then use JSON.stringify on new object
JSON.stringify(newObject);
console.log(newObject)
const val =  Object.keys(points);
// JSON.parse(newObject)

console.log(val)
var vals = val[i]
i++;
var news = {
  [vals]:{

    text:points[key].text,
    image:newObject
  }
}

console.log(news)
console.log(JSON.stringify(news))
  formData.append('points',JSON.stringify(news))
console.log(formData)
const c = JSON.stringify(news)
console.log(`${i}-----`,c)
setv( c)

console.log(v)
}  try {
   
      const response = await fetch('http://localhost:3000/blogs', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${user.token}`,
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
console.log(points)
  return (
    <form enctype="multipart/form-data" onSubmit={handleSubmit}>
      <input type="text" id="customKeyInput" placeholder="Enter a custom key" />
      <button onClick={handleAddPoint}>Add Point</button>
      {Object.keys(points).map((key) => (
        <div key={key}>
          <input
            type="text"
            placeholder="Enter text"
            value={points[key]?.text || ''}
            onChange={(event) => handleTextChange(key, event)}
          />
          <input
            type="file"
            accept="image/*"
            onChange={(event) => handleImageChange(key, event)}
          />
          {points[key]?.image && <img src={points[key].image} alt={`Point ${key}`} />}
        </div>
      ))}
      <button  type='submit'>submit</button>
    </form>
  );
}

export default PointForm;
