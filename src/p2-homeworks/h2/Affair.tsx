import React from 'react'
import {AffairType} from "./HW2";
import styles from "./Affairs.module.css"

type AffairPropsType = {

    affair: AffairType
    deleteAffairCallback: (affair_ID:number) =>void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }

    return (
        <div className={styles.affair}>
            <div className={styles.affairName}>{props.affair.name}</div>

            <button className={styles.deleteAffairButton} onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
