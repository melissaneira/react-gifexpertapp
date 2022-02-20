import { shallow } from "enzyme"
import GifGrid from "../../components/GifGrid";
import '@testing-library/jest-dom';
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock('../../hooks/useFetchGifs');

describe('Probando componente GifGrid', () => { 
    const category = 'One Piece';
    test('Debe renderizar correctamente el componente', () => {         
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        const wrapper = shallow(<GifGrid category={category}/>);
        expect(wrapper).toMatchSnapshot();
     })

    test('debe de mostrar items cuando se carga las imagenes useFetchGifs', () => { 
        const gifs = [{
            id: 'ABC',
            url:'https://localhost/file/figure.jpg',
            title: 'Figure1'
        },
        {
            id: 'DEF',
            url:'https://localhost/file/figure.jpg',
            title: 'Figure2'
        },
        {
            id: 'GHI',
            url:'https://localhost/file/figure.jpg',
            title: 'Figure3'
        }
    ]
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
        const wrapper = shallow(<GifGrid category={category}/>);        
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
     })
 })