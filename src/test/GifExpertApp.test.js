import { shallow } from "enzyme"
import GifExpertApp from "../GifExpertApp"

describe('Probando componente GifExpertApp ', () => { 
    const wrapper = shallow(<GifExpertApp />);
    test('Debe renderizar el componente GifExpertApp', () => {         
        expect(wrapper).toMatchSnapshot();
     })

     test('Debe de mostrar una lista de categorias', () => {         
        const categories = ['one Punch', 'sailor moon', 'Goku'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toEqual(3);
        //console.log(wrapper);
     })
 })
 