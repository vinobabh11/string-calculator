export function add(numbers) {
    if (!numbers) return 0;
    let delimiter = /,|\n/;
    
    const numArray = numbers.split(delimiter).map(Number);
    return numArray.reduce((sum, num) => sum + (isNaN(num) ? 0 : num), 0);

}