import React from "react";
import tezos from "../Img/tezos.png"
import verbwire from "../Img/verbwire.png"
import polygon from "../Img/polygon.png"
import Paypal from "../Img/Paypal-logo.png"

export default function Donate() {
  return (
    
    <div className='lg:w-[80vw] mb-10 mt-12'>
      <div>
        <div className="text-4xl lg:ml-[25%] text-center mb-16 underline">Donate Via</div>
        <div >
          <img src={tezos} className="ml-5 w-72 lg:ml-[25%] lg:inline" alt="" />
          <span className="lg:ml-5 font-bold">Our Id: </span>
          <span className="ml-5">tz1PSEMGVj4j4o4bemgKCtm6GKS4m24VXAFz</span>
          <a href="https://metamask.tezos.com/" target="_blank" rel="nonpener nonreferrer"><button className="ml-5 p-1 border-4 border-blue-400 rounded bg-blue-400">click here</button></a>
        </div>
        <div className="mb-20 mt-12 ml-5">
          <div className="inline">
          <img src={polygon}  alt="" className="w-44 lg:w-72 max-sm:inline lg:ml-[28%] invert"/>
          <img src={verbwire} className="w-44 lg:w-72 ml-[-95%] lg:ml-[-20%] invert inline" alt="" />
          </div>
          <div className="lg:mt-[-14vh] lg:ml-[50%]">
          <span className=" lg:ml-4 font-bold">Our Id: </span>
          <span className="ml-16">mWwH8wQynlrhCCuImlmg5</span>
          <a href="https://wallet.verbwire.com/mWwH8wQynlrhCCuImlmg5" target="_blank" rel="nonpener nonreferrer"><button className="lg:ml-24 p-1 border-4 border-blue-400 rounded bg-blue-400">click here</button></a>
          </div>
        </div>
        <div className=" lg:mt-40">
          <img src={Paypal} className="w-64 lg:ml-[25%] lg:inline" alt="" />
          <span className="lg:ml-20 font-bold">via: </span>
          <span className="ml- lg:ml-16">Credit/Debit Card</span>
          <a href="https://www.paypal.com/paypalme/kapilpaliwal12?country.x=IN&locale.x=en_GB" target="_blank" rel="nonpener nonreferrer"><button className="ml-5 lg:ml-44 p-1 border-4 border-blue-400 rounded bg-blue-400">click here</button></a>
        </div>
        
        
        
        
      </div>
    </div>
  );
}