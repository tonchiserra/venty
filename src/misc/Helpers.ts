export const formatMoney = (amount: number): string => {
    return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(amount).replace(',00', '')
}