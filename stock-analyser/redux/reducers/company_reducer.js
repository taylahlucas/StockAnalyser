import { GET_SELECTED_COMPANIES, COMPANY_ERROR } from "../types"
 
const initialState = {
    selectedCompanies: [],
    loading: true
}

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_SELECTED_COMPANIES:
            return {
                ...state,
                selectedCompanies: action.payload,
                loading: false
            }
        case COMPANY_ERROR:
            return {
                loading: false,
                error: action.payload
            }
        default: return state
    }
}