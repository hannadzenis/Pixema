import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: { isChose: boolean } = { isChose: false }

export const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setFilters: (state, action: PayloadAction<boolean>) => {
            state.isChose = action.payload
        }
    }
})

export const { setFilters } = filtersSlice.actions
export const filtersReducer = filtersSlice.reducer
