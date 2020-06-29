export default (date) =>{
    const d = new Date(date);
    const dtf = new Intl.DateTimeFormat("en", {
        year: "numeric",
        month: "short",
        day: "2-digit"
    });
    // console.log(date)
    const [{value : mo}, , {value: da}] = dtf.formatToParts(d);
    // console.log(dtf.formatToParts(d));
    return `${da} ${mo}`;

}