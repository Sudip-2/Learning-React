import React from 'react'
import { motion, useScroll } from 'framer-motion'

const Scrollinframer = () => {

    const {scrollYProgress} = useScroll();
    return (
        <>
            <div>
                <motion.div
                style={{
                    transformOrigin:'left',
                    scaleX:scrollYProgress,
                    margin:0,
                    padding:0,
                    background:'blue',
                    height:20,
                    position:'sticky',
                    top:0,
                    width:'100%'
                }}
                />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa doloribus mollitia eum placeat dignissimos debitis, illo facere id dolor voluptatibus, beatae fugit magni ipsam deserunt molestias ducimus nulla nemo reiciendis.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa doloribus mollitia eum placeat dignissimos debitis, illo facere id dolor voluptatibus, beatae fugit magni ipsam deserunt molestias ducimus nulla nemo reiciendis.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa doloribus mollitia eum placeat dignissimos debitis, illo facere id dolor voluptatibus, beatae fugit magni ipsam deserunt molestias ducimus nulla nemo reiciendis.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa doloribus mollitia eum placeat dignissimos debitis, illo facere id dolor voluptatibus, beatae fugit magni ipsam deserunt molestias ducimus nulla nemo reiciendis.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa doloribus mollitia eum placeat dignissimos debitis, illo facere id dolor voluptatibus, beatae fugit magni ipsam deserunt molestias ducimus nulla nemo reiciendis.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa doloribus mollitia eum placeat dignissimos debitis, illo facere id dolor voluptatibus, beatae fugit magni ipsam deserunt molestias ducimus nulla nemo reiciendis.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, atque in, nobis sapiente blanditiis harum officiis iure et dolorem corporis deleniti quae, obcaecati illum optio impedit sunt culpa nam minima aut esse. Perspiciatis doloremque ipsam praesentium eum dolores quisquam exercitationem architecto? Totam sit quam id distinctio, rerum sequi at quas fugiat, perspiciatis ex dolorum! Quam animi soluta adipisci alias veritatis possimus aliquam. Itaque maxime aliquid exercitationem veniam tempore minima, eveniet id voluptate dolores vero culpa odio ipsum magnam nobis dolore quo velit nulla suscipit, nihil soluta, rerum unde illo autem! Consectetur, optio tempore! Aperiam pariatur esse molestias? Corporis, aliquam cupiditate.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, atque in, nobis sapiente blanditiis harum officiis iure et dolorem corporis deleniti quae, obcaecati illum optio impedit sunt culpa nam minima aut esse. Perspiciatis doloremque ipsam praesentium eum dolores quisquam exercitationem architecto? Totam sit quam id distinctio, rerum sequi at quas fugiat, perspiciatis ex dolorum! Quam animi soluta adipisci alias veritatis possimus aliquam. Itaque maxime aliquid exercitationem veniam tempore minima, eveniet id voluptate dolores vero culpa odio ipsum magnam nobis dolore quo velit nulla suscipit, nihil soluta, rerum unde illo autem! Consectetur, optio tempore! Aperiam pariatur esse molestias? Corporis, aliquam cupiditate.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, atque in, nobis sapiente blanditiis harum officiis iure et dolorem corporis deleniti quae, obcaecati illum optio impedit sunt culpa nam minima aut esse. Perspiciatis doloremque ipsam praesentium eum dolores quisquam exercitationem architecto? Totam sit quam id distinctio, rerum sequi at quas fugiat, perspiciatis ex dolorum! Quam animi soluta adipisci alias veritatis possimus aliquam. Itaque maxime aliquid exercitationem veniam tempore minima, eveniet id voluptate dolores vero culpa odio ipsum magnam nobis dolore quo velit nulla suscipit, nihil soluta, rerum unde illo autem! Consectetur, optio tempore! Aperiam pariatur esse molestias? Corporis, aliquam cupiditate.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, atque in, nobis sapiente blanditiis harum officiis iure et dolorem corporis deleniti quae, obcaecati illum optio impedit sunt culpa nam minima aut esse. Perspiciatis doloremque ipsam praesentium eum dolores quisquam exercitationem architecto? Totam sit quam id distinctio, rerum sequi at quas fugiat, perspiciatis ex dolorum! Quam animi soluta adipisci alias veritatis possimus aliquam. Itaque maxime aliquid exercitationem veniam tempore minima, eveniet id voluptate dolores vero culpa odio ipsum magnam nobis dolore quo velit nulla suscipit, nihil soluta, rerum unde illo autem! Consectetur, optio tempore! Aperiam pariatur esse molestias? Corporis, aliquam cupiditate.</p>
            </div>
        </>
    )
}

export default Scrollinframer