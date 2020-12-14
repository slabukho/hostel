import React from 'react'
import {RequestStyled} from './styled'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { useToasts } from 'react-toast-notifications'

const Request =()=> {
    const { register, handleSubmit, errors } = useForm();
    console.log(errors)
    const { addToast } = useToasts()
    const { t } = useTranslation();
    const onSubmit = () => addToast(t('request.successRequest'), {
        appearance: 'success',
        autoDismiss: true,
      });
    return(
        <RequestStyled>
            <div>
            <div id='description'>
                <h1>
                    Diamond hotel
                </h1>
                <h2>
                    {t('request.hotel')}
                </h2>
            </div>
            <div id='description-ul'>
                <span>
                    {t('request.description.work24/7')}
                    <br/>
                    {t('request.description.highService')}
                    <br/>
                    {t('request.description.healsyFood')}
                    <br/>
                    {t('request.description.priceParty')}
                    <br/>
                    {t('request.description.comfortLife')}
                </span>
            </div>
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
                    {t('button.submitApplication')}
                </button>
            </form>
            </div>
        </RequestStyled>
    )
}

export default Request