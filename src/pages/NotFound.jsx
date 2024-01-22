
const NotFound = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="section">
            <div className="card">
              <h3>404 Error - Page Not Found</h3>
              <p style={{ textAlign: 'center', padding: '16px' }}>
                Sorry, the page you are looking for does not exist. Please check the URL or return to the <a href="/">homepage</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
