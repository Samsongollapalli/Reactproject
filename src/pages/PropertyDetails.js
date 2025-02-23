
import React, { useEffect } from 'react';
import { housesData } from '../data';
import { useParams, Link } from 'react-router-dom';
import { BiBed, BiBath, BiArea } from "react-icons/bi";
import { FaIndianRupeeSign } from "react-icons/fa6";

const PropertyDetails = () => {
  const { id } = useParams()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  const house = housesData.find((house) => house.id === parseInt(id))

  if (!house) {
    return <div className="text-center py-20">House not found</div>
  }

  return (
    <section>
      <div className="container mx-auto min-h-[800px] mb-14">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-2xl font-semibold">{house.name}</h2>
            <h3 className="text-lg mb-4">{house.address}</h3>
          </div>
          <div className="mb-4 lg:mb-0 flex gap-x-2">
            <div className="bg-green-500 h-6 px-3 text-white rounded-full">{house.type}</div>
            <div className="bg-violet-500 h-6 text-white px-3 rounded-full">{house.country}</div>
          </div>
          <div className="text-3xl font-semibold text-violet-600 flex">
            <FaIndianRupeeSign className="text-gray-700" />
            {house.price}
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-8 lg:flex-row md:flex-col">
          <div className="max-w-[768px]">
            <div className="mb-8">
              <img src={house.imageLg} alt={`Large image of ${house.name}`} />
            </div>
            <div className="flex gap-x-6 text-violet-700 mb-6">
              <div className="flex gap-x-2 items-center">
                <BiBed className="text-2xl" />
                <div>{house.bedrooms}</div>
              </div>
              <div className="flex gap-x-2 items-center">
                <BiBath className="text-2xl" />
                <div>{house.bathrooms}</div>
              </div>
              <div className="flex gap-x-2 items-center">
                <BiArea className="text-2xl" />
                <div>{house.surface}</div>
              </div>
            </div>
            <div>{house.description}</div>
          </div>
          <div className="flex-1 bg-white w-full mb-8 border border-gray-300 rounded-lg px-6 py-8">
            {house.agent && (
              <div className="flex items-center gap-x-4 mb-8">
                <div>
                  <div className="w-20 h-20 p-1 border border-gray-300 rounded-full">
                    <img src={house.agent.image} alt={`Agent ${house.agent.name}`} />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{house.agent.name}</div>
                  <Link to="" className="text-violet-700 text-sm">View Listings</Link>
                </div>
              </div>
            )}
            <form className="flex flex-col gap-y-4">
              <input className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm" type="text" placeholder="Name" />
              <input className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm" type="text" placeholder="Email" />
              <input className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm" type="text" placeholder="Phone" />
              <textarea className="border border-gray-300 focus:border-violet-700 outline-none w-full p-4 h-36 text-sm text-gray-400" placeholder="Message"></textarea>
              <div className="flex gap-x-2">
                <button className="bg-violet-700 hover:bg-violet-800 text-white rounded py-4 text-sm w-full transition">Send Message</button>
                <button className="border border-violet-700 text-violet-700 hover:text-violet-500 rounded p-4 text-sm w-full transition">Call</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails