import { useTranslations } from 'next-intl';
import Image from 'next/image';

const MinistryNbr = () => {

  const t = useTranslations("MinistryNbrs")

  const MinistryNbrArray = [
    {
      id: 1,
      title: t("nbr4"),
      img: '/useful/useful1_1.svg',
      nbr: 85,
    },
    {
      id: 2,
      title: t("nbr3"),
      img: '/useful/useful1_2.svg',
      nbr: 84,
    },
    {
      id: 3,
      title: t("nbr2"),
      img: '/useful/useful1_3.svg',
      nbr: 8,
    },
    {
      id: 4,
      title: t("nbr1"),
      img: '/useful/useful1_4.svg',
      nbr: 7,
    },
  ];
  return (
    <section className='bg-slate-300'>
      <div className='py-8 md:py-10 body-container'>
        <h2 className='mb-6 ml-2 mr-2 text-3xl font-bold text-center underline text-myBlue underline-offset-8 decoration-yellow-500'>
          {t("title")}
        </h2>
        <p className='mb-10 text-sm font-bold leading-relaxed text-center text-myBlue'>
          {t("text")}
        </p>
        <div className='p-8 mx-6 bg-white rounded shadow-xl md:mx-0 text-myBlue shadow-myBlue'>
          <div className='grid grid-cols-1 md:grid-cols-4 md:gap-8 place-items-center'>
            {MinistryNbrArray.map((item) => (
              <div key={item.id} style={{ display: 'flex', flexDirection: 'column' }}>
                {/* <img src={item.img} alt='' className='w-full h-20' /> */}
                <Image
                  src={item.img}
                  alt={t("title")} className='w-full h-20'
                  width={500}
                  height={500}
                />
                <div className='flex items-center mt-8 gap-x-5'>
                  <h4 className='self-center mt-1 font-bold text-yellow-500'>
                    {item.nbr}
                  </h4>
                  <h4 className='text-myBlue text-md'>{item.title}</h4>
                </div>
                <hr className='p-4' />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinistryNbr;
