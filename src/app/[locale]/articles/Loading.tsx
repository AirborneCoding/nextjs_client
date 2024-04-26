import Skeleton from "react-loading-skeleton";

const Loading = ({ cards }: { cards: number }) => {
    return (
        <section className='grid gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3 body-container'>
            {Array(cards).fill(0).map((_, index) => (
                <div key={index} className="shadow-xl card card-compact bg-base-100">
                    <Skeleton height={180} />
                    <div className="justify-between card-body">
                        <Skeleton height={50} />
                        <div className="flex items-center justify-between">
                            <div>
                                <Skeleton width={50}/>
                            </div>
                            <div>
                                <p className="underline">
                                    <Skeleton width={50} />
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            ))}
        </section>
    )
};

export default Loading;
