import { useScreenSize } from "../use-screen-size"
import { PixelTrail } from "./pixel-trail"

const PixelTrailDemo: React.FC = () => {
  const screenSize = useScreenSize()

  return (
    <div className="absolute w-full h-full min-h-[500px]  text-black flex flex-col font-calendas">
      <div className="absolute inset-0 z-0">
        <PixelTrail
          pixelSize={screenSize.lessThan(`md`) ? 48 : 80}
          fadeDuration={0}
          delay={1200}
          pixelClassName="rounded-full bg-[#ffa04f]"
        />
      </div>

     

      
    </div>
  )
}

export { PixelTrailDemo }
