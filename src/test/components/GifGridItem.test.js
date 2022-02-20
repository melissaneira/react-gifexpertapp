import { shallow } from 'enzyme';
import GifGridItem from '../../Components/GifGridItem';
describe('GifGridItem Component', () => {

    const title = "Nueva Imagen";
    const url = 'https://localhost:8080/mi_imagen';
    const wrapper = shallow(<GifGridItem title={title} url={url}/>);

    test('Probar que componente se renderize correctamente ', () => {       
        expect(wrapper).toMatchSnapshot();    
    })    

    test('debe de tener un parrafo con el title ', () => {
        const p = wrapper.find('p');
        expect(p.text()).toBe(title);
        console.log(p.text());
    })

    test('debe de tener la imagen igual al url y alt', () => {
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);        
    })

    test('debe tener animate_fadeIn', () => { 
        const div = wrapper.find('div');    
        console.log(div.hasClass('animate__fadeIn'));
        expect(div.hasClass('animate__fadeIn')).toBe(true);       
    })
})