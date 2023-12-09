import { useOutletContext } from "react-router-dom";

const HostVanPhotos = () => {
  const { currentVan } = useOutletContext();

  return (
    <div>
      <img
<<<<<<< HEAD
        className="host-van-detail-image"
=======
        className="host-book-detail-image"
>>>>>>> 16289cf57e600de90f64c61c7f36fddaeb0ad680
        src={currentVan.imageUrl}
        alt={`Photo of ${currentVan.name}`}
      />
    </div>
  );
};

export default HostVanPhotos;
