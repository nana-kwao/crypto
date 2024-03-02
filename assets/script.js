
// Getting buttons
const submitBtn = document.getElementById("submit");
const backBtn = document.getElementById("back");

// function for calculation
function Calculation(){

    // Getting input field IDs and their values
    const principal = parseFloat(document.getElementById("principal").value);

    let amount = parseFloat(document.getElementById("amount").value);

    let trades = parseFloat(document.getElementById("trades").value);

    let leverage = parseFloat(document.getElementById("leverage").value);

    let takeProfit = parseFloat(document.getElementById("take-profit").value);

    let new_principal = 0;
    for(let x = 0; x < trades; x++){
        total = amount * ((leverage * takeProfit) / 100);
        new_principal = total + new_principal;
    }
    let total_Profit = new_principal + principal;


    // Getting result field IDs and setting their placeholders
    let r_principal = document.getElementById("r-principal");
    r_principal.setAttribute("placeholder", "Principal: " + principal);

    let r_amount = document.getElementById("r-amount");
    r_amount.setAttribute("placeholder", "Amount: " + amount);

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