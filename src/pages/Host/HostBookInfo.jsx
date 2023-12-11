import { useOutletContext } from "react-router-dom";

const HostVanInfo = () => {
  const { currentBook } = useOutletContext();
  return (
    <section>
      <h4>Name: {currentBook.name}</h4>
      <h4>Category: {currentBook.type}</h4>
      <h4>Description: {currentBook.description}</h4>
      <h4>Visibility: public</h4>
    </section>
  );
};

export default HostVanInfo;
