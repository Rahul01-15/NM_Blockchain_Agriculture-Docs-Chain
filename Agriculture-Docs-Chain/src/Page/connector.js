const { ethers } = require("ethers");

const abi = [
 {
  "anonymous": false,
  "inputs": [
   {
    "indexed": false,
    "internalType": "uint256",
    "name": "productId",
    "type": "uint256"
   },
   {
    "indexed": false,
    "internalType": "string",
    "name": "name",
    "type": "string"
   },
   {
    "indexed": false,
    "internalType": "string",
    "name": "description",
    "type": "string"
   },
   {
    "indexed": false,
    "internalType": "uint256",
    "name": "quantity",
    "type": "uint256"
   },
   {
    "indexed": false,
    "internalType": "address",
    "name": "owner",
    "type": "address"
   }
  ],
  "name": "ProductAdded",
  "type": "event"
 },
 {
  "anonymous": false,
  "inputs": [
   {
    "indexed": false,
    "internalType": "uint256",
    "name": "productId",
    "type": "uint256"
   },
   {
    "indexed": false,
    "internalType": "string",
    "name": "name",
    "type": "string"
   },
   {
    "indexed": false,
    "internalType": "string",
    "name": "description",
    "type": "string"
   },
   {
    "indexed": false,
    "internalType": "uint256",
    "name": "quantity",
    "type": "uint256"
   }
  ],
  "name": "ProductUpdated",
  "type": "event"
 },
 {
  "inputs": [
   {
    "internalType": "uint256",
    "name": "ProductId",
    "type": "uint256"
   },
   {
    "internalType": "string",
    "name": "_name",
    "type": "string"
   },
   {
    "internalType": "string",
    "name": "_description",
    "type": "string"
   },
   {
    "internalType": "uint256",
    "name": "_quantity",
    "type": "uint256"
   }
  ],
  "name": "addProduct",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
 },
 {
  "inputs": [
   {
    "internalType": "uint256",
    "name": "_productId",
    "type": "uint256"
   }
  ],
  "name": "getProductDetails",
  "outputs": [
   {
    "internalType": "string",
    "name": "name",
    "type": "string"
   },
   {
    "internalType": "string",
    "name": "description",
    "type": "string"
   },
   {
    "internalType": "uint256",
    "name": "quantity",
    "type": "uint256"
   },
   {
    "internalType": "address",
    "name": "owner",
    "type": "address"
   }
  ],
  "stateMutability": "view",
  "type": "function"
 },
 {
  "inputs": [],
  "name": "productCount",
  "outputs": [
   {
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
   }
  ],
  "stateMutability": "view",
  "type": "function"
 },
 {
  "inputs": [
   {
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
   }
  ],
  "name": "products",
  "outputs": [
   {
    "internalType": "string",
    "name": "name",
    "type": "string"
   },
   {
    "internalType": "string",
    "name": "description",
    "type": "string"
   },
   {
    "internalType": "uint256",
    "name": "quantity",
    "type": "uint256"
   },
   {
    "internalType": "address",
    "name": "owner",
    "type": "address"
   }
  ],
  "stateMutability": "view",
  "type": "function"
 },
 {
  "inputs": [
   {
    "internalType": "uint256",
    "name": "_productId",
    "type": "uint256"
   },
   {
    "internalType": "string",
    "name": "_name",
    "type": "string"
   },
   {
    "internalType": "string",
    "name": "_description",
    "type": "string"
   },
   {
    "internalType": "uint256",
    "name": "_quantity",
    "type": "uint256"
   }
  ],
  "name": "updateProduct",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
 }
]

if (!window.ethereum) {
 alert('Meta Mask Not Found')
 window.open("https://metamask.io/download/")
}

export const provider = new ethers.providers.Web3Provider(window.ethereum);
export const signer = provider.getSigner();
export const address = "0xd9145CCE52D386f254917e481eB44e9943F39138"

export const contract = new ethers.Contract(address, abi, signer)
