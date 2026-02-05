import HeroImg from '../assets/hero-img.svg?react'
import styles from './style/Hero.module.css'

function Hero () {
    return (
        <section className={`${styles.hero} silverBg`}>
            <div className="container">
                <div className={`${styles.flexContainer} flex`}>
                    <div>
                        <h1 className={`${styles.mainText}`}>Lessons and insights <br /><span>from 8 years</span></h1>
                        <p className={`${styles.subText}`}>Where to grow your business as a photographer: site or social media?</p>
                        <button>Register</button>
                    </div>
                    <HeroImg />
                </div>
            </div>
        </section>
    )
}

export default Hero