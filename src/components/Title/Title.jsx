import { useEffect, useRef } from "react"
import AnimatedTitle from "./AnimatedTitle"
import Hours from "./Hour"
import { gsap } from "gsap"

const Title = () => {
  const subTittle = useRef(null)
  const getInTouch = useRef(null)
  useEffect(() => {
    gsap.fromTo(subTittle.current,
      { opacity: 0, top: "2rem" },
      { opacity: 1, top: 0, duration: 0.5, delay: .9 })
    gsap.fromTo(getInTouch.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5, delay: .9 })
  }, [])

  return (
    <div>
      <div className="z-0 sticky top-0 flex flex-col-reverse gap-[20vh] p-4 md:flex-row md:gap-0 md:justify-between">
        <div className="md:border-r md:border-r-principal">
          <AnimatedTitle />
        </div>
        <div ref={subTittle} className="relative flex flex-col-reverse max-w-[225px] md:flex-col md:justify-between md:max-w-[25%]">
          <Hours />
          <h2 className="text-subtitle font-serif mb-4">Brand and Digital for Culture, Commerce and Good.</h2>
        </div>
      </div>
      <div ref={getInTouch} className='z-30 fixed top-0 right-0 bg-principal rounded-lg px-2 m-4'>
        <a className='text-black text-time'>Get In Touch</a>
      </div>
    </div>
  )
}

export default Title
