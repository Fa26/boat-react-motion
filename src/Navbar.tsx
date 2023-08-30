import {motion} from 'framer-motion';
import { animationStart,reveal } from './utils/animation';

function Navbar(){
    return(
        <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:0.5,delay:animationStart}}
        >
            <motion.div
                variants={reveal}
                initial="hiddenVariant"
                animate="revealedVariant"
                transition={{
                    ease:"easeIn",
                    type:"tween",
                    staggerChildren:0.1,
                    duration:0.5,
                    delayChildren: animationStart +0.5,
                }}
                className="w-full flex items-center justify-around h-80px fixed top-0 bg-white z-100"
            
            
            >
        <div className="w-full flex items-center justify-around h-80px fixed top-0 bg-white z-100 ">
            <div className="flex gap-20px items-center <mi:hidden">
                <span className="cursor-pointer">Home</span>
                <span className="cursor-pointer">About</span>
                <span className="cursor-pointer">Contact</span>
                <span className="cursor-pointer">Found More</span>


            </div>
            <div className="flex gap-5px items-center cursor-pointer">
                <span className="mb-3px">Welcome</span>

            </div>
        </div>
        </motion.div>
        </motion.div>
    )

}

export default Navbar;