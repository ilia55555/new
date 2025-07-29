
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center font-sans p-4">
      <div className="text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
          سلام دنیا!
        </h1>
        <p className="text-lg md:text-xl text-gray-300">
          این یک برنامه React ساده است که برای آزمایش در Netlify ساخته شده است.
        </p>
        <div className="mt-8 p-6 bg-gray-800 rounded-xl shadow-lg">
          <p className="text-gray-400">
            با موفقیت اجرا شد.
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
