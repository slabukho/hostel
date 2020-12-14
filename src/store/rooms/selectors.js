export const roomsStateSelector = state => state.room
export const roomStateSelector = state=> roomsStateSelector(state).room