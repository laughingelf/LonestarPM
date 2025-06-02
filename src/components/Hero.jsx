import { PanelsRightBottom } from "lucide-react"
import { Link } from "react-router-dom"
import { ArrowRight } from 'lucide-react';


const HeroSection = () => {


    return (

        <section className="relative w-full h-[60vh] md:h-[60vh] " >
             {/* Background Image Behind Cards */}
             <picture>
                <source media="(min-width: 1024px)" srcSet="/img/lspm-header2.webp" type="image/webp" />
                <source media="(min-width: 640)" srcSet="/img/lspm-header2-sm.webp" type="image/webp" />
                <img 
                    src="/img/lspm-header2-sm.png" 
                    type='image/png'
                    alt="Lone Star Property Maintenance" 
                    className="absolute inset-0 w-full h-full object-cover z-0" 
                />
             </picture>
            {/* Overlay */}
            <div id="hero-cards" className="bg-black/60 absolute inset-0 z-10 flex flex-col items-start">
            {/* Headline */}
            <div id="hero-head" className="p-2">
                <h1 className="text-5xl md:text-8xl mb-4 md:mb-6 w-fit md:w-[70rem] py-6 rounded-lg">
                    Lone Star Property Maintenance
                </h1>
                <h2 className="text-2xl md:text-5xl">
                    Property Maintenance You Can Count On
                </h2>
            </div>
            
            {/* Button */}
            <div className="mt-4 flex flex-col text-center md:flex-row gap-4">
                <Link onClick={() => window.scrollTo(0, 0)} to='/contact'
                className="text-3xl bg-blue-700 w-[18rem] md:w-[20rem] py-2 md:py-4 rounded-lg shadow-md shadow-black hover:scale-105 hover:shadow-lg transition">
                    <button>
                        Get a Free Estimate
                    </button>
                </Link>
                <a className="text-3xl bg-blue-700 w-[18rem] md:w-[20rem] py-2 md:py-4 rounded-lg shadow-md shadow-black hover:scale-105 hover:shadow-lg transition" href="tel:8178793087">
                    <button>
                        Call Us: (817) 879-3087
                    </button>
                </a>
            </div>
        </div>

        </section>


    )
}

export default HeroSection