import React from "react";
import { Card } from "components/card";

const mockLandingPackages = [
  {
    id: "lagos-heritage",
    name: "Lagos Heritage Escape",
    country: "NG",
    image:
      "https://images.unsplash.com/photo-1767346711636-de6a209dbea7?auto=format&fit=crop&w=1200&q=80",
    departure_date: "2026-09-20",
    return_date: "2026-09-25",
    room_rates: [{ room_type: "DOUBLE", package_class: "BUDGET", rate: 980 }],
  },
  {
    id: "ghana-culture",
    name: "Ghana Culture Discovery",
    country: "GH",
    image:
      "https://images.unsplash.com/photo-1636783186987-ac72b316d8dc?auto=format&fit=crop&w=1200&q=80",
    departure_date: "2026-10-03",
    return_date: "2026-10-09",
    room_rates: [{ room_type: "DOUBLE", package_class: "MID_RANGE", rate: 1240 }],
  },
  {
    id: "kenya-safari",
    name: "Kenya Safari + Coast",
    country: "KE",
    image:
      "https://images.unsplash.com/photo-1757289356848-828ecfcba69f?auto=format&fit=crop&w=1200&q=80",
    departure_date: "2026-11-12",
    return_date: "2026-11-18",
    room_rates: [{ room_type: "DOUBLE", package_class: "LUXURY", rate: 1820 }],
  },
  {
    id: "rwanda-retreat",
    name: "Rwanda Executive Retreat",
    country: "RW",
    image:
      "https://images.unsplash.com/photo-1689013398932-b576a11e07a1?auto=format&fit=crop&w=1200&q=80",
    departure_date: "2026-12-02",
    return_date: "2026-12-06",
    room_rates: [{ room_type: "DOUBLE", package_class: "MID_RANGE", rate: 1495 }],
  },
];

const findBestPackagePrice = (roomRates) => {
  if (!roomRates || roomRates.length === 0) return null;
  const doubleRate = roomRates.find((rate) => rate.room_type === "DOUBLE");
  return doubleRate ? doubleRate.rate : roomRates[0].rate;
};

export const LandingPagePackages = ({ country }) => {
  return (
    <div className="md:grid flex gap-x-4 md:overflow-hidden overflow-x-scroll md:grid-cols-2 lg:grid-cols-4 md:gap-y-8 md:gap-x-8 md:justify-center">
      {mockLandingPackages.map((item) => (
        <div className="min-w-[309px] lg:min-w-[unset]" key={item.id}>
          <Card
            landing
            country={country}
            price={findBestPackagePrice(item.room_rates)}
            image={item.image}
            startDate={item.departure_date}
            endDate={item.return_date}
            tripPackage={item.name}
            flag={item.country}
            available="true"
            details={`/packages/${item.id}`}
          />
        </div>
      ))}
    </div>
  );
};
