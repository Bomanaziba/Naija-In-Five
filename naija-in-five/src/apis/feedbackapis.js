import axiosConfig from "../config/axios.config";

export const list = async () => {
    try{
        const { data } = await axiosConfig.get("/api/v1/feedback");
        return data;
    } catch (error) {
        throw (error);
    }
};

export const get = async ({ id }) => {
    try {
        const { data } = await axiosConfig.get(`/api/v1/feedback?id=${id}`)
        return data;
    } catch (error) {
        throw (error);
    }
};

export const add = async ({ name, email, message }) => {
    try {
        const { data } = await axiosConfig.post("/api/v1/feedback/add", { name, email, message});
        return data;
    } catch (error) {
        throw (error);
    }
};


