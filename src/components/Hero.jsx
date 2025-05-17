import { PanelsRightBottom } from "lucide-react"
import { Link } from "react-router-dom"


const HeroSection = () => {


    return (

        <section className="relative w-full h-screen md:h-[80vh] " >
             {/* Background Image Behind Cards */}
             <picture>
                <source media="(min-width: 1024px)" srcSet="/img/lspm-header2.webp" type="image/webp" />
                <source media="(min-width: 640)" srcSet="/img/lspm-header2-sm.webp" type="image/webp" />
                <img 
                    src="/img/lspm-header2-sm.png" 
                    type='image/png'
                    alt="Lonestar Property Management" 
                    className="absolute inset-0 w-full h-full object-cover z-0" 
                />
             </picture>
            {/* Overlay */}
            <div id="hero-cards" className="bg-black/40 absolute inset-0 z-10">
                {/* Headline */}
                <div id="hero-head">
                <h1>Lonestar Property Management</h1>
                <h2>Property Maintenance You Can Count On</h2>
                {/* <p className="text-lg md:text-xl max-w-2xl">Serving Texas with professional power washing, soft washing, haul-offs, fencing, and more.</p> */}
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl items-stretch">
                {/* Card 1 */}
                <Link onClick={() => window.scrollTo(0, 0)} class='service-cards' to='/contact'>
                    <div class='service-card'>
                        <h3>Pressure Washing</h3>
                        <p>Revitalize driveways, patios, and exteriors with our deep-clean pressure washing services.</p>
                    </div>
                </Link>
                {/* Card 2 */}
                <Link onClick={() => window.scrollTo(0, 0)} class='service-cards' to='/contact'>
                    <div class='service-card'>
                        <h3>Auto/Boat Detailing</h3>
                        <p>Professional detailing for vehicles and boats. We bring back that showroom shine inside and out—perfect for personal or resale use.</p>
                    </div>
                </Link>
                {/* Card 3 */}
                <Link onClick={() => window.scrollTo(0, 0)} class='service-cards' to='/contact'>
                    <div class='service-card'>
                        <h3>Fencing & Maintenance</h3>
                        <p>Professional fence installs and property maintenance to keep your place looking sharp.</p>
                    </div>
                </Link>
                {/* Card 4 */}
                <Link onClick={() => window.scrollTo(0, 0)} class='service-cards' to='/contact'>
                    <div class='service-card'>
                        <h3>Haul-Off Services</h3>
                        <p>Quick and reliable junk removal, clean-up, and haul-off jobs for homes and businesses.</p>
                    </div>
                </Link>
                </div>
            </div>
        </section>


    )
}

export default HeroSection