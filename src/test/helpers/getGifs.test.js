import { getGifs } from "../../helpers/getGifs"

describe('Pruebas de getGifs Fetch', () => { 
    test('debe de tarer 10 elementos', async() => { 
        const gifs = await getGifs('One Punch');
        expect(gifs.length).toBe(10);
    })    

    test('debe enviar la categoria', async() => { 
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
    })
})