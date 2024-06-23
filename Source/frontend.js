import React, { useState } from 'react';
import Web3 from 'web3';
import DocumentStorage from './contracts/DocumentStorage.json';

function App() {
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState('');
  const [contract, setContract] = useState(null);
  const [fileId, setFileId] = useState('');
  const [ipfsHash, setIpfsHash] = useState('');

  const handleLoadWeb3 = async () => {
    if (window.ethereum) {
      try {
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();
        const networkId = await web3.eth.net.getId();
        const deployedNetwork = DocumentStorage.networks[networkId];
        const contract = new web3.eth.Contract(
          DocumentStorage.abi,
          deployedNetwork && deployedNetwork.address,
        );
        setWeb3(web3);
        setAccount(accounts[0]);
        setContract(contract);
      } catch (error) {
        alert('Failed to load web3, accounts, or contract. Check console for details.');
        console.error(error);
      }
    } else {
      alert('Please install MetaMask!');
    }
  };

  const handleStoreHash = async () => {
    await contract.methods.storeHash(fileId, ipfsHash).send({ from: account });
  };

  const handleFetchHash = async () => {
    const hash = await contract.methods.getHash(fileId).call();
    alert(`IPFS Hash: ${hash}`);
  };

  return (
    <div>
      <button onClick={handleLoadWeb3}>Connect to MetaMask</button>
      <div>
        <input
          value={fileId}
          onChange={(e) => setFileId(e.target.value)}
          placeholder="File ID"
        />
        <input
          value={ipfsHash}
          onChange={(e) => setIpfsHash(e.target.value)}
          placeholder="IPFS Hash"
        />
        <button onClick={handleStoreHash}>Store Hash</button>
        <button onClick={handleFetchHash}>Fetch Hash</button>
      </div>
    </div>
  );
}

export default App;
