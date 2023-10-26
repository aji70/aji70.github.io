import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useContractReads } from 'wagmi'
import myAbi from '../utils/abi.json'
import { useContractWrite } from 'wagmi'





function App() {
  
  const { data: readData, isError, isLoading } = useContractReads ({
    contracts: [
      {
        address: '0x3a89dFAd45aC4E47ed45d134a7634Ad941aAD9FE',
        abi: myAbi,
        functionName: "stakingDuration",
      },
      {
        address: '0x3a89dFAd45aC4E47ed45d134a7634Ad941aAD9FE',
        abi: myAbi,
        functionName: "rewardRate",
      },
    ],
  });
  const { dataaaa, isLoadin, isSuccess, writee  } = useContractWrite({
    address: '0x3a89dFAd45aC4E47ed45d134a7634Ad941aAD9FE',
    abi: myAbi,
    functionName: 'stake',
    args: ['0x3a89dFAd45aC4E47ed45d134a7634Ad941aAD9FE', "Aji", '0x2308351fA90Ed267068Fea708C6659d5122affF1']
  
    });

    const { dataa, isLoadi, isSucces, write  } = useContractWrite({
      address: '0x3a89dFAd45aC4E47ed45d134a7634Ad941aAD9FE',
      abi: myAbi,
      functionName: 'stake',
      args: ['0x3a89dFAd45aC4E47ed45d134a7634Ad941aAD9FE', "Aji", '0x2308351fA90Ed267068Fea708C6659d5122affF1']
    
      });
  

  return (
    <main>
       <div className="mid">
       <p>The stakingDuration is {String(Number(readData?.[0].result) / 86400)} days</p>
       <p>The Reward Rate is {String(readData?.[1].result)}%</p>
      <ConnectButton />
      
      <button onClick={() => writee()}>stake</button>
      <input type="number"  />
      {isLoadin && <div>Check Wallet</div>}
      {isSuccess && <div>Transaction: {JSON.stringify(dataaa)}</div>}

      <button onClick={() => write()}>unstake</button>
      {isLoadi && <div>Check Wallet</div>}
      {isSucces && <div>Transaction: {JSON.stringify(dataa)}</div>}
       </div>
    </main>
  )
}

export default App
