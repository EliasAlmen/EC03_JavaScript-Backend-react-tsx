// CODE BY HASSE
const currencyFormat = new Intl.NumberFormat('en-US', { currency: 'USD', style: 'currency'})

export const currencyFormatter = (value) => {
    return currencyFormat.format(value)
}

