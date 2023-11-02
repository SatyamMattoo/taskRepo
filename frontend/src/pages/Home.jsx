import React, { useEffect, useState } from "react";
import Card from "../components/Card";

const Home = () => {
  const [medicineData, setMedicineData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:4000/api/v1/product/getAll",
          {}
        );
        if (response.ok) {
          const data = await response.json();
          setMedicineData(data.data);
        } else {
          throw new Error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="min-h-screen p-4">
      <div className="containter mx-auto relative top-20">
        <div className="flex flex-col">
          <div className="h-1 w-1/2 self-start mx-8 my-4 bg-gradient-to-r from-violet-500 via-violet-200 to-transparent"></div>
          <h1 className="text-2xl text-center text-violet-500">Products</h1>
          <div className="w-1/2 h-1 mx-8 my-4 self-end bg-gradient-to-r from-transparent via-violet-200 to-violet-500 mb-6"></div>

          <div className="container m-auto ">
            <div className="flex flex-wrap gap-4 mb-4">
              {medicineData.map((item, index) => (
                <Card
                  id={item.id}
                  key={index}
                  name={item.name}
                  mrp={item.mrp}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
