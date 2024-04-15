import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { setUser, setToken, setRefreshing } from './slice';

export const register = createAsyncThunk(
  'auth/register',
  async ({ name, email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post('https://connections-api.herokuapp.com/users/signup', {
        name,
        email,
        password,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post('https://connections-api.herokuapp.com/users/login', {
        email,
        password,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, { dispatch, getState }) => {
    const state = getState().auth; 
    const token = state.token; 
    setToken(token); 
    if (!token) return;
    dispatch(setRefreshing(true));
    try {
      const response = await axios.get('https://connections-api.herokuapp.com/users/current', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(setUser(response.data));
    } catch (error) {
      console.error('Error refreshing user:', error);
    } finally {
      dispatch(setRefreshing(false));
    }
  },
  {
    condition: (_, thunkAPI) => {
      const state = thunkAPI.getState().auth; 
      const token = state.token; 
      if (!token) return false;
      return true;
    },
  }
);