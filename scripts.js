const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')

const dollar = 5.2
const euro = 5.2
const bitcoin = 0.0000090

const convertValues = () => {
    const inputReais = document.getElementById('input-real').value
    const realValueText = document.getElementById('real-value-text') 
    const currencyValueText = document.getElementById('currency-value-text')

      // Abaixo temos uma biblioteca que formata o numero do valor(dinheiro) para a moeda escolhida!! 
        realValueText.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(inputReais)

  
        if (select.value === 'US$ Dólar Americano') {
            currencyValueText.innerHTML = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
            }).format(inputReais / dollar)
        }
      

        if (select.value === '€ Euro') {
            currencyValueText.innerHTML = new Intl.NumberFormat('de-DE', {
                style: 'currency',
                currency: 'EUR',
            }).format(inputReais / euro)
        }
        if (select.value === '₿ Bitcoin') {
            currencyValueText.innerHTML = new Intl.NumberFormat('de-DE', {
                style: 'currency',
                currency: 'BTC',
            }).format(inputReais * bitcoin)
        }
}

currencyChange = () => {
    const currencyName = document.getElementById('currency-name')
    const currencyImg = document.getElementById('currency-img')

    if (select.value === '€ Euro') {
        currencyName.innerHTML = 'Euro'
        currencyImg.src = './assets/Euro.png' 
    }
    if (select.value === 'US$ Dólar Americano') {
        currencyName.innerHTML = 'Dólar Americano'
        currencyImg.src = './assets/Usa.png'
    }
    if (select.value === '₿ Bitcoin') {
        currencyName.innerHTML = 'Bitcoin'
        currencyImg.src = './assets/btc.png'
    }
    convertValues()

}


button.addEventListener('click', convertValues)
select.addEventListener('change', currencyChange)

