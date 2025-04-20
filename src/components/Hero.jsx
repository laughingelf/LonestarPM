import { PanelsRightBottom } from "lucide-react"
import { Link } from "react-router-dom"


const HeroSection = () => {


    return (

        <section className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('/img/lspm-header2.png')" }}>
            {/* Overlay */}
            <div className="bg-black/40 absolute inset-0  flex flex-col justify-center items-center px-4 py-12">
                {/* Headline */}
                <div style={{ fontFamily: 'Rye, serif', color: 'rgb(240,248,255)'}} className="text-center md:mb-24">
                <h1  className="text-4xl md:text-6xl font-bold mb-4">Lonestar Property Management</h1>
                <h1 className="text-xl md:text-4xl font-bold mb-4">Property Maintenance You Can Count On</h1>
                {/* <p className="text-lg md:text-xl max-w-2xl">Serving Texas with professional power washing, soft washing, haul-offs, fencing, and more.</p> */}
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl items-stretch">
                {/* Card 1 */}
                <Link class='service-cards' to='/contact'>
                    <div className="h-full flex flex-col rounded-xl p-6 text-center ">
                        <h3 style={{fontFamily: 'Rye, serif'}} className="md:text-2xl text-xl font-bold text-red-600 underline mb-2 text-shadow-lg">Pressure Washing</h3>
                        <p className="text-md text-black">Revitalize driveways, patios, and exteriors with our deep-clean pressure washing services.</p>
                    </div>
                </Link>
                {/* Card 2 */}
                <Link class='service-cards' to='/contact'>
                    <div className="h-full flex flex-col rounded-xl p-6 text-center ">
                        <h3 style={{fontFamily: 'Rye, serif'}} className="text-2xl text-red-600 underline font-bold mb-2 text-shadow-lg">Auto/Boat Detailing</h3>
                        <p className="text-md text-black">Professional detailing for vehicles and boats. We bring back that showroom shine inside and out—perfect for personal or resale use.</p>
                    </div>
                </Link>
                {/* Card 3 */}
                <Link class='service-cards' to='/contact'>
                    <div className="h-full flex flex-col rounded-xl p-6 text-center">
                        <h3 style={{fontFamily: 'Rye, serif'}} className="text-2xl text-red-600 underline font-bold mb-2 text-shadow-lg">Fencing & Maintenance</h3>
                        <p className="text-md text-black">Professional fence installs and property maintenance to keep your place looking sharp.</p>
                    </div>
                </Link>
                {/* Card 4 */}
                <Link class='service-cards' to='/contact'>
                    <div className="h-full flex flex-col  rounded-xl p-6 text-center">
                        <h3 style={{fontFamily: 'Rye, serif'}} className="text-2xl text-red-600 underline font-bold mb-2 text-shadow-lg">Haul-Off Services</h3>
                        <p className="text-md text-black">Quick and reliable junk removal, clean-up, and haul-off jobs for homes and businesses.</p>
                    </div>
                </Link>
                </div>
            </div>
        </section>


    )
}

export default HeroSection