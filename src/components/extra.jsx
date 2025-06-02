{/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl items-stretch">
                {/* Card 1 */}
                <Link onClick={() => window.scrollTo(0, 0)} class='service-cards' to='/contact'>
                    <div class='service-card'>
                        <h3>Pressure Washing</h3>
                        <p>Revitalize driveways, patios, and exteriors with our deep-clean pressure washing services.</p>
                        <div className="flex flex-row justify-center items-center mt-3 gap-2 group cursor-pointer">
                            <p id="service-pointer" className=" group-hover:underline">Learn More</p>
                            <ArrowRight id="service-arrow" className="w-4 h-4 text-blue transition-transform group-hover:translate-x-1" />
                        </div>

                    </div>

                </Link>
                {/* Card 2 */}
                <Link onClick={() => window.scrollTo(0, 0)} class='service-cards' to='/contact'>
                    <div class='service-card'>
                        <h3>Auto/Boat Detailing</h3>
                        <p>Professional detailing for vehicles and boats. We bring back that showroom shine inside and out—perfect for personal or resale use.</p>
                        <div className="flex flex-row justify-center items-center mt-3 gap-2 group cursor-pointer">
                            <p id="service-pointer" className=" group-hover:underline">Learn More</p>
                            <ArrowRight id="service-arrow" className="w-4 h-4 text-blue transition-transform group-hover:translate-x-1" />
                        </div>
                    </div>

                    
                    
                </Link>
                {/* Card 3 */}
                <Link onClick={() => window.scrollTo(0, 0)} class='service-cards' to='/contact'>
                    <div class='service-card'>
                        <h3>Fencing & Maintenance</h3>
                        <p>Professional fence installs and property maintenance to keep your place looking sharp.</p>
                        <div className="flex flex-row justify-center items-center mt-3 gap-2 group cursor-pointer">
                            <p id="service-pointer" className=" group-hover:underline">Learn More</p>
                            <ArrowRight id="service-arrow" className="w-4 h-4 text-blue transition-transform group-hover:translate-x-1" />
                        </div>
                    </div>
                </Link>
                {/* Card 4 */}
                <Link onClick={() => window.scrollTo(0, 0)} class='service-cards' to='/contact'>
                    <div class='service-card'>
                        <h3>Haul-Off Services</h3>
                        <p>Quick and reliable junk removal, clean-up, and haul-off jobs for homes and businesses.</p>
                        <div className="flex flex-row justify-center items-center mt-3 gap-2 group cursor-pointer">
                            <p id="service-pointer" className=" group-hover:underline">Learn More</p>
                            <ArrowRight id="service-arrow" className="w-4 h-4 text-blue transition-transform group-hover:translate-x-1" />
                        </div>
                    </div>
                </Link>
                </div>