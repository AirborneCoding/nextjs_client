import Skeleton from "react-loading-skeleton";

const Loading = ({ cards }: { cards: number }) => {
    return (
        <section className={`flex-grow grid lg:grid-cols-1 xl:grid-cols-2 gap-5 lg:w-80`}>
            {Array(cards).fill(0).map((_, index) => (
                <div key={index} className="flex flex-col-reverse shadow-xl ">
                    <div className="card-body">
                        <Skeleton height={50} />
                        <Skeleton height={50} />
                        <div className="card-actions justify-sart">
                            <button className="bg-gray-500">
                                <Skeleton  />
                            </button>
                        </div>
                    </div>
                    <Skeleton height={280} />
                </div>
            ))}
        </section>
    )
};

export default Loading;
/* 
<div key={index} className="shadow-xl card card-compact bg-base-100">
                    <Skeleton height={180} />
                    <div className="justify-between card-body">
                        <Skeleton height={50} />
                        <div className="flex items-center justify-between">
                            <div>
                                <Skeleton width={50} />
                            </div>
                            <div>
                                <p className="underline">
                                    <Skeleton width={50} />
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
*/