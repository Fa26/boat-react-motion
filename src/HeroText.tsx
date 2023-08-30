import {motion} from "framer-motion";
import {animationStart,reveal} from "./utils/animation";

function HeroText(){
    return(
        <motion.div 
        className="flex flex-col items-center text-center"
            layout
            initial={{height:0}}
            animate={{height:"unset"}}
            transition={{delay : animationStart, duration:1}}
        >
                <motion.div
                   variants={reveal}
                   initial="hiddenVariant"
                   animate="revealedVariant"
                   transition={{ delay: animationStart + 1, duration: 0.5 }}  
                    className="flex flex-col text-3vw <md:text-24px font-bold mb-30px pt-100px"  >

                    <span>Mind with flow</span>
                    <span >You can stop Daydreaming</span>
                </motion.div>

                <span className="mb-30px w-1/4 <lg:w-1/3 <md:w-1/2 text-14px leading-tight">
                    —¿Por qué se rió de mí, en lugar de ayudarme? Usted no lo sabe, pero yo soy psicólogo y ayudo a las personas a sanar sus emociones, trabajo con gente difícil, he salvado la vida de personas al borde del suicidio y matrimonios que se creían destruidos. Cada día me enfrento a la locura cara a cara, y usted, es solo un chofer de microbús, ¿quién de los dos tiene la vida más patética?
                    Baltasar Gracián
                    Y el conductor, sin muestra del más mínimo asombro ante tal argumento respondió:<br />
                    —Usted.
                </span>

    </motion.div >
    )
}

export default HeroText;