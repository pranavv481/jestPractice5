import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from "../test/testUtil";
import GuessedWords from "./GuessedWords";

const defaultProps = {
    guessedWords: [
        { guessedWord: 'train', letterMatchCount: 3 },

    ]
}

const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props }
    return shallow(<GuessedWords {...setupProps} />)
}

test('does not throw any warning with expected props', () => {
    checkProps(GuessedWords, defaultProps)
})

describe('if there are no words guesses', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup({ guessedWords: [] })
    })
    test('render without error', () => {
        const component = findByTestAttr(wrapper, 'component-guessed-words')
        expect(component.length).toBe(1)
    })

    test('render instruction to guessed a word', () => {
        const instructions = findByTestAttr(wrapper, 'guess-instructions')
        expect(instructions.text()).not.toBe(0)
    })
})

describe('If there are words guessed', () => {
    let wrapper;
    const guessedWords= [
        { guessedWord: 'train', letterMatchCount: 3 },
        { guessedWord: 'agile', letterMatchCount: 1 },
        { guessedWord: 'party', letterMatchCount: 5 }
    ]
    beforeEach(() => {
        wrapper = setup({ guessedWords })
    })
    test('render without error', () => {
        const component = findByTestAttr(wrapper, 'component-guessed-words')
        expect(component.length).toBe(1)
    })


    test('renders guessed words section', () => {
        const guessedWordsNode = findByTestAttr(wrapper, 'guessed-words')
        expect(guessedWordsNode.length).toBe(1)
    })
    test('correct number of guessed words', () => {
        const guessedWordNodes = findByTestAttr(wrapper, 'guessed-word')
        expect(guessedWordNodes.length).toBe(guessedWords.length)
    })
})



