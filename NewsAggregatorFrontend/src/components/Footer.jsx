export default function Footer() {
  return (
    <footer className="bg-gray-800 p-4 mt-4">
      <div className="container mx-auto text-center text-white">
        <p>&copy; {new Date().getFullYear()} News Aggregator. All rights reserved.</p>
        <p className="text-sm">Built with ❤️ Madhusudan </p>
      </div>
    </footer>
  );
}
