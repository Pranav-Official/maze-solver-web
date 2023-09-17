import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createStore } from '@reduxjs/toolkit';

// Define your Redux action types
const UPDATE_ARRAY_ELEMENT = 'UPDATE_ARRAY_ELEMENT';
const SET_ARRAY = 'SET_ARRAY';

// Action creators
const updateArrayElement = (index: number, value: number) => ({
  type: UPDATE_ARRAY_ELEMENT,
  payload: { index, value },
});

const setArray = (newArray: number[]) => ({
  type: SET_ARRAY,
  payload: newArray,
});

// reducers

const initialState: number[] = [];

const arrayReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case UPDATE_ARRAY_ELEMENT:
      const { index, value } = action.payload;
      return state.map((item, i) => i === index ? value : item);

    case SET_ARRAY:
      return action.payload; // Set the entire array to the payload

    default:
      return state;
  }
};

const store = createStore(arrayReducer);

export default store;
