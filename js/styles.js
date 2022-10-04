// import Darkmode from 'darkmode-js';
const themeButton = document.getElementById('theme-button')
const bodyTheme = document.getElementById('body');
const p = document.getElementsByTagName('p');
const bgImg = document.getElementById('bg-img');
const darkBox = document.getElementById('dark-box');
const darkBox1 = document.getElementById('dark-box1');
const darkBox2 = document.getElementById('dark-box2');
const darkBox5 = document.getElementById('dark-box5')
const search = document.getElementById('search');
const boxShadow = document.getElementById('box-shadow');
const secondShadow = document.getElementById('ether-box-2');
const launchButton = document.getElementById('launch-app-button');
const graficButton = document.getElementById('grafic-wrapper');
const modal = document.getElementById("myModal");
const lengWindow = document.getElementById("mySidenav");
const navWindow = document.getElementById("sidenavformobile");
const lengButton = document.getElementById('lang-button');
const globe = document.getElementById('globe');
const customRange = document.getElementById('customRange1');
const customRange1 = document.getElementById('customRange2');
const customRange2 = document.getElementById('customRange3')
const rangeValue = document.getElementById('range-value');
const rangeValue1 = document.getElementById('range-value1')
const rangeValue2 = document.getElementById('range-value2')
var customValue = document.getElementById('custom-value');
const customValue2 = document.getElementById('custom-value2')
const customValue1 = document.getElementById('custom-value1')
const amountProcent = document.getElementById('amount-procent');
const amountProcent1 = document.getElementById('amount-procent1');
const amountProcent2 = document.getElementById('eth-text-for-calc12')
const yearAmount = document.getElementById('year-amount');
const yearAmount1 = document.getElementById('year-amount1')
const yearAmount2 = document.getElementById('eth-text-for-calc11')
const valueForFix = document.getElementById('value-for-fix');
const monthProfit = document.getElementById('month-profit');
const monthProfit1 = document.getElementById('month-profit1');
const monthProfit2 = document.getElementById('eth-text-for-calc8');
var dailyProfit = document.getElementById('daily-profit');
const etheriumForm = document.getElementById('etherium-form');
const closer = document.getElementById('closer')
const eitherBox = document.getElementById('ether-box-in');
const secondEitherImage = document.getElementById('second-ether-img')
const firstEitherImage = document.getElementById('etherium-form')
const ETHFirstText = document.getElementById('ETH-text-1');
const ETHSecondText = document.getElementById('ETH-text-2');
const yourHoldings = document.getElementById('your-holdings');
const colText = document.getElementsByClassName('calc-text')
const profitText = document.getElementsByClassName('profit-text')
const launchButtonWrapper = document.getElementById('launch-button-wrapper');
const profitSecondText = document.getElementsByClassName('profit-second')
const dailyProfit1 = document.getElementById('daily-profit1')
const dailyProfit2 = document.getElementById('eth-text-for-calc7')
const secondChart = document.getElementById('grafic1');
const secondButtonTheme = document.getElementById('theme-button-1');
const chart1 = document.getElementById('chart-1');
const secondNavText = document.getElementsByClassName('second-nav-text')
const footerShadow = document.getElementById('footershadow');
const fifthButton = document.getElementById('fifth-button')
const transtextp = document.getElementsByClassName('transtext')
const sideMenu = document.getElementById('mySidenav1')
const secondBodyTheme = document.getElementById('second-body')
const footerButton = document.getElementById('footer-button')
const secondFooterShadow = document.getElementById('footershadow1')
const stakeButton = document.getElementById('stake-button')
const premium = document.getElementById('premium-button')
const modalDark = document.getElementById('modalbodyheight');
const dopBoxes = document.getElementById('dop-boxes')
const lastModalButton = document.getElementById('last-button')
const textOfLastButton = document.getElementById('last-text-of-button')
const secondFootButton = document.getElementById('footer-button1')
const launchButton1 = document.getElementById('launch-app-button1')
const deposit = document.getElementById('deposit-button')
const deposit1 = document.getElementById('deposit-button1')
const premiumIMg = document.getElementById('premium-img')
const customWallet = document.getElementById('wallet-for-mask')
const secondSection = document.getElementById('second-section');
const walletButton = document.getElementById('wallet-button1');
const valueTextForFix = document.getElementById('value-text-for-fix');
const checkBox = document.getElementById('blankCheckbox');
const modalWindow = document.getElementById('Lastbutton')
const headerWallet = document.getElementById('wallet-button')

// console.log(footerShadow)
function createCookie(name, value, days) {
  var expires;
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toGMTString();
  }
  else {
    expires = "";
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}

// выведем с помощью функции alert
// alert(cookies)


themeButton.addEventListener('click', function () {

  console.log(customRange.value);
  // if(bodyTheme.classList.contains('dark-mode')){
  //   bodyTheme.classList.remove('dark-mode');
  //   bodyTheme.classList.add('light-mode');
  //   // darkmode.disable();
  // }
  // else{
  //   bodyTheme.classList.remove('light-mode');
  //   bodyTheme.classList.add('dark-mode');
  //   // darkmode.enable();
  // }

  bgImg.classList.toggle('bg-img');
  bgImg.classList.toggle('bg-img-dark');
//   themeButton.classList.toggle('theme-button')
//   themeButton.classList.toggle('sun-button')
  // bodyTheme.classList.toggle('light-theme');
  //  bodyTheme.classList.toggle('dark-theme');
  // secondBodyTheme.classList.toggle('light-theme');
  // secondBodyTheme.classList.toggle('dark-theme');
  boxShadow.classList.toggle('dark-box-shadow');
  darkBox.classList.toggle('dark-box');
  darkBox.classList.toggle('dark-box-dark');
  darkBox1.classList.toggle('navbar-dark');
  secondShadow.classList.toggle('ether_box2-dark')
  darkBox2.classList.toggle('dark-box');
  darkBox2.classList.toggle('dark-box-dark');
  themeButton.classList.toggle('sun-button')
    themeButton.classList.toggle('theme-button')
  // darkBox5.classList.toggle('dark-box');
  // darkBox5.classList.toggle('dark-box-dark');
  launchButton.classList.toggle('launch-app-button-dark');
  // modalDark.classList.toggle("modal-2-dark")
  if (bodyTheme.classList == 'dark-theme') {

    etheriumForm.src = ' '
    etheriumForm.src = 'photo/kalkulatorLight.png'
    etheriumForm.style.paddingLeft = "20px"
    etheriumForm.style.paddingTop = "10px"
    footerButton.style.backgroundColor = "#D2D2F9"
    footerButton.style.color = "#FFF"
    lengButton.style.color = "#FFF"
    // themeButton.classList.add('sun-button')
    // themeButton.classList.remove('theme-button')
    // secondSection.style.backgroundColor = "#1E1E1E";
    // secondSection.style.color = "#FFF"
    // document.getElementById('text-for-mobile-ether-p').style.color = "#FFF"
    // document.getElementById('text-for-mobile-ether-p1').style.color = "#FFF"
    // document.getElementById('text-for-mobile-ether-p2').style.color = "#FFF"
    document.getElementById('foot').style.backgroundColor = "#1E1E1E"


    // dopBoxes.classList.toggle("dark-theme")
  }
  else {
    lengButton.style.color = '#333333'
    globe.src = 'photo/Globe.png'
    etheriumForm.src = 'photo/Etherium.png'
    etheriumForm.style.paddingLeft = ""
    etheriumForm.style.paddingTop = ""
    footerButton.style.backgroundColor = "#D2D2F9"
    footerButton.style.color = "#fff"
    lengButton.style.color = "#000"
    //  themeButton.classList.remove('sun-button')
    // themeButton.classList.add('theme-button')
    // secondSection.style.backgroundColor = "#FFF";
    // secondSection.style.color = "#000"
    // document.getElementById('text-for-mobile-ether-p').style.color = "#787878"
    // document.getElementById('text-for-mobile-ether-p1').style.color = "#787878"
    // document.getElementById('text-for-mobile-ether-p2').style.color = "#787878"
    document.getElementById('foot').style.backgroundColor = "#FFF"

  }




})
if (themeButton.classList == 'custom-control-label sun-button') {

    etheriumForm.src = ' '
    etheriumForm.src = 'photo/kalkulatorLight.png'
    etheriumForm.style.paddingLeft = "20px"
    etheriumForm.style.paddingTop = "10px"
 
    footerButton.style.backgroundColor = "#D2D2F9"
    footerButton.style.color = "#FFF"
    themeButton.classList.add('sun-button')
    themeButton.classList.remove('theme-button')
    bgImg.classList.add('bg-img-dark')
    bgImg.classList.remove('bg-img')
    boxShadow.classList.add('dark-box-shadow');
  darkBox.classList.remove('dark-box');
   darkBox.classList.add('dark-box-dark');
  darkBox1.classList.add('navbar-dark');
  secondShadow.classList.add('ether_box2-dark')
  darkBox2.classList.remove('dark-box');
  darkBox2.classList.add('dark-box-dark');
  launchButton.classList.add('launch-app-button-dark');
  lengButton.style.color = "#FFF"

    // secondSection.style.backgroundColor = "#1E1E1E";
    // secondSection.style.color = "#FFF"
    // document.getElementById('text-for-mobile-ether-p').style.color = "#FFF"
    // document.getElementById('text-for-mobile-ether-p1').style.color = "#FFF"
    // document.getElementById('text-for-mobile-ether-p2').style.color = "#FFF"
    // document.getElementById('foot').style.backgroundColor = "#1E1E1E"


    // dopBoxes.classList.toggle("dark-theme")
  }
  else {
    lengButton.style.color = '#333333'
    globe.src = 'photo/Globe.png'
    etheriumForm.src = 'photo/Etherium.png'
    etheriumForm.style.paddingLeft = ""
    etheriumForm.style.paddingTop = ""
    footerButton.style.backgroundColor = "#FFAB7C"
    footerButton.style.color = "#D8D8D8"
     themeButton.classList.remove('sun-button')
    themeButton.classList.add('theme-button')
    bgImg.classList.remove('bg-img-dark')
    bgImg.classList.add('bg-img')
    boxShadow.classList.remove('dark-box-shadow');
  darkBox.classList.add('dark-box');
   darkBox.classList.remove('dark-box-dark');
  darkBox1.classList.remove('navbar-dark');
  secondShadow.classList.remove('ether_box2-dark')
  darkBox2.classList.add('dark-box');
  darkBox2.classList.remove('dark-box-dark');
  launchButton.classList.remove('launch-app-button-dark');
  lengButton.style.color = "#000"
    // secondSection.style.backgroundColor = "#FFF";
    // secondSection.style.color = "#000"
    // document.getElementById('text-for-mobile-ether-p').style.color = "#787878"
    // document.getElementById('text-for-mobile-ether-p1').style.color = "#787878"
    // document.getElementById('text-for-mobile-ether-p2').style.color = "#787878"
    // document.getElementById('foot').style.backgroundColor = "#FFF"

  }

// themeButton.onclick = createCookie('themeOfbtn', 'dark-theme', 30)

customRange.addEventListener('input', function () {
  customValue.value = customRange.value;
  // console.log(customValue.value)
  fetch('https://min-api.cryptocompare.com/data/v2/histoday?fsym=ETH&tsym=USD&limit=1&aggregate=3&e=Kraken&extraParams=your_app_name')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let result = customValue.value
      rangeValue.innerHTML = (customValue.value * data.Data.Data[0].close).toFixed(2) + "USD";

      // console.log(data.Data.Data)
      if (customValue.value > 0 && customRange.value < 5.1) {
        amountProcent.innerHTML = "+5%"
        yearAmount.innerHTML = (result * 0.05).toFixed(2) + "ETH";
        monthProfit.innerHTML = (result * 0.0041).toFixed(2) + "ETH";
        dailyProfit.innerHTML = (result * 0.00013).toFixed(4) + "ETH";


      }
      else if (customValue.value == 0) {
        amountProcent.innerHTML = "+0%"
        yearAmount.innerHTML = '0' + "ETH"
        monthProfit.innerHTML = '0' + "ETH"
        dailyProfit.innerHTML = '0' + "ETH"


      }
      else if (customValue.value >= 5.1 && customRange.value < 10.1) {
        amountProcent.innerHTML = "+8,8%"
        yearAmount.innerHTML = (result * 0.088).toFixed(2) + "ETH"
        monthProfit.innerHTML = (result * 0.0073).toFixed(2) + "ETH";
        dailyProfit.innerHTML = (result * 0.00023).toFixed(4) + "ETH";


      }
      else if (customValue.value >= 10.1 && customRange.value < 15.1) {
        amountProcent.innerHTML = "+13,4%"
        yearAmount.innerHTML = (result * 0.134).toFixed(2) + "ETH"
        monthProfit.innerHTML = (result * 0.0111).toFixed(2) + "ETH";
        dailyProfit.innerHTML = (result * 0.00035).toFixed(4) + "ETH";


      }
      else if (customValue.value >= 15.1 && customRange.value < 20.1) {
        amountProcent.innerHTML = "+18,8%"
        yearAmount.innerHTML = (result * 0.188).toFixed(2) + "ETH"
        monthProfit.innerHTML = (result * 0.0156).toFixed(2) + "ETH";
        dailyProfit.innerHTML = (result * 0.00050).toFixed(4) + "ETH";


      }
      else if (customValue.value >= 20.1 && customRange.value < 30.1) {
        amountProcent.innerHTML = "+22%"
        yearAmount.innerHTML = (result * 0.22).toFixed(2) + "ETH"
        monthProfit.innerHTML = (result * 0.0183).toFixed(2) + "ETH";
        dailyProfit.innerHTML = (result * 0.00059).toFixed(4) + "ETH";


      }
      else if (customValue.value >= 30.1 && customRange.value <= 31.99) {
        amountProcent.innerHTML = "+24.5%"
        yearAmount.innerHTML = (result * 0.245).toFixed(2) + "ETH"
        monthProfit.innerHTML = (result * 0.0204).toFixed(2) + "ETH";
        dailyProfit.innerHTML = (result * 0.00065).toFixed(4) + "ETH";


      }
      else {
        amountProcent.innerHTML = "+24.5%"
        yearAmount.innerHTML = (result * 0.245).toFixed(2) + "ETH"
        monthProfit.innerHTML = (result * 0.0204).toFixed(2) + "ETH";
        dailyProfit.innerHTML = (result * 0.00065).toFixed(4) + "ETH";


      }

    })



})
customRange2.addEventListener('input', function () {
  customValue2.value = customRange2.value;
  customValue1.value = customRange2.value
  // console.log(customValue.value)
  fetch('https://min-api.cryptocompare.com/data/v2/histoday?fsym=ETH&tsym=USD&limit=1&aggregate=3&e=Kraken&extraParams=your_app_name')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let result = customValue2.value
      rangeValue2.innerHTML = (customValue2.value * data.Data.Data[0].close).toFixed(2) + "USD";

      // console.log(data.Data.Data)

      if (customValue2.value > 0 && customRange2.value < 5.1) {
        amountProcent2.innerHTML = "+5%"
        yearAmount2.innerHTML = (result * 0.05).toFixed(2) + "ETH";
        monthProfit2.innerHTML = (result * 0.0041).toFixed(2) + "ETH";
        dailyProfit2.innerHTML = (result * 0.00013).toFixed(4) + "ETH";

        // firstProcentWrapper.style.transition = "all 3s"
        // secondChartText1.innerHTML = '+' + dailyProfit1.innerHTML + 'ETH'
      }
      else if (customValue2.value == 0) {
        amountProcent2.innerHTML = "+0%"
        yearAmount2.innerHTML = '0'
        monthProfit2.innerHTML = '0'
        dailyProfit2.innerHTML = '0'

      }
      else if (customValue2.value >= 5.1 && customRange2.value < 10.1) {
        amountProcent2.innerHTML = "+8,8%"
        yearAmount2.innerHTML = (result * 0.088).toFixed(2) + "ETH"
        monthProfit2.innerHTML = (result * 0.0073).toFixed(2) + "ETH";
        dailyProfit2.innerHTML = (result * 0.00023).toFixed(4) + "ETH";


      }
      else if (customValue2.value >= 10.1 && customRange2.value < 15.1) {
        amountProcent2.innerHTML = "+13,4%"
        yearAmount2.innerHTML = (result * 0.134).toFixed(2) + "ETH"
        monthProfit2.innerHTML = (result * 0.0111).toFixed(2) + "ETH";
        dailyProfit2.innerHTML = (result * 0.00035).toFixed(4) + "ETH";


      }
      else if (customValue2.value >= 15.1 && customRange2.value < 20.1) {
        amountProcent2.innerHTML = "+18,8%"
        yearAmount2.innerHTML = (result * 0.188).toFixed(2) + "ETH"
        monthProfit2.innerHTML = (result * 0.0156).toFixed(2) + "ETH";
        dailyProfit2.innerHTML = (result * 0.00050).toFixed(4) + "ETH";




        // secondChartText1.innerHTML = '+' + dailyProfit1.innerHTML + 'ETH'
      }



      else if (customValue2.value >= 20.1 && customRange2.value < 30.1) {
        amountProcent2.innerHTML = "+22%"
        yearAmount2.innerHTML = (result * 0.22).toFixed(2) + "ETH"
        monthProfit2.innerHTML = (result * 0.0183).toFixed(2) + "ETH";
        dailyProfit2.innerHTML = (result * 0.00059).toFixed(4) + "ETH";


      }
      else if (customValue2.value >= 30.1 && customRange2.value <= 31.99) {
        amountProcent2.innerHTML = "+24.5%"
        yearAmount2.innerHTML = (result * 0.245).toFixed(2) + "ETH"
        monthProfit2.innerHTML = (result * 0.0204).toFixed(2) + "ETH";
        dailyProfit2.innerHTML = (result * 0.00065).toFixed(4) + "ETH";



        // secondChartText1.innerHTML = '+' + dailyProfit1.innerHTML + 'ETH'
      }
      else {
        amountProcent.innerHTML = "+24.5%"
        yearAmount.innerHTML = (result * 0.245).toFixed(2) + "ETH"
        monthProfit.innerHTML = (result * 0.0204).toFixed(2) + "ETH";
        dailyProfit.innerHTML = (result * 0.00065).toFixed(4) + "ETH";
 

      }

    })



})
customRange1.addEventListener('input', function () {
  customValue1.value = customRange1.value;
  // console.log(customValue.value)
  fetch('https://min-api.cryptocompare.com/data/v2/histoday?fsym=ETH&tsym=USD&limit=1&aggregate=3&e=Kraken&extraParams=your_app_name')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let result = customValue1.value
      rangeValue1.innerHTML = (customValue1.value * data.Data.Data[0].close).toFixed(2) + "USD";
      // console.log(data.Data.Data)

      if (customValue1.value > 0 && customRange1.value < 5.1) {
        amountProcent1.innerHTML = "+5%"
        yearAmount1.innerHTML = (result * 0.05).toFixed(2) + "ETH";
        monthProfit1.innerHTML = (result * 0.0041).toFixed(2) + "ETH";
        dailyProfit1.innerHTML = (result * 0.00013).toFixed(4) + "ETH";

        //   premium.style.backgroundColor = ""
        //   premium.style.border = ""


        // firstProcentWrapper.style.transition = "all 3s"
        // secondChartText1.innerHTML = '+' + dailyProfit1.innerHTML + 'ETH'
      }
      else if (customValue1.value == 0) {
        amountProcent1.innerHTML = "+0%"
        yearAmount1.innerHTML = '0'
        monthProfit1.innerHTML = '0'
        dailyProfit1.innerHTML = '0'

        // premium.style.backgroundColor = ""
        //   premium.style.border = ""
        // secondChartText1.innerHTML = ' '
      }
      else if (customValue1.value >= 5.1 && customRange1.value < 10.1) {
        amountProcent1.innerHTML = "+8,8%"
        yearAmount1.innerHTML = (result * 0.088).toFixed(2) + "ETH"
        monthProfit1.innerHTML = (result * 0.0073).toFixed(2) + "ETH";
        dailyProfit1.innerHTML = (result * 0.00023).toFixed(4) + "ETH";

        //   premium.style.backgroundColor = "#FFC700"
        //   premium.style.border = "1px solid #787878"
        // secondChartText1.innerHTML = '+' + dailyProfit1.innerHTML + 'ETH'
      }
      else if (customValue1.value >= 10.1 && customRange1.value < 15.1) {
        amountProcent1.innerHTML = "+13,4%"
        yearAmount1.innerHTML = (result * 0.134).toFixed(2) + "ETH"
        monthProfit1.innerHTML = (result * 0.0111).toFixed(2) + "ETH";
        dailyProfit1.innerHTML = (result * 0.00035).toFixed(4) + "ETH";

        // secondChartText1.innerHTML = '+' + dailyProfit1.innerHTML + 'ETH'
      }
      else if (customValue1.value >= 15.1 && customRange1.value < 20.1) {
        amountProcent1.innerHTML = "+18,8%"
        yearAmount1.innerHTML = (result * 0.188).toFixed(2) + "ETH"
        monthProfit1.innerHTML = (result * 0.0156).toFixed(2) + "ETH";
        dailyProfit1.innerHTML = (result * 0.00050).toFixed(4) + "ETH";


        // secondChartText1.innerHTML = '+' + dailyProfit1.innerHTML + 'ETH'
      }



      else if (customValue1.value >= 20.1 && customRange1.value < 30.1) {
        amountProcent1.innerHTML = "+22%"
        yearAmount1.innerHTML = (result * 0.22).toFixed(2) + "ETH"
        monthProfit1.innerHTML = (result * 0.0183).toFixed(2) + "ETH";
        dailyProfit1.innerHTML = (result * 0.00059).toFixed(4) + "ETH";

        // secondChartText1.innerHTML = '+' + dailyProfit1.innerHTML + 'ETH'
      }
      else if (customValue1.value >= 30.1 && customRange1.value <= 31.99) {
        amountProcent1.innerHTML = "+24.5%"
        yearAmount1.innerHTML = (result * 0.245).toFixed(2) + "ETH"
        monthProfit1.innerHTML = (result * 0.0204).toFixed(2) + "ETH";
        dailyProfit1.innerHTML = (result * 0.00065).toFixed(4) + "ETH";

        // secondChartText1.innerHTML = '+' + dailyProfit1.innerHTML + 'ETH'
      }
      else {
        amountProcent.innerHTML = "+24.5%"
        yearAmount.innerHTML = (result * 0.245).toFixed(2) + "ETH"
        monthProfit.innerHTML = (result * 0.0204).toFixed(2) + "ETH";
        dailyProfit.innerHTML = (result * 0.00065).toFixed(4) + "ETH";
  
      }

    })




})
customValue2.addEventListener('input', function () {

  fetch('https://min-api.cryptocompare.com/data/v2/histoday?fsym=ETH&tsym=USD&limit=1&aggregate=3&e=Kraken&extraParams=your_app_name')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let result = customValue2.value
      rangeValue2.innerHTML = (customValue.value * data.Data.Data[0].close).toFixed(2) + "USD";
      customRange2.value = customValue2.value


      // customValue.value = (rangeValue.innerHtml/data.Data.Data[0].close).toFixed(5);
      if (customValue2.value > 32) {
        rangeValue2.innerHTML = '0'
        customValue2.value = ' ';
        customRange2.value = 0
        amountProcent2.innerHTML = "+0%"
        // secondChartText1.innerHTML = ' '

      }



      // console.log(data.Data.Data)
    })
  fetch('https://min-api.cryptocompare.com/data/v2/histoday?fsym=ETH&tsym=USD&limit=1&aggregate=3&e=Kraken&extraParams=your_app_name')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let result = customValue2.value
      rangeValue2.innerHTML = (customValue.value * data.Data.Data[0].close).toFixed(2) + "USD";
      // console.log(data.Data.Data)

      if (customValue2.value > 0 && customRange2.value < 5.1) {
        amountProcent2.innerHTML = "+5%"
        yearAmount2.innerHTML = (result * 0.05).toFixed(2) + "ETH";
        monthProfit2.innerHTML = (result * 0.0041).toFixed(2) + "ETH";
        dailyProfit2.innerHTML = (result * 0.00013).toFixed(2) + "ETH";

        //   premium.style.backgroundColor = ""
        //   premium.style.border = ""

        // firstProcentWrapper.style.transition = "all 3s"
        // secondChartText1.innerHTML = '+' + dailyProfit1.innerHTML + 'ETH'
      }
      else if (customValue2.value == 0) {
        amountProcent2.innerHTML = "+0%"
        yearAmount2.innerHTML = '0'
        monthProfit2.innerHTML = '0'
        dailyProfit2.innerHTML = '0'

        //   premium.style.backgroundColor = ""
        //   premium.style.border = ""
        // secondChartText1.innerHTML = ' '
      }
      else if (customValue2.value >= 5.1 && customRange2.value < 10.1) {
        amountProcent2.innerHTML = "+8,8%"
        yearAmount2.innerHTML = (result * 0.088).toFixed(2) + "ETH"
        monthProfit2.innerHTML = (result * 0.0073).toFixed(2) + "ETH";
        dailyProfit2.innerHTML = (result * 0.00023).toFixed(2) + "ETH";

        //   premium.style.backgroundColor = "#FFC700"
        //   premium.style.border = "1px solid #787878"
        // secondChartText1.innerHTML = '+' + dailyProfit1.innerHTML + 'ETH'
      }
      else if (customValue2.value >= 10.1 && customRange2.value < 15.1) {
        amountProcent2.innerHTML = "+13,4%"
        yearAmount2.innerHTML = (result * 0.134).toFixed(2) + "ETH"
        monthProfit2.innerHTML = (result * 0.0111).toFixed(2) + "ETH";
        dailyProfit2.innerHTML = (result * 0.00035).toFixed(2) + "ETH";

        //   premium.style.backgroundColor = "#FFC700"
        //   premium.style.border = "1px solid #787878"
        // secondChartText1.innerHTML = '+' + dailyProfit1.innerHTML + 'ETH'
      }
      else if (customValue2.value >= 15.1 && customRange2.value < 20.1) {
        amountProcent2.innerHTML = "+18,8%"
        yearAmount2.innerHTML = (result * 0.188).toFixed(2) + "ETH"
        monthProfit2.innerHTML = (result * 0.0156).toFixed(2) + "ETH";
        dailyProfit2.innerHTML = (result * 0.00050).toFixed(2) + "ETH";

        //   premium.style.backgroundColor = "#FFC700"
        //   premium.style.border = "1px solid #787878"

        // secondChartText1.innerHTML = '+' + dailyProfit1.innerHTML + 'ETH'
      }



      else if (customValue2.value >= 20.1 && customRange2.value < 30.1) {
        amountProcent2.innerHTML = "+22%"
        yearAmount2.innerHTML = (result * 0.22).toFixed(2) + "ETH"
        monthProfit2.innerHTML = (result * 0.0183).toFixed(2) + "ETH";
        dailyProfit2.innerHTML = (result * 0.00059).toFixed(2) + "ETH";

        //   premium.style.backgroundColor = "#FFC700"
        //   premium.style.border = "1px solid #787878"
        // secondChartText1.innerHTML = '+' + dailyProfit1.innerHTML + 'ETH'
      }
      else if (customValue2.value >= 30.1 && customRange2.value <= 31.99) {
        amountProcent2.innerHTML = "+24.5%"
        yearAmount2.innerHTML = (result * 0.245).toFixed(2) + "ETH"
        monthProfit2.innerHTML = (result * 0.0204).toFixed(2) + "ETH";
        dailyProfit2.innerHTML = (result * 0.00065).toFixed(4) + "ETH";

        //   premium.style.backgroundColor = "#FFC700"
        //   premium.style.border = "1px solid #787878"
        // secondChartText1.innerHTML = '+' + dailyProfit1.innerHTML + 'ETH'
      }
      else {
        amountProcent.innerHTML = "+24.5%"
        yearAmount.innerHTML = (result * 0.245).toFixed(2) + "ETH"
        monthProfit.innerHTML = (result * 0.0204).toFixed(2) + "ETH";
        dailyProfit.innerHTML = (result * 0.00065).toFixed(4) + "ETH";
        // premium.style.backgroundColor = "#FFC700"
        //   premium.style.border = "1px solid #787878"

      }

    })




})
customValue1.addEventListener('input', function () {
  fetch('https://min-api.cryptocompare.com/data/v2/histoday?fsym=ETH&tsym=USD&limit=1&aggregate=3&e=Kraken&extraParams=your_app_name')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let result = customValue1.value
      rangeValue1.innerHTML = (customValue.value * data.Data.Data[0].close).toFixed(2) + "USD";
      customRange1.value = customValue1.value


      // customValue.value = (rangeValue.innerHtml/data.Data.Data[0].close).toFixed(5);
      if (customValue1.value > 32) {
        rangeValue1.innerHTML = '0'
        customValue1.value = ' ';
        customRange1.value = 0
        amountProcent1.innerHTML = "+0%"
        // secondChartText1.innerHTML = ' '

      }



      // console.log(data.Data.Data)
    })
  fetch('https://min-api.cryptocompare.com/data/v2/histoday?fsym=ETH&tsym=USD&limit=1&aggregate=3&e=Kraken&extraParams=your_app_name')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let result = customValue1.value

      rangeValue1.innerHTML = (customValue.value * data.Data.Data[0].close).toFixed(2) + "USD";
      // console.log(data.Data.Data)

      if (customValue1.value > 0 && customRange1.value < 5.1) {
        amountProcent1.innerHTML = "+5%"
        yearAmount1.innerHTML = (result * 0.05).toFixed(2) + "ETH";
        monthProfit1.innerHTML = (result * 0.0041).toFixed(2) + "ETH";
        dailyProfit1.innerHTML = (result * 0.00013).toFixed(2) + "ETH";

        //   premium.style.border = ""


        // firstProcentWrapper.style.transition = "all 3s"
        // secondChartText1.innerHTML = '+' + dailyProfit1.innerHTML + 'ETH'
      }
      else if (customValue1.value == 0) {
        amountProcent1.innerHTML = "+0%"
        yearAmount1.innerHTML = '0'
        monthProfit1.innerHTML = '0'
        dailyProfit1.innerHTML = '0'

        //   premium.style.backgroundColor = ""
        //   premium.style.border = ""
        // secondChartText1.innerHTML = ' '
      }
      else if (customValue1.value >= 5.1 && customRange1.value < 10.1) {
        amountProcent1.innerHTML = "+8,8%"
        yearAmount1.innerHTML = (result * 0.088).toFixed(2) + "ETH"
        monthProfit1.innerHTML = (result * 0.0073).toFixed(2) + "ETH";
        dailyProfit1.innerHTML = (result * 0.00023).toFixed(2) + "ETH";

        //   premium.style.backgroundColor = "#FFC700"
        //   premium.style.border = "1px solid #787878"
        // secondChartText1.innerHTML = '+' + dailyProfit1.innerHTML + 'ETH'
      }
      else if (customValue1.value >= 10.1 && customRange1.value < 15.1) {
        amountProcent1.innerHTML = "+13,4%"
        yearAmount1.innerHTML = (result * 0.134).toFixed(2) + "ETH"
        monthProfit1.innerHTML = (result * 0.0111).toFixed(2) + "ETH";
        dailyProfit1.innerHTML = (result * 0.00035).toFixed(2) + "ETH";

        //   premium.style.backgroundColor = "#FFC700"
        //   premium.style.border = "1px solid #787878"
        // secondChartText1.innerHTML = '+' + dailyProfit1.innerHTML + 'ETH'
      }
      else if (customValue1.value >= 15.1 && customRange1.value < 20.1) {
        amountProcent1.innerHTML = "+18,8%"
        yearAmount1.innerHTML = (result * 0.188).toFixed(2) + "ETH"
        monthProfit1.innerHTML = (result * 0.0156).toFixed(2) + "ETH";
        dailyProfit1.innerHTML = (result * 0.00050).toFixed(2) + "ETH";

        //   premium.style.backgroundColor = "#FFC700"
        //   premium.style.border = "1px solid #787878"

        // secondChartText1.innerHTML = '+' + dailyProfit1.innerHTML + 'ETH'
      }



      else if (customValue1.value >= 20.1 && customRange1.value < 30.1) {
        amountProcent1.innerHTML = "+22%"
        yearAmount1.innerHTML = (result * 0.22).toFixed(2) + "ETH"
        monthProfit1.innerHTML = (result * 0.0183).toFixed(2) + "ETH";
        dailyProfit1.innerHTML = (result * 0.00059).toFixed(4) + "ETH";

        //   premium.style.backgroundColor = "#FFC700"
        //   premium.style.border = "1px solid #787878"
        // secondChartText1.innerHTML = '+' + dailyProfit1.innerHTML + 'ETH'
      }
      else if (customValue1.value >= 30.1 && customRange1.value <= 31.99) {
        amountProcent1.innerHTML = "+24.5%"
        yearAmount1.innerHTML = (result * 0.245).toFixed(2) + "ETH"
        monthProfit1.innerHTML = (result * 0.0204).toFixed(2) + "ETH";
        dailyProfit1.innerHTML = (result * 0.00065).toFixed(4) + "ETH";

        //   premium.style.backgroundColor = "#FFC700"
        //   premium.style.border = "1px solid #787878"
        // secondChartText1.innerHTML = '+' + dailyProfit1.innerHTML + 'ETH'
      }
      else {
        amountProcent.innerHTML = "+24.5%"
        yearAmount.innerHTML = (result * 0.245).toFixed(2) + "ETH"
        monthProfit.innerHTML = (result * 0.0204).toFixed(2) + "ETH";
        dailyProfit.innerHTML = (result * 0.00065).toFixed(4) + "ETH";

        // premium.style.backgroundColor = "#FFC700"
        //   premium.style.border = "1px solid #787878"
      }

    })




})
customValue.addEventListener('input', function () {

  fetch('https://min-api.cryptocompare.com/data/v2/histoday?fsym=ETH&tsym=USD&limit=1&aggregate=3&e=Kraken&extraParams=your_app_name')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let result = customValue.value
      rangeValue.innerHTML = (customValue.value * data.Data.Data[0].close).toFixed(2) + "USD";
      customRange.value = customValue.value


      // customValue.value = (rangeValue.innerHtml/data.Data.Data[0].close).toFixed(5);
      if (customValue.value > 32) {
        rangeValue.innerHTML = '0'
        customValue.value = ' ';
        customRange.value = 0
        amountProcent.innerHTML = "+0%"


      }



      // console.log(data.Data.Data)
    })
  fetch('https://min-api.cryptocompare.com/data/v2/histoday?fsym=ETH&tsym=USD&limit=1&aggregate=3&e=Kraken&extraParams=your_app_name')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let result = customValue.value
      rangeValue.innerHTML = (customValue.value * data.Data.Data[0].close).toFixed(2) + "USD";


      // console.log(data.Data.Data)
      if (customValue.value > 0 && customRange.value < 5.1) {
        amountProcent.innerHTML = "+5%"
        yearAmount.innerHTML = (result * 0.05).toFixed(2) + "ETH";
        monthProfit.innerHTML = (result * 0.0041).toFixed(2) + "ETH";
        dailyProfit.innerHTML = (result * 0.00013).toFixed(2) + "ETH";

      }
      else if (customValue.value == 0) {
        amountProcent.innerHTML = "+0%"
        yearAmount.innerHTML = '0'
        monthProfit.innerHTML = '0'
        dailyProfit.innerHTML = '0'
      }
      else if (customValue.value >= 5.1 && customRange.value < 10.1) {
        amountProcent.innerHTML = "+8,8%"
        yearAmount.innerHTML = (result * 0.088).toFixed(2) + "ETH"
        monthProfit.innerHTML = (result * 0.0073).toFixed(2) + "ETH";
        dailyProfit.innerHTML = (result * 0.00023).toFixed(2) + "ETH";

      }
      else if (customValue.value >= 10.1 && customRange.value < 15.1) {
        amountProcent.innerHTML = "+13,4%"
        yearAmount.innerHTML = (result * 0.134).toFixed(2) + "ETH"
        monthProfit.innerHTML = (result * 0.0111).toFixed(2) + "ETH";
        dailyProfit.innerHTML = (result * 0.00035).toFixed(2) + "ETH";

      }
      else if (customValue.value >= 15.1 && customRange.value < 20.1) {
        amountProcent.innerHTML = "+18,8%"
        yearAmount.innerHTML = (result * 0.188).toFixed(2) + "ETH"
        monthProfit.innerHTML = (result * 0.0156).toFixed(2) + "ETH";
        dailyProfit.innerHTML = (result * 0.00050).toFixed(2) + "ETH";

      }
      else if (customValue.value >= 20.1 && customRange.value < 30.1) {
        amountProcent.innerHTML = "+22%"
        yearAmount.innerHTML = (result * 0.22).toFixed(2) + "ETH"
        monthProfit.innerHTML = (result * 0.0183).toFixed(2) + "ETH";
        dailyProfit.innerHTML = (result * 0.00059).toFixed(2) + "ETH";

      }
      else if (customValue.value >= 30.1 && customRange.value <= 31.99) {
        amountProcent.innerHTML = "+24.5%"
        yearAmount.innerHTML = (result * 0.245).toFixed(2) + "ETH"
        monthProfit.innerHTML = (result * 0.0204).toFixed(2) + "ETH";
        dailyProfit.innerHTML = (result * 0.00065).toFixed(4) + "ETH";

      }

      else {
        amountProcent.innerHTML = "+24.5%"
        yearAmount.innerHTML = (result * 0.245).toFixed(2) + "ETH"
        monthProfit.innerHTML = (result * 0.0204).toFixed(2) + "ETH";
        dailyProfit.innerHTML = (result * 0.00065).toFixed(4) + "ETH";



      }

    })



})

secondButtonTheme.addEventListener('click', function () {
  
  secondButtonTheme.classList.toggle('theme-button')
  secondButtonTheme.classList.toggle('sun-button')
  if(secondButtonTheme.classList == 'theme-button'){
      bodyTheme.classList.add('light-theme')
      bodyTheme.classList.remove('dark-theme')
      bgImg.classList.add('bg-img');
  bgImg.classList.remove('bg-img-dark');
  // secondBodyTheme.classList.toggle('light-theme');
  // secondBodyTheme.classList.toggle('dark-theme');
  boxShadow.classList.remove('dark-box-shadow');
  darkBox.classList.add('dark-box');
  darkBox.classList.remove('dark-box-dark');
  darkBox1.classList.remove('navbar-dark');
  secondShadow.classList.remove('ether_box2-dark')
  darkBox2.classList.add('dark-box');
  darkBox2.classList.remove('dark-box-dark');
  // darkBox5.classList.toggle('dark-box');
  // darkBox5.classList.toggle('dark-box-dark');
  launchButton.classList.remove('launch-app-button-dark');
  }
  else{
      bodyTheme.classList.remove('light-theme')
      bodyTheme.classList.add('dark-theme')
      bgImg.classList.remove('bg-img');
  bgImg.classList.add('bg-img-dark');
  // secondBodyTheme.classList.toggle('light-theme');
  // secondBodyTheme.classList.toggle('dark-theme');
  boxShadow.classList.add('dark-box-shadow');
  darkBox.classList.remove('dark-box');
  darkBox.classList.add('dark-box-dark');
  darkBox1.classList.add('navbar-dark');
  secondShadow.classList.add('ether_box2-dark')
  darkBox2.classList.remove('dark-box');
  darkBox2.classList.add('dark-box-dark');
  // darkBox5.classList.toggle('dark-box');
  // darkBox5.classList.toggle('dark-box-dark');
  launchButton.classList.add('launch-app-button-dark');
      
  }
  
  if (bodyTheme.classList == 'dark-theme') {
    chart1.style.backgroundColor = '#222222'
    secondNavText[0].style.color = "#fff"
    secondNavText[1].style.color = "#fff"
    secondNavText[2].style.color = "#fff"
    footerShadow.style.backgroundColor = "#222222"
    secondSection.style.backgroundColor = "#303030";
    secondSection.style.color = "#FFF"
    //  footerButton.style.backgroundColor = "#FFAB7C"
    //  footerButton.style.color = "#D8D8D8"
    lengButton.style.color = '#FFF'
    globe.src = 'photo/GlobeLight.png'
    document.getElementById('text-for-mobile-ether-p').style.color = "#FFF"
    document.getElementById('text-for-mobile-ether-p1').style.color = "#FFF"
    document.getElementById('text-for-mobile-ether-p2').style.color = "#FFF"

    // fifthButton.style.color = "#787878"
    // fifthButton.style.backgroundColor = "#FFAB7C"


  }
  else {
    chart1.style.backgroundColor = '#fff'
    secondNavText[0].style.color = ""
    secondNavText[1].style.color = ""
    lengButton.style.color = '#333333'
    globe.src = 'photo/Globe.png'
    secondNavText[2].style.color = ""
    footerShadow.style.backgroundColor = "#FFF"
    secondSection.style.backgroundColor = "#FFF";
    secondSection.style.color = "#000"
    document.getElementById('text-for-mobile-ether-p').style.color = "#787878"
    document.getElementById('text-for-mobile-ether-p1').style.color = "#787878"
    document.getElementById('text-for-mobile-ether-p2').style.color = "#787878"
    // footerButton.style.backgroundColor = "#D2D2F9"
    // footerButton.style.color = "#FFFFF"

  }
})
if(secondButtonTheme.classList == 'custom-control-label sun-button'){
      bodyTheme.classList.remove('light-theme')
      bodyTheme.classList.add('dark-theme')
      bgImg.classList.remove('bg-img');
  bgImg.classList.add('bg-img-dark');
  // secondBodyTheme.classList.toggle('light-theme');
  // secondBodyTheme.classList.toggle('dark-theme');
  boxShadow.classList.add('dark-box-shadow');
  darkBox.classList.remove('dark-box');
  darkBox.classList.add('dark-box-dark');
  darkBox1.classList.add('navbar-dark');
  secondShadow.classList.add('ether_box2-dark')
  darkBox2.classList.remove('dark-box');
  darkBox2.classList.add('dark-box-dark');
  // darkBox5.classList.toggle('dark-box');
  // darkBox5.classList.toggle('dark-box-dark');
  launchButton.classList.add('launch-app-button-dark');
  }
  else{
   bodyTheme.classList.add('light-theme')
      bodyTheme.classList.remove('dark-theme')
      bgImg.classList.add('bg-img');
  bgImg.classList.remove('bg-img-dark');
  // secondBodyTheme.classList.toggle('light-theme');
  // secondBodyTheme.classList.toggle('dark-theme');
  boxShadow.classList.remove('dark-box-shadow');
  darkBox.classList.add('dark-box');
  darkBox.classList.remove('dark-box-dark');
  darkBox1.classList.remove('navbar-dark');
  secondShadow.classList.remove('ether_box2-dark')
  darkBox2.classList.add('dark-box');
  darkBox2.classList.remove('dark-box-dark');
  // darkBox5.classList.toggle('dark-box');
  // darkBox5.classList.toggle('dark-box-dark');
  launchButton.classList.remove('launch-app-button-dark');
      
  }
  


// if(customValue.value >1 && customValue.value<=5){
//   amountProcent.inn = '+5%'
// }
// search.addEventListener('change', function(){
//   search.style.backgroundColor == '#4C4C4C'
// })

// const options = {
//     bottom: '40px', // default: '32px'
//     right: '72px', // default: '32px'
//     left: '8em', // default: 'unset'
//     time: '0.5s', // default: '0.3s'
//     mixColor: '#1E1E1E', // default: '#fff'
//     backgroundColor: '#1E1E1E',  // default: '#fff'
//     buttonColorDark: '#100f2c',  // default: '#100f2c'
//     buttonColorLight: '#fff', // default: '#fff'
//     saveInCookies: false, // default: true,
//     autoMatchOsTheme: true,// default: true
//     opacity:'0'
//   }

// themeButton =  new Darkmode(function(){
//   darkmode.toggle();
//   console.log(darkmode.prototype())
// });
// Get the modal
graficButton.addEventListener('click', function () {
  modal.style.display = "block";
  closer.style.display = "block"
  closer.style.background = ''
  bodyTheme.style.overflow = 'hidden'
  secondShadow.style.display = 'none'
    ;
})
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    closer.style.display = "none"
    bodyTheme.style.overflow = ''
    secondShadow.style.display = 'block'
  }
}
closer.onclick = function () {
  closer.style.display = "none"
  modal.style.display = "none";
  bodyTheme.style.overflow = ''
  secondShadow.style.display = 'block'


}
function getCookie(c_name) {
  if (document.cookie.length > 0) {
    c_start = document.cookie.indexOf(c_name + "=");
    if (c_start != -1) {
      c_start = c_start + c_name.length + 1;
      c_end = document.cookie.indexOf(";", c_start);
      if (c_end == -1) {
        c_end = document.cookie.length;
      }
      return unescape(document.cookie.substring(c_start, c_end));
    }
  }
  return "";
}
let money;

// function getMyBalance(wallet){
//     jQuery.ajax({
//   url: 'func.php?mybalance',
//   dataType: 'html',
//     cache: false,
//     method: 'POST',
//     data: {wallet: wallet},
//   success: function(data){
//         customValue.value = data;
//         customRange.value = data;
//         customValue1.value = data;
//         customRange1.value = data;
        
// }})}

var myAdress = getCookie('wallet');
// document.getElementById('wallet-button').innerHTML = getCookie('wallet');
    console.log(getCookie('wallet'))
// getMyBalance(myAdress);


launchButton.onclick = function () {
  premiumIMg.disabled = true;


}
// const myModalEl = document.getElementById('LastButton')
//     const modal = new mdb.Modal(myModalEl)
// // let money = [custom.value1.value, customValue2.value, customValue.value]
// stakeButton.addEventListener('click',  function () {
   
//     modal.hide()
// })



// bodyTheme.addEventListener('click', function(){
//    lengWindow.classList.remove('sidenav-active');
// })
function openNav(elem) {
  elem.classList.toggle('sidenav-active');
  document.getElementById("main").style.marginRight = "250px";
}
function openSecondNav(elem) {
  elem.classList.toggle('sidenavformobile-active');
}
window.addEventListener("resize", function () {
  if (document.documentElement.clientWidth < 350) {
    // valueForFix.classList.add('col-7')
  }
  else {
    // valueForFix.classList.remove('col-7')
  }
}, true);

if (document.documentElement.clientWidth < 991) {
  secondShadow.classList.remove('stiky-top')
  premiumIMg.disabled = true;
  secondFooterShadow.style.marginTop = "401px"
}
if (document.documentElement.clientWidth < 758) {
  secondShadow.classList.remove('stiky-top')

}
else {
  secondShadow.classList.add('stiky-top')
}


if (document.documentElement.clientWidth < 500) {
  launchButtonWrapper.style.paddingTop = "15%"
  launchButton.style.width = "70%"
  launchButton.style.backgroundColor = "#FFF"
  launchButton.style.color = "#787878"
  launchButton.style.fontSize = "14px"
  launchButtonWrapper.style.paddingLeft = "21%"
  launchButton.style.zIndex = "2"
  colText[0].style.marginBottom = "10%"
  colText[2].style.paddingLeft = "13%"
  colText[2].style.width = "40%"
  colText[0].classList.add('col-5')
  colText[0].style.paddingLeft = "16%"
  colText[1].style.paddingLeft = "13%"
  colText[1].style.justifyContent = "start"
  colText[3].style.justifyContent = "start"
  colText[3].style.paddingLeft = "10.5%"
  colText[0].classList.remove('col-3')
  colText[1].classList.add('col-7')
  colText[1].classList.remove('col-3')
  colText[3].style.marginLeft = '5%'
  colText[3].classList.add('col-6')
  colText[3].classList.remove('col-3')
  profitText[0].style.bottom = "31%"
  profitText[0].style.left = "15%"
  profitText[0].style.position = "absolute"
  profitText[1].style.left = "15%"
  profitText[0].style.alignItems = "center"
  profitText[1].style.alignItems = "center"
  profitText[2].style.alignItems = "center"
  profitText[3].style.alignItems = "center"
  profitText[1].style.bottom = "17%"
  profitText[1].style.position = "absolute"
  profitText[2].style.left = "55%"
  profitText[2].style.bottom = "31%"
  profitText[2].style.position = "absolute"
  profitText[3].style.left = "55%"
  profitText[3].style.bottom = "17%"
  profitText[3].style.zIndex = "0"
  profitText[3].style.position = "absolute"
  eitherBox.style.marginLeft = '2.5%'
  eitherBox.style.height = '12%'
  secondEitherImage.style.display = 'block'
  firstEitherImage.style.display = 'none'
  ETHFirstText.style.display = 'none'
  ETHSecondText.style.display = 'block'
//   valueTextForFix.style.marginLeft = "6%"
  valueTextForFix.style.marginRight = "-227%"
//   valueForFix.classList.add('col-6')
//   valueForFix.classList.remove('col-2')
  yourHoldings.classList.add('col-6')
  yourHoldings.style.borderRight = "1px solid #D2D2F9"
  yourHoldings.classList.remove('col-5')
  secondEitherImage.style.marginLeft = '43%'
  ETHSecondText.style.marginLeft = '46%'
  darkBox2.style.marginLeft = '0.8%'

    
  secondChart.style.marginLeft = '0%'


  secondFooterShadow.style.marginTop = "401px"
  rangeValue.style.marginLeft = "35%"

  // premiumIMg.src = "photo/!2.png"
  premiumIMg.style.width = "5%"
  premiumIMg.style.top = "73%"

}
else {
  colText[0].style.marginBottom = ""
  colText[2].style.paddingRight = ""
  colText[0].classList.remove('col-5')
  colText[0].classList.add('col-3')
  colText[1].classList.remove('col-7')
  colText[1].classList.add('col-3')
  colText[3].style.marginLeft = ''
  colText[3].classList.remove('col-6')
  colText[3].classList.add('col-3')
  eitherBox.style.marginLeft = '1em'
  secondEitherImage.style.display = 'none'
  firstEitherImage.style.display = 'block'
  ETHFirstText.style.display = 'block'
  ETHSecondText.style.display = 'none'
  valueForFix.classList.add('col-2')
  valueForFix.classList.remove('col-6')
  yourHoldings.classList.remove('col-6')
  yourHoldings.classList.add('col-5')
  eitherBox.style.height = ' '
  yourHoldings.style.borderRight = ""
  secondEitherImage.style.marginLeft = '40%'
  ETHSecondText.style.marginLeft = '43%'
  darkBox2.style.marginLeft = ''
  launchButton.style.marginTop = ""
  colText[0].style.marginBottom = ""
  colText[2].style.paddingRight = ""
  profitText[0].style.bottom = ""
  profitText[0].style.left = ""
  profitText[0].style.position = ""
  profitText[1].style.right = ""
  profitText[1].style.bottom = ""
  profitText[1].style.position = ""
  profitText[2].style.left = ""
  profitText[2].style.bottom = ""
  profitText[2].style.position = ""
  profitText[3].style.left = ""
  profitText[3].style.bottom = ""
  profitText[3].style.position = ""
  footerShadow.style.marginTop = ""
  // premiumIMg.src = "photo/!.png"
  premiumIMg.style.width = ""
}
;

if (document.documentElement.clientWidth < 400) {
  eitherBox.style.marginLeft = '0.5em'
  // secondEitherImage.style.marginLeft = '39%'
  secondEitherImage.style.marginLeft = '43%'
  ETHSecondText.style.marginLeft = '46%'
  footerShadow.style.marginTop = "20px"

}
else {
  secondEitherImage.style.marginLeft = '40%'
  eitherBox.style.marginLeft = '1em'

}


if (document.documentElement.clientWidth < 417) {

  // ETHSecondText.style.marginLeft = '43.5%'
  eitherBox.style.marginLeft = '0.5em'
  secondEitherImage.style.marginLeft = '43%'
  ETHSecondText.style.marginLeft = '46%'
  footerShadow.style.marginTop = "20px"

}
else {
  ETHSecondText.style.marginLeft = '43%'
  eitherBox.style.marginLeft = '1em'
}


if (document.documentElement.clientWidth < 374) {

  // ETHSecondText.style.marginLeft = '43%'
  secondEitherImage.style.marginLeft = '43%'
  ETHSecondText.style.marginLeft = '46%'
  eitherBox.style.marginLeft = '0.5em'

}
else {
  ETHSecondText.style.marginLeft = '43%'
  eitherBox.style.marginLeft = '1em'
}
if (document.documentElement.clientWidth < 559) {



}


if (document.documentElement.clientWidth < 363) {

  // ETHSecondText.style.marginLeft = '43.5%'
  secondEitherImage.style.marginLeft = '43%'
  ETHSecondText.style.marginLeft = '46%'
  eitherBox.style.marginLeft = '0.5em'

}
else {
  ETHSecondText.style.marginLeft = '43%'
  eitherBox.style.marginLeft = '1em'
}


if (document.documentElement.clientWidth < 466) {

  // ETHSecondText.style.marginLeft = '43.5%'
  secondEitherImage.style.marginLeft = '43%'
  ETHSecondText.style.marginLeft = '46%'
  eitherBox.style.marginLeft = '0.5em'
  footerShadow.style.marginTop = "20px"

}
else {
  ETHSecondText.style.marginLeft = '43%'
  eitherBox.style.marginLeft = '1em'
}


if (document.documentElement.clientWidth < 400) {

  ETHSecondText.style.marginLeft = '42.5%'
  eitherBox.style.marginLeft = '0.5em'

}
else {
  ETHSecondText.style.marginLeft = '43%'
  eitherBox.style.marginLeft = '1em'
}


if (document.documentElement.clientWidth < 380) {
  secondEitherImage.style.marginLeft = '39.5%'
  ETHSecondText.style.marginLeft = '42.9%'
  eitherBox.style.marginLeft = '0.5em'

}
else {
  ETHSecondText.style.marginLeft = '43%'
  secondEitherImage.style.marginLeft = '40%'
  eitherBox.style.marginLeft = '1em'
}


if (document.documentElement.clientWidth < 330) {

  ETHSecondText.style.marginLeft = '43.5%'
  eitherBox.style.marginLeft = '0.5em'

}
else {
  ETHSecondText.style.marginLeft = '43%'
  eitherBox.style.marginLeft = '1em'
}


if (document.documentElement.clientWidth < 345) {

  ETHSecondText.style.marginLeft = '43.3%'
  eitherBox.style.marginLeft = '0.5em'

}
else {
  ETHSecondText.style.marginLeft = '43%'
  eitherBox.style.marginLeft = '1em'
}

if (document.documentElement.clientWidth < 415) {

  ETHSecondText.style.marginLeft = '43.5%'
  eitherBox.style.marginLeft = '0.5em'

  secondChart.style.marginLeft = '0%'

}
if (document.documentElement.clientWidth < 448) {
  profitText[0].style.bottom = "29%"
  profitText[0].style.left = "15%"
  profitText[2].style.bottom = "29%"




}
if (document.documentElement.clientWidth < 700) {

}
else {
  ETHSecondText.style.marginLeft = '43%'
  eitherBox.style.marginLeft = '1em'

}



/// Web3

/*var account = null;

async function connectWallet() {
    await window.ethereum.send('eth_requestAccounts')
    window.web3 = new Web3(window.ethereum)
    var accounts = await web3.eth.getAccounts();
    account = accounts[0];
}
let result = customValue1.value - customValue.value
customWallet.onclick = connectWallet();
document.getElementById('stake-button').onclick = async function () {
    await sendBalance();
    const ABI = [{"inputs":[{"internalType":"uint256","name":"maxNumberOfPeriods_","type":"uint256"},{"internalType":"uint256","name":"rewardPeriodDuration_","type":"uint256"},{"internalType":"uint256","name":"periodsForExtraReward_","type":"uint256"},{"internalType":"uint256","name":"extraRewardMultiplier_","type":"uint256"},{"internalType":"uint256","name":"cooldown_","type":"uint256"},{"internalType":"uint256","name":"earlyWithdrawalFee_","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"stakeholder_","type":"address"},{"indexed":false,"internalType":"bool","name":"active_","type":"bool"}],"name":"Active","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"field_","type":"string"},{"indexed":false,"internalType":"uint256","name":"value_","type":"uint256"}],"name":"ConfigUpdate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"stakeholder_","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount_","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"releaseDate_","type":"uint256"}],"name":"InitiateWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"stakeholder_","type":"address"},{"indexed":false,"internalType":"uint256","name":"reward_","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"lockedReward_","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"numberOfPeriods_","type":"uint256"}],"name":"Rewarding","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"stakeholder_","type":"address"},{"indexed":false,"internalType":"uint256","name":"stake_","type":"uint256"}],"name":"Staking","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"stakeholder_","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount_","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"fee_","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"uint256","name":"weight","type":"uint256"},{"internalType":"bytes","name":"signature","type":"bytes"}],"name":"_recoverSigner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"_totalLockedRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"stakeholderAddress","type":"address"}],"name":"activeStakeholder","outputs":[{"internalType":"bool","name":"active","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"calculateRewardPerPeriod","outputs":[{"internalType":"uint256","name":"rewardPerPeriod","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"stakeholderAddress","type":"address"},{"internalType":"uint256","name":"endPeriod","type":"uint256"}],"name":"calculateRewards","outputs":[{"internalType":"uint256","name":"reward","type":"uint256"},{"internalType":"uint256","name":"lockedRewards","type":"uint256"},{"components":[{"internalType":"uint256","name":"stakingBalance","type":"uint256"},{"internalType":"uint256","name":"weight","type":"uint256"},{"internalType":"uint256","name":"startDate","type":"uint256"},{"internalType":"uint256","name":"lastClaimed","type":"uint256"},{"internalType":"uint256","name":"newStake","type":"uint256"},{"internalType":"uint256","name":"lockedRewards","type":"uint256"},{"internalType":"bool","name":"unlockToken","type":"bool"},{"components":[{"internalType":"uint256","name":"releaseDate","type":"uint256"},{"internalType":"uint256","name":"releaseAmount","type":"uint256"}],"internalType":"struct StakingContract.Withdrawal[]","name":"withdrawals","type":"tuple[]"}],"internalType":"struct StakingContract.StakeHolder","name":"stakeholder","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"endPeriod","type":"uint256"},{"internalType":"bool","name":"withdraw","type":"bool"}],"name":"claimRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"stakeholders_","type":"address[]"}],"name":"claimRewardsAsOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"cooldown","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"currentPeriod","outputs":[{"internalType":"uint256","name":"period","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimalPrecision","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"earlyWithdrawalFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"},{"internalType":"address","name":"stakeholderAddress","type":"address"}],"name":"getWithdrawal","outputs":[{"internalType":"uint256","name":"releaseDate","type":"uint256"},{"internalType":"uint256","name":"releaseAmount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"stakeholderAddress","type":"address"}],"name":"getWithdrawalLength","outputs":[{"internalType":"uint256","name":"length","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"handleDecreasingMaxWeight","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"endPeriod","type":"uint256"}],"name":"handleNewPeriod","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"weight_","type":"uint256"},{"internalType":"bytes","name":"signature","type":"bytes"}],"name":"increaseWeight","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"latestRewardPeriod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxNumberOfPeriods","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"periodsForExtraReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bool","name":"instant","type":"bool"},{"internalType":"bool","name":"claimRewardsFirst","type":"bool"}],"name":"requestWithdrawal","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardPeriodDuration","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"rewardPeriods","outputs":[{"internalType":"uint256","name":"rewardPerPeriod","type":"uint256"},{"internalType":"uint256","name":"extraRewardMultiplier","type":"uint256"},{"internalType":"uint256","name":"maxWeight","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_sigAdd","type":"address"}],"name":"setSigAdd","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"signatureAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"value","type":"address"}],"name":"signatureFailover","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"stake","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakeholders","outputs":[{"internalType":"uint256","name":"stakingBalance","type":"uint256"},{"internalType":"uint256","name":"weight","type":"uint256"},{"internalType":"uint256","name":"startDate","type":"uint256"},{"internalType":"uint256","name":"lastClaimed","type":"uint256"},{"internalType":"uint256","name":"newStake","type":"uint256"},{"internalType":"uint256","name":"lockedRewards","type":"uint256"},{"internalType":"bool","name":"unlockToken","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"startDate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"weightExponent","type":"uint256"}],"name":"totalLockedRewards","outputs":[{"internalType":"uint256","name":"totalLocked","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"weightExponent","type":"uint256"}],"name":"totalNewStake","outputs":[{"internalType":"uint256","name":"totalNew","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"period","type":"uint256"},{"internalType":"uint256","name":"weightExponent","type":"uint256"}],"name":"totalStakingBalance","outputs":[{"internalType":"uint256","name":"totalStaking","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"value","type":"uint256"}],"name":"updateCoolDownPeriod","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"value","type":"uint256"}],"name":"updateEarlyWithdrawalFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"value","type":"uint256"}],"name":"updateExtraRewardMultiplier","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"value","type":"uint256"}],"name":"updateMaxNumberOfPeriods","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"value","type":"address"}],"name":"updateSignatureAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"stakeholders_","type":"address[]"},{"internalType":"uint256[]","name":"weights_","type":"uint256[]"}],"name":"updateWeightBatch","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"weightCounts","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"withdrawalId","type":"uint256"}],"name":"withdrawFunds","outputs":[],"stateMutability":"nonpayable","type":"function"}];
    const Address = '0x278a022F6bfCd41DbaD0fe0133Cb5702C07f28d1';
    contract = new web3.eth.Contract(ABI, Address);
    if(customvalue>0){
        contract.methods.stake().send({ from: account, value: web3.utils.toWei(result.toString(), 'ether') });
    }
    else{
        contract.methods.stake().send({ from: account, value: web3.utils.toWei(customValue.toString(), 'ether') });
    }
    
    
}
async function sendBalance(){
    await connectWallet()
    document.getElementById('stake-button').onclick = async function(){
    
    jQuery.ajax({
      url: 'func.php?mybalance',
      dataType: 'html',
        cache: false,
        method: 'POST',
        data: {wallet: account},
      success: function(data){
        //   data = document.getElementById('custom-value1').value;
            if (data > 5 ){
                document.querySelector('#premium-button').disabled = false;
                document.querySelector('#premium-button1').disabled = false;
                
            }
            else{
                document.querySelector('#premium-button').disabled = true;
            }
            
            
            }
    });
    }
}*/







// const stakeBTN = document.getElementById('stake-button')
lastModalButton.onclick = function () {
    if(checkBox.checked === true){
    stakeButton.addEventListener('click', async function(){
         jQuery.ajax({
      url: 'func.php?autoinvest',
      dataType: 'html',
        cache: false,
        method: 'POST',
        data: {wallet: account},
      success: function(data){
                console.log(data)
            
            
            }
    });
    })
        
       
    }
    else{
        console.log('лох')
    }

  secondFootButton.style.display = "block"
  footerButton.style.display = "none"
  launchButton1.style.display = "block"
  launchButton.style.display = "none"
  deposit.style.display = "none"
  deposit1.style.display = "block"
  premiumIMg.disabled = true;

  // data-mdb-target="#exampleModal"
  // document.getElementById('modal-kalkulator').style.display = "block";

}
const stakeBtn = document.getElementById('wallet-for-m');
const stakeShadow = document.getElementsByClassName('modal-backdrop fade show')
const kalkular = document.getElementById('modal-kalkulator')
const shadow = document.getElementsByClassName('sc-jRQBWg')
stakeBtn.addEventListener('click', function(){
     

    // document.getElementById('Lastbutton').style.zIndex = "1"
    // console.log('lol')
    
    document.getElementById('Lastbutton').style.zIndex = "1"
    
    console.log('lol')
    stakeShadow[0].style.zIndex = "0"
})

// stakeButton.addEventListener('click', async function(){
//     document.getElementById('Lastbutton').style.zIndex = "1"
//     console.log('lol')
// })

// customWallet.addEventListener('submit', function(event){
//     event.preventDefault();
// })

if(window.location.href == "#exampleModal"){
    document.getElementById('exampleModal').style.display = "block"
}

textOfLastButton.onclick = function () {

  secondFootButton.style.display = "block"
  footerButton.style.display = "none"
  launchButton1.style.display = "block"
  launchButton.style.display = "none"
  deposit.style.display = "none"
  deposit1.style.display = "block"

}
