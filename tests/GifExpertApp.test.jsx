import { render, screen } from "@testing-library/react";
import { GifExpertApp } from '../src/GifExpertApp';
describe('Pruebas en <GifExpertApp/>', () => {

    test('Prueba qué espera que al incio esté cargando.', () => {
        <GifExpertApp></GifExpertApp>
        render(<GifExpertApp />)
        screen.debug();
        expect(screen.getByText('Cargando...'));
    });

});