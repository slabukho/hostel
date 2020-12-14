import actionTypes from './actionTypes'

const InitialStateRooms = () => {
    return {
        room: {}
    }
}


 const roomsReducer = (state = InitialStateRooms(), action) => {
    switch (action.type) {
        case actionTypes.CHOOSE_ROOM: {
            return {
                ...state,
                room: action.payload
            }
        }
        default:
            return state;
    }
}

export default roomsReducer