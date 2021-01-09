import React from 'react';
import {findByTestAttr, checkProps} from "../test/testUtil";
import  {shallow} from 'enzyme';

import Congrats from './Congrats';



const defaultProps = {success:false}

const setup = (props={})=>{
    const setupProps = {...defaultProps, ...props}
    return shallow(<Congrats {...setupProps} />)
}

test('render without error',()=>{
    const wrapper = setup({success:false});
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.length).toBe(1)
})

test('render no text when success prop is false', ()=>{
    const wrapper = setup({success:false});
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.text()).toBe("")
})

test('render with text message when success props is true', ()=>{
    const wrapper = setup({success:true});
    const component = findByTestAttr(wrapper, 'congrats-message');
    expect(component.text().length).not.toBe(0)
})

test('doesnot throw warning with expected props', ()=>{
    const expectedProps = {success:false};
    checkProps(Congrats, expectedProps)
}) 