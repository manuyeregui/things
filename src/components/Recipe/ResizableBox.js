import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'
import Skeleton from './Skeleton'
import useMeasure from 'react-use-measure'

export default function ResizableBox(props) {

    let [ref, {height}] = useMeasure();

    return (
        <motion.div animate={{height: height || 'auto'}} className='overflow-hidden'>
            <AnimatePresence initial={false}>
                <motion.div
                    key={props.step}
                    variants={props.variants}
                    initial='initial'
                    animate='animate'
                    exit='exit'
                    className='relative'
                >
                    <div
                        ref={ref}
                        className={`${height ? 'absolute' : 'relative'} w-full`}
                    >
                        {props.step % 3 === 0 ?
                            <div className='space-y-2'>
                                <Skeleton w={'w-1/2'} h={'h-6'} bg={'bg-black'} title={true}/>
                                <Skeleton w={'w-full'} h={'h-4'} bg={'bg-black'}/>
                                <Skeleton w={'w-2/3'} h={'h-4'} bg={'bg-black'}/>
                                <Skeleton w={'w-2/3'} h={'h-4'} bg={'bg-black'}/>
                            </div>
                        : props.step % 3 === 1 ?
                            <div className='space-y-2'>
                                <Skeleton w={'w-2/3'} h={'h-6'} bg={'bg-black'} title={true}/>
                                <Skeleton w={'w-full'} h={'h-4'} bg={'bg-black'}/>
                                <Skeleton w={'w-1/2'} h={'h-4'} bg={'bg-black'}/>
                                <Skeleton w={'w-2/3'} h={'h-4'} bg={'bg-black'}/>
                                <Skeleton w={'w-1/3'} h={'h-4'} bg={'bg-black'}/>
                                <Skeleton w={'w-1/2'} h={'h-4'} bg={'bg-black'}/>
                            </div>
                        : //props.step % 3 === 2
                            <div className='space-y-2'>
                                <Skeleton w={'w-1/3'} h={'h-6'} bg={'bg-black'} title={true}/>
                                <Skeleton w={'w-full'} h={'h-4'} bg={'bg-black'}/>
                                <Skeleton w={'w-2/3'} h={'h-4'} bg={'bg-black'}/>
                            </div>   
                        }
                    </div>

                </motion.div>
            </AnimatePresence>
        </motion.div>
    )
}
