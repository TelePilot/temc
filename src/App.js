import './App.css'
import Header from './components/header.component'
import Tagline from './components/tagline.component'
import TaglineContextProvider from './store/Tagline.context'
function App() {
	return (
		<div className='App'>
			<Header />
			<TaglineContextProvider>
				<Tagline />
			</TaglineContextProvider>
		</div>
	)
}

export default App
