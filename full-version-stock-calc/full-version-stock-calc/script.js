'use strict';

// Navbar
let mainNav = document.getElementById('main-nav');
let toggleNav = document.getElementById('toggle-nav');
        toggleNav.addEventListener('click', function () {
            mainNav.classList.toggle('active')
        });


// popup
function togglePopup(popupId) {
    document.getElementById(popupId).classList.toggle('active');
}

// ---------- Automate reamining amount -------------
const totalAmountInput = document.getElementById("total-amount");
const alreadyInvestedInput = document.getElementById("first-amount");
const remainingAmountInput = document.getElementById("remaining-amount");


// Add event listeners to total amount and already invested amount inputs
totalAmountInput.addEventListener('input', updateRemainingAmount);
alreadyInvestedInput.addEventListener('input', updateRemainingAmount);

// // // symbols
// totalAmountInput.addEventListener('keypress', function(e) {
//     if(e.charCode == 13) {
//         totalAmountInput.value = `$ `

//     }
// })




// Function to update remaining amount
function updateRemainingAmount() {
    const totalAmount = parseFloat(totalAmountInput.value);
    const alreadyInvestedAmount = parseFloat(alreadyInvestedInput.value);

    // Calculate remaining amount
    const remainingAmount = totalAmount - alreadyInvestedAmount;

    // Update remaining amount input field
    remainingAmountInput.value = isNaN(remainingAmount) ? '' : remainingAmount.toFixed(2);
}

// Call the function initially to set the initial value
updateRemainingAmount();



// Calculations
function calculate() {
    // getting values from input
    const totalAmount = parseFloat(document.getElementById("total-amount").value);
    const purchasePrice = parseFloat(document.getElementById("purchase-price").value);
    const percentageProfit = parseFloat(document.getElementById("percentage-profit").value);
    const firstAmount = parseFloat(document.getElementById("first-amount").value);
    const remainingAmount = parseFloat(document.getElementById("remaining-amount").value);

    // Check if all fields have values
    if (isNaN(totalAmount) || isNaN(purchasePrice) || isNaN(percentageProfit) || isNaN(firstAmount) || isNaN(remainingAmount)) {
        alert('Please fill out all the fields.');
        return;
    }





// // qty update
const qtyValue = parseFloat(firstAmount / purchasePrice).toFixed(2);



// ------- Result STARTS -------------
// FIRST-ROW
const invstAvg40_1 = Math.floor(remainingAmount * 0.10);
const invstAvg30_1 = Math.floor(remainingAmount * 0.10);
const invstAvg20_1 = Math.floor(remainingAmount * 0.17);
const invstAvg10_1 = Math.floor(remainingAmount * 0.40);

document.getElementById('invst-avg40--1').innerHTML = invstAvg40_1.toLocaleString('en-IN');
document.getElementById('invst-avg30--1').innerHTML = invstAvg30_1.toLocaleString('en-IN');
document.getElementById('invst-avg20--1').innerHTML = invstAvg20_1.toLocaleString('en-IN');
document.getElementById('invst-avg10--1').innerHTML = invstAvg10_1.toLocaleString('en-IN');

// SECOND-ROW
const invstAvg40_2 = Math.floor(remainingAmount * 0.20);
const invstAvg30_2 = Math.floor(remainingAmount * 0.20);
const invstAvg20_2 = Math.floor(remainingAmount * 0.34);
const invstAvg10_2 = Math.floor(remainingAmount * 0.60);

document.getElementById('invst-avg40--2').innerHTML = invstAvg40_2.toLocaleString('en-IN');
document.getElementById('invst-avg30--2').innerHTML = invstAvg30_2.toLocaleString('en-IN');
document.getElementById('invst-avg20--2').innerHTML = invstAvg20_2.toLocaleString('en-IN');
document.getElementById('invst-avg10--2').innerHTML = invstAvg10_2.toLocaleString('en-IN');

// THIRD-ROW
const invstAvg40_3 = Math.floor(remainingAmount * 0.30);
const invstAvg30_3 = Math.floor(remainingAmount * 0.30);
const invstAvg20_3 = Math.floor(remainingAmount * 0.49);

document.getElementById('invst-avg40--3').innerHTML = invstAvg40_3.toLocaleString('en-IN');
document.getElementById('invst-avg30--3').innerHTML = invstAvg30_3.toLocaleString('en-IN');
document.getElementById('invst-avg20--3').innerHTML = invstAvg20_3.toLocaleString('en-IN');

// FOURTH-ROW
const invstAvg40_4 = Math.floor(remainingAmount * 0.40);
const invstAvg30_4 = Math.floor(remainingAmount * 0.40);

document.getElementById('invst-avg40--4').innerHTML = invstAvg40_4.toLocaleString('en-IN');
document.getElementById('invst-avg30--4').innerHTML = invstAvg30_4.toLocaleString('en-IN');

// Total-Invest
const total40 = (invstAvg40_1 + invstAvg40_2 + invstAvg40_3 + invstAvg40_4).toFixed(2);
const total30 = (invstAvg30_1 + invstAvg30_2 + invstAvg30_3 + invstAvg30_4).toFixed(2);
const total20 = (invstAvg20_1 + invstAvg20_2 + invstAvg20_3).toFixed(2);
const total10 = (invstAvg10_1 + invstAvg10_2).toFixed(2);

document.getElementById('total-40').innerHTML = parseFloat(total40).toLocaleString('en-IN');
document.getElementById('total-30').innerHTML = parseFloat(total30).toLocaleString('en-IN');
document.getElementById('total-20').innerHTML = parseFloat(total20).toLocaleString('en-IN');
document.getElementById('total-10').innerHTML = parseFloat(total10).toLocaleString('en-IN');

// ---------- Result ENDS -------------

// ------------ Price to be Add on Dip STARTS -------------------
// Dip-Avg FIRST-ROW
const dipAvg1Value1 = parseFloat((purchasePrice - purchasePrice * 0.16).toFixed(2));
document.getElementById('dip-avg1--1').innerHTML = dipAvg1Value1.toLocaleString('en-IN'); // stock purchase - stock purchase * 16%

const dipAvg2Value1 = parseFloat((purchasePrice - purchasePrice * 0.12).toFixed(2));
document.getElementById('dip-avg2--1').innerHTML = dipAvg2Value1.toLocaleString('en-IN');

const dipAvg3Value1 = parseFloat((purchasePrice - purchasePrice * 0.11).toFixed(2));
document.getElementById('dip-avg3--1').innerHTML = dipAvg3Value1.toLocaleString('en-IN');

const dipAvg4Value1 = parseFloat((purchasePrice - purchasePrice * 0.06).toFixed(2));
document.getElementById('dip-avg4--1').innerHTML = dipAvg4Value1.toLocaleString('en-IN');

// Dip-Avg SECOND-ROW
const dipAvg1Value2 = parseFloat((dipAvg1Value1 - dipAvg1Value1 * 0.12).toFixed(2));
document.getElementById('dip-avg1--2').innerHTML = dipAvg1Value2.toLocaleString('en-IN'); // dipAvg1Value1 - dipAvg1Value1 * 12%

const dipAvg2Value2 = parseFloat((dipAvg2Value1 - dipAvg2Value1 * 0.09).toFixed(2));
document.getElementById('dip-avg2--2').innerHTML = dipAvg2Value2.toLocaleString('en-IN'); // dipAvg2Value1 - dipAvg2Value1 * 9%

const dipAvg3Value2 = parseFloat((dipAvg3Value1 - dipAvg3Value1 * 0.06).toFixed(2));
document.getElementById('dip-avg3--2').innerHTML = dipAvg3Value2.toLocaleString('en-IN'); // dipAvg3Value1 - dipAvg3Value1 * 6%

const dipAvg4Value2 = parseFloat((dipAvg4Value1 - dipAvg4Value1 * 0.04).toFixed(2));
document.getElementById('dip-avg4--2').innerHTML = dipAvg4Value2.toLocaleString('en-IN'); // dipAvg4Value1 - dipAvg4Value1 * 4%

// Dip-Avg Third-Row
const dipAvg1value3 = parseFloat((dipAvg1Value2 - dipAvg1Value2 * 0.08).toFixed(2));
document.getElementById('dip-avg1--3').innerHTML = dipAvg1value3.toLocaleString('en-IN');

const dipAvg2Value3 = parseFloat((dipAvg2Value2 - dipAvg2Value2 * 0.06).toFixed(2));
document.getElementById('dip-avg2--3').innerHTML = dipAvg2Value3.toLocaleString('en-IN');

const dipAvg3Value3 = parseFloat((dipAvg3Value2 - dipAvg3Value2 * 0.03).toFixed(2));
document.getElementById('dip-avg3--3').innerHTML = dipAvg3Value3.toLocaleString('en-IN');

// Dip-Avg Fourth-Row
const dipAvg1Value4 = parseFloat((dipAvg1value3 - dipAvg1value3 * 0.04).toFixed(2));
document.getElementById('dip-avg1--4').innerHTML = dipAvg1Value4.toLocaleString('en-IN');

const dipAvg2Value4 = parseFloat((dipAvg2Value3 - dipAvg2Value3 * 0.03).toFixed(2));
document.getElementById('dip-avg2--4').innerHTML = dipAvg2Value4.toLocaleString('en-IN');

// ------------ Price to be Add on Dip Ends -------------------

// -------------- QTY STARTS ------------------------
// row-one
const qtyRow1Col1 = Math.floor(invstAvg40_1 / dipAvg1Value1);
const qtyRow1Col2 = Math.floor(invstAvg30_1 / dipAvg2Value1);
const qtyRow1Col3 = Math.floor(invstAvg20_1 / dipAvg3Value1);
const qtyRow1Col4 = Math.floor(invstAvg10_1 / dipAvg4Value1);

document.getElementById('qty-1--1').innerHTML = qtyRow1Col1.toLocaleString('en-IN');
document.getElementById('qty-1--2').innerHTML = qtyRow1Col2.toLocaleString('en-IN');
document.getElementById('qty-1--3').innerHTML = qtyRow1Col3.toLocaleString('en-IN');
document.getElementById('qty-1--4').innerHTML = qtyRow1Col4.toLocaleString('en-IN');

// row-two
const qtyRow2Col1 = Math.floor(invstAvg40_2 / dipAvg1Value2);
const qtyRow2Col2 = Math.floor(invstAvg30_2 / dipAvg2Value2);
const qtyRow2Col3 = Math.floor(invstAvg20_2 / dipAvg3Value2);
const qtyRow2Col4 = Math.floor(invstAvg10_2 / dipAvg4Value2);

document.getElementById('qty-2--1').innerHTML = qtyRow2Col1.toLocaleString('en-IN');
document.getElementById('qty-2--2').innerHTML = qtyRow2Col2.toLocaleString('en-IN');
document.getElementById('qty-2--3').innerHTML = qtyRow2Col3.toLocaleString('en-IN');
document.getElementById('qty-2--4').innerHTML = qtyRow2Col4.toLocaleString('en-IN');

// row-three
const qtyRow3Col1 = Math.floor(invstAvg40_3 / dipAvg1value3);
const qtyRow3Col2 = Math.floor(invstAvg30_3 / dipAvg2Value3);
const qtyRow3Col3 = Math.floor(invstAvg20_3 / dipAvg3Value3);

document.getElementById('qty-3--1').innerHTML = qtyRow3Col1.toLocaleString('en-IN');
document.getElementById('qty-3--2').innerHTML = qtyRow3Col2.toLocaleString('en-IN');
document.getElementById('qty-3--3').innerHTML = qtyRow3Col3.toLocaleString('en-IN');

// row-four
const qtyRow4Col1 = Math.floor(invstAvg40_4 / dipAvg1Value4);
const qtyRow4Col2 = Math.floor(invstAvg30_4 / dipAvg2Value4);

document.getElementById('qty-4--1').innerHTML = qtyRow4Col1.toLocaleString('en-IN');
document.getElementById('qty-4--2').innerHTML = qtyRow4Col2.toLocaleString('en-IN');

// TOTAL-QTY

// Calculate total quantities
const totalQty1 = (parseFloat(qtyValue) + parseFloat(qtyRow1Col1) + parseFloat(qtyRow2Col1) + parseFloat(qtyRow3Col1) + parseFloat(qtyRow4Col1)).toFixed(2);
const totalQty2 = (parseFloat(qtyValue) + parseFloat(qtyRow1Col2) + parseFloat(qtyRow2Col2) + parseFloat(qtyRow3Col2) + parseFloat(qtyRow4Col2)).toFixed(2);
const totalQty3 = (parseFloat(qtyValue) + parseFloat(qtyRow1Col3) + parseFloat(qtyRow2Col3) + parseFloat(qtyRow3Col3)).toFixed(2);
const totalQty4 = (parseFloat(qtyValue) + parseFloat(qtyRow1Col4) + parseFloat(qtyRow2Col4)).toFixed(2);

document.getElementById('totalQty1').innerHTML = parseFloat(totalQty1).toLocaleString('en-IN');
document.getElementById('totalQty2').innerHTML = parseFloat(totalQty2).toLocaleString('en-IN');
document.getElementById('totalQty3').innerHTML = parseFloat(totalQty3).toLocaleString('en-IN');
document.getElementById('totalQty4').innerHTML = parseFloat(totalQty4).toLocaleString('en-IN');

// ------------ QTS ENDS ------------------------

// ---------- calculation avg, target price, net profit ----------

// avg-price
const avgPrice1 = (parseFloat(totalAmount) / parseFloat(totalQty1)).toFixed(2);
const avgPrice2 = (parseFloat(totalAmount) / parseFloat(totalQty2)).toFixed(2);
const avgPrice3 = (parseFloat(totalAmount) / parseFloat(totalQty3)).toFixed(2);
const avgPrice4 = (parseFloat(totalAmount) / parseFloat(totalQty4)).toFixed(2);

document.getElementById("avgPrice1").innerHTML = parseFloat(avgPrice1).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
document.getElementById("avgPrice2").innerHTML = parseFloat(avgPrice2).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
document.getElementById("avgPrice3").innerHTML = parseFloat(avgPrice3).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
document.getElementById("avgPrice4").innerHTML = parseFloat(avgPrice4).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });


//target-price

// converts percentage input
const scaledPercentageProfit = percentageProfit / 100;

const targetPrice1 = (parseFloat(avgPrice1) + parseFloat(avgPrice1) * scaledPercentageProfit).toFixed(2);
const targetPrice2 = (parseFloat(avgPrice2) + parseFloat(avgPrice2) * scaledPercentageProfit).toFixed(2);
const targetPrice3 = (parseFloat(avgPrice3) + parseFloat(avgPrice3) * scaledPercentageProfit).toFixed(2);
const targetPrice4 = (parseFloat(avgPrice4) + parseFloat(avgPrice4) * scaledPercentageProfit).toFixed(2);

document.getElementById('targetPrice1').innerHTML = parseFloat(targetPrice1).toLocaleString('en-IN');
document.getElementById('targetPrice2').innerHTML = parseFloat(targetPrice2).toLocaleString('en-IN');
document.getElementById('targetPrice3').innerHTML = parseFloat(targetPrice3).toLocaleString('en-IN');
document.getElementById('targetPrice4').innerHTML = parseFloat(targetPrice4).toLocaleString('en-IN');

// net profit
const netProfit1 = Math.floor(parseFloat(totalAmount) * parseFloat(percentageProfit));
const netProfit2 = Math.floor(parseFloat(totalAmount) * parseFloat(percentageProfit));
const netProfit3 = Math.floor(parseFloat(totalAmount) * parseFloat(percentageProfit));
const netProfit4 = Math.floor(parseFloat(totalAmount) * parseFloat(percentageProfit));

document.getElementById('netProfit1').innerHTML = netProfit1.toLocaleString('en-IN');
document.getElementById('netProfit2').innerHTML = netProfit2.toLocaleString('en-IN');
document.getElementById('netProfit3').innerHTML = netProfit3.toLocaleString('en-IN');
document.getElementById('netProfit4').innerHTML = netProfit4.toLocaleString('en-IN');



// ---------- THE END :) ----------

}

document.addEventListener('DOMContentLoaded', (event) => {
    const ctx = document.getElementById('myChart').getContext('2d');

    // Data preparation
    const data = {
        labels: ['Quantity', 'Avg Price', 'Target Price'],
        datasets: [
            {
                label: '10% Dip',
                data: [100, 50, 60],
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            },
            {
                label: '20% Dip',
                data: [150, 45, 55],
                backgroundColor: 'rgba(255, 159, 64, 0.5)',
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 1
            },
            {
                label: '30% Dip',
                data: [200, 40, 50],
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            },
            {
                label: '40% Dip',
                data: [250, 35, 45],
                backgroundColor: 'rgba(153, 102, 255, 0.5)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1
            }
        ]
    };

    // Chart configuration
    const config = {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        font: {
                            size: 14
                        }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.dataset.label + ': ' + context.parsed.y;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Values',
                        font: {
                            size: 16
                        }
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Categories',
                        font: {
                            size: 16
                        }
                    }
                }
            }
        }
    };

    // Creating the chart
    new Chart(ctx, config);
});
