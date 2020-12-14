import React from 'react';
import { roomStateSelector } from '../../store/rooms/selectors';
import { useSelector } from 'react-redux';
import { ModalRoomStyled, ModalOderStyled } from './styled';
import { useTranslation } from "react-i18next";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { modalNames } from '../../helpers/modalNames';
import { useForm } from "react-hook-form";
import PhoneInput from 'react-phone-input-2'

const Modal = ({setShow, modalName, setModalName, onSubmit}) => {
    const room = useSelector(roomStateSelector)
    const { t } = useTranslation();
    const { register, handleSubmit, errors } = useForm();
    console.log(modalName)
    const handleOpenOderDetails = () => {
        setModalName(modalNames.ORDER_DETAILS)
    }
    const Slider=()=>{
        return(
            <div className="slide-container">
                 <Slide>
            {room.picture.map(photo=>
                <div className="each-slide">
                <div style={{'backgroundImage': `url(${photo})`}}>
                </div>
              </div>
                )}
                </Slide>
            </div>
        )
    }

    return(
        <>
      {modalName === modalNames.ROOM &&   <ModalRoomStyled>
            <div onClick={()=>setShow(false)}>
                <span>←</span>
               <p> {t('modal.comeBack')}</p>
            </div>
            <section>
                    <Slider/>
                <div>
                    <h4>
                        {room.lable}
                    </h4>
                    <p>
                        {room.price}
                    </p>
                    <div id='book-room' onClick={handleOpenOderDetails}>
                         {t('button.BookARoom')}
                    </div>
                    <p>
                        {room?.description?.header}
                    </p>
                    <p>
                        {t('modal.facilities')}
                    </p>
                     {room?.description?.facilities.map(item =><p>{item}</p>)}
                     <h5>
                         {t('modal.includeToPrice')}
                     </h5>
                     {room?.description?.inludeToPrice.map(item =><p>{item}</p>)}
                </div>
            </section>
            <span onClick={()=>setShow(false)}/>
        </ModalRoomStyled>}
        {modalName === modalNames.ORDER_DETAILS &&   <ModalOderStyled>
            <section>
                    <h4>
                        {t('modal.yourOrder')}
                    </h4>
                    <hr/>
                    <div>
                        <img src={room.picture[0]} id='picture'/>
                        <b>{room.lable}</b>
                        <p>{room.price}</p>
                        <img src="https://static.tildacdn.com/lib/linea/1bec3cd7-e9d1-2879-5880-19b597ef9f1a/arrows_circle_remove.svg" id='close'/>
                    </div>
                    <hr/>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input 
                            type="date" 
                            placeholder= {t('placeholders.CheckIn')} 
                            onfocus="(this.type='date')" 
                            name='checkin'
                            ref={register({ required: true })}/>
                            {errors.checkin && <span>{t('request.required')}</span>}
                        <input 
                            type="date" 
                            placeholder={t('placeholders.CheckOut')}
                            name='checkOut'
                            ref={register({ required: true })}/>
                            {errors.checkin && <span>{t('request.required')}</span>}
                        <input 
                            type="text" 
                            placeholder={t('placeholders.NumberOfPerson')}
                            name='number'
                            ref={register({ required: true })}/>
                            {errors.checkin && <span>{t('request.required')}</span>}
                        <PhoneInput 
                            country={'ua'}
                        />
                        <button>
                            {t('button.book')}
                        </button>
                    </form>
            </section>
            <span onClick={()=>setShow(false)}/>

        </ModalOderStyled>}
        </>
    )
}


export default Modal
