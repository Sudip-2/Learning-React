import React, { useState } from 'react'
import {motion,AnimatePresence} from 'framer-motion'

function BasicsOfFramer() {
    const[isVisible,setIsvisible] = useState(false)
    return (
        <>
            <div style={{
                display: "grid",
                placeContent:"center",
                height:"100vh",
                gap:"0.8rem"
            }
            }
            >
                <motion.button style={{
                    padding:10,
                    background:"skyblue",
                    border:"transparent",
                    fontSize:'20px',
                    borderRadius:15
                }}
                onClick={() => setIsvisible(!isVisible)}
                layout
                >Show/Hide</motion.button>

            <AnimatePresence >
                {isVisible && (<motion.div
                initial={{
                    rotate:'0deg',
                    scale:0,
                    y:0
                }}
                animate={{
                    rotate:'360deg',
                    scale:1,
                    y:[0,100,-100,0]
                }}
                exit={{
                    rotate:'0deg',
                    scale:0,
                    y:0
                }}
                transition={{
                    duration:1,
                    // type:'spring',
                    ease:'backInOut',
                    // repeat:Infinity
                    times:[0,0.25,0.5,0.75,1] //Defines keyframes for animations at specific time percentages (between 0 and 1). how many in translate y that many element have to be in times
                }}
                style={{
                    height:150,
                    width:150,
                    background:'black'
                }}>

                </motion.div>
                )}
            </AnimatePresence>
            </div>
        </>
    )
}
// so add animation to any element we use motion.that element

// motion gives us some props like initial , animate

// The AnimatePresence component in framer-motion is used to handle animations when React components are added to or removed from the DOM. Without it, Framer Motion can only animate elements while they are present in the DOM.

// When an element with layout changes its dimensions, Framer Motion calculates the difference and animates the transition.
export default BasicsOfFramer