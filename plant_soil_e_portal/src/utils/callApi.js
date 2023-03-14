import { default as axios } from "axios";

 async function callApi(method, endpoint, thunkAPI){
    try{
        const response = await axios({
            method: method,
            url: process.env.BASE_URL+endpoint
        });
        if(response.ok){
            return response.data
        }
        throw new Error('status: ' + response.status + ' statusText: ' + response.statusText)
    }catch(err){
        return thunkAPI.rejectWithValue(err)
    }
}

export default callApi;