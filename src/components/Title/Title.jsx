import Hours from "./Hour"

const Title = () => {
  return (
    <div className=" flex flex-col-reverse gap-[20vh] md:flex-row md:gap-0 md:justify-between">
        <div className="border-r border-r-principal">
          <h1 className="text-screenX md:text-responsive leading-[1]">Article</h1>
        </div>
        <div className="flex flex-col-reverse max-w-[225px] md:flex-col md:justify-between md:max-w-[25%]">
            <Hours/>
            <h2 className="text-subtitle mb-4">Brand and Digital for Culture, Commerce and Good.</h2>
        </div>
    </div>
  )
}

export default Title