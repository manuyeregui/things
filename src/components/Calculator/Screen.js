import { AnimatePresence, motion } from 'framer-motion';
import React, { useContext, useEffect } from 'react'
import { CalcContext } from './CalcContext'

export default function Screen({ theme, font }) {

  const { calc } = useContext(CalcContext);
  const amount = calc.num ? calc.num : calc.res

  const commaFormatter = new Intl.NumberFormat('en-US');
  const formatted = commaFormatter.format(amount).split('')

  let obj = {};
  useEffect(() => {
    obj = {}
  }, [formatted])

  const getKey = (char, index) => {

    //if (char === ',') return `${char},-${index}`;

    let newIndex;  
    if (obj[char]) {
      obj[char] = obj[char] + 1;
      newIndex = obj[char];
    } else {
      obj[char] = 1;
      newIndex = obj[char];
    }
    const key = char + newIndex;
    return key
  }
  
  /*const getKey = (index, char) => {
    let newIndex = 0

    if (char === ',') return `${char},-${index}`;

    for (let i = 0; i < index; i++) {
      if (formatted[i] === ',' || formatted[i] === '-')
        continue;
      newIndex++;
    }
    return char + newIndex
  }*/

  return (
    <div className='text-8xl p-10 font-bold tracking-wide w-full'>
      <div className={`w-full h-28 overflow-hidden flex justify-end items-center relative ${theme.text} ${font}`}>
        <AnimatePresence mode='popLayout'>
          {formatted.map((char, i) =>
            <motion.span
              key={getKey(char, i)}
              initial={{y: '1em', opacity: 0}}
              animate={{y: 0, opacity: 1}}
              exit={{y: i === 0 ? '-1em' : '1em', opacity: 0}}
              layout
              transition={{
                type: 'spring',
                stiffness: 400,
                damping: 35
              }}
            >
              {char}
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
