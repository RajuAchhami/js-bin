import React from 'react'
import styles from './Navigation.module.css'
import Button from '../Button/Button'
import Dropdown from '../Dropdown/Dropdown'
import { useNavigate } from 'react-router-dom'

const Navigation = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <img src="/images/dave.min.svg" alt="" />
                    <div className="dropbox">
                        <Dropdown />
                    </div>
                    <button className='text-red-900'>Add Library</button>
                </div>
                <div className={styles.panel}>
                    <Button onClick={() => navigate('/html')} text="HTML" isleftbdr={true} />
                    <Button onClick={() => navigate('/css')} text="CSS" />
                    <Button onClick={() => navigate('/javaScript')} text="JavaScript" />
                    <Button onClick={() => navigate('/console')} text="Console" />
                    <Button onClick={() => navigate('/output')} text="Output" isrightbdr={true} />
                </div>
                <div className={styles.help}>
                    <Button text="Login or Register" />
                    <Button text="Blog" />
                    <Button text="Help" />
                </div>



            </div>

        </>
    )
}

export default Navigation