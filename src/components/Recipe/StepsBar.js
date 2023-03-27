import React from 'react'
import { motion } from 'framer-motion'
import Check from '../svg/Check'

export default function StepsBar(props) {

    const mainColor = props.color //blue
    const inactiveColor = '#9ca3af99' //gray
    const duration = props.duration

    //completed = props.currentStep > i+1
    //active = props.currentStep === i+1
    //inactive = props.currentStep < i+1

    let variants = {
        completed: {
            color: '#fff',
            backgroundColor: mainColor,
            borderColor: mainColor
        },
        active: {
            color: mainColor,
            backgroundColor: 'transparent',
            borderColor: mainColor
        },
        inactive: {
            color: inactiveColor,
            backgroundColor: 'transparent',
            borderColor: inactiveColor
        }
    }

    const glowVariants = {
        completed: {
            scale: 1.20,
            opacity: 0.3,
            transition: {
                opacity: {
                    duration: 0
                }
            }
        },
        active: {
            scale: 1,
            opacity: 0,
            transition: {
                delay: 0,
                duration
            }
        },
        inactive: {
            opacity: 0
        }
    }

    return (
        <div className='flex justify-between'>
            {[...Array(props.steps)].map((e, i) =>
                <motion.div
                    animate={
                        props.currentStep > i+1
                        ? 'completed'
                        : props.currentStep === i+1
                            ? 'active'
                            : 'inactive'
                    }
                    className='relative'
                    key={i}
                >
                    <motion.div
                        variants={glowVariants}
                        initial={false}
                        transition={{duration, delay: duration / 2, type: 'tween', ease: 'circOut'}}
                        className='absolute inset-0 scale-125 rounded-full'
                        style={{backgroundColor: mainColor}}
                    />

                    <div className='relative'>
                        <motion.div
                            variants={variants}
                            initial={false}
                            transition={{ duration }}
                            key={mainColor}
                            className='flex justify-center items-center rounded-full w-10 h-10 border-2 relative'
                        >
                            {props.currentStep <= i+1 && <span>{i+1}</span>
                            //if <Check/> was here when "props.currentStep > i+1" -when the step is completed- then the path animation would be triggered everytime the color changes;
                            //this is due to key={mainColor}
                            }
                        </motion.div>

                        {props.currentStep > i+1 &&
                            <Check
                                initial={{pathLength: 0, opacity: 0}}
                                animate={{pathLength: 1, opacity: 1}}
                                transition={{duration, delay: duration*(2/3), type: 'tween', ease: 'easeOut'}}
                                boxStyle='h-6 w-6 absolute inset-0 m-auto text-white'
                            />
                            //that's why it's here, outside of the div that holds it, so they don't share the key
                        }
                    </div>
                </motion.div>
            )}
        </div>
    )
}