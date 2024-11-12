const Footer = () => {
  return (
    <footer className="footer-area">
      <div className="container">
        <div className="text text-center">
          <p>
            @ Sheikh Hami {new Date().getFullYear()}, Design By{" "}
            <a target="_blank" href="https://github.com/SolutionZoom">
              SolutionZoom LLC
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
