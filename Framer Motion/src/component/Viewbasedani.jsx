import React from 'react'
import {motion} from 'framer-motion'

const Viewbasedani = () => {
  return (
    <>
    <div style={{height:'150vh'}}>
        <motion.div
        style={{
            height:200,
            width:200,
            background:"red"
        }}
        initial={{
            opacity: 0,
            scale: 0.8,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
        transition={{
            duration:1
        }}
        >

        </motion.div>
    </div>
    </>
  )
}

export default Viewbasedani