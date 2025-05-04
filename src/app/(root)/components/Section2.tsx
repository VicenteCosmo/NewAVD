'use client'
import React from 'react'
import Slider from 'react-slick'
import Image from 'next/image'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Card, CardHeader, CardBody, CardFooter, Typography, Button } from '@material-tailwind/react'

function Section2(){

    const settings = {
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    }

  return (
    <div className=" w-full  bg-white " >
        <h1 className=' text-center text-[#295ed7] text-2xl font-bold py-10 ' >
        Módulos RH que atendem às suas necessidades
        </h1>

        <div className=' gap-0 mx-auto bg-blue-200 absolute w-full -mx-24 ' >
            <Slider {...settings} className=' justify-center px-96 absolute  ' >
                <div className='' >
                    <Image src="/hr.png" alt='1' width={200} height={100} />
                </div>
                <div>
                    <Image src="/LOGO(1).png" alt='1' width={200} height={100} />
                </div>
                <div>
                    <Image src="/peer-to-peer1.png" alt='1' width={200} height={100} />
                </div>
                <div>
                    <Image src="/peer-to-peer1.png" alt='1' width={200} height={100} />
                </div>
                <div>
                    <Image src="/peer-to-peer1.png" alt='1' width={200} height={100} />
                </div>
                <div>
                    <Image src="/peer-to-peer1.png" alt='1' width={200} height={100} />
                </div>
                <div>
                    <Image src="/peer-to-peer1.png" alt='1' width={200} height={100} />
                </div>
                <div>
                    <Image src="/peer-to-peer1.png" alt='1' width={200} height={100} />
                </div>
                <div>
                    <Image src="/peer-to-peer1.png" alt='1' width={200} height={100} />
                </div>
            </Slider>
        </div>

        {/* Module cards */}
        <div className='flex justify-center bg-transparent mt-96 p-5 mt-10 py-10 gap-x-4 ' >
            {/* <div> */}
                <Card className='mt-6 w-96 bg h-120 shadow-2xl rounded-2xl '
                placeholder={undefined} 
                onPointerEnterCapture={undefined} 
                onPointerLeaveCapture={undefined} >

                    <CardHeader className='relative h-56 rounded-4xl flex '
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                    >
                        <Image src="/peer-to-peer1.png" alt='1' width={200} height={100} 
                        className='w-80 h-50 flex mx-auto  ' />
                    </CardHeader>

                    <CardBody
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                    >

                        <Typography 
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                        variant='h4' className='mb-2 text-black px-5' >
                            Gestão de Dados
                        </Typography>

                        <Typography 
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                        className='mb-2 px-5 text-black mt-5 ' >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non vel nesciunt aperiam, harum aut ab 
                            porro voluptatum hic 
                            obcaecati quo quia iste distinctio enim voluptatibus atque minima repellendus odit modi!
                        </Typography>

                    </CardBody>

                    <CardFooter
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                    className='pt-0 px-5 mt-3'>
                        <Button
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                        className='bg-black py-3 px-7 mb-2 rounded-2xl '
                        >
                            Saiba mais
                        </Button>
                    </CardFooter>

                </Card>

                {/* Card 2 */}
                <Card className='mt-6 w-96 bg h-120 shadow-2xl rounded-2xl '
                placeholder={undefined} 
                onPointerEnterCapture={undefined} 
                onPointerLeaveCapture={undefined} >

                    <CardHeader className='relative h-56 rounded-4xl flex '
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                    >
                        <Image src="/peer-to-peer1.png" alt='1' width={200} height={100} 
                        className='w-80 h-50 flex mx-auto  ' />
                    </CardHeader>

                    <CardBody
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                    >

                        <Typography 
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                        variant='h4' className='mb-2 text-black px-5' >
                            Gestão de Dados
                        </Typography>

                        <Typography 
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                        className='mb-2 px-5 text-black mt-5 ' >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non vel nesciunt aperiam, harum aut ab 
                            porro voluptatum hic 
                            obcaecati quo quia iste distinctio enim voluptatibus atque minima repellendus odit modi!
                        </Typography>

                    </CardBody>

                    <CardFooter
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                    className='pt-0 px-5 mt-3'>
                        <Button
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                        className='bg-black py-3 px-7 mb-2 rounded-2xl '
                        >
                            Saiba mais
                        </Button>
                    </CardFooter>

                </Card>

                {/* Card 5 */}

                <Card className='mt-6 w-96 bg h-120 shadow-2xl rounded-2xl '
                placeholder={undefined} 
                onPointerEnterCapture={undefined} 
                onPointerLeaveCapture={undefined} >

                    <CardHeader className='relative h-56 rounded-4xl flex '
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                    >
                        <Image src="/peer-to-peer1.png" alt='1' width={200} height={100} 
                        className='w-80 h-50 flex mx-auto  ' />
                    </CardHeader>

                    <CardBody
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                    >

                        <Typography 
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                        variant='h4' className='mb-2 text-black px-5' >
                            Gestão de Dados
                        </Typography>

                        <Typography 
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                        className='mb-2 px-5 text-black mt-5 ' >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non vel nesciunt aperiam, harum aut ab 
                            porro voluptatum hic 
                            obcaecati quo quia iste distinctio enim voluptatibus atque minima repellendus odit modi!
                        </Typography>

                    </CardBody>

                    <CardFooter
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                    className='pt-0 px-5 mt-3'>
                        <Button
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                        className='bg-black py-3 px-7 mb-2 rounded-2xl '
                        >
                            Saiba mais
                        </Button>
                    </CardFooter>

                </Card>
            {/* </div> */}
        </div>

        <div className=' p-16 ' >
            <div className='bg-[#295ed7] p-7 rounded-2xl relative z-0 ' >

                <div className=' absolute bg-black w-200 h-75 top-0 z-1 opacity-20 rounded-b-full -mr-90 right-0 ' ></div>

                <h1 className='text-center text-3xl mt-10 z-40 ' >Um Serviço Que Atende Às Suas Necessidades</h1>
                <h1 className='text-center mt-10 text-2xl  ' >Somos a Solução</h1>

                <div className=" gap-x-9 flex justify-center mt-20 " >
                        <Button
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                        className='py-3 text-white cursor-pointer px-20 mb-2 rounded-4xl 
                        bg-transparent border-1 border-white 
                        '
                        >
                            Nossos Serviços
                        </Button>

                        <Button
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                        className='py-3 cursor-pointer px-20 mb-2 rounded-4xl 
                        bg-transparent border-1 border-black text-black
                        '
                        >
                            Começar agora
                        </Button>

            </div>

            </div>
        </div>
                
    </div>
  )
}

export default Section2
