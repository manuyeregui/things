import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import Check from '../svg/Check'

export default function ProgressBar(props) {
  const currentStep = props.currentStep
  const totalSteps = props.steps
  const barColor = props.color
  const duration = props.duration

  const [status, setStatus] = useState('incompleted')

  useEffect(() => {
    currentStep > totalSteps
      ? setStatus('completed')
      : setStatus('incompleted')
  }, [currentStep])

  const variants = {
    box: {
      incompleted: {
        width: '100%',
        height: '16px',
        backgroundColor: 'rgb(0 0 0 / 0.1)',
      },
      completed: {
        width: '40px',
        height: '40px',
        backgroundColor: 'rgb(21 128 61 / 0.7)',
        transition: {
          duration: duration,
          delay: duration *2,
          type: 'tween',
          ease: 'easeOut'
        }
      }
    },
    bar: {
      incompleted: {
        width: `${(currentStep - 1)/totalSteps * 100}%`,
        backgroundColor: barColor
      },
      completed: {
        width: `${(currentStep - 1)/totalSteps * 100}%`,
        backgroundColor: 'rgb(34 197 94 / 0.5)',
      }
    },
    glow: {
      completed: {
        scale: 1.3,
        opacity: 0.3,
        /*transition: {
            opacity: {
                duration: 0
            }
        }*/
      },
      incompleted: {
          scale: 0.9,
          opacity: 0,
          transition: {delay: 0, duration: duration}
      }
    }

  }


  return (
    <div className='flex justify-center'>
      <motion.div variants={variants.box} animate={status} transition={{duration, delay: duration}} className='rounded-full relative'>
          <motion.div
            variants={variants.bar}
            animate={status}
            transition={{duration, delay: duration/2, type: 'tween', ease: 'easeInOut'}}
            className='absolute h-full left-0 rounded-full'
            style={{backgroundColor: barColor}}
          >
            {status === 'completed' &&
                <Check
                  initial={{pathLength: 0, opacity: 0}}
                  animate={{pathLength: 1, opacity: 1}}
                  transition={{duration: duration / 2, delay: duration * 3, type: 'tween', ease: 'easeOut'}}
                  boxStyle='h-6 w-6 absolute inset-0 m-auto text-white z-10'
              />
            }
          </motion.div>
            <motion.div
              variants={variants.glow}
              animate={status}
              transition={{duration: duration, delay: duration * 3, type: 'tween', ease: 'circOut'}}
              className='absolute inset-0 rounded-full bg-green-500 w-full h-full'
            />
          
      </motion.div>
    </div>
  )
}
