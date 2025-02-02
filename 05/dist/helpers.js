export function formatDate(date) {
    return date.getFullYear()
        + '-' +
        (date.getMonth() + '').padStart(2, '0')
        + '-' +
        (date.getDate() + '').padStart(2, '0');
}
