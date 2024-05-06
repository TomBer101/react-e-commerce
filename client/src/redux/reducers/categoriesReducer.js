import { ADD_CATEGORY, FETCH_CATEGORIES_SUCCESS } from "../actions/admin/categoriesAction";

const initState = {
    categories : [],
    error: null,
    loading: false
}

const categporiesReducer = (state = initState, action) => {
    switch (action.type) {
        case FETCH_CATEGORIES_SUCCESS:
            return {
                ...state,
                categories: action.payload
            }
        case ADD_CATEGORY:
            return {
                ...state,
                categories: [...state.categories, action.payload]
            }
        default:
            return state
    }
}

export default categporiesReducer;