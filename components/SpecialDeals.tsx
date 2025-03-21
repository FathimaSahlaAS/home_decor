"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface Deal {
  id: number;
  name: string;
  image: string;
  originalPrice: number;
  discountedPrice: number;
  discount: string;
  timeLeft: number; // in seconds
}

const deals: Deal[] = [
  {
    id: 1,
    name: "The Jupiter 4-Piece Sectional with Left-Facing Chaise",
    image: "/sofa1.png",
    originalPrice: 2200,
    discountedPrice: 1980,
    discount: "$10 off",
    timeLeft: 86400, // 1 day
  },
  {
    id: 2,
    name: "Royale Wingback Arm Chair Grey",
    image: "/armchair.png",
    originalPrice: 700,
    discountedPrice: 630,
    discount: "$10 off",
    timeLeft: 86400, // 1 day
  },
  {
    id: 3,
    name: "Sora Coffee Table",
    image: "/coffetable.png",
    originalPrice: 290,
    discountedPrice: 261,
    discount: "$10 off",
    timeLeft: 86400, // 1 day
  },
  {
    id: 4,
    name: "Brandeles 3 Seater Fabric Sofa",
    image: "/sofa2.png",
    originalPrice: 600,
    discountedPrice: 540,
    discount: "$10 off",
    timeLeft: 86400, // 1 day
  },
];

const SpecialDeals = () => {
  const [countdowns, setCountdowns] = useState(deals.map((deal) => deal.timeLeft));

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdowns((prevCountdowns) =>
        prevCountdowns.map((time) => (time > 0 ? time - 1 : 0))
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const days = Math.floor(seconds / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${days.toString().padStart(2, "0")} : ${hours.toString().padStart(2, "0")} : ${minutes.toString().padStart(2, "0")} : ${secs.toString().padStart(2, "0")}`;
  };

  return (
    <section className="py-16 bg-[#121212] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">
          <span className="border-l-4 border-[#E6C992] pl-2">Special Deals</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {deals.map((deal, index) => (
            <div key={deal.id} className="bg-[#1E1E1E]/90 p-6 rounded-lg shadow-md flex h-68">
              {/* Image Box with Grey Background */}
              <div className="bg-gray-500 w-1/4 h=full rounded-lg overflow-hidden relative">
                <Image src={deal.image} alt={deal.name} layout="fill" objectFit="cover" />
              </div>

              {/* Deal Details */}
              <div className="w-1/2 p-4 flex flex-col justify-center">
                <p className="text-xl font-semibold mb-2">{deal.name}</p>
                <p className="text-gray-400 line-through">${deal.originalPrice}</p>
                <p className="text-[#E6C992] text-lg font-bold">
                  ${deal.discountedPrice} <span className="text-[#FF9A76]">({deal.discount})</span>
                </p>

                {/* Countdown Timer */}
                <div className="mt-4 text-center">
                  <p className="text-lg font-semibold">{formatTime(countdowns[index])}</p>
                  <p className="text-sm text-gray-400">Days Hours Minutes Seconds</p>
                  <Link href="/deals">
                    <button className="mt-4 bg-[#E6C992] text-white px-6 py-2 rounded-md shadow hover:bg-[#b08b2f] transition">
                      View Deal
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialDeals;
