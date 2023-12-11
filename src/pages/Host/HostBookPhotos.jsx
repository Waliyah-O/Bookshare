import { useOutletContext } from "react-router-dom";

const HostVanPhotos = () => {
  const { currentBook } = useOutletContext();

  return (
    <div>
      <img
        className="host-book-detail-image"
        src={ currentBook.imageUrl }
        alt={ `Photo of ${currentBook.name}` }
      />
    </div>
  );
};
// &#8358;

export default HostVanPhotos;
