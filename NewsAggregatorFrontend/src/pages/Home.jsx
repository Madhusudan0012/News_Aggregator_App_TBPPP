export default function Home() {
    return (
      <div className="bg-gray-100 min-h-screen">
        <div className="container mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 md:text-5xl">
            Welcome to <span className="text-blue-600">News Aggregator</span>
          </h1>
          <p className="mt-6 text-lg text-gray-700">
            Stay updated with the latest news from around the world, all in one place.
          </p>
          <button className="mt-8 px-6 py-3 text-white bg-blue-600 rounded-md shadow-md hover:bg-blue-700">
            Explore News
          </button>
        </div>
      </div>
    );
  }
  