import './App.scss'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Main } from './pages/Main'
import { notFound } from './pages/404'
import NavBar from './components/NavBar'
import { Projects } from './pages/Projects'
import { Contact } from './pages/Contact'
import { Footer } from './components/Footer'
import { Blog } from './pages/Blog'
import { About } from './pages/About'

function App() {
    return (
        <Router>
            <div>
                <NavBar />
                {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/blog">
                        <Blog />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route path="/projects">
                        <Projects />
                    </Route>
                    <Route path="/">
                        <Main />
                    </Route>
                    <Route path="*">
                        <notFound />
                    </Route>
                </Switch>
                <Footer />
            </div>
        </Router>
    )
}

export default App
