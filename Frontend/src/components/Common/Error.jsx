const ErrorPage = ({title, message,children}) => {
  return <div className="error">
    <h2>{title}</h2>
    <p>{message}</p>
    {children}
  </div>;
};

export default ErrorPage; 