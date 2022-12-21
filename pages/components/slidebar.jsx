import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const fadeImages = [
    {
        url: 'https://raw.githubusercontent.com/xfibben/DREPBIBLIOTECA/main/public/tode_2.png',
        caption: 'First Slide'
    },
    {
        url: 'https://raw.githubusercontent.com/xfibben/DREPBIBLIOTECA/main/public/GITbanner.jpg',
        caption: 'Second Slide'
    }

];

export default function Slider() {
    return (
        <div className="slide-container">
            <Fade>
                {fadeImages.map((fadeImage, index) => (
                    <div className="each-fade" key={index}>
                        <div className="image-container">
                            <img className={'w-full'} src={fadeImage.url} />
                        </div>

                    </div>
                ))}
            </Fade>
        </div>
    )
}
