import { useOutletContext } from "react-router-dom";

const HostVanPricing = () => {
  const { currentVan } = useOutletContext();
  return (
    <div>
      <h3 className="host-van-price">
<<<<<<< HEAD
        ${currentVan.price} <span>/day</span>
=======
        ${currentVan.price}
>>>>>>> 16289cf57e600de90f64c61c7f36fddaeb0ad680
      </h3>
    </div>
  );
};

export default HostVanPricing;
