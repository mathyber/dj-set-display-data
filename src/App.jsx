import './App.css'
import SongBlock from "./components/songBlock";

function App() {
    const index = 10;
    return (
        <div className='page'>
            <SongBlock index={index}/>
        </div>
    )
}

export default App
