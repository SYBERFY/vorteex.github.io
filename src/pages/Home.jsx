import React, { useState, useEffect } from 'react'
import Terminal from 'react-animated-term'
import VisibilitySensor from 'react-visibility-sensor'

import welcomeContent from '../terminal-content/welcome'
import stepOneContent from '../terminal-content/step-1'
import stepTwoContent from '../terminal-content/step-2'
import stepThreeContent from '../terminal-content/step-3'

import 'react-animated-term/dist/react-animated-term.css'

export default () => {
  const initialTerminal = [ { text: '', cmd: true } ]

  const [welcome, setWelcome] = useState(welcomeContent)
  const [stepOne, setStepOne] = useState(initialTerminal)
  const [stepTwo, setStepTwo] = useState(initialTerminal)
  const [stepThree, setStepThree] = useState(initialTerminal)

  const handleWelcome = isVisible => {
    if (isVisible) {
      setWelcome(welcomeContent)
    }
    else {
      setWelcome(initialTerminal)
    }
  }

  const handleStepOne = isVisible => {
    if (isVisible) {
      setStepOne(stepOneContent)
    }
    else {
      setStepOne(initialTerminal)
    }
  }

  const handleStepTwo = isVisible => {
    if (isVisible) {
      setStepTwo(stepTwoContent)
    }
    else {
      setStepTwo(initialTerminal)
    }
  }

  const handleStepThree = isVisible => {
    if (isVisible) {
      setStepThree(stepThreeContent)
    }
    else {
      setStepThree(initialTerminal)
    }
  }

  return (
    <>
      <div className="flex section w-full h-full justify-center">
        <div className="flex self-center welcome-terminal w-2/3 h-64">
          <VisibilitySensor onChange={handleWelcome} >
            <Terminal lines={welcome} interval={40} />
          </VisibilitySensor>
        </div> 
      </div>

      <div className="flex section w-full justify-center bg-black z-10 px-10 py-20">
        <div className="grid grid-cols-5 gap-16 w-full">
          <div className="step-terminal col-span-3 shadow-xl-white">
            <VisibilitySensor onChange={handleStepOne} >
              <Terminal lines={stepOne} interval={40} white />
            </VisibilitySensor>
          </div>

          <div className="col-span-2 flex justify-center text-white">
            <div className="self-center">
              <h1 className="text-4xl font-light step-headline">Setup your integrations</h1>
              <p className="mt-8">Select from multiple sources of information and configure them easily.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex section w-full justify-center bg-black z-10 px-10 py-20">
        <div className="grid grid-cols-5 gap-16 w-full">
          <div className="col-span-2 flex justify-center text-white">
            <div className="self-center">
              <h1 className="text-4xl step-headline">Perform Base Analysis</h1>
              <p className="mt-8">Get a quick perspective about the indicator that you are dealing.</p>
            </div>
          </div>

          <div className="step-terminal col-span-3 shadow-xl-white">
            <VisibilitySensor onChange={handleStepTwo} >
              <Terminal lines={stepTwo} interval={40} white />
            </VisibilitySensor>
          </div>
        </div>
      </div>

      <div className="flex section w-full justify-center bg-black z-10 px-10 py-20">
        <div className="grid grid-cols-5 gap-16 w-full">
          <div className="step-terminal col-span-3 shadow-xl-white">
            <VisibilitySensor onChange={handleStepThree} >
              <Terminal lines={stepThree} interval={40} white />
            </VisibilitySensor>
          </div>

          <div className="col-span-2 flex justify-center text-white">
            <div className="self-center">
              <h1 className="text-4xl step-headline">Your Use Cases</h1>
              <p className="mt-8">Select the best use case based on your analysis of the alert. In a few seconds, you will have the best insights for the analysis that you are working on. </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
