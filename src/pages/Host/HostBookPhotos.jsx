import { useOutletContext } from "react-router-dom";

const HostVanPhotos = () => {
  const { currentVan } = useOutletContext();

  return (
    <div>
      <img
        className="host-book-detail-image"
        src={currentVan.imageUrl}
        alt={`Photo of ${currentVan.name}`}
      />
    </div>
  );
};

export default HostVanPhotos;
