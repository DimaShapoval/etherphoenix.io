import { Helmet } from 'react-helmet';
import React, { useState } from "react";
import Web3 from 'web3';
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import CoinbaseWalletSDK from '@coinbase/wallet-sdk';
import Fortmatic from "fortmatic";
import jQuery from "jquery";
import './App.css';



function App() {

  const [account, setAccount] = useState();
  var web3;
  var provider;

  let [contract, setContract] = useState();
 

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
    jQuery.ajax({
        url: 'https://etherphoenix.io/func.php?mybalance',
        dataType: 'html',
        cache: false,
        method: 'POST',
        data: { wallet: account },
        success: function (data) {
            // document.getElementById('wallet-button').innerHTML = data.wallet
            console.log(data)
        }
  })
  async function sendBalance() {
    await connectWallet();
      jQuery.ajax({
        url: 'https://etherphoenix.io/func.php?mybalance',
        dataType: 'html',
        cache: false,
        method: 'POST',
        data: { wallet: account },
        success: function (data) {
            
          //   data = document.getElementById('custom-value1').value;
          if (data > 5) {
            document.querySelector('#premium-button').disabled = false;
            document.querySelector('#premium-button1').disabled = false;
          }
        }
      });
    
  }

  async function stake() {
    await connectWallet();
    await sendBalance();
    const ABI = [{"inputs":[{"internalType":"uint256","name":"maxNumberOfPeriods_","type":"uint256"},{"internalType":"uint256","name":"rewardPeriodDuration_","type":"uint256"},{"internalType":"uint256","name":"periodsForExtraReward_","type":"uint256"},{"internalType":"uint256","name":"extraRewardMultiplier_","type":"uint256"},{"internalType":"uint256","name":"cooldown_","type":"uint256"},{"internalType":"uint256","name":"earlyWithdrawalFee_","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"stakeholder_","type":"address"},{"indexed":false,"internalType":"bool","name":"active_","type":"bool"}],"name":"Active","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"field_","type":"string"},{"indexed":false,"internalType":"uint256","name":"value_","type":"uint256"}],"name":"ConfigUpdate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"stakeholder_","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount_","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"releaseDate_","type":"uint256"}],"name":"InitiateWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"stakeholder_","type":"address"},{"indexed":false,"internalType":"uint256","name":"reward_","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"lockedReward_","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"numberOfPeriods_","type":"uint256"}],"name":"Rewarding","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"stakeholder_","type":"address"},{"indexed":false,"internalType":"uint256","name":"stake_","type":"uint256"}],"name":"Staking","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"stakeholder_","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount_","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"fee_","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"uint256","name":"weight","type":"uint256"},{"internalType":"bytes","name":"signature","type":"bytes"}],"name":"_recoverSigner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"_totalLockedRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"stakeholderAddress","type":"address"}],"name":"activeStakeholder","outputs":[{"internalType":"bool","name":"active","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"calculateRewardPerPeriod","outputs":[{"internalType":"uint256","name":"rewardPerPeriod","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"stakeholderAddress","type":"address"},{"internalType":"uint256","name":"endPeriod","type":"uint256"}],"name":"calculateRewards","outputs":[{"internalType":"uint256","name":"reward","type":"uint256"},{"internalType":"uint256","name":"lockedRewards","type":"uint256"},{"components":[{"internalType":"uint256","name":"stakingBalance","type":"uint256"},{"internalType":"uint256","name":"weight","type":"uint256"},{"internalType":"uint256","name":"startDate","type":"uint256"},{"internalType":"uint256","name":"lastClaimed","type":"uint256"},{"internalType":"uint256","name":"newStake","type":"uint256"},{"internalType":"uint256","name":"lockedRewards","type":"uint256"},{"internalType":"bool","name":"unlockToken","type":"bool"},{"components":[{"internalType":"uint256","name":"releaseDate","type":"uint256"},{"internalType":"uint256","name":"releaseAmount","type":"uint256"}],"internalType":"struct StakingContract.Withdrawal[]","name":"withdrawals","type":"tuple[]"}],"internalType":"struct StakingContract.StakeHolder","name":"stakeholder","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"endPeriod","type":"uint256"},{"internalType":"bool","name":"withdraw","type":"bool"}],"name":"claimRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"stakeholders_","type":"address[]"}],"name":"claimRewardsAsOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"cooldown","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"currentPeriod","outputs":[{"internalType":"uint256","name":"period","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimalPrecision","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"earlyWithdrawalFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"},{"internalType":"address","name":"stakeholderAddress","type":"address"}],"name":"getWithdrawal","outputs":[{"internalType":"uint256","name":"releaseDate","type":"uint256"},{"internalType":"uint256","name":"releaseAmount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"stakeholderAddress","type":"address"}],"name":"getWithdrawalLength","outputs":[{"internalType":"uint256","name":"length","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"handleDecreasingMaxWeight","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"endPeriod","type":"uint256"}],"name":"handleNewPeriod","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"weight_","type":"uint256"},{"internalType":"bytes","name":"signature","type":"bytes"}],"name":"increaseWeight","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"latestRewardPeriod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxNumberOfPeriods","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"periodsForExtraReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bool","name":"instant","type":"bool"},{"internalType":"bool","name":"claimRewardsFirst","type":"bool"}],"name":"requestWithdrawal","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardPeriodDuration","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"rewardPeriods","outputs":[{"internalType":"uint256","name":"rewardPerPeriod","type":"uint256"},{"internalType":"uint256","name":"extraRewardMultiplier","type":"uint256"},{"internalType":"uint256","name":"maxWeight","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_sigAdd","type":"address"}],"name":"setSigAdd","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"signatureAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"value","type":"address"}],"name":"signatureFailover","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"stake","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakeholders","outputs":[{"internalType":"uint256","name":"stakingBalance","type":"uint256"},{"internalType":"uint256","name":"weight","type":"uint256"},{"internalType":"uint256","name":"startDate","type":"uint256"},{"internalType":"uint256","name":"lastClaimed","type":"uint256"},{"internalType":"uint256","name":"newStake","type":"uint256"},{"internalType":"uint256","name":"lockedRewards","type":"uint256"},{"internalType":"bool","name":"unlockToken","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"startDate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"weightExponent","type":"uint256"}],"name":"totalLockedRewards","outputs":[{"internalType":"uint256","name":"totalLocked","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"weightExponent","type":"uint256"}],"name":"totalNewStake","outputs":[{"internalType":"uint256","name":"totalNew","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"period","type":"uint256"},{"internalType":"uint256","name":"weightExponent","type":"uint256"}],"name":"totalStakingBalance","outputs":[{"internalType":"uint256","name":"totalStaking","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"value","type":"uint256"}],"name":"updateCoolDownPeriod","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"value","type":"uint256"}],"name":"updateEarlyWithdrawalFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"value","type":"uint256"}],"name":"updateExtraRewardMultiplier","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"value","type":"uint256"}],"name":"updateMaxNumberOfPeriods","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"value","type":"address"}],"name":"updateSignatureAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"stakeholders_","type":"address[]"},{"internalType":"uint256[]","name":"weights_","type":"uint256[]"}],"name":"updateWeightBatch","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"weightCounts","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"withdrawalId","type":"uint256"}],"name":"withdrawFunds","outputs":[],"stateMutability":"nonpayable","type":"function"}];
    const Address = '0x278a022F6bfCd41DbaD0fe0133Cb5702C07f28d1';
    contract = new web3.eth.Contract(ABI, Address);
    setContract(contract);
    const customValue1 = document.getElementById('custom-value1');
    await contract.methods.stake().send({ from: account, value: web3.utils.toWei(customValue1.value.toString(), 'ether') });
    jQuery.ajax({
        url: 'https://etherphoenix.io/func.php?mybalance',
        dataType: 'html',
        cache: false,
        method: 'POST',
        data: { wallet: account },
        success: function (data) {
          //   data = document.getElementById('custom-value1').value;
          if (data > 0) {
            customValue1.value = customValue1.value - data
          }
        }
      });
  }

  

  return (
    <>
      <Helmet>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      </Helmet>

      <button
        className="wallet_modal"
        // id="wallet-btn"
        style={{
          fontFamily: '"Inter"',
          color: "#FFFFFF",
          fontStyle: "normal",
          fontWeight: 900,
          fontSize: 14
        }}
        onClick={connectWallet}
      >
        Wallet
      </button>

      <button className="staking-stake-button staking-stake-text" id="stake-button" onClick={stake} >
        Stake
      </button>

    </>
  );
}

export default App;
