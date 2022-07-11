// Code your solution here
function findMatching(driver, string){
    return driver.filter(driver => driver.toLowerCase() === string.toLowerCase())
}
function fuzzyMatch(driver, string){
    return driver.filter(driver => driver.toLowerCase().substring(0, string.length) === string.toLowerCase())
}
function matchName(driver, hometown){
    return driver.filter(driver => driver.name === hometown)
}