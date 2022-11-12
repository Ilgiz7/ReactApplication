import React from "react";
import s from './ProfileInfo.module.css'


const ProfileInfo = ()=>{

    return (

             <div >
                 <div>
                     <img src="https://www.worldatlas.com/upload/93/44/ec/isola-bella-island-sicily-italy-ionian-sea-igorzh.jpg" alt=""/>
                 </div>

                 <div className={s.descriptionBlock}>
                     avatar+description
                 </div>

            </div>

    )

}

export default  ProfileInfo