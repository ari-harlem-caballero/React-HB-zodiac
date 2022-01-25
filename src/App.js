import './App.css'
import { zodiac } from './data'
import Main from './Main/Main'
import Header from './Header/Header'
import Footer from './Footer/Footer'
{/* import the zodiac array */}

function App() {
  return (
    <div className="App">
      <Header name='Ari' />
      <Main zodiacs= {zodiac} />
      <Footer year='1995' />
      {/* import and use the Header. Main, and Footer components here */}
      {/* the Header component needs a string passed in as the `name` prop */}
      {/* the Footer component needs a year passed in as the `year` prop */}
      {/* pass the zodiac array imported above to the Main component as a `zodiacs` prop */}
    </div>
  )
}

export default App
