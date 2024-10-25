
import { useState } from 'react'
import './App.css'
import Footer from './Component/Footer/Footer'
import Header from './Component/Header/Header'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Banner from './Component/Banner/Banner'
import Players from './Component/Players/Players'
import Subscribe from './Component/Subscribe/Subscribe';


function App() {
  const [coin,setCoin]=useState(0);
  const [addPlayers, setAddPlayer]=useState([]);



  const handleCoin =()=>{

   let totalCoin= 60000000 + coin;
    setCoin(totalCoin)
    toast("Coin successfully added");

  }

 const choosePlayer=(price,playerId)=>{
   if (coin >= price   ){

    if(addPlayers.length < 6){      
      console.log("hello world", addPlayers.length)
      setCoin(coin - price)
      if(!addPlayers.includes(playerId)){
        setAddPlayer([...addPlayers, playerId])
        toast("Player successfully added");
      }
      else{
        toast(<div className='alert-error  alert'>
          Error, Already selected 
        </div>);

      }
      
    }
    else
    {
       toast(<div className='alert-error  alert'>
         Error, Already Six player added 
       </div>);
    }
   }
   else{
     toast(<div  className="alert alert-error ">       
       <span>Error! Balance is low.</span>
     </div>);

   }
 }

 



  return (
    <>
      <Header coin={coin}></Header>
      <Banner handleCoin={handleCoin}></Banner>
      <Players setAddPlayer={setAddPlayer} addPlayers={addPlayers} choosePlayer={choosePlayer}></Players>
      <Subscribe></Subscribe>
       <Footer></Footer>
      <ToastContainer />
    </>
  )
}

export default App
