import React from 'react'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Launches from './pages/Launches'
import LaunchDetails from './pages/LaunchDetails'

const App = () => {

    return (
        <>
            <div className='main-container'>
                <h1>Explore the space</h1>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/">
                            <Launches />
                        </Route>
                        <Route path="/launch/:id">
                            <LaunchDetails />
                        </Route>
                    </Switch>
                </BrowserRouter>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </>
    )
}

export default App
