import { useOutletContext } from "react-router-dom";

const HostVanPricing = () => {
  const { currentVan } = useOutletContext();
  return (
    <div>
      <h3 className="host-van-price">
        ${currentVan.price}
      </h3>
    </div>
  );
};

export default HostVanPricing;
