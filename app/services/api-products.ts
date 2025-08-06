import api from "./axiosInstance";

export const getAllProducts = async () => {
    const res = await api.get('/products')
    console.log(res.data)
}


getAllProducts()