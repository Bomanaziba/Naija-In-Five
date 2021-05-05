import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const NEWSSUMMARY = [
  'The Federal Government, yesterday, promised to provide necessary equipment for the ongoing war against Boko Haram in the northeast. Minister of Defence, Bashir Magashi stated this yesterday when he led service Chiefs on a visit to Maiduguri, theatre of military operation against Boko Haram.',
  'Former Anambra State governor, Chukwuemeka Ezeife, on Sunday said support has been coming from the North and South towards the realisation of Igbo presidency in 2023. He spoke at a grand reception organised by Igbo leaders in 19 northern states and FCT for Ohanaeze Ndigbo President General, George Obiozor, in Abuja.',
  'Following the alleged link to Taliban and Al-Qaeda, the Peoples Democratic Party, PDP, on Sunday called on President Muhammadu Buhari to sack the Minister of Communications and Digital Economy, Isa Pantami. The party made the call in a tweet yesterday.',
  'Mobile policemen in Niger State, on Sunday, killed six bandits during a gun battle in Garkogo, Shiroro local government area of the State. The officers were stationed at Garkogo town after persistent attacks on the people by the bandits in recent times.',
  'The Arewa Consultative Forum (ACF), yesterday, condemned the reaction of the army to the killing of 12 soldiers allegedly by bandits in Koshinsha Local Government Area of Benue State. National Chairman of the forum, Chief Audu Ogbe stated this in a statement, on Sunday.',
  'The Peoples Democratic Party Governors’ Forum, yesterday, accused their All Progressives Congress (APC) counterparts under the Progressive Governors forum (PGF) of being partisan in their response to Governor Godwin Obaseki’s claim that the FG printed N60 billion to support allocations. The forum stated this in a statement by its Director General, Cyril Maduabum.',
  'The Federal Government on Sunday, said it is working hard to improve national security and prevent all secession tendencies. Minister of Information and Culture, Alhaji Lai Mohammed spoke in Lagos when he appeared on a radio programme.',
  'Tanker explosion in Oshigbudu, Agatu Local Government Area of Benue State, yesterday, claimed the lives of many residents of the community, just as shops and houses were also razed by the inferno.',
  'Two suspected drug traffickers have excreted 191 pellets of heroin and cocaine while under observation at the Murtala Muhammed International Airport, Ikeja, Lagos. The spokesperson for the NDLEA, Femi Babafemi, made this known yesterday.',
  'Defence Minister Bashir Magashi on Sunday challenged troops to step up the fight against terrorists by becoming more daring and should not be afraid of “the bullet.” He spoke during a morale-boosting visit to the troops in Maiduguri, the Borno State capital. '
]; 

const NEWSPAPER = [
  { id: 1, name: 'This Day', coverpage: './images/day.jpeg', url: 'https://thenationonlineng.net/' },
  { id: 2, name: 'The Vangauard', coverpage: './images/vanguard.jpeg', url: 'https://www.vanguardngr.com/' },
  { id: 3, name: 'The Punch', coverpage: './images/punch.jpeg', url: 'https://punchng.com/' },
  { id: 4, name: 'The Nation', coverpage: './images/nation.jpeg', url: 'https://thenationonlineng.net/' },
  { id: 5, name: 'The Guardian', coverpage: './images/guardian.jpeg', url: 'https://guardian.ng/' },
  { id: 6, name: 'Nigerian Tribune', coverpage: './images/tribune.jpeg', url: 'https://tribuneonlineng.com/' },
  { id: 7, name: 'The Sun', coverpage: './images/sun.jpeg', url: 'https://www.sunnewsonline.com/' },
  { id: 8, name: 'Daily Times', coverpage: '', url: 'https://dailytimes.ng/' }
];  

const SOCIALMEDIA = [
  { id: 1, name: 'Instagram', url: '' },
  { id: 2, name: 'Facebook', url: '' },
  { id: 3, name: 'Twitter', url: '' },
  { id: 4, name: 'Youtube', url: '' }
]
                    


ReactDOM.render(
  <React.StrictMode>
    <App socialmedia={ SOCIALMEDIA } newssummary={ NEWSSUMMARY } newspaper = { NEWSPAPER } />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
