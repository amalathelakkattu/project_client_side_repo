import React from 'react'
import { ProductCards } from "../../components/user/Cards";
import { ProductSkeleton } from '../../components/shared/Skeleton';

export const Product = () => {
  const [productList, isLoading, error] = useFetch("/courses/get-courses");


  return (
    <div>
      {isLoading ? (
        <ProductSkeleton />
      ) : (
        <div className="flex flex-col items-center justify-start px-20 py-16 ">
          <section>
            <h1 className="text-2xl font-bold">Product listing page</h1>
          </section>
          <section className="grid grid-rows-3 grid-cols-3  gap-10 w-full">
            {productList?.map((product, index) => (
              <ProductCards key={product?._id} product={product} />
            ))}

          </section>
        </div>
      )}
    </div>
  );
};

