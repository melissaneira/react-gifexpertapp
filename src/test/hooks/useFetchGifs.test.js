import { useFetchGifs } from "../../hooks/useFetchGifs"
import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas en el hook useFecthGifs', () => { 
    test('should debe de retornar el estado inicial ',async () => { 
        const {result, waitForNextUpdate} = renderHook(()=> useFetchGifs('Sakura'));        
        const {data, loading} = result.current;
        await waitForNextUpdate();
        expect(data).toEqual([]);
        expect(loading).toBe(true);
        console.log(result);
     })    

     test('debe de retornar arreglo de imagenes ', async() => { 
        const {result, waitForNextUpdate}  = renderHook(()=> useFetchGifs('Sakura'));        
        await waitForNextUpdate();
        const {data, loading} = result.current;
        expect(data.length).toBe(10);
        expect(loading).toBe(false);
         
    })
}) 