// let billTotal = 0.00;
// let tip = 0.00;
// let nrOfPeople = 0.00;
// let tipPerPerson = 0.00;
// let totalPerPerson= 0.00;
//
// function init() {
//     setupBillTotal()
//     setupTip();
//     setupNrOfPeople()
// }
//
// function calculateTipPerPerson() {
//     tipPerPerson = (billTotal * tip / 100) / nrOfPeople;
//     if (isNaN(tipPerPerson) || !isFinite(tipPerPerson)) {
//         tipPerPerson = 0.00;
//     }
// }
//
// function calculateTotalPerPerson() {
//     totalPerPerson = tipPerPerson + (billTotal / nrOfPeople);
//
//     if (isNaN(totalPerPerson) || !isFinite(totalPerPerson)) {
//         totalPerPerson = 0.00;
//     }
//
// }
//
// function calculatePricesPerPerson() {
//     calculateTipPerPerson();
//     calculateTotalPerPerson()
// }
//
// function updateTotals() {
//     const tipPerPersonSpan = document.getElementById("tipPerPerson");
//     const totalPerPersonSpan = document.getElementById("totalPerPerson");
//
//     const currency = '$'
//     tipPerPersonSpan.textContent = currency + tipPerPerson;
//     totalPerPersonSpan.textContent = currency + totalPerPerson;
// }
//
// function reset() {
//     billTotal = 0.00;
//     tip = 0.00;
//     nrOfPeople = 0.00;
//     tipPerPerson = 0.00;
//     totalPerPerson= 0.00;
// }
//
// function setupBillTotal() {
//
//     const billTotalInput = document.getElementById("billTotal");
//
//     billTotalInput.addEventListener("input", function() {
//         billTotal = parseFloat(billTotalInput.value).toFixed(2);
//         if (isNaN(billTotal) || !isFinite(billTotal)) {
//             billTotal = 0.00;
//         }
//         calculatePricesPerPerson();
//         updateTotals();
//     });
// }
//
// function setupTip() {
//
//     const tipFieldset = document.getElementById("tip");
//
//     const tipButtons = tipFieldset.querySelectorAll('button');
//
//     tipButtons.forEach(tipButton => {
//         tipButton.addEventListener('click', function(event) {
//             event.preventDefault();
//
//             tip = parseFloat(tipButton.textContent.replace('%', '')).toFixed(2);
//
//             if (isNaN(tip) || !isFinite(tip)) {
//                 tip = 0.00;
//             }
//
//             // TODO: selected button need to highlight
//             calculatePricesPerPerson();
//             updateTotals();
//         });
//     })
//
//     const customTipInput = document.getElementById("customTip");
//
//     customTipInput.addEventListener("input", function() {
//         tip = parseFloat(customTipInput.value).toFixed(2);
//
//         if (isNaN(tip) || !isFinite(tip)) {
//             tip = 0.00;
//         }
//
//         calculatePricesPerPerson();
//         updateTotals();
//     });
// }
//
// function setupNrOfPeople() {
//
//     const nrOfPeopleInput= document.getElementById("nrOfPeople");
//
//     nrOfPeopleInput.addEventListener("input", function() {
//         nrOfPeople = parseFloat(nrOfPeopleInput.value).toFixed(2);
//
//         if (isNaN(nrOfPeople) || !isFinite(nrOfPeople)) {
//             nrOfPeople = 0.00;
//         }
//
//         calculatePricesPerPerson()
//         updateTotals();
//     });
// }
//
// init();