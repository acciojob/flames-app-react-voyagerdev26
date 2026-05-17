import React, {useState} from 'react'

const flamesMap = {
  '0': 'Siblings',
  '1': 'Friends',
  '2': 'Love',
  '3': 'Affection',
  '4': 'Marriage',
  '5': 'Enemy',
}

const Flames = () => {

  const [inputOne, setInputOne] = useState('')
  const [inputTwo, setInputTwo] = useState('')
  const [output, setOutput] = useState('')
  
  const logicFunc = (str1, str2) => {
    let arr = new Array(128).fill(0)
    for(let i of str1){
      arr[i.charCodeAt()]++
    }
    for(let i of str2){
      arr[i.charCodeAt()]--
    }
    let count = 0
    for(let i of arr){
      count += Math.abs(i)
    }
    return count%6
  }
  const handleSubmit =(e) => {
    e.preventDefault()
    if(inputOne=== '' || inputTwo===''){
      setOutput('Please Enter valid input')
      return
    }
    let num = logicFunc(inputOne, inputTwo)
    setOutput(flamesMap[num])
  }

  const handleClear = () => {
    setInputOne('')
    setInputTwo('')
    setOutput('')
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input  name='name1' 
                data-testid='input1' 
                placeholder='Enter first name' 
                value={inputOne} 
                onChange={(e) => setInputOne(e.target.value)}></input>
        <input  name='name2' 
                data-testid='input2' 
                placeholder='Enter second name'
                value={inputTwo}
                onChange={(e) => setInputTwo(e.target.value)}></input>
        <button data-testid='calculate_relationship' type='submit' name='calculate_relationship'>Calculate Relationship Future</button>
        <button data-testid='clear' name='clear' type='button' onClick={handleClear}>Clear</button>
      </form>
      <h3 data-testid='answer'>{output}</h3>
    </div>
  )
}

export default Flames