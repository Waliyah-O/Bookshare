const Footer = () => {

  let date = new Date()
  
  return (
    <>
      <footer>&#169; {date.getFullYear()} #bookshare</footer>
    </>
  );
};

export default Footer;
