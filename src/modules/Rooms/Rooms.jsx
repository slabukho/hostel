import React, { useState , useEffect } from 'react'
import { RoomsStyled } from './styled'
import { useTranslation } from "react-i18next";
import { rooms } from '../../helpers/rooms'
import Room from '../../components/Room'
import Modal from '../../components/Modal'
import { modalNames } from '../../helpers/modalNames'
import { useToasts } from 'react-toast-notifications';

const Rooms = () => {
    const { t } = useTranslation();
    const [show, setShow] = useState(false)
    const { addToast } = useToasts()
    const [modalName, setModalName] = useState(modalNames.ROOM)
    
    useEffect(() => {
      show ? document.body.style.overflow = 'hidden':
      document.body.style.overflow = 'unset';
   }, [show ]);
   const onSubmit = () =>{ 
    setShow(false)
    addToast(t('request.successRequest'), {
    appearance: 'success',
    autoDismiss: true,
  });}
    return(
      <>
        {show && <Modal show={show} setShow={setShow} modalName={modalName}  setModalName={setModalName} onSubmit={onSubmit}/>}
        <RoomsStyled>
          <h4>{ t('titleRooms') }</h4>
          <div id='rooms-container'>
            {rooms.map( room=><Room room={room} setShow={setShow} setModalName={setModalName}/>)}
          </div>
        </RoomsStyled>
      </>
    )
}

export default Rooms