import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Statcards from './components/StatsCards'
import SemesterTabs from './components/SemesterTabs'


const initialSemesters = [
  { id: "sem-1", name: "Semester 1" },
  { id: "sem-2", name: "Semester 2" },
  { id: "sem-3", name: "Semester 3" },
  { id: "sem-4", name: "Semester 4" },
]

const MAX_SEMESTERS=10;

const App = () => {

  const [semesters, setSemesters] = useState(initialSemesters);
  const [activeSemesterId, setActiveSemesterId] = useState(
    initialSemesters[0].id
  )


  function handleAddSemester() {

    if(semesters.length >=MAX_SEMESTERS ) return 

    const newSemester = {
      id: `sem-${Date.now()}`,               // simple unique id
      name: `Semester ${semesters.length + 1}`,
    }
    setSemesters([...semesters, newSemester])  // add to array without mutating the original
    setActiveSemesterId(newSemester.id)         // jump to the new tab automatically
  }


  return (
    <div>
      <Header />
      <Hero />
      <Statcards />
      <SemesterTabs
        semesters={semesters}
        activeSemesterId={activeSemesterId}
        onSelectSemester={setActiveSemesterId}
        onAddSemester={handleAddSemester}
         maxSemesters={MAX_SEMESTERS}
      />
    </div>
  )
}

export default App