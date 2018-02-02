// https://www.hackerrank.com/challenges/drawing-book/problem// https://www.hackerrank.com/challenges/drawing-book/problem

function solve(n, p){
    const fromFront = (n, p) => {
        let pages = [0, 1];
        let turnCounter = 0;
        if (pages[0] !== p && pages[1] !== p) {
            do {
                pages = [pages[0] + 2, pages[1] + 2];
                ++turnCounter;
            }
            while (pages[0] !== p && pages[1] !== p)
        }       
        return turnCounter; 
    }
    const fromBack = (n, p) => {        
        const setPages = (pg) => pg % 2 === 0 ? [pg, pg+1] : [pg-1, pg];
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
    return [ fromFront(n, p), fromBack(n, p) ].sort((a, b) => a - b)[0];
}
