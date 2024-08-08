const LoadingSpinner = () => {
  return (
    <center>
      <button className="btn btn-primary spinner" type="button" disabled>
        <span
          className="spinner-grow spinner-grow-sm"
          aria-hidden="true"
        ></span>
        <span role="status">Loading...</span>
      </button>
    </center>
  );
};
export default LoadingSpinner;
