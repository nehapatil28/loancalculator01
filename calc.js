window.onload=() =>{
    const inputs = document.querySelectorAll("input");
    inputs.forEach(input=> {
        input.addEventListener('change',calculateLoan)
    })
}   
function calculateLoan() {
    const principal = document.querySelector('#amount').value;
    const interestRate = document.querySelector('#interest').value;
    const tenure = document.querySelector('#tenure').value;

    if(!principal || !interestRate || !tenure) return;
    
    // for finding monthlyInterest
    const monthlyInterest = interestRate / 100 / 12;

    // emi formula : P * R *(1+R)^N/[(1-R)^N-1]
    const emi = principal * monthlyInterest * Math.pow(1+ monthlyInterest,tenure) / (Math.pow(1+monthlyInterest,tenure)-1);

    const totalAmount = emi * tenure;
    const totalInterest = totalAmount - principal;

    // fatching output part
    document.querySelector('#emi').innerText = 'EMI:₹'+ emi.toFixed(2);
    document.querySelector('#totalAmount').innerText = 'Total Amount:₹' + totalAmount .toFixed(2);
    document.querySelector('#totalInterest').innerText ='Total Interest:₹' + totalInterest.toFixed(2);
}