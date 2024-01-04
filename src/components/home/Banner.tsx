import React from "react"
import ReactGA from "react-ga4"

import Button from "../shared/Button"
import HeroImage from "@site/static/images/home/hero.svg"
import {analyticsHandler} from "@site/src/utils"

const Banner = () => {
  return (
    <main>
      <div className="flex flex-col sm:items-center sm:text-center w-full mt-6 px-4 sm:mt-20">
        <div className="h-full 2xl:min-h-0">
          <h2 className="text-title-large max-w-xs sm:text-display-small lg:text-display-large sm:max-w-5xl">
            GraphQL platform engineered for{" "}
            <span className="bg-tailCall-yellow rounded-md sm:rounded-2xl px-2">scale</span>
          </h2>
          <p className="sm:max-w-2xl sm:m-auto text-content-small sm:text-content-medium lg:text-content-large font-normal max-w-md sm:mt-4 mb-0">
            A cloud native solution to streamline API management across{" "}
            <span className="font-bold sm:text-title-medium">edge,&nbsp;</span>
            <span className="font-bold sm:text-title-medium">middle,&nbsp;</span>
            and <span className="font-bold sm:text-title-medium">service</span> layers.
          </p>
          <div className="hidden sm:flex justify-center mt-6 sm:mt-10 space-x-4 sm:space-x-6">
            <Button
              title="Try it Out"
              href="https://codesandbox.io/p/github/tailcallhq/tailcall-sandbox/main"
              theme="dark"
              width="228px"
              onClick={() => analyticsHandler("Home Page", "Click", "Playground")}
            />
            <Button
              title="Get Started"
              href="/docs/getting_started/"
              theme="light"
              width="228px"
              onClick={() => analyticsHandler("Home Page", "Click", "Get Started")}
            />
          </div>

          <div className="sm:hidden flex justify-center mt-6 sm:mt-10 space-x-4 sm:space-x-6">
            <Button
              title="Try it Out"
              href="https://codesandbox.io/p/github/tailcallhq/tailcall-sandbox/main"
              theme="dark"
              onClick={() => analyticsHandler("Home Page", "Click", "Playground")}
            />
            <Button
              title="Get Started"
              href="/docs/getting_started/"
              theme="light"
              onClick={() => analyticsHandler("Home Page", "Click", "Get Started")}
            />
          </div>
        </div>

        <HeroImage className="object-contain h-full sm:h-full w-full mt-10 max-w-7xl" />
      </div>
    </main>
  )
}

export default Banner