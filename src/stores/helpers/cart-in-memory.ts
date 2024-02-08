import { ProductProps } from "@/src/utils/data/products";
import { ProductCartProps } from "../card-store";

export const add = (products: ProductCartProps[], newProduct: ProductProps) => {
  const existingProduct = products.find(({ id }) => newProduct.id === id);

  if (existingProduct) {
    return products.map((product) =>
      existingProduct.id === product.id
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );
  }

  return [...products, { ...newProduct, quantity: 1 }];
};

export const remove = (
  products: ProductCartProps[],
  productRemoveId: string
) => {
  const updatedProducts = products.map((product) =>
    product.id === productRemoveId
      ? {
          ...product,
          quantity: product.quantity > 1 ? product.quantity - 1 : 0,
        }
      : product
  );

  return updatedProducts.filter((product) => product.quantity > 0);
};
