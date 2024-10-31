import bookBanner from '../../assets/books.jpg'
const Banner = () => {
    return (
        <div className="my-14">
            <div className="hero bg-base-200 py-24 px-12 rounded-3xl">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='lg:w-1/2'>
                        <img
                            src={bookBanner}
                            className="rounded-lg shadow-2xl w-full" />
                    </div>
                    <div className='lg:w-1/2'>
                        <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary bg-green-600 border-none">View the list</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;