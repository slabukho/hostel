
import React from 'react'
import { languageStateSelectort } from '../../store/languages/selectors'
import { useDispatch, useSelector } from 'react-redux'
import { changeLanguageAction} from '../../store/languages/actions'
import {HeaderStyled} from './styled'
import { useTranslation } from "react-i18next";

const Header =()=> {
    const { t, i18n } = useTranslation();
    const dispatch = useDispatch()

    const changeLanguage = (language) => {
      i18n.changeLanguage(language);
      dispatch(changeLanguageAction(language.toUpperCase()))
    };
    (function(w,d,u){
        var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/60000|0);
        var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);
})(window,document,'https://cdn.bitrix24.ua/b15732723/crm/site_button/loader_2_jusdax.js');
    const language =useSelector(languageStateSelectort)
    return(
        <HeaderStyled>
            <div id='logo'>
                <img src="https://thumb.tildacdn.com/tild6464-6666-4264-b337-356365356431/-/resize/100x/-/format/webp/_viber_2020-09-30_13.jpg" alt=""/>
            </div>
            <div id='center-head'>
                <div id='links'>
                    <div>
                        <a href="#"><img src="https://thumb.tildacdn.com/tild6566-3565-4239-a461-633865616336/-/resize/35x/-/format/webp/instagram-2.png" alt="instagram"/></a>
                        <a href="#"><img src="https://thumb.tildacdn.com/tild3363-3935-4134-b262-633036303039/-/resize/35x/-/format/webp/faceb.png" alt="facebook"/></a>
                    </div>
                    <span>
                        <a href="tel:+380664962030"> +38 (066) 496-20-30</ a>
                    </span>
                </div>
                <div id='ul-head'>
                    <ul>
                        <li>
                           <a href='#'>{t('navigation.rooms')}</a>

                        </li>
                        <li>
                          <a href='#'>{t('navigation.service')}</a>
                        </li>
                        <li>
                           <a href='#'>{t('navigation.aboutUs')}</a>
                        </li>
                        <li>
                          <a href='#'>{t('navigation.galery')}</a>
                        </li>
                        <li>
                            <a href='#'>{t('navigation.contacts')}</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div id='languages'>
                <div id={language==='RU' ? 'selected':null} onClick={()=>changeLanguage('ru')}>
                    <img src="https://static.tildacdn.com/tild3663-3336-4461-b463-393032363664/3013967.svg"/>
                    <b>RU</b>
                </div>
                <div id={language==='UA' ? 'selected':null} onClick={()=>changeLanguage('ua')}>
                    <img src="https://static.tildacdn.com/tild6331-3436-4266-a361-383830643965/3013948.svg"/>
                    <b>UA</b>
                </div>
                <div id={language==='EN' ? 'selected':null} onClick={()=>changeLanguage('en')}>
                    <img src="https://static.tildacdn.com/tild6630-6131-4761-b264-363032616239/3013972.svg"/>
                    <b>EN</b>
                </div>
            </div>
        </HeaderStyled>
    )
}

export default Header