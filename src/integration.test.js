import { storeFactory } from '../test/testUtil';
import { guessWord } from './actions/index';

describe('guessWord action dispatcher', () => {
    const secretWord = 'party';
    const unSuccessfulGuess = "train"
    describe('no guessed words', () => {
        let store;
        const initialState = { secretWord };
        beforeEach(() => {
            store = storeFactory(initialState)
        })
        test('update state correctly for unsuccessfull guess', () => {
            store.dispatch(guessWord(unSuccessfulGuess));
            const newState = store.getState()
            const expectedState = {
                ...initialState,
                success: false,
                guessedWords: [{
                    guessedWord: unSuccessfulGuess,
                    letterMatchCount: 3
                }]
            }

            expect(newState).toEqual(expectedState)
        })
        test('update state correctly for successfull guess', () => {
            store.dispatch(guessWord(secretWord));
            const newState = store.getState()
            const expectedState = {
                secretWord,
                success: true,
                guessedWords: [{
                    guessedWord: secretWord,
                    letterMatchCount: 5
                }]
            }

            expect(newState).toEqual(expectedState)

        })
    })
    describe('some guessed words', () => {
        const guessedWords = [{ guessedWord: 'agile', letterMatchCount: '1' }];
        const initialState = { guessedWords, secretWord }
        let store;
        beforeEach(() => {
            store = storeFactory(initialState)
        })
        test('update state correctly for unsuccessfull guess', () => {
            store.dispatch(guessWord(unSuccessfulGuess));
            const newState = store.getState()
            const expectedState = {
                secretWord,
                success: false,
                guessedWords: [...guessedWords, {guessedWord:unSuccessfulGuess, letterMatchCount:3}]
            }
            expect(newState).toEqual(expectedState)
        })
        test('update state correctly for successfull guess', () => {
            store.dispatch(guessWord(secretWord));
            const newState = store.getState()
            const expectedState = {
                secretWord,
                success: true,
                guessedWords: [...guessedWords, {guessedWord:secretWord, letterMatchCount:5}]
            }
            expect(newState).toEqual(expectedState)
        })
    })
})