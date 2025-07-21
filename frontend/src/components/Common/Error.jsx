import { MdErrorOutline } from "react-icons/md";

const ErrorPage = ({ title = "Something went wrong", message = "An unexpected error occurred.", children }) => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center py-12">
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 px-8 py-10 max-w-md w-full flex flex-col items-center">
        <MdErrorOutline className="text-red-500 w-14 h-14 mb-4" />
        <h2 className="text-2xl font-bold text-red-600 mb-2 text-center">{title}</h2>
        <p className="text-gray-500 mb-4 text-center">{message}</p>
        {children && <div className="mt-2 w-full flex flex-col items-center">{children}</div>}
      </div>
    </div>
  );
};

export default ErrorPage; 