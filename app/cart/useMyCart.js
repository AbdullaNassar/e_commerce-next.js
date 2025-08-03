import { useQuery } from "@tanstack/react-query";
import api from "../services/axiosInstance";

const fetchMyCart = async () => {
  const response = await api.get("/carts");
  return response.data.myCart;
};

export function useMyCart() {
  return useQuery({
    queryKey: ["myCart"],
    queryFn: fetchMyCart,
    staleTime: 5 * 60 * 1000, // 5 minutes
    refetchOnWindowFocus: false,
  });
}
