import { MotionConfig } from 'framer-motion'
import React, { useState } from 'react'
import ColorPicker from '../Controls/ColorPicker'
import ControlPanel from '../Controls/ControlPanel'
import FullscreenBox from '../FullscreenBox'
import ResizableBox from './ResizableBox'
import Select from '../Controls/Select'
import Slider from '../Controls/Slider'
import StepsBar from './StepsBar'
import ProgressBar from '../Controls/ProgressBar'
import ThemeSelector from '../Controls/ThemeSelector'

export default function ResizableSteps() {

    const defaultColor = '#3b82f6'
    const [mainColor, setMainColor] = useState(defaultColor);

    const totalSteps = 5
    const [duration, setDuration] = useState(0.2);
    const [step, setStep] = useState(1);
    const [direction, setDirection] = useState(1);

    const handleDuration = (dur) => {
        setDuration(dur)
    }

    const changeStep = async (e) => {
        let nextStep = step + Number(e.target.value);
        if (nextStep !== 0 && nextStep <= totalSteps + 1) {
            await setDirection(nextStep - step);
            setStep(nextStep);
        }
    }

    const [bodyAnimation, setBodyAnimation] = useState(0);
    const bodyAnimations = [
        {
            name: 'fade',
            initial: { opacity: 0 },
            animate: { opacity: 1, transition: { duration: duration / 2, delay: duration / 2 } },
            exit: { opacity: 0, transition: { duration: duration / 2 } }
        },
        {
            name: 'left-to-right',
            initial: { x: direction * 400 },
            animate: { x: 1, transition: { duration: duration / 2, delay: duration / 2 } },
            exit: { x: direction * -400, transition: { duration: duration / 2 } }
        },
        {
            name: 'fade to sides',
            initial: { x: direction * 35, opacity: 0 },
            animate: { x: 1, opacity: 1, transition: { duration: duration / 2, delay: duration / 2 } },
            exit: { x: direction * -35, opacity: 0, transition: { duration: duration / 2 } }
        },
        {
            name: 'up and down',
            initial: { y: direction * 200 },
            animate: { y: 1, transition: { duration: duration / 2, delay: duration / 2 } },
            exit: { y: direction * -200, transition: { duration: duration / 2 } }
        }
    ]
    const changeBodyAnimation = (e) => {
        setBodyAnimation(e.target.value);
    }

    const handleColor = (e) => {
        setMainColor(e.target.value);
    }

    const themes = [
        {
            name: 'light',
            background: 'bg-white'
        },
        {
            name: 'dark',
            background: 'bg-gray-600'
        }
    ]
    const [theme, setTheme] = useState(0)
    const handleTheme = () => setTheme(Number(!theme))

    const stepsStyles = [{ name: 'checkbox' }, { name: 'progress bar' }]
    const [stepsIndex, setStepsIndex] = useState(0);
    const handleStepsStyle = (e) => {
        setStepsIndex(e.target.value);
    }


    return (
        <FullscreenBox>
            <ControlPanel title={'recipe'}>
                <ColorPicker
                    icon={'fi-rr-palette'}
                    color={mainColor}
                    handleColor={handleColor}
                    title={'main color'}
                />
                <ThemeSelector
                    title={'theme'}
                    icon={themes[theme].name === 'dark' ? 'fi-rr-light-switch-off' : 'fi-rr-light-switch-on'}
                    active={theme}
                    switchTheme={handleTheme}
                />
                <Slider
                    title='speed'
                    clickable
                    min={0.1}
                    max={0.8}
                    defaultValue={0.2}
                    decimals={2}
                    unit={'seconds'}
                    handler={handleDuration}
                />
                <Select
                    title='content'
                    icon='fi fi-rr-bars-sort'
                    options={bodyAnimations}
                    state={bodyAnimation}
                    function={changeBodyAnimation}
                />
                <Select
                    title='steps'
                    icon='fi fi-rr-layers'
                    options={stepsStyles}
                    state={stepsIndex}
                    function={handleStepsStyle}
                />
            </ControlPanel>

            <MotionConfig transition={{ duration }}>
                <div className={'rounded-2xl overflow-hidden p-5 w-96 flex flex-col space-y-8 font-golos shadow-2xl absolute top-1/3 transition-all ' + themes[theme].background}>

                    {stepsStyles[stepsIndex].name === 'checkbox' &&
                        <StepsBar currentStep={step} steps={totalSteps} duration={duration} color={mainColor} />
                    }
                    {stepsStyles[stepsIndex].name === 'progress bar' &&
                        <ProgressBar currentStep={step} steps={totalSteps} duration={duration} color={mainColor} />
                    }

                    <ResizableBox duration={duration} step={step} variants={bodyAnimations[bodyAnimation]} />

                    <div className='w-full flex justify-between items-center'>
                        <button
                            value={-1}
                            onClick={changeStep}
                            className='rounded-md text-gray-400 text-sm select-none'
                        >
                            Back
                        </button>

                        <button
                            value={1}
                            onClick={changeStep}
                            className='rounded-full px-3 py-1 text-white text-sm select-none'
                            style={{
                                backgroundColor: mainColor
                            }}
                        >
                            Continue
                        </button>
                    </div>
                </div>
            </MotionConfig>
        </FullscreenBox>
    )
}
