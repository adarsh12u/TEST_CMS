import React from "react";

const Map = () => {
  return (
    <div className="  pb-52 md:pb-96" style={{ position: 'relative', height: 0, overflow: 'hidden' }}>
      
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3679.891124802353!2d75.87256007508272!3d22.73228777937833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s1102%2CBlock-A%2CPrakrati%20Corporate%20Opposite%20Shani%20Mandir%20Malwa%20Mill%20Indore!5e0!3m2!1sen!2sin!4v1716546157403!5m2!1sen!2sin"
          width="1200"
          height="450"
          style={{
            border: 0,
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
     
    </div>
  );
};

export default Map;
