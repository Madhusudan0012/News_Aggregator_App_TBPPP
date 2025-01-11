export default function About() {
    return (
      <div className="bg-white min-h-screen">
        <div className="container mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center">
            About <span className="text-blue-600">News Aggregator</span>
          </h2>
          <p className="mt-6 text-gray-700 text-center leading-loose">
            Our mission is to provide you with the latest news from reliable sources, curated 
            and presented in a user-friendly manner. 
            Stay informed with breaking news, trending topics, and insights into the world.
          </p>
          <div className="mt-12 flex justify-center">
            <img 
              src="https://via.placeholder.com/600x300" 
              alt="About News Aggregator" 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    );
  }
  