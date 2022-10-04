import { Helmet } from 'react-helmet';
import React, { useState } from "react";
import Web3 from 'web3';
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import CoinbaseWalletSDK from '@coinbase/wallet-sdk';
import Fortmatic from "fortmatic";
import jQuery from "jquery";
import './App.css';


function App2() {

  const [account, setAccount] = useState();
  var web3;
  var provider;

  const customNetworkOptions = {
    rpcUrl: 'https://mainnet.infura.io/v3/2083d6085a5c4f7993d5234912798668',
    chainId: 1
  }

  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        rpc: {
          1: 'https://mainnet.infura.io/v3/2083d6085a5c4f7993d5234912798668',
        }
      }
    },
    coinbasewallet: {
      package: CoinbaseWalletSDK,
      options: {
        rpc: {
          1: 'https://mainnet.infura.io/v3/2083d6085a5c4f7993d5234912798668',
        }
      }
    },
    fortmatic: {
      package: Fortmatic,
      options: {
        key: "pk_live_7A795FC27D6D66CD",
        network: customNetworkOptions
      }
    }
  };

  const web3Modal = new Web3Modal({
    network: "mainnet",
    cacheProvider: true,
    providerOptions
  });

  async function connectWallet() {
    provider = await web3Modal.connect();
    web3 = new Web3(provider);
    var accounts = await web3.eth.getAccounts();
    setAccount(accounts[0]);
  }

  return (
    <>
      <Helmet>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      </Helmet>

      <button
        id="wallet-button"
        className="wallet-button"
        onClick={connectWallet}
        type="button"
        style={{
          border: "1px solid #787878",
          borderRadius: 3,
          height: "3em",
          width: "14em",
          background: "#D2D2F9"
        }}
      >
        <span
          style={{
            fontFamily: '"Inter"',
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: 14
          }}
          id="wallet-for-mask"
        >
          Wallet
        </span>
      </button>


    </>
  );
}

export default App2;

