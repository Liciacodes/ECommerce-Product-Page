// src/pages/Home.tsx

import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';

const Home = () => {
  return (
    <div>
      <Navbar />
      <main className="max-w-6xl mx-auto md:p-6 md:mt-10 p-0 ">
        <ProductCard />
      </main>
    </div>
  );
};

export default Home;
