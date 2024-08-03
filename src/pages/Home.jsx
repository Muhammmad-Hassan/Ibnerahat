import React from "react";

const Home = () => {
  const cardData = [
    {
      id: 1,
      imgUrl:
        "https://images.unsplash.com/photo-1555072956-7758afb20e8f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGl6emF8ZW58MHx8MHx8fDA%3D",
      name: "Pizza",
    },
    {
      id: 2,
      imgUrl:
        "https://plus.unsplash.com/premium_photo-1684534125372-10d4c47c825f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YnVyZ2Vyc3xlbnwwfHwwfHx8MA%3D%3D",
      name: "Burgers",
    },
    {
      id: 3,
      imgUrl:
        "https://images.unsplash.com/photo-1650977599122-d20a4b52718f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9tb3N8ZW58MHx8MHx8fDA%3D",
      name: "Momos",
    },
  ];
  return (
    <div>
      {/* Full-width image section */}
      <section className="relative">
        <img
          src="https://plus.unsplash.com/premium_photo-1683657860029-05a5415fa618?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Background"
          className="w-full h-[50vh]  object-cover"
        />
        {/* Centered search bar and button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="  rounded-md  flex gap-x-1">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-3 w-[550px] rounded-l-md border-none focus:outline-none"
            />
            <button className="bg-gradient-to-tl   font-semibold from-pink-500 to-pink-700 text-white px-6 py-3  rounded-md">
              Search
            </button>
          </div>
        </div>
      </section>
      <section className="h-[70vh] mx-auto p-10">
        <h1 className="text-3xl font-bold text-center mb-8">Explore Foods</h1>
        <div className="flex justify-center gap-16 flex-wrap">
          {cardData.map((item) => (
            <div
              key={item.id}
              className="max-w-sm relative rounded overflow-hidden h-[400px] w-[300px] shadow-lg bg-slate-500"
            >
              <img
                className="w-[300px] h-[400px] object-cover opacity-80"
                src={item.imgUrl}
                alt="image"
              />
              <p className="text-center font-bold text-white absolute bottom-[10%] left-[50%]">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </section>
      <div className="container mx-auto p-4">
      {/* Other sections */}

      {/* New Section with two cards in one row */}
      <h2 className="text-2xl font-bold text-center mb-8">Our Products</h2>
      <div className="flex flex-wrap justify-around">
        {/* Card 1 */}
        <div className="flex items-center bg-white rounded-lg shadow-lg p-4 m-4 w-full md:w-5/12">
          <img className="w-32 h-32 object-cover rounded-lg" src="https://via.placeholder.com/150" alt="Product 1" />
          <div className="ml-4">
            <h3 className="text-xl font-bold">Product Name 1</h3>
            <p className="text-gray-600">$19.99</p>
            <p className="mt-2 text-gray-600">This is a brief description of the product.</p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Order Now</button>
          </div>
        </div>
        {/* Card 2 */}
        <div className="flex items-center bg-white rounded-lg shadow-lg p-4 m-4 w-full md:w-5/12">
          <img className="w-32 h-32 object-cover rounded-lg" src="https://via.placeholder.com/150" alt="Product 2" />
          <div className="ml-4">
            <h3 className="text-xl font-bold">Product Name 2</h3>
            <p className="text-gray-600">$29.99</p>
            <p className="mt-2 text-gray-600">This is a brief description of the product.</p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Order Now</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home;
