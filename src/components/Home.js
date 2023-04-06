import { motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'
import FullscreenBox from './FullscreenBox'
import Heart from './svg/heart.js'

export default function Home({ links }) {

  const text = '//made with <3 by github.com/manuyeregui'
  const splittedText = text.split('')
  const typingSpeed = 0.15
  const blinkingSpeed = 0.5

  const charVariants = {
    hidden: {
      display: 'none'
    },
    show: {
      display: 'block'
    }
  }

  //<Heart size={22} spaceX={8}/>
  //<Link target='_blank' to={'https://github.com/manuyeregui'} className='hover:underline ml-1.5'>github.com/manuyeregui</Link>

  return (
    <FullscreenBox>

        <div className='font-mono lowercase pt-12 px-20 text-white absolute top-0 left-0'>

          <h2 className='text-base mb-2'>
            Things
          </h2>

          <Link target='_blank' to={'https://github.com/manuyeregui'} className='flex items-center leading-4 cursor-pointer relative group'>
            <div className='text-green-600 flex items-center'>
              {splittedText.map((char, i) => 
                char !== ' '
                  ? <motion.span key={i} variants={charVariants} initial='hidden' animate='show' transition={{delay: typingSpeed * i}}>{char}</motion.span>
                  : <motion.span key={i} variants={charVariants} initial='hidden' animate='show' transition={{delay: typingSpeed * i}} className='w-2'/>
              )}
            </div>
            <motion.div
              className='bg-white h-4 w-2 left'
              animate={{
                opacity: 0,
                transition: {
                  delay: typingSpeed * splittedText.length + 0.5,
                  duration: 0.00001,
                  repeatDelay: blinkingSpeed,
                  repeatType: 'reverse',
                  repeat: Infinity
                }
              }}
            />
            <Heart
              size={22}
              spaceX={8}
              speed={blinkingSpeed}
              delay={2.3}
              style={{position: 'absolute', left: 103}}
            />
          </Link>

          <div className='flex flex-col mt-5'>
            {
              links.map((e, i) =>
                <Link
                  className='my-1 opacity-60 flex items-center group hover:opacity-100'
                  to={e.link}
                  key={e.link}
                >
                  <h3 className='text-base font-extralight'>{`00${i} - ${e.title}`}</h3>
                  <span className='material-symbols-outlined hidden group-hover:block'>chevron_left</span>
                </Link>
              )
            }
          </div>
        </div>

      </FullscreenBox>
  )
}
