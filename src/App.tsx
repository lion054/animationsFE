import Lottie from "lottie-react"
import animation from "../src/assets/animation.lottie.json"

const App = () => {

  return (
    <div className="bg-[#000000] min-h-[100vh] flex flex-col items-center justify-center">
      <div className='text-slate-100 w-[65%] '>
        <Lottie
          animationData={animation}
          loop={true}
          autoPlay={true}
          translate="yes"
          rendererSettings={{
            preserveAspectRatio: 'xMidYMid slice'
          }}
          width={300}
          height={800}
          
        />
      </div>
    </div>
  )
}

export default App



