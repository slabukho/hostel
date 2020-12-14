import actionTypes from './actionTypes'

export const changeLanguageAction = language => {
    return {
        type: actionTypes.CHANGE_LANGUAGE,
        payload: language
    }
}