import React, { useState } from "react";
import { Button, Container, Row, Col } from 'react-bootstrap';
import { contract } from "./connector";

function Home() {
   const [Id, setId] = useState("");
   const [Name, setName] = useState("");
   const [Desc, setDesc] = useState("");
   const [Qty, setQty] = useState("");
   
   const [Ids, setIds] = useState("");
   const [Names, setNames] = useState("");
   const [Descs, setDescs] = useState("");
   const [Qtys, setQtys] = useState("");
   const [Wallet, setWallet] = useState("");



   const [gId, setGIds] = useState("");
   const [Details, setDetails] = useState("");

 
   const handleId = (e) => {
      setId(e.target.value)
   } 

   const handleName = (e) => {
      setName(e.target.value)
   } 

   const handleDesc = (e) => {
      setDesc(e.target.value)
   } 

   const handleQty = (e) => {
      setQty(e.target.value)
   } 

   


   

   const handleAddProduct = async () => {
      try {
         let tx = await contract.addProduct(Id.toString(), Name, Desc, Qty)
         let wait = await tx.wait()
         alert(wait.transactionHash)
         console.log(wait);
      } catch (error) {
         alert(error)
      }
   }


   const handleIds = (e) => {
      setIds(e.target.value)
   }

   const handleNames = (e) => {
      setNames(e.target.value)
   }

   const handleDescs = (e) => {
      setDescs(e.target.value)
   }

   const handleQtys = (e) => {
      setQtys(e.target.value)
   }

  

   const handleUpdate = async () => {
      try {
         let tx = await contract.updateProduct(Ids.toString(), Names, Descs, Qtys)
         let wait = await tx.wait()
         console.log(wait);
         alert(wait.transactionHash)
      } catch (error) {
         alert(error)   
      }
   }

   
   const handleGetIds = async (e) => {
      setGIds(e.target.value)
   }

   const handleGetDetails = async () => {
      try {
         let tx = await contract.getProductDetails(gId.toString())
         
         let arr = []
         tx.map(e => {
            arr.push(e)
         })
         
         console.log(tx);
         setDetails(arr)
      } catch (error) {
         alert(error)
         console.log(error);
      }
   }

   const handleWallet = async () => {
      if (!window.ethereum) {
         return alert('please install metamask');
      }

      const addr = await window.ethereum.request({
         method: 'eth_requestAccounts',
      });

      setWallet(addr[0])

   }

 return (
  <div>
   <h1 style={{ marginTop: "30px", marginBottom: "80px" }}>Agriculture Registry</h1>
       {!Wallet ?

          <Button onClick={handleWallet} style={{ marginTop: "30px", marginBottom: "50px" }}>Connect Wallet </Button>
          :
          <p style={{ width: "250px", height: "50px", margin: "auto", marginBottom: "50px", border: '2px solid #2096f3' }}>{Wallet.slice(0, 6)}....{Wallet.slice(-6)}</p>
       }
   <Container>
    <Row>
     <Col style={{marginRight:"100px"}}>
      <div>
         <input style={{ marginTop: "10px", borderRadius: "5px" }} onChange={handleId} type="number" placeholder="Product Id" value={Id} /> <br />
         <input style={{ marginTop: "10px", borderRadius: "5px" }} onChange={handleName} type="string" placeholder="Product Name" value={Name} /> <br />
         <input style={{ marginTop: "10px", borderRadius: "5px" }} onChange={handleDesc} type="string" placeholder="product description" value={Desc} /> <br />
         <input style={{ marginTop: "10px", borderRadius: "5px" }} onChange={handleQty} type="number" placeholder="product quantity" value={Qty} /> <br />

       <Button onClick={handleAddProduct} style={{ marginTop: "10px" }} variant="primary"> Add Product</Button>
      </div>
     </Col>

             <Col style={{ marginRight: "100px" }}>
                <div>
                   <input style={{ marginTop: "10px", borderRadius: "5px" }} onChange={handleIds} type="number" placeholder="Product Id" value={Ids} /> <br />
                   <input style={{ marginTop: "10px", borderRadius: "5px" }} onChange={handleNames} type="string" placeholder="Product Name" value={Names} /> <br />
                   <input style={{ marginTop: "10px", borderRadius: "5px" }} onChange={handleDescs} type="string" placeholder="product description" value={Descs} /> <br />
                   <input style={{ marginTop: "10px", borderRadius: "5px" }} onChange={handleQtys} type="number" placeholder="product quantity" value={Qtys} /> <br />

                   <Button onClick={handleUpdate} style={{ marginTop: "10px" }} variant="primary"> Update Product</Button>
                </div>
             </Col>
               
   </Row>    
   <Row>
             <Col >
                <div style={{ margin: "auto" , marginTop:"100px"}}>
                   <input style={{ marginTop: "10px", borderRadius: "5px" }} onChange={handleGetIds} type="number" placeholder="Enter  Id" value={gId} /><br />

                   <Button onClick={handleGetDetails} style={{ marginTop: "10px" }} variant="primary">Get Product Details</Button>
                   {Details ? Details?.map(e => {
                      return <p>{e.toString()}</p>
                   }) : <p></p>}
                </div>
             </Col> 
   </Row>
   </Container>

  </div>
 )
}

export default Home;
