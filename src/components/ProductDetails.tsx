import React, { useState, useContext, useEffect } from "react";
import Button, { ButtonVariant } from "./Button";
import { ProductContext } from "../context/ProductContext";
import { CreateProduct } from "../models";
import { z } from "zod";
import { updateProduct } from "../lib/validation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

interface ProductDetailsProps {}

type FormData = z.infer<typeof updateProduct>;

const ProductDetails: React.FC<ProductDetailsProps> = () => {
  const { chosenProduct, handleEditProduct, handleCreateProduct } =
    useContext(ProductContext)!;

  const [showSuccessMsg, setShowSuccessMsg] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(updateProduct) });

  useEffect(() => {
    if (chosenProduct) {
      setValue("name", chosenProduct.name);
      setValue("description", chosenProduct.description ?? "");
      setValue("price", chosenProduct.price);
    }
  }, [chosenProduct, setValue]);

  const handleSave = async (
    name: string,
    description: string,
    price: number
  ) => {
    try {
      if (!isValid) return;
      const validateDetails = updateProduct.parse({ name, description, price });

      if (chosenProduct && chosenProduct._id) {
        const updatedProduct = Object.assign(
          {},
          chosenProduct,
          validateDetails
        );
        handleEditProduct(chosenProduct._id, updatedProduct);
      } else {
        const newProduct = new CreateProduct(
          validateDetails.name,
          validateDetails.description,
          validateDetails.price
        );
        handleCreateProduct(newProduct);
        reset({ name: "", description: "", price: 0 });
      }
      setShowSuccessMsg(true);
    } catch (error) {
      if (error instanceof z.ZodError) {
        setError("root", { message: error.message });
        return;
      }
      setError("root", { message: "Something went wrong" });
    }
  };

  const onSubmit = (data: FormData) => {
    console.log(data);
    handleSave(data.name, data.description, data.price);
  };

  if (!chosenProduct) return <div>Nothing to show here</div>;

  return (
    <div className="ProductDetails">
      <div className="img">
        <img
          src={
            chosenProduct._id
              ? `/images/${chosenProduct.imgUrl}`
              : "/images/placeholder.jpg"
          }
          alt=""
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" {...register("name")} />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea {...register("description")} />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input type="number" {...register("price")} />
        </div>
        <Button variant={ButtonVariant.Save} />
        <p>{errors.root?.message}</p>
        {showSuccessMsg && (
          <p className="mt-1 text-sm text-green-600">Success</p>
        )}
      </form>
    </div>
  );
};

export default ProductDetails;
