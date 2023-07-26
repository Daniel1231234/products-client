import React, { createContext, useEffect, useState } from "react";

import { ProductService } from "../services/ProductService";
import { CreateProduct, Product, SortByEnum } from "../models";

interface ProductContextType {
  products: Product[];
  totalPageCount: number;
  sortBy: SortByEnum;
  setSortBy: (sortBy: SortByEnum) => void;
  query: string;
  setQuery: (query: string) => void;
  page: number;
  setPage: (page: number) => void;
  chosenProduct: Product | null;
  setChosenProduct: (product: Product | null) => void;
  handleSetChosenProduct: (productId?: string) => void;
  handleEditProduct: (prodId: string, updatedProduct: Product) => void;
  handleDeleteProduct: (productId: string) => void;
  handleCreateProduct: (product: CreateProduct) => void;
}

export const ProductContext = createContext<ProductContextType | undefined>(
  undefined
);

type Props = {
  children: React.ReactNode;
};

export const ProductContextProvider = ({ children }: Props) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [totalPageCount, setTotalPageCount] = useState<number>(0);
  const [sortBy, setSortBy] = useState<SortByEnum>(SortByEnum.NAME);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [chosenProduct, setChosenProduct] = useState<Product | null>(null);

  useEffect(() => {
    const getPageCount = async () => {
      const productsLength: number =
        await ProductService.getTotalProductsLength();
      setTotalPageCount(productsLength);
    };

    getPageCount();
  }, []);

  const loadProducts = async () => {
    try {
      const loadedProducts: Product[] = await ProductService.getProducts({
        query,
        sortBy,
        page,
      });

      setProducts(loadedProducts);
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
  useEffect(() => {
    loadProducts();
  }, [page, query, sortBy]);

  const handleSetChosenProduct = async (productId?: string) => {
    try {
      let chosenProd;
      if (productId) {
        chosenProd = await ProductService.getProductById(productId);
      } else {
        chosenProd = {};
      }
      setChosenProduct(chosenProd);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditProduct = async (prodId: string, updatedProduct: Product) => {
    try {
      const data = await ProductService.updateProduct(prodId, updatedProduct);
      console.log(data);
      await loadProducts();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteProduct = async (productId: string) => {
    try {
      await ProductService.deleteProduct(productId);
      await loadProducts();
    } catch (error) {
      console.log(error);
    }
  };

  const handleCreateProduct = async (product: CreateProduct) => {
    try {
      await ProductService.createProduct(product);
      await loadProducts();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        totalPageCount,
        sortBy,
        setSortBy,
        query,
        setQuery,
        page,
        setPage,
        chosenProduct,
        setChosenProduct,
        handleSetChosenProduct,
        handleEditProduct,
        handleDeleteProduct,
        handleCreateProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
