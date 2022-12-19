import Image from "next/image";

export default function Loading(){
    return<div className={' h-screen w-screen grid content-center'}>
        <div className={'w-1/6 h-40 mx-auto  w-full '}>
        <img src={'https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png!bw340'} alt={'loading'}/>
        </div>

    </div>
}