import React from 'react'
import { motion,MotionConfig } from 'framer-motion'

const BasicsOfGestures = () => {
    return (
        <>
            <div style={{
                display: "grid",
                placeContent: "center",
                height: "100vh",
                gap: "0.8rem"
            }
            }>
                <MotionConfig 
                transition={{
                    duration:0.2
                }}
                >

                <motion.button style={{
                    padding: 10,
                    background: "skyblue",
                    border: "transparent",
                    fontSize: '20px',
                    borderRadius: 15
                }}
                    whileHover={{
                        scale: 1.1
                    }}
                    whileTap={{
                        rotate: "3deg",
                        scale: 0.8
                    }}
                >Click me</motion.button>

                <motion.button style={{
                    padding: 10,
                    background: "red",
                    border: "transparent",
                    fontSize: '20px',
                    borderRadius: 15
                }}
                    whileHover={{
                        scale: 1.1
                    }}
                    whileTap={{
                        rotate: "-3deg",
                        scale: 0.8
                    }}
                >Click me</motion.button>
                </MotionConfig>
            </div>
        </>
    )
}

// The MotionConfig component in Framer Motion works like a context provider for animations.

export default BasicsOfGestures