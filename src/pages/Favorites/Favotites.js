import {useState} from 'react'
import BigCard from '../../components/BigCard/BigCard'

function Favotites() {
    const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem("favorites")) || [])


  return (
    <div>
        <BigCard ids={favorites} type={"character"}  ></BigCard>
    </div>
  )
}

export default Favotites