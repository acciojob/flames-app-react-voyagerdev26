import React, { useState,useRef} from "react";
import '../styles/App.css';

const App=()=>{

    let [answer,setAnswer]= useState("");
    let data1= useRef("");
    let data2=useRef("");

    function handleSubmit(e){
        e.preventDefault();
        if(data1.current.value=="" || data2.current.value==""){
            // alert(`Please Enter valid input`);
            setAnswer(`Please Enter valid input`);
            return;
        }
        // 1st way
        // let s1=data1.current.value.toLowerCase().split('');
        // let s2=data2.current.value.toLowerCase().split('');
        // for(let i=0;i<s1.length;i++){
        //     for(let j=0;j<s2.length;j++){
        //         if(s1[i]==s2[j]){
        //             s1.splice(i,1);
        //             s2.splice(j,1);
        //             i--;
        //             break;
        //         }
        //     }
        // }
        // // console.log('tick');
        // // let outputArr=["Siblings","Friends","Love","Affection","Marriage","Enemy"];
        let outputObj={
            1:"Friends",
            2:"Love",
            3:"Affection",
            4:"Marriage",
            5:"Enemy",
            0:"Siblings"
        }
        // // setAnswer(outputArr[(s1.length+s2.length)%6]);
        // setAnswer(outputObj[`${(s1.length+s2.length)%6}`]);


        // 2nd way 
        let s1=data1.current.value.toLowerCase().split('');
        let s2=data2.current.value.toLowerCase().split('');
        let map= new Map();
        for(let i=0;i<s1.length;i++){
            map.set(s1[i],(map.get(s1[i])||0)+1);
        }
        for(let i=0;i<s2.length;i++){
            // not right approach , not completed
            // if(map.has(s2[i])){
            //     map.set(s2[i],map.get(s2[i])-1);
            // }
            // else{//entirely new
            //     map.set(s2[i],1)
            // }
            map.set(s2[i],(map.get(s2[i])||0)-1) // other has to go opposite so negative ye jayega to store its count as well and remove common from above positive as well
        }
        let sumLength=0;
        for(let t of map){
            sumLength+=Math.abs(t[1]);
        }
        setAnswer(outputObj[`${(sumLength)%6}`]);
        

    }
    function handleClear(e){
        e.preventDefault();
        data1.current.value="";
        data2.current.value="";
        setAnswer("");
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>

                <input data-testid="input1" placeholder="Enter first name" name="name1" type="text" ref={data1}></input>
                <input data-testid="input2" placeholder="Enter second name" name="name2" type="text" ref={data2}></input>
                <button type="submit" data-testid="calculate_relationship" name="calculate_relationship">Calculate Relationship Future</button>
                <button type="reset" data-testid="clear" name="clear" onClick={(e)=>{handleClear(e)}}>Clear</button>
            </form>
            <h3 data-testid="answer">{answer}</h3>
        </div>
    )
}


export default App;
