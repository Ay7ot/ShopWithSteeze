import { generalAppActionType, generalAppContextType } from "../types/generalAppType";

export function generalAppReducer(state: generalAppContextType, action: generalAppActionType){
    switch(action.type){
        case 'openMenu':
            return {
                ...state,
                showMenu: true
            }
        case 'openCart': 
            return {
                ...state,
                showCart: true
            }
        case 'closeCart':
            return {
                ...state,
                showCart: false
            }
        case 'closeMenu':
            return {
                ...state,
                showMenu: false
            }
        case 'setShowFilters':
            return {
                ...state,
                showFilters: action.payload?.showFiltersPayload ?? false
            }
        case 'setShowSorting':
            return {
                ...state,
                showSorting: action.payload?.showSortingPayload ?? false
            }
        case 'setShowLogin':
            return {
                ...state,
                showLogin: action.payload?.showLoginPayload ?? false
            }
        case 'setShowSignup':
            return {
                ...state,
                showSignup: action.payload?.showSignupPayload ?? false
            }
        case 'setShowAccount':
            return {
                ...state,
                showAccount: action.payload?.showAccountPayload ?? false
            }
        case 'closeAuthPages':
            return {
                ...state,
                showSignup: false,
                showLogin: false
            }
        case 'setCurrentUser':
            return {
                ...state,
                currentUser: action.payload?.currentUserPayload ?? null 
            }
        default:
            return state
    }
}