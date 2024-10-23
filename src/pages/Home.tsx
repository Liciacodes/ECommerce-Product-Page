// src/pages/Home.tsx

import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';

const Home = () => {
  return (
    <div>
      <Navbar />
      <main className="max-w-6xl mx-auto p-6 mt-10">
        <ProductCard />
      </main>
    </div>
  );
};

export default Home;
