import useSpeechRecognition from "../hooks/userSpeechRecognition";

const Sound = () => {
    const { text, isListening, startListening, stopListening,
         hasRecognitionSupport} = useSpeechRecognition();

         return (
            <div>
                {hasRecognitionSupport ? (
                    <>
                    <div>
                        <button onClick={startListening}>
                            startListening
                        </button>
                    </div>
                    {isListening ? <div>
                            your browser is currently listening </div>
                     : null}
                    </>
                ): (
                    <h1>

                    </h1>
                )}
            </div>
         )
}
export default Sound;