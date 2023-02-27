import axios from "axios"
import AddTutorial from "../components/AddTutorial"
import TutorialList from "../components/TutorialList"
import { useState , useEffect } from "react"



const Home = () => {

    const [tutorials, setTutorials] = useState([])


    const BASE_URL = 'https://tutorial-api.fullstack.clarusway.com/tutorials/'



const getTutorials = async() => {
   const {data} = await axios(BASE_URL)
   setTutorials(data)
   console.log(tutorials)
}

useEffect(() => {
getTutorials()

}, [])


  return (
    <div>
      <AddTutorial/>
      <TutorialList tutorials={tutorials} />
    </div>
  )
}

export default Home