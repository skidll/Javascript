import image from './assets/image.png'
import {TextBlock, TitleBlock, ColumnsBlock, ImageBlock} from './classes/blocks'

const text =`
Тестовый сайт
`
 
export const model = [
    new TitleBlock('Конотопцев Кирилл', {
        tag: 'h2',
        styles: {
            background: 'linear-gradient(to right, #ff0099, #493240)',
            color: '#fff',
            padding: '1.5rem',
            'text-align': 'center'
            }
         
    }),
    new ImageBlock(image, {
        styles: {
            padding: '2rem 0',
            display: 'flex',
            'justify-content': 'center'
        },
        imageStyles: {
            width: '200px',
            height: 'auto'
        },
        alt: 'Это картинка'
    }),
    new ColumnsBlock( [
        'Приложение на чистом JavaScript, без использования библиотек',
        'это мой первый сайт',
        '"JavaScript — язык, который оживляет веб-страницы"'

    ], {
        styles: {
            background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
            padding: '2rem',
            color: '#fff',
            'font-weight': 'bold'

        }
    }),
    new TextBlock(text, {
        styles: {
            background: 'linear-gradient(to left, #f2994a, #f2c94c)',
            padding: 'lrem',
            'font-weight': 'bold'
        }
    })
]





