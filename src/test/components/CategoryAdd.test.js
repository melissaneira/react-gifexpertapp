import { shallow } from "enzyme"
import CategoryAdd from "../../components/CategoryAdd";
import '@testing-library/jest-dom';


describe('Pruebas en <CategoryAdd />', () => { 
    const setCategories = jest.fn();
    let wrapper;
    beforeEach(()=>{
        jest.clearAllMocks();
        wrapper = shallow(<CategoryAdd setCategories={setCategories}/>);        
    });

    test('Debe rederizar el componente CategoryAdd', () => {         
        expect(wrapper).toMatchSnapshot();        
    })    

    test('debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola Mundo';
        input.simulate('change', {target : {value}});
        const p = wrapper.find('p');
        expect(p.text()).toBe(value);
     })

     test('no debe de postear la informacion con submit', () => { 
         wrapper.find('form').simulate('submit', {preventDefault(){}});
         expect(setCategories).not.toHaveBeenCalled();
      })

    test('debe de llamr el setCategories y limpiar la caja de texto', () => { 
        let input = wrapper.find('input');
        const value = 'Hola Mundo';
        input.simulate('change', {target : {value}});
        wrapper.find('form').simulate('submit', {preventDefault(){}});
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toBeCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
        input = wrapper.find('input');
        expect(input.prop('value')).toBe('');
    })
})