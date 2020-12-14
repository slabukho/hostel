import actionTypes from './actionTypes'

const InitialStateLanguage = () => {
    return {
        language: 'RU'
    }
}


 const themeReducer = (state = InitialStateLanguage(), action) => {
    switch (action.type) {
        case actionTypes.CHANGE_LANGUAGE: {
            localStorage.setItem('language',JSON.stringify(action.payload))
            return {
                ...state,
                language: action.payload
            }
        }
        default:
            return state;
    }
}

export default themeReducer