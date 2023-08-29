import article1 from '../assets/articles/How to split a string in TwinCAT.md'
import article2 from '../assets/articles/How to round a REAL in TwinCAT.md'

import DefaultImage from '../assets/projects/images/Default.jpg';
import HelloWorld from '../assets/articles/images/HelloWorld.png';

export default {
    articles: [
        {
            id: 0,
            name: 'How to split a STRING in TwinCAT',
            img: HelloWorld,
            url: article1,
            date: "August 27, 2023",
            label: "TwinCAT"
        },
        {
            id: 1,
            name: 'How to round a REAL in TwinCAT',
            img: HelloWorld,
            url: article2,
            date: "August 29, 2023",
            label: "TwinCAT"
        },
    ],
}