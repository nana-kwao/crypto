
// Getting buttons
const submitBtn = document.getElementById("submit");
const backBtn = document.getElementById("back");

// function for calculation
function Calculation() {
function Calculation() {
    // Getting input field IDs and their values
    const principal = parseFloat(document.getElementById("principal").value);
    let total = principal;
    let fundingFees = parseFloat(document.getElementById("funding").value);
    let trades = parseFloat(document.getElementById("trades").value);
    let perTrade = parseFloat(document.getElementById("per-trade").value);
    let leverage = parseFloat(document.getElementById("leverage").value);
    let takeProfit = parseFloat(document.getElementById("take-profit").value);
    let funding;
    let toTrade;
    let totalRemain;
    let fees = 0;
    let profit; 

    for (let x = 0; x < trades; x++){
        toTrade = (perTrade / 100) * total;
        totalRemain = (1 - (perTrade / 100)) * total;
        funding = (fundingFees / 100) * toTrade;
        fees = fees + funding;
        let alltotal = toTrade - funding;
        profit = ((leverage * takeProfit) / 100) * alltotal;
        total = alltotal + profit + totalRemain;

        console.log("Total: " + total);
        console.log("Funding Fees: " + funding);
        console.log("To Trade: " + toTrade)
        console.log("Fees: " + fees);
        console.log("All Total: " + alltotal);
        console.log("Profit: " + profit);
        console.log("Remain: " + totalRemain);
        console.log("");
    }
    let total_Profit = total.toFixed(2);

    

    // Getting result field IDs and setting their placeholders
    let r_principal = document.getElementById("r-principal");
    r_principal.setAttribute("placeholder", "Principal: " + principal);

    let r_trades = document.getElementById("r-trades");
    r_trades.setAttribute("placeholder", "Trades: " + trades);

    let r_perTrade = document.getElementById("r-per-trade");
    r_perTrade.setAttribute("placeholder", "Percentage to trade: " + perTrade + "%");

    let r_leverage = document.getElementById("r-leverage");
    r_leverage.setAttribute("placeholder", "Leverage: " + leverage + "x");

    let r_takeProfit = document.getElementById("r-take-profit");
    r_takeProfit.setAttribute("placeholder", "Take Profit: " + takeProfit + "%");

    let r_proft = document.getElementById("profit");
    r_proft.setAttribute("placeholder" ,"Total Profit: " + total_Profit);
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

