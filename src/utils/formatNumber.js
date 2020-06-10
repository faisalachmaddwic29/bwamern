export default (number) =>{
    const formatNumbering = new Intl.NumberFormat("id-ID");
    return formatNumbering.format(number)
}

// Bisa menggunakan package react-number-format