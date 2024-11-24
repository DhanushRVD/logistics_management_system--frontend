import React from 'react';
import '../../assests/css/inventory.css';

const inventoryData = [
  {
    id: 1,
    name: 'Sandal bar',
    category: 'Wood',
    availableStocks: 50,
    limitedStocks: 20,
    incomingStocks: 10,
    outgoingStocks: 5,
  },
  {
    id: 2,
    name: 'Pepper',
    category: 'Spices',
    availableStocks: 25,
    limitedStocks: 5,
    incomingStocks: 15,
    outgoingStocks: 10,
  },
  {
    id: 3,
    name: 'Steel Plate',
    category: 'Metal',
    availableStocks: 100,
    limitedStocks: 30,
    incomingStocks: 20,
    outgoingStocks: 10,
  },
  {
    id: 4,
    name: 'lavender',
    category: 'perfume',
    availableStocks: 660,
    limitedStocks: 80,
    incomingStocks: 200,
    outgoingStocks: 500,
  },
  // Add more dummy data as needed
];

const InventoryPage = () => {
  return (
    <div className='align-middle'>
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4"></h1>

      <div className="w-full overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="py-2 px-4 border-b border-gray-300">Name</th>
              <th className="py-2 px-4 border-b border-gray-300">Category</th>
              <th className="py-2 px-4 border-b border-gray-300">Available Stocks</th>
              <th className="py-2 px-4 border-b border-gray-300">Limited Stocks</th>
              <th className="py-2 px-4 border-b border-gray-300">Incoming Stocks</th>
              <th className="py-2 px-4 border-b border-gray-300">Outgoing Stocks</th>
            </tr>
          </thead>
          <tbody>
            {inventoryData.map((item, index) => (

              <tr
                key={item.id}
                className={`${
                  index % 2 === 0 ? 'bg-gray-100' : 'bg-gray'
                } table-row hover:table-row-hover bg-white`}
              >
                <td className="py-2 px-4 border-b border-gray-300">{item.name}</td>
                <td className="py-2 px-4 border-b border-gray-300">{item.category}</td>
                <td className="py-2 px-4 border-b border-gray-300">{item.availableStocks}</td>
                <td className="py-2 px-4 border-b border-gray-300">{item.limitedStocks}</td>
                <td className="py-2 px-4 border-b border-gray-300">{item.incomingStocks}</td>
                <td className="py-2 px-4 border-b border-gray-300">{item.outgoingStocks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default InventoryPage;
