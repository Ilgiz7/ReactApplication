import React from "react";
import s from './ProfileInfo.module.css'
import Preloader from "../../../common/Preloader/Preloader";
import ProfileStatus from './ProfileStatus'


const ProfileInfo = (props)=>{
    if (!props.profile) {
        return <Preloader/>
    }

    return (

             <div >
                 {/*<div>*/}
                 {/*    <img src="https://www.worldatlas.com/upload/93/44/ec/isola-bella-island-sicily-italy-ionian-sea-igorzh.jpg" alt=""/>*/}
                 {/*</div>*/}

                 <div className={s.descriptionBlock}>
                     <ProfileStatus status={'Hello all'}/>
                     <div>О пользователе</div>
                     <div >
                         <img className={s.avatarPhoto} src={props.profile.photos.large}/>
                     </div>
                       <div>
                           Полное имя: {props.profile.fullName}
                       </div>
                     <div>Ищу работу: {props.profile.lookingForAJob ?  " Да" : " Нет"  }</div>
                     <div> Описание работы: {props.profile.lookingForAJobDescription}</div>
                     <div> О себе: {props.profile.aboutMe}</div>
                 </div>

            </div>

    )

}

export default  ProfileInfo