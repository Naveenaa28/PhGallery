import React from 'react';

const ImageGallery = ({ images }) => {
  return (
    <div className="image-gallery">
      {images.map((image) => (
        <div key={image.name} className="image-item">
          <img src={image.preview} alt={image.name} />
          <div className="image-info">
            <p>{image.name}</p>
            <button>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;