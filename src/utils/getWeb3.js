import Web3 from "web3";
import { ganachehost } from './constants'

const getWeb3 = new Promise(resolve => {
  // Wait for loading completion to avoid race conditions with web3 injection timing.
  window.addEventListener('load', dispatch => {
    let results;
    let { web3 } = window;
    console.log("web3 " + web3)
    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    {
      // Fallback to localhost if no web3 injection. We've configured this to
      // use the development console's port by default.
      web3 = new Web3(new Web3.providers.HttpProvider(ganachehost))
      console.log(web3.eth.accounts[0])
      web3.eth.defaultAccount = web3.eth.accounts[0]
      web3.personal.unlockAccount(web3.eth.defaultAccount)

      resolve({ web3 });
    }
  })
})


export default getWeb3;
