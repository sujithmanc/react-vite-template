import React, { useState } from "react";

function Calculator() {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [result, setResult] = useState(null);

    const handleCalculate = (operator) => {
        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);
        if (isNaN(n1) || isNaN(n2)) return;

        let res;
        switch (operator) {
            case "+": res = n1 + n2; break;
            case "-": res = n1 - n2; break;
            case "*": res = n1 * n2; break;
            case "/": res = n2 !== 0 ? n1 / n2 : "Error"; break;
            default: res = "Invalid";
        }
        setResult(res);
    };

    return (
        <div className="card p-3">
            <h3>Simple Calculator</h3>
            <input type="number" className="form-control mb-2" value={num1} onChange={(e) => setNum1(e.target.value)} placeholder="Enter first number" />
            <input type="number" className="form-control mb-2" value={num2} onChange={(e) => setNum2(e.target.value)} placeholder="Enter second number" />
            <div className="d-flex gap-2">
                <button className="btn btn-primary" onClick={() => handleCalculate("+")}>+</button>
                <button className="btn btn-secondary" onClick={() => handleCalculate("-")}>-</button>
                <button className="btn btn-success" onClick={() => handleCalculate("*")}>*</button>
                <button className="btn btn-danger" onClick={() => handleCalculate("/")}>/</button>
            </div>
            {result !== null && <h4 className="mt-3">Result: {result}</h4>}
        </div>
    );
}

export default Calculator;