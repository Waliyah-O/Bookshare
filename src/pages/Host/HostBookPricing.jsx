import { useOutletContext } from "react-router-dom";

const HostVanPricing = () => {
  const { currentBook } = useOutletContext();
  return (
    <div>
      <h3 className="host-van-price">
      &#8358;{ currentBook.price }
      </h3>
    </div>
  );
};

export default HostVanPricing;
