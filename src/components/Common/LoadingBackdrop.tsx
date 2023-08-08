const LoadingBackdrop = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-blue-500 border-opacity-75" />
    </div>
  );
};

export default LoadingBackdrop;
