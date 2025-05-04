import React from 'react'
import { motion, useAnimationControls } from 'framer-motion'

const Animationcontrol = () => {

    const hello = useAnimationControls()
    const handleClick = () => {
        hello.start('flip')
    }
    const testVariants = {
        initial: {
            rotate: "0deg",
        },
        flip: {
            rotate: '360deg',
        }
    }
    return (
        <>
            <div style={{
                display: "grid",
                placeContent: "center",
                height: "100vh",
                gap: "0.8rem"
            }
            }
            >
                <button className='clr-btn'
                    onClick={handleClick}
                >Flip it</button>

                <motion.div
                    style={{
                        height: 150,
                        width: 150,
                        background: 'black',
                    }}
                    variants={testVariants}
                    initial="initial"
                    animate=""
                    whileHover="flip"
                ></motion.div>

            </div>
        </>
    )
}

//variants 
//animation Control hook

export default Animationcontrol