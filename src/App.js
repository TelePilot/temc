import './App.css'
import PageContainer from './pages/page-container.component'
import TaglineContextProvider from './store/Tagline.context'
import ProjectContextProvider from './store/Project.context'
import HeaderContextProvider from './store/Header.context'
import Footer from './components/footer/footer.component'
import { Route, Switch, useParams } from 'react-router-dom'
import Kontakt from './pages/kontakt.component'
import ProjectExtended from './pages/project-extended.component'
import { AnimatePresence } from 'framer-motion'
import Home from './pages/home.component'
import Example from './components/navbar/hamburger/Example'
import About from './pages/about.component'
import AboutContextProvider from './store/about.context'
import NavigationDesktop from './components/navbar/navigation.component'
import ProjectsContextProvider from './store/projects.context'

function App() {
	return (
		<div className='App'>
			<NavigationDesktop />
			<Example />
			<PageContainer>
				<ProjectContextProvider>
					<Route
						render={({ location }) => (
							<AnimatePresence
								exitBeforeEnter
								initial={false}
								onExitComplete={() => window.scrollTo(0, 0)}
							>
								<Switch location={location} key={location.pathname}>
									<Route exact path={'/'}>
										<TaglineContextProvider>
											<HeaderContextProvider>
												<Home key={location.id} />
											</HeaderContextProvider>
										</TaglineContextProvider>
									</Route>

									<Route path={'/project/:id'}>
										<ProjectsContextProvider>
											<ProjectExtended key={location.id} />
										</ProjectsContextProvider>
									</Route>
									<Route exact path={'/about'}>
										<AboutContextProvider>
											<About key={location.id} />
										</AboutContextProvider>
									</Route>
									<Route exact path={'/kontakt'}>
										<Kontakt key={location.id} />
									</Route>
								</Switch>
							</AnimatePresence>
						)}
					/>
				</ProjectContextProvider>
			</PageContainer>
			<Footer />
		</div>
	)
}

export default App
