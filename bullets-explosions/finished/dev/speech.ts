export class Speech {

    private synth : SpeechSynthesis

    constructor(){
        this.synth = window.speechSynthesis
    }
    
    public speak(text:string) {
        if (this.synth.speaking) {
            // still speaking...
            return
        }
        if (text !== '') {
            let utterThis = new SpeechSynthesisUtterance(text)
            this.synth.speak(utterThis)
        }
    }
}