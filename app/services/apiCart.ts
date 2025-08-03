import api from "./axiosInstance";
export const getMyCart = async () => {
  try {
    const response = await api.get("/carts");
    return response.data.myCart;
  } catch (error) {
    console.error("Error in getMyCart:", error);
    throw error;
  }
};

export const removeFromCart = async (productId: string) => {
  try {
    await api.delete("/carts", {
      data: { productId },
    });
  } catch (error) {
    console.error("Error removing product from cart:", error);
    throw error;
  }
};

export const updateProductQuantity = async ({
  productId,
  quantity,
}: {
  productId: string;
  quantity: number;
}) => {
  try {
    const res = await api.put("/carts", { productId, quantity });
    return res.data.cart;
  } catch (error) {
    console.error("Error updating cart quantity:", error);
    throw error;
  }
};
