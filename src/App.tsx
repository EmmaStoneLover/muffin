import useDarkMode from "./hooks/useDarkMode"

function App() {
  const [mode, setMode] = useDarkMode()

  return (
    <div className="w-screen h-screen flex justify-center items-center dark:bg-black dark:text-white">
      <p className="text-4xl">Fuck</p>
      <button className="fixed top-2 right-2" onClick={setMode}>{ mode ? 'dark' : 'light' }</button>
    </div>
  )
}

export default App
