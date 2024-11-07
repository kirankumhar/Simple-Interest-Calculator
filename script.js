const calculate = () => {
    const p = parseFloat(document.getElementById('principal').value);

    const r = parseFloat(document.getElementById('rate').value);

    const t = parseFloat(document.getElementById('time').value);

    if(isNaN(p) || isNaN(r) || isNaN(t) || p <= 0 || r <= 0 || t <=0){
        alert('Please enter valid positive numbers for all fields.');
    }

    let result = (p*r*t/100)

    document.getElementById("result").textContent = `Simple Interest: ${result.toFixed(2)}`;

};