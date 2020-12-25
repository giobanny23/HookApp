import React from 'react';
import { shallow } from 'enzyme';
import { HookApp } from '../HookApp';


describe('Pruebas en <HookApp>', () => {
    
    
    test('Debe mostrarse Correctamente', () => {

        const wrapper = shallow(<HookApp/>)
        expect( wrapper).toMatchSnapshot();
        
    })
    
})
