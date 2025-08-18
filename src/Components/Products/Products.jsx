import React, { useState } from 'react';

const Products = () => {
  const categories = [
    'All',
    'Mens',
    'Womens',
    'Kids',
    'New Arrivals',
    'On Sale',
  ];

  const [activeTab, setActiveTab] = useState('All');

  return (
    <section className="max-w-[1300px] mx-auto px-12 py-12">
      {/*Tabs*/}
      <div className="flex gap-3 justify-center items-center mt-8">
        {categories.map((category) => {
          return (
            <button
              key={category}
              className={` px-8 py-2 rounded-full text-lg cursor-pointer
                ${
                  activeTab === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-zinc-100 text-zinc-800'
                }`}
              onClick={() => setActiveTab(category)}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/*Product listing*/}
      <div></div>
    </section>
  );
};

export default Products;
