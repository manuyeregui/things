import { motion } from 'framer-motion'
import React, { useState } from 'react'
import FullscreenBox from '../FullscreenBox'
import BuenosAires from './img/BuenosAires.jpg'
import Madrid from './img/Madrid.jpg'
import NewYork from './img/NewYork.jpg'
import Paris from './img/Paris.jpg'
import Sidney from './img/Sidney.jpg'
import Tokyo from './img/Tokyo.jpg'
import ControlPanel from '../Controls/ControlPanel'
import Slider from '../Controls/Slider'
import Select from '../Controls/Select'
import Card from './Card'
import CardsMap from './CardsMap'

export default function CardsCarousel() {

    const cards = [
        {
            title: 'Buenos Aires',
            subtitle: 'Where tango and culture unite.',
            pic: BuenosAires
        },
        {
            title: 'Madrid',
            subtitle: 'Where history and modernity collide.',
            pic: Madrid
        },
        {
            title: 'New York',
            subtitle: 'Where dreams come true.',
            pic: NewYork
        },
        {
            title: 'Paris',
            subtitle: 'Where romance comes to life.',
            pic: Paris
        },
        {
            title: 'Sidney',
            subtitle: 'Where adventure meets the sea.',
            pic: Sidney
        },
        {
            title: 'Tokyo',
            subtitle: 'Where innovation thrives.',
            pic: Tokyo
        }
    ]

    const [index, setIndex] = useState(0);
    const card = cards[index];
    const prev = cards[index - 1];
    const next = cards[index + 1];

    const [parallax, setParallax] = useState(0.50);
    const handleParallax = (num) => {
        setParallax(num)
    }

    const [scale, setScale] = useState(0.50);
    const handleScale = (num) => {
        setScale(num)
    }

    const sizes = [
        {
            name: 'small',
            width: 310,
            height: 448
        },
        {
            name: 'medium',
            width: 400,
            height: 460
        },
        {
            name: 'large',
            width: 500,
            height: 480
        },
        {
            name: 'extra-large',
            width: 600,
            height: 500
        }
    ]
    const [size, setSize] = useState(0);
    const changeSize = (e) => {
        setSize(e.target.value);
    }
    const width = sizes[size].width
    const height = sizes[size].height

    const textStyles = [
        {
            name: 'transparent',
            style: 'text-white'
        },
        {
            name: 'white',
            style: 'bg-white/[.80] text-black'
        }
    ];
    const [textStyle, setTextStyle] = useState(0);
    const changeTextStyle = (e) => {
        setTextStyle(e.target.value);
    }
    const activeTextStyle = textStyles[textStyle].style

    const imgStyles = [
        {
            name: 'non-spaced',
            outern: { width, borderRadius: 16 },
            inner: { width: width, marginLeft: 0, marginRight: 0, borderRadius: 0 }
        },
        {
            name: 'spaced',
            outern: { width, borderRadius: 0 },
            inner: { width: width * 0.95, marginLeft: width * 0.025, marginRight: width * 0.025, borderRadius: 16 }
        }
    ];
    const [imgStyle, setImgStyle] = useState(0);
    const changeImgStyle = (e) => {
        setImgStyle(e.target.value);
    }
    const activeImgStyle = imgStyles[imgStyle]

    return (
        <FullscreenBox>

        {/*Controls*/}
            <ControlPanel title={'Carousel'}>
                    <Select
                        title='size'
                        icon='fi fi-rr-resize'
                        options={sizes}
                        state={size}
                        function={changeSize}
                    />
                    <Slider
                        title='parallax'
                        clickable
                        min={0}
                        max={1}
                        default={0.8}
                        handler={handleParallax}
                    />
                    <Slider
                        title='scale'
                        clickable
                        min={0}
                        max={1}
                        default={0}
                        handler={handleScale}
                    />
                    <Select
                        title='display'
                        icon='fi fi-rr-picture'
                        options={imgStyles}
                        state={imgStyle}
                        function={changeImgStyle}
                    />
                    <Select
                        title='text'
                        icon='fi fi-rr-text'
                        options={textStyles}
                        state={textStyle}
                        function={changeTextStyle}
                    />
            </ControlPanel>

        {/*Card*/}
            <div>
                <motion.div
                    className='flex space-x-2 select-none'
                    initial={false}
                    animate={{height}}
                >
                    <div
                        className={
                            `h-full w-10 flex justify-center items-center transition-all
                            ${prev ? 'cursor-pointer' : 'pointer-events-none opacity-20'}`
                        }
                        onClick={() => prev && setIndex(index - 1)}
                    >
                        <i className="fi fi-rr-angle-left text-2xl text-white"/>
                    </div>

                    <motion.div
                        className='overflow-hidden relative'
                        variants={activeImgStyle}
                        initial={false}
                        animate='outern'
                    >
                        <motion.div
                            className='absolute left-0 h-full flex'
                            animate={{x: -index * width}}
                            transition={{duration: 0.5, type: 'tween', ease: 'easeInOut'}}
                        >
                            {cards.map((e, i) => 
                                <Card
                                    key={i}
                                    data={e}
                                    imgVariants={activeImgStyle}
                                    textStyle={activeTextStyle}
                                    activeIdx={index}
                                    cardIdx={i}
                                    width={width}
                                    parallax={parallax}
                                    scale={scale}
                                />
                            )}
                        </motion.div>
                    </motion.div>

                    <div
                        className={`h-full w-10 flex justify-center items-center transition-all ${next ? 'cursor-pointer' : 'pointer-events-none opacity-20'}`}
                        onClick={() => next && setIndex(index + 1)}
                    >
                        <i className="fi fi-rr-angle-right text-2xl text-white"/>
                    </div>

                </motion.div>

                <CardsMap length={cards.length} active={index} setIndex={setIndex}/>

            </div>
        </FullscreenBox>
    )
}
