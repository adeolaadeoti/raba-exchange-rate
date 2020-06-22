import './sass/main.scss';

// animation
const loader = document.querySelector('.loading-box');

const tl = gsap.timeline();
tl
    .to('.loading-2', 4, {
             width: '100%',
             ease: 'Expo.easeInOut',
             onComplete: () => {
                loader.style.opacity = 0
             }
    })
    .to('.p', {
        yPercent: -80,
        opacity: 0
    })
    .to('.preloader', {
        height: '0vh',
        ease: "slow(0.7, 0.7, false)"
    })
    .from('.nav', {
        xPercent: -20,
        opacity: 0,
        ease: 'Power3.out',

    })
    .from('.hero__heading, .hero__rates', {
        yPercent: 20,
        opacity: 0,
        ease: 'Power3.out',

    })
    .from('.converter', {
        yPercent: 10,
        opacity: 0,
        ease: 'Power3.out',

    })


// live date
let objToday = new Date(),
    domEnder = new Array( 'th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th' ),
    dayOfMonth = (objToday.getDate() < 10) ? '0' + objToday.getDate() + domEnder[objToday.getDate()] : objToday.getDate() + domEnder[parseFloat(("" + objToday.getDate()).substr(("" + objToday.getDate()).length - 1))],
    months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'),
    curMonth = months[objToday.getMonth()],
    curYear = objToday.getFullYear();

    document.querySelector('.date').textContent = `${dayOfMonth} ${curMonth} ${curYear}`;


// coverter functionality
let currencyOne = document.getElementById('currency-one');
let currencyTwo = document.getElementById('currency-two');
const num = document.getElementById('num');
const amount = document.getElementById('amount');

const rateEL = document.getElementById('rate');
const swap = document.getElementById('swap');

// Fetch exchange rates and update the DOM
function calculate() {
    const curOne = currencyOne.value;
    const curTwo = currencyTwo.value;

    fetch(`https://cors-anywhere.herokuapp.com/https://api.exchangerate-api.com/v4/latest/${curOne}`)
        .then(res => res.json())
        .then(data => {
            const rate = data.rates[curTwo];
            rateEL.innerText = `1 ${curOne} = ${rate} ${curTwo}`;
            amount.innerText = num.value * rate.toFixed(2);
    });
}

currencyOne.addEventListener('change', calculate);
currencyTwo.addEventListener('change', calculate);
num.addEventListener('input', calculate);

swap.addEventListener('click', () => {
    const temp = currencyOne.value;
    currencyOne.value = currencyTwo.value;
    currencyTwo.value = temp;
    calculate();
  });
calculate();


// live rates
function liveRate() {
    const base = 'USD';
    fetch(`https://cors-anywhere.herokuapp.com/https://api.exchangerate-api.com/v4/latest/${base}`)
        .then(res => res.json())
        .then(data => {

        const tableWrapper = document.querySelector('.table-wrapper')
        tableWrapper.innerHTML = `
            <table>
                <tr>
                    <th>currency code</th>
                    <th>currency Rate</th>
                </tr>
                <tr>
                    <td class="code">AED</td>
                    <td>${data.rates['AED']}</td>
                </tr>
                <tr>
                    <td class="code">ARS</td>
                    <td>${data.rates['ARS']}</td>
                </tr>
                <tr>
                    <td class="code">AUD</td>
                    <td>${data.rates['AUD']}</td>
                </tr>
                <tr>
                    <td class="code">BGN</td>
                    <td>${data.rates['BGN']}</td>
                </tr>
                <tr>
                    <td class="code">BRL</td>
                    <td>${data.rates['BRL']}</td>
                </tr>
                <tr>
                    <td class="code">BSD</td>
                    <td>${data.rates['BSD']}</td>
                </tr>
            </table>
            <table>
                <tr>
                    <th>currency code</th>
                    <th>currency Rate</th>
                </tr>
                <tr>
                    <td class="code">CAD</td>
                    <td>${data.rates['CAD']}</td>
                </tr>
                <tr>
                    <td class="code">CHF</td>
                    <td>${data.rates['CHF']}</td>
                </tr>
                <tr>
                    <td class="code">CLP</td>
                    <td>${data.rates['CLP']}</td>
                </tr>
                <tr>
                    <td class="code">CNY</td>
                    <td>${data.rates['CNY']}</td>
                </tr>
                <tr>
                    <td class="code">COP</td>
                    <td>${data.rates['COP']}</td>
                </tr>
                <tr>
                    <td class="code">CZK</td>
                    <td>${data.rates['CZK']}</td>
                </tr>
            </table>
            <table>
                <tr>
                    <th>currency code</th>
                    <th>currency Rate</th>
                </tr>
                <tr>
                    <td class="code">DKK</td>
                    <td>${data.rates['DKK']}</td>
                </tr>
                <tr>
                    <td class="code">DOP</td>
                    <td>${data.rates['DOP']}</td>
                </tr>
                <tr>
                    <td class="code">EGP</td>
                    <td>${data.rates['EGP']}</td>
                </tr>
                <tr>
                    <td class="code">EUR</td>
                    <td>${data.rates['EUR']}</td>
                </tr>
                <tr>
                    <td class="code">FJD</td>
                    <td>${data.rates['FJD']}</td>
                </tr>
                <tr>
                    <td class="code">GBP</td>
                    <td>${data.rates['GBP']}</td>
                </tr>
            </table>
            <table>
                <tr>
                    <th>currency code</th>
                    <th>currency Rate</th>
                </tr>
                <tr>
                    <td class="code">GTQ</td>
                    <td>${data.rates['GTQ']}</td>
                </tr>
                <tr>
                    <td class="code">HKD</td>
                    <td>${data.rates['HKD']}</td>
                </tr>
                <tr>
                    <td class="code">HRK</td>
                    <td>${data.rates['HRK']}</td>
                </tr>
                <tr>
                    <td class="code">HUF</td>
                    <td>${data.rates['HUF']}</td>
                </tr>
                <tr>
                    <td class="code">IDR</td>
                    <td>${data.rates['IDR']}</td>
                </tr>
                <tr>
                    <td class="code">ILS</td>
                    <td>${data.rates['ILS']}</td>
                </tr>
            </table>
            <table>
                <tr>
                    <th>currency code</th>
                    <th>currency Rate</th>
                </tr>
                <tr>
                    <td class="code">INR</td>
                    <td>${data.rates['INR']}</td>
                </tr>
                <tr>
                    <td class="code">ISK</td>
                    <td>${data.rates['ISK']}</td>
                </tr>
                <tr>
                    <td class="code">JPY</td>
                    <td>${data.rates['JPY']}</td>
                </tr>
                <tr>
                    <td class="code">KRW</td>
                    <td>${data.rates['KRW']}</td>
                </tr>
                <tr>
                    <td class="code">KZT</td>
                    <td>${data.rates['KZT']}</td>
                </tr>
                <tr>
                    <td class="code">MXN</td>
                    <td>${data.rates['MXN']}</td>
                </tr>
            </table>
            <table>
                <tr>
                    <th>currency code</th>
                    <th>currency Rate</th>
                </tr>
                <tr>
                    <td class="code">MYR</td>
                    <td>${data.rates['MYR']}</td>
                </tr>
                <tr>
                    <td class="code">NOK</td>
                    <td>${data.rates['NOK']}</td>
                </tr>
                <tr>
                    <td class="code">NZD</td>
                    <td>${data.rates['NZD']}</td>
                </tr>
                <tr>
                    <td class="code">PAB</td>
                    <td>${data.rates['PAB']}</td>
                </tr>
                <tr>
                    <td class="code">PEN</td>
                    <td>${data.rates['PEN']}</td>
                </tr>
                <tr>
                    <td class="code">PHP</td>
                    <td>${data.rates['PHP']}</td>
                </tr>
            </table>
            <table>
                <tr>
                    <th>currency code</th>
                    <th>currency Rate</th>
                </tr>
                <tr>
                    <td class="code">PKR</td>
                    <td>${data.rates['PKR']}</td>
                </tr>
                <tr>
                    <td class="code">PLN</td>
                    <td>${data.rates['PLN']}</td>
                </tr>
                <tr>
                    <td class="code">PYG</td>
                    <td>${data.rates['PYG']}</td>
                </tr>
                <tr>
                    <td class="code">RON</td>
                    <td>${data.rates['RON']}</td>
                </tr>
                <tr>
                    <td class="code">RUB</td>
                    <td>${data.rates['RUB']}</td>
                </tr>
                <tr>
                    <td class="code">SAR</td>
                    <td>${data.rates['SAR']}</td>
                </tr>
            </table>
            <table>
                <tr>
                    <th>currency code</th>
                    <th>currency Rate</th>
                </tr>
                <tr>
                    <td class="code">SEK</td>
                    <td>${data.rates['SEK']}</td>
                </tr>
                <tr>
                    <td class="code">SGD</td>
                    <td>${data.rates['SGD']}</td>
                </tr>
                <tr>
                    <td class="code">THB</td>
                    <td>${data.rates['THB']}</td>
                </tr>
                <tr>
                    <td class="code">TRY</td>
                    <td>${data.rates['TRY']}</td>
                </tr>
                <tr>
                    <td class="code">TWD</td>
                    <td>${data.rates['TWD']}</td>
                </tr>
                <tr>
                    <td class="code">UAH</td>
                    <td>${data.rates['UAH']}</td>
                </tr>
            </table>
            <table>
                <tr>
                    <th>currency code</th>
                    <th>currency Rate</th>
                </tr>
                <tr>
                    <td class="code">UYU</td>
                    <td>${data.rates['UYU']}</td>
                </tr>
                <tr>
                    <td class="code">ZAR</td>
                    <td>${data.rates['ZAR']}</td>
                </tr>
            </table>
        `;
    });
}

liveRate()




