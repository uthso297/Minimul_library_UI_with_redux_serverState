
const Loading = () => {
    return (
        <div className="flex justify-center items-center min-h-[300px]">
            <div className="text-center">
                <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin mx-auto"></div>
                <p className="mt-4 text-gray-600 text-lg font-medium">Loading books...</p>
            </div>
        </div>
    );
};

export default Loading;