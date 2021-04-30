import './App.css'
import PageContainer from './pages/page-container.component'
import TaglineContextProvider from './store/Tagline.context'
import ProjectContextProvider from './store/Project.context'
import HeaderContextProvider from './store/Header.context'
import Footer from './components/footer/footer.component'
import { Route, Switch } from 'react-router-dom'
import Kontakt from './pages/kontakt.component'
import ProjectExtended from './pages/project-extended.component'
import { AnimatePresence } from 'framer-motion'
import Home from './pages/home.component'
import Example from './components/navbar/hamburger/Example'
import About from './pages/about.component'
import AboutContextProvider from './store/about.context'
import NavigationDesktop from './components/navbar/navigation.component'
import ProjectsContextProvider from './store/projects.context'
import KategoriContextProvider from './store/kategori.context'
import ReactGA from 'react-ga'
import CookieConsent from 'react-cookie-consent'

const [cookie, cookieTrigger] = useState(false)
useEffect(() => {
  if (cookie) {
	ReactGA.initialize("G-VSHBRMDLTT")
	window.localStorage.setItem("cookieAccepted", true)
	ReactGA.pageview(window.location.pathname + window.location.search)
  }
}, [cookie])
useEffect(() => {
  window.localStorage.cookieAccepted
	? cookieTrigger(true)
	: cookieTrigger(false)
}, [])

function App() {
	return (
		<div className='App'>
		<CookieConsent
        enableDeclineButton
        disableStyles={true}
        flipButtons
        declineButtonClasses="decline-button"
        buttonClasses="cookie-button"
        buttonText={"Acceptera"}
        declineButtonText={"Nej Tack"}
        containerClasses="cookie-container"
        onAccept={() => cookieTrigger(true)}
      >
        Den här webbplatsen använder cookies, som samlar information om hur du
        interagerar med sidan. Genom att acceptera tillåter du att vi samlar och
        behandlar dina personuppgifter enligt vår{" "}
        <Link style={{ color: "white" }} to="./integritets-policy">
          integritetspolicy
        </Link>
      </CookieConsent>

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
												<KategoriContextProvider>
													<Home key={location.id} />
												</KategoriContextProvider>
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
