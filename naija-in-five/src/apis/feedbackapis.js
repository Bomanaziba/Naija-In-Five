import axiosConfig from "../config/axios.config";

export const add = async ({ name, email, message }) => {
    try {
        const { data } = await axiosConfig.post("/api/v1/feedback/add", { name, email, message});
        return data;
    } catch (error) {
        throw (error);
    }
};


