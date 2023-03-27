import React from 'react'
import { motion } from 'framer-motion'

export default function Check(props) {
  return (
    <motion.svg className={props.boxStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}>
        <motion.path
            initial={props.initial}
            animate={props.animate}
            transition={props.transition}
            key='check'
            d="M5 13l4 4L19 7"
            strokeLinejoin="round"
            strokeLinecap="round"/>
    </motion.svg>
  )
}


