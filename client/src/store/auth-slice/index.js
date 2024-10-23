import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



const initialState = { 
    isAuthenticated: false,
    isLoading: false,
    user: null
}

export const  registerUser = createAsyncThunk('/auth/register', async(formData) => {
    const response = await axios.post('http://localhost:5000/api/auth/login', formData, {
        withCredentials: true
    })
})

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
             
        }
    }
})


export default authSlice.reducer;
export const { setUser } = authSlice.actions
