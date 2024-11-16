import React from 'react';
import './SecondLeftNavBar.css'; // Optional: For custom styles

const SecondLeftNavBar = ({ activeImage, setActiveImage }) => {
  const images = [
    { id: 1, src: '/assets/image1.png', alt: 'Image 1' },
    { id: 2, src: '/assets/image2.png', alt: 'Image 2' },
    { id: 3, src: '/assets/image3.png', alt: 'Image 3' },
    { id: 4, src: '/assets/image4.png', alt: 'Image 4' },
    { id: 5, src: '/assets/image5.png', alt: 'Image 5' },
    { id: 6, src: '/assets/image6.png', alt: 'Image 6' },
    { id: 7, src: '/assets/image7.png', alt: 'Image 7' },
    { id: 8, src: '/assets/image8.png', alt: 'Image 8' },
    { id: 9, src: '/assets/image9.png', alt: 'Image 9' },
  ];

  return (
    <div className="second-left-nav">
      {images.map((image) => (
        <div
          key={image.id}
          className={`nav-image-item ${activeImage === image.id ? 'active' : ''}`}
          onClick={() => setActiveImage(image.id)}
        >
          <img src={image.src} alt={image.alt} />
        </div>
      ))}
    </div>
  );
};

export default SecondLeftNavBar;
