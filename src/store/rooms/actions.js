import actionTypes from './actionTypes'

export const chooseRoomAction = room => {
    return {
        type: actionTypes.CHOOSE_ROOM,
        payload: room
    }
}