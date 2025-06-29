import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { SocialIcon } from "react-social-icons/component";
import "react-social-icons/instagram";

const ProductDetailPage = () => {
  const { id } = useParams();
  console.log(id);

  const { data, isError, isLoading } = useQuery({
    queryKey: ["Product", id],
    queryFn: async () => {
      try {
        const res = await fetch(`/api/product/getProductData/${id}`, {
          method: "GET",
        });
        // console.log(`the res is here`)

        if (!res.ok) {
          throw new Error(`HTTP ${res.status}: ${res.statusText}`);
        }
        const result = await res.json();
        console.log(`console for queryFn ${result}`);

        return result;
      } catch (error) {
        console.error("Error fetching product data:", error);
        throw new Error("Failed to fetch product data");
      }
    },
  });

  console.log(data);
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading product details...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Error loading product details: Failed to fetch product data</p>
      </div>
    );
  }
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-amber-200 h-200 w-screen m-20 p-10 rounded-2xl grid grid-cols-2 gap-4 shadow-2xl shadow-gray-500">
        <img
          src={data.itemImg1}
          alt={data.item_name}
          className="w-full h-auto rounded-3xl bg-neutral-500"
        />
        <div className="bg-neutral-500 rounded-3xl p-10">
          <h3 className="font-bold text-4xl border-b-2">{data.item_name}</h3>
          <p className="pt-10 font-extrabold text-2xl">${data.item_price}</p>
          <p className="h-1/2 border-b-2">{data.description}</p>
          <h3 className="text-4xl font-bold"> Get in Touch</h3>
          <p className="mt-5">@sofiz_creation on instagram</p>
          <div className="mt-10 flex space-x-2">
            <SocialIcon
              network="instagram"
              href="https://www.instagram.com/sofiz_creation/"
            />
            <SocialIcon network="facebook" />
            <SocialIcon network="threads" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
