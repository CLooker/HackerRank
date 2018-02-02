// https://www.hackerrank.com/challenges/sock-merchant/problem

function solve(n, p){
    let fromFront = () => {
        let pages = [0, 1];
        let turnCounter = 0;
        if (pages[0] !== p && pages[1] !== p) {
            do {
                pages = [pages[0] + 2, pages[1] + 2];
                turnCounter = turnCounter + 1;
            }
            while (pages[0] !== p && pages[1] !== p)
        }       
        return turnCounter; 
    }
    let fromBack = () => {        
        let setPages = (pg) => pg % 2 === 0 ? [pg, pg+1] : [pg-1, pg];
        let pages = setPages(n);
        let turnCounter = 0;
        if (pages[0] !== p && pages[1] !== p) {
            do {
                pages = setPages(pages[1] - 2);
                turnCounter = turnCounter + 1;
            }
            while (pages[0] !== p && pages[1] !== p)
        }       
        return turnCounter;        
    }
    return [ fromFront(), fromBack() ]
        .sort((a, b) => a - b)[0];
}
