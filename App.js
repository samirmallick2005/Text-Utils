import { useState } from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import Body from './components/Body';
import About from './components/About';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import User from './components/User';

function App() {
  //Alert
  const [alert, setAlert] = useState(null)
  const showAlert = (message, status) => {
    setAlert({
      msg: message,
      status: status
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  //Theme
  const [Mode, setMode] = useState('white')
  const [textColor, setTextColor] = useState('black')
  const changeMode = () => {
    if (Mode === 'white') {
      setMode('black')
      setTextColor('white')
      document.body.style.backgroundColor = 'black'
      showAlert("Dark mode enabled", "Success")
    } else {
      setMode('white')
      setTextColor('black')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode enabled", "Success")
    }
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element:
        <>
          <Navbar title="Text Utils" changeMode={changeMode} mode={Mode} />
          <Alert alert={alert} />
          <Body mode={Mode} textColor={textColor} showAlert={showAlert} />
        </>
    },
    {
      path: "/about",
      element:
        <>
          <Navbar title="Text Utils" changeMode={changeMode} mode={Mode} />
          <Alert alert={alert} />
          <About textColor={textColor} />
        </>
    },
    {
      path: "/user/:userid",
      element:
        <>
          <Navbar title="Text Utils" changeMode={changeMode} mode={Mode} />
          <Alert alert={alert} />
          <User />
        </>
    }
  ])
  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}

export default App;
