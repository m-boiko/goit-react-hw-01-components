import css from './FriendList.module.css'
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";

export default function FriendListItem({ avatar, name, isOnline, id })
{ 
    return (      
        <li key={id} className={css.item}>
            < span className={css.status}>
                {isOnline ?
                    (<AiOutlineCheckCircle className={css.onlineIcon} />)
                    : (<AiOutlineCloseCircle className={css.offlineIcon} />)
                }</span>
        <img className="avatar" src={avatar} alt={name} width="48" />
        <p className="name">{name}</p>
        </li>

    );
}