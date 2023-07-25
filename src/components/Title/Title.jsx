import { useEffect, useRef } from "react"
import AnimatedTitle from "./AnimatedTitle"
import Hours from "./Hour"
import { gsap } from "gsap"

const Title = () => {
  const subTittle = useRef(null)
  useEffect(() => {
    const tl = gsap.timeline()
    tl.fromTo(subTittle.current,
      { opacity: 0, top: "2rem" },
      { opacity: 1, top: 0, duration: 0.5, delay: .9 })
  }, [])

  return (
    <div className=" flex flex-col-reverse gap-[20vh] md:flex-row md:gap-0 md:justify-between">
      <div className="border-r border-r-principal">
        <AnimatedTitle />
      </div>
      <div ref={subTittle} className="relative flex flex-col-reverse max-w-[225px] md:flex-col md:justify-between md:max-w-[25%]">
        <Hours />
        <h2 className="text-subtitle font-serif mb-4">Brand and Digital for Culture, Commerce and Good.</h2>
      </div>
    </div>
  )
}

export default Title
