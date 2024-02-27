import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Palm } from "../Palm";
import { Tree } from "../Tree";
import { Cane } from "../Cane";
import useSound from 'use-sound';
import { FaCaretLeft } from "react-icons/fa";

import { PiFlowerLotusBold } from "react-icons/pi";
import Regenarator from 'regenerator-runtime/runtime';
   import { createSpeechlySpeechRecognition } from "@speechly/speech-recognition-polyfill";
  
import SpeechRecognition from "react-speech-recognition";
import { useSpeechRecognition } from "react-speech-recognition";



 

function App() {
  const [playSound] = useSound('../sounds/speech.mp3');
  const [playSound2] = useSound('../sounds/speech2.mp3');

  const commands = [
    {
      command: 'reset',
      callback:({resetTranscript}) => resetTranscript()
    },
    {
      command: "open*",
      callback: (site) => {
        window.open('http://'+site)
      }
    },
    {
      command: "Hello",
      callback: ({playSound2}) =>  playSound2()
      
    },
    {
      command: "who are you",
      callback: ({playSound}) =>  playSound()
      
    }
    
  ]
  const {
  
    listening,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  const { transcript, resetTranscript} = useSpeechRecognition({commands});

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;

}
  
  return (
    <>
    <div className="head">
      <div className="lop">
      <div className="logo">
      <PiFlowerLotusBold />  sivay
      </div>
      <div className="back">
      <FaCaretLeft />
      </div>

      </div>
      
    </div>
    <Canvas shadows camera={{ position: [0, 2, 5], fov: 30 }}>
      <color attach="background" args={["#ececec"]} />
      <Experience />
      <mesh scale={0.35} position-x={2} position-y={-1}>
        <Palm />
      </mesh>
      <mesh scale={1.7} position-x={-1} position-y={1}>
        <Tree />
      </mesh>
      <mesh scale={1.7} position-x={2} position-z={-2} position-y={1}>
        <Tree />
      </mesh>
      <mesh scale={1.7} position-x={-1.9} position-y={1} position-z={1}>
        <Tree />
      </mesh>
      <group>
      <mesh scale={0.1} position-x={-1.9} position-y={-1} position-z={1}>
        <Cane />
      </mesh>
      <mesh scale={0.1} position-x={-1} position-y={-1} position-z={1}>
        <Cane />
      </mesh>
      <mesh scale={0.1} position-x={-1.1} position-y={-1} position-z={1}>
        <Cane />
      </mesh>
      <mesh scale={0.1} position-x={-1.5} position-y={-1} position-z={3}>
        <Cane />
      </mesh>
      <mesh scale={0.1} position-x={-1.1} position-y={-1} position-z={2.3}>
        <Cane />
      </mesh>
      <mesh scale={0.1} position-x={-0.5} position-y={-1} position-z={2}>
        <Cane />
      </mesh>
      <mesh scale={0.1} position-x={2} position-y={-1} position-z={3}>
        <Cane />
      </mesh>
      <mesh scale={0.1} position-x={2} position-y={-1} position-z={3}>
        <Cane />
      </mesh>
      <mesh scale={0.1} position-x={2} position-y={-1} position-z={-3}>
        <Cane />
      </mesh>
      <mesh scale={0.1} position-x={1.5} position-y={-1} position-z={-1}>
        <Cane />
      </mesh>
      </group>
      
    </Canvas>
    <p onClick={playSound} >Microphone: {listening ? 'on' : 'off'}</p>
    <button className="btn" onClick={SpeechRecognition.startListening({continuous:true, language:'en'})}>Start a discussion </button>
    <button className="btnd" onClick={SpeechRecognition.stopListening}>stop the discussion </button>
    <button className="btnb" onClick={resetTranscript}>Reset discussion </button>  
    <p>{transcript}</p>

    </>
  );
}

export default App;
