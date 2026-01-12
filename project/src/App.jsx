import React from 'react'

import Userprofile from './component/search.jsx'
import Navbar from './component/navbar.jsx'




const App = () => {

  
  const user = [
  
  {
    username: "Eleven",
    usersurname: "Hopper",
    profileimage: "./src/assets/profile.jpg",
    nlScore: "2401",
    profiletag1: "Telekinetic",
    profiletag2: "Brave",
    profiletag3: "Silent Strength",
    profiletag4: "Gallery",
    profiletag5: "Friends Forever",
    cameraname1: "Canon EOS R6",
    cameraname2: "Sony α7 IV",
    cameraname3: "Nikon Z6 II",
    cameraname4: "Fujifilm X-T4"
  },
  {
    username: "Mike",
    usersurname: "Wheeler",
    profileimage: "./src/assets/profile.jpg",
    nlScore: "2150",
    profiletag1: "Leader",
    profiletag2: "Strategist",
    profiletag3: "Loyal",
    profiletag4: "Gallery",
    profiletag5: "Never Give Up",
    cameraname1: "Canon EOS R10",
    cameraname2: "Sony α6400",
    cameraname3: "Nikon Z50",
    cameraname4: "Fujifilm X-T30 II"
  },
  {
    username: "Dustin",
    usersurname: "Henderson",
    profileimage: "./src/assets/profile.jpg",
    nlScore: "2098",
    profiletag1: "Comic Relief",
    profiletag2: "Tech Geek",
    profiletag3: "Optimistic",
    profiletag4: "Gallery",
    profiletag5: "Science Rules",
    cameraname1: "Sony α7C",
    cameraname2: "Canon EOS RP",
    cameraname3: "Nikon D7500",
    cameraname4: "Fujifilm X-E4"
  },
  {
    username: "Max",
    usersurname: "Mayfield",
    profileimage: "./src/assets/profile.jpg",
    nlScore: "2204",
    profiletag1: "Fearless",
    profiletag2: "Independent",
    profiletag3: "Skater Soul",
    profiletag4: "Gallery",
    profiletag5: "Running Up That Hill",
    cameraname1: "Canon EOS R8",
    cameraname2: "Sony α6600",
    cameraname3: "Nikon Z5",
    cameraname4: "Fujifilm X-S10"
  },
  {
    username: "Steve",
    usersurname: "Harrington",
    profileimage: "./src/assets/profile.jpg",
    nlScore: "2309",
    profiletag1: "Protector",
    profiletag2: "Caretaker",
    profiletag3: "Hero Energy",
    profiletag4: "Gallery",
    profiletag5: "Best Babysitter",
    cameraname1: "Canon EOS R5",
    cameraname2: "Sony α7R V",
    cameraname3: "Nikon D850",
    cameraname4: "Fujifilm X-T5"
  },

  {
    username: "Jon",
    usersurname: "Snow",
    profileimage: "./src/assets/profile.jpg",
    nlScore: "2356",
    profiletag1: "Night Watch",
    profiletag2: "Honor Bound",
    profiletag3: "True Leader",
    profiletag4: "Gallery",
    profiletag5: "Knows Nothing",
    cameraname1: "Nikon D750",
    cameraname2: "Canon EOS R6 Mark II",
    cameraname3: "Sony α7 IV",
    cameraname4: "Fujifilm X-T5"
  },
  {
    username: "Daenerys",
    usersurname: "Targaryen",
    profileimage: "./src/assets/profile.jpg",
    nlScore: "2450",
    profiletag1: "Dragon Queen",
    profiletag2: "Breaker of Chains",
    profiletag3: "Fire & Blood",
    profiletag4: "Gallery",
    profiletag5: "Mother of Dragons",
    cameraname1: "Canon EOS R5",
    cameraname2: "Sony α1",
    cameraname3: "Nikon Z9",
    cameraname4: "Fujifilm GFX100"
  },
  {
    username: "Tyrion",
    usersurname: "Lannister",
    profileimage: "./src/assets/profile.jpg",
    nlScore: "2288",
    profiletag1: "Mastermind",
    profiletag2: "Witty",
    profiletag3: "Sharp Tongue",
    profiletag4: "Gallery",
    profiletag5: "I Drink & Know",
    cameraname1: "Sony α7 III",
    cameraname2: "Canon EOS RP",
    cameraname3: "Nikon Z6",
    cameraname4: "Fujifilm X-T30"
  },
  {
    username: "Arya",
    usersurname: "Stark",
    profileimage: "./src/assets/profile.jpg",
    nlScore: "2333",
    profiletag1: "Assassin",
    profiletag2: "No One",
    profiletag3: "Fearless",
    profiletag4: "Gallery",
    profiletag5: "Valar Morghulis",
    cameraname1: "Canon EOS R7",
    cameraname2: "Sony α6400",
    cameraname3: "Nikon D5600",
    cameraname4: "Fujifilm X-T4"
  },
  {
    username: "Cersei",
    usersurname: "Lannister",
    profileimage: "./src/assets/profile.jpg",
    nlScore: "2211",
    profiletag1: "Power Hungry",
    profiletag2: "Strategic",
    profiletag3: "Ruthless",
    profiletag4: "Gallery",
    profiletag5: "Queen of Seven",
    cameraname1: "Sony α7R IV",
    cameraname2: "Canon EOS R5",
    cameraname3: "Nikon Z7 II",
    cameraname4: "Fujifilm X-Pro3"
  },

  
  {
    username: "Walter",
    usersurname: "White",
    profileimage: "./src/assets/profile.jpg",
    nlScore: "2500",
    profiletag1: "Mastermind",
    profiletag2: "Chemist",
    profiletag3: "Heisenberg",
    profiletag4: "Gallery",
    profiletag5: "Say My Name",
    cameraname1: "Canon EOS R5 C",
    cameraname2: "Sony FX3",
    cameraname3: "Nikon Z9",
    cameraname4: "Fujifilm X-H2S"
  },
  {
    username: "Jesse",
    usersurname: "Pinkman",
    profileimage: "./src/assets/profile.jpg",
    nlScore: "2190",
    profiletag1: "Loyal",
    profiletag2: "Emotional",
    profiletag3: "Street Smart",
    profiletag4: "Gallery",
    profiletag5: "Yeah Science",
    cameraname1: "Sony α6600",
    cameraname2: "Canon EOS R10",
    cameraname3: "Nikon Z30",
    cameraname4: "Fujifilm X-E4"
  },
  {
    username: "Saul",
    usersurname: "Goodman",
    profileimage: "./src/assets/profile.jpg",
    nlScore: "2275",
    profiletag1: "Lawyer",
    profiletag2: "Smooth Talker",
    profiletag3: "Problem Solver",
    profiletag4: "Gallery",
    profiletag5: "Better Call Saul",
    cameraname1: "Canon EOS RP",
    cameraname2: "Sony α7 III",
    cameraname3: "Nikon D780",
    cameraname4: "Fujifilm X-T200"
  },
  {
    username: "Gus",
    usersurname: "Fring",
    profileimage: "./src/assets/profile.jpg",
    nlScore: "2412",
    profiletag1: "Calm",
    profiletag2: "Calculated",
    profiletag3: "Cold Mind",
    profiletag4: "Gallery",
    profiletag5: "Business First",
    cameraname1: "Sony α1",
    cameraname2: "Canon EOS R5",
    cameraname3: "Nikon Z8",
    cameraname4: "Fujifilm GFX 50S II"
  },
  {
    username: "Skyler",
    usersurname: "White",
    profileimage: "./src/assets/profile.jpg",
    nlScore: "2054",
    profiletag1: "Strong Willed",
    profiletag2: "Survivor",
    profiletag3: "Realistic",
    profiletag4: "Gallery",
    profiletag5: "Family First",
    cameraname1: "Canon EOS R8",
    cameraname2: "Sony α6400",
    cameraname3: "Nikon Z5",
    cameraname4: "Fujifilm X-S10"
  }
];


  user.map((info)=>{
    console.log(info.username);
  })
    
  return (
    <div>
     
      <Navbar />
      {
      user.map((info, index)=>
        <div key={index}>
        <Userprofile 
        
        username={info.username} 
        usersurname={info.usersurname} 
        profileimage={info.profileimage} 
        nlScore={info.nlScore} 
        profiletag1={info.profiletag1} 
        profiletag2={info.profiletag2} 
        profiletag3={info.profiletag3} 
        profiletag4={info.profiletag4} 
        profiletag5={info.profiletag5}
        cameraname1={info.cameraname1}
        cameraname2={info.cameraname2}
        cameraname3={info.cameraname3}
        cameraname4={info.cameraname4}
        />
        </div>
      )}
      
      
      
    </div>
  )
}


export default App



