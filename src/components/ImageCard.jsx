import React from 'react';

const ImageCard = ({ image, onDelete }) => {
  const handleDelete = () => {
    onDelete(image); // Pass the image object back to the parent for deletion
  };

  return (
    <div className="image-card">
      <img src={image.preview} alt={image.name} className="image-preview" />
      <div className="image-details">
        <p className="image-name">{image.name}</p>
        <div className="image-actions">
          <button onClick={handleDelete} className="delete-button">
            Delete
          </button>
          {/* Add more actions here as needed */}
        </div>
      </div>
    </div>
  );
};

export default ImageCard;