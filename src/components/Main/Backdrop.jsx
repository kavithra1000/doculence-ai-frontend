const Backdrop = ({ onClick }) => (
  <div
    className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
    onClick={onClick}
    aria-hidden="true"
  />
);

export default Backdrop;
