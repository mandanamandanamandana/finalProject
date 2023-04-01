import React, { useContext } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Store } from '../../../utils/Store';
import Link from 'next/link';
import Layout from '../../../components/Layout';
import data from '../../../utils/data';

export default function ProductScreen() {
  const { state, dispatch } = useContext(Store);
  const router = useRouter();
  const { query } = useRouter();
  const { slug } = query;
  const product = data.products.find((x) => x.slug === slug);
  if (!product) {
    return <div>Product Not FOUND</div>;
  }

  const addToCartHandler = () => {
    const existItem = state.cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;

    if (product.countInStock < quantity) {
      alert('Out Of Stock');
      return;
    }

    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } });
    router.push('/cart');
  };

  return (
    <Layout title={product.name}>
      <div className="py-2">
        <Link href="/">back to products</Link>
      </div>

      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="md:col-span-2 ">
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            className="mb-10 rounded-[20px]"
            layout="responsive"
          ></Image>
        </div>
        <div>
          <ul>
            <li>
              <h1 className="text-[2.25rem] font-semibold">{product.name}</h1>
            </li>
            <li>Category: {product.category}</li>
            <li>Brand: {product.brand}</li>
            <li>
              {product.rating} of {product.numReviews} reviews
            </li>
            <li>Description: {product.description}</li>
          </ul>
        </div>
        <div>
          <div className="p-5 bg-[#407a3d] card">
            <div className="flex justify-between font-semibold text-white">
              <div>Price</div>
              <div>${product.price}</div>
            </div>
            <div className="flex justify-between font-semibold text-white">
              <div>Status</div>
              <div>{product.countInStock > 0 ? 'In Stock' : `Unavailable`}</div>
            </div>
            <button
              className="w-full mt-2 font-semibold uppercase primary-button"
              onClick={addToCartHandler}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
