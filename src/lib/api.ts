import axios, { AxiosRequestConfig } from "axios";

const api = axios.create({
    baseURL: "/api",
    headers: {
        "Content-Type": "application/json",
    },
});

/* Generic helper to handle requests
url: string
options?: AxiosRequestConfig
*/
export async function apiRequest<T>(
    url: string,
    options?: AxiosRequestConfig
): Promise<T> {
    try {
        const response = await api.request<T>({ url, ...options });
        return response.data;
    } catch (error: any) {
        console.error("API Error:", error.response?.data || error.message);
        throw error.response?.data || error;
    }
}

export default api;
