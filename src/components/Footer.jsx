const Footer = () => {
  let date = new Date();

  return (
    <>
      <footer>
        &#169; {date.getFullYear()} BOOKSHARE. All rights reserved.
      </footer>
    </>
  );
};

export default Footer;
