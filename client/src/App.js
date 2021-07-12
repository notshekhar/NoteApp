import { RecoilRoot } from "recoil"

import LeftHeader from "./components/LeftHeader"
import RightBody from "./components/RightBody"

import "./App.css"

function App() {
    return (
        <RecoilRoot className="App">
            <LeftHeader></LeftHeader>
            <RightBody></RightBody>
        </RecoilRoot>
    )
}

export default App
