
// Getting buttons
const submitBtn = document.getElementById("submit");
const backBtn = document.getElementById("back");

// function for calculation
function Calculation(){

    // Getting input field IDs and their values
    const principal = parseFloat(document.getElementById("principal").value);
    let total = principal;
    let amount = (parseFloat(document.getElementById("amount").value))/100;
    let trades = parseFloat(document.getElementById("trades").value);

    let leverage = parseFloat(document.getElementById("leverage").value);

    let takeProfit = parseFloat(document.getElementById("take-profit").value);

    let totalRemain = 1 - amount; 
    let remain;
    let funding;

    let fees = 0;
    let new_principal;

    for(let x = 0; x < trades; x++){
        funding = (0.03/100) * total;
        total = total - funding;
        fees = fees + funding;
        let totalTrade = total * amount;
        remain = total * totalRemain;
        new_principal = amount * ((leverage * takeProfit) * totalTrade);
        new_principal = total + new_principal + remain;
    }
    let total_Profit = new_principal + principal;


    // Getting result field IDs and setting their placeholders
    let r_principal = document.getElementById("r-principal");
    r_principal.setAttribute("placeholder", "Principal: " + principal);

    let r_trades = document.getElementById("r-trades");
    r_trades.setAttribute("placeholder", "Trades: " + trades);

    let r_leverage = document.getElementById("r-leverage");
    r_leverage.setAttribute("placeholder", "Leverage: " + leverage + "x");

    let r_takeProfit = document.getElementById("r-take-profit");
    r_takeProfit.setAttribute("placeholder", "Take Profit: " + takeProfit + "%");

    let r_proft = document.getElementById("profit");
    r_proft.setAttribute("placeholder" ,"TOTAL PROFIT: " + total_Profit);
}

// get results and form section IDs
const forms = document.getElementById("form");
const results = document.getElementById("results");
 
submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    Calculation();

    results.style.display = "flex";
    forms.style.display = "none";
});

backBtn.addEventListener('click', (e) => {
    e.preventDefault();

    results.style.display = "none";
    forms.style.display = "flex";
})