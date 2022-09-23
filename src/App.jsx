import './App.css'
import data from '../data'
import NavBar from '../components/NavBar'
import Card from '../components/Card'

export default function App() {
   const places = data.map(item => {
        return (   
             <Card
                key={item.id}
                item={item}
            />
            
        )
    })  
  
  return (
    <main>
      <NavBar/>
      {places}
    </main>
  )
}
