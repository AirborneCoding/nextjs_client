import { useTranslations } from 'next-intl'
import React from 'react'
import { AiFillPhone } from 'react-icons/ai'
import { FaMapMarked } from 'react-icons/fa'
import { GiRotaryPhone } from 'react-icons/gi'

const Footer = ({ locale }: { locale: string }) => {

    const t = useTranslations('Footer');

    const footer = [
        {
            id: 1,
            title: t('title_1'),
            info: [
                {
                    text: t('adress'),
                    icon: <FaMapMarked />,
                },
                {
                    text: t('phone'),
                    icon: <AiFillPhone />,
                },
                {
                    text: t('email'),
                    icon: <GiRotaryPhone />,
                },
            ],
        },
        {
            id: 2,
            title: t('title_2'),
            info: [
                {
                    text: t('title_1'),
                },
                {
                    text: t('privacy'),
                },
            ],
        },
    ]
    
    return (
        <footer className='text-end bg-myBlue'>
            <div className='flex flex-col justify-between px-8 py-20 space-y-16 text-white bg-myBlue body-container md:px-0 lg:flex-row lg:space-y-0'>
                {footer.map((item: any) => {
                    const { id, title, info } = item
                    return (
                        <ul key={id} className={`${locale !== "ar" ? "text-end" : "text-start"}`}>
                            <li>
                                <h2 className='mb-8 text-3xl font-bold text-white underline underline-offset-8 decoration-yellow-500'>
                                    {title}
                                </h2>
                            </li>
                            {info.map((i: any, index: number) => (
                                <li
                                    key={index}
                                    className={`flex items-center space-x-5 text-white ${locale !== "ar" ? "justify-end" : "justify-start"}`}
                                >
                                    <h4 className='text-base text-white lowercase'>{i.text}</h4>
                                    <h3 className='text-white '>{i.icon}</h3>
                                </li>
                            ))}
                        </ul>
                    )
                })}
                <div className=''>
                    <iframe
                        src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13227.69910419831!2d-6.8388298!3d34.0201418!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda76c776aff6749%3A0x151f649473170de6!2sMinist%C3%A8re%20de%20la%20Justice!5e0!3m2!1sfr!2sma!4v1684671809994!5m2!1sfr!2sma'
                        title='ministry of justice location'
                        loading='lazy'
                        className='w-full lg:w-96 h-80'
                    ></iframe>
                </div>
            </div>
            <div className='p-2 text-center bg-slate-900 '>
                <h5 className='mx-2 text-sm text-center text-white md:mx-0 md:text-base md:text-center'>
                    {t('buttom')} {currentYear} ©
                </h5>
            </div>
        </footer>
    )
}

const currentYear = new Date().getFullYear();

export default Footer
