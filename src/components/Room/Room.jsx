import React from 'react'
import { useDispatch } from 'react-redux'
import { chooseRoomAction } from '../../store/rooms/actions'
import { RoomStyled } from './styled'
import { useTranslation } from "react-i18next";
import { modalNames } from '../../helpers/modalNames'


const Room = ({ room, setShow, setModalName}) => {
    const dispatch = useDispatch()
    const { t } = useTranslation();
    const handlenavigate = () =>{
        setModalName(modalNames.ROOM)
        dispatch(chooseRoomAction(room))
        setShow(true)
    }
    return(
        <RoomStyled onClick={handlenavigate}>
                <img src={ room.picture[0] } alt=""/>
                <h3>{ room.lable }</h3>
                <span>{ room.space }</span>
                <span>{ room.countOfPeople }</span>
                <b>{ room.price }</b>
                <div>{ t('button.moreDetails') }</div>
        </RoomStyled>
    )
}
// const Room = handleViewport(RoomView, { rootMargin: '-1.0px' });

export default Room