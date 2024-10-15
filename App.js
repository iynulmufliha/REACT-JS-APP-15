import React, { useState } from 'react';
function App() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');
    const findSecondLargest = () => {
        const array = [];
        let currentNumber = '';
        for (let i = 0; i < input.length; i++) {
            if (input[i] === ',') {
                array.push(Number(currentNumber));
                currentNumber = '';
            } else {
                currentNumber += input[i]; }}
        if (currentNumber) array.push(Number(currentNumber)); 
        let largest = -1;
        let second = -1;
        for (let num of array) {
            if (num > largest) {
                second = largest;
                largest = num;
            } else if (num > second && num < largest) {
                second = num; }}
        setResult(second === -1 ? 'No second largest element.' : `Second largest: ${second}`); };
    return (
        <div><h1>Second Largest Finder</h1>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)}placeholder="Enter numbers with commas"/>
            <button onClick={findSecondLargest}>Find</button>
            <p>{result}</p></div>);}
export default App;

