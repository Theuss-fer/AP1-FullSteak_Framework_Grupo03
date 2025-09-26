import React from 'react'
import ProfileCard from './components/ProfileCard'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  return (
    <div className='app-container'>

      <h1 className='title'>Cards de Perfil</h1>
      <div className='cards-grid'>
      <ProfileCard name="Maria" age={21} isStudent={true} />
      <ProfileCard name="João" age={30} isStudent={false} />
      <ProfileCard name={"Lucas"} age={24} isStudent={true}/>
      <ProfileCard name={"Carla"} age={19} isStudent={false}/>
      </div>
    </div>
  );
}

export default App;
