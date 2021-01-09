import {getLetterMatchCount} from "./index";

describe('getLetterMatchCount', ()=>{
    const secretWord = 'party'
    test('return correct count when there are no matching letter', ()=>{
        const letterMatchCount = getLetterMatchCount('bones',secretWord);
        expect(letterMatchCount).toBe(0);
    })
    test('return correct count when there are 3 letter', ()=>{
        const letterMatchCount = getLetterMatchCount('train',secretWord);
        expect(letterMatchCount).toBe(3);
    })
    test('return correct count when there are duplicate  matching letter', ()=>{
        const letterMatchCount = getLetterMatchCount('parka',secretWord);
        expect(letterMatchCount).toBe(3);
    })
})
