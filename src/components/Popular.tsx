import React from 'react'

// Prestigious car brands data with large images
const prestigiousBrands = [
  {
    id: 1,
    name: 'Lamborghini Aventador',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    category: 'Supercar',
    description: 'Italian excellence in automotive engineering'
  },
  {
    id: 2,
    name: 'Bugatti La Voiture Noire',
    image: 'https://images.unsplash.com/photo-1582639510494-c80b5de9f148?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    category: 'Hypercar',
    description: 'The most expensive car in the world'
  },
  {
    id: 3,
    name: 'Mercedes-Benz S-Class',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    category: 'Luxury Sedan',
    description: 'The best car in the world'
  },
  {
    id: 4,
    name: 'Rolls-Royce Ghost',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    category: 'Ultra Luxury',
    description: 'Built to last, designed to inspire'
  }
]

export const Popular = () => {
  return (
    <section className=" h-40 md:h-96">
      <div className="max-w-7xl mb-16 mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className='text-black text-center text-[20px] md:text-[30px] font-bold'>გაეცანით მსოფლიოში ყველაზე პრესტიჟულ ბრენდებს</h1>
      </div>
      {/* Cars Grid - Vertical Stack Layout */}
      <div className="space-y-0">
        {prestigiousBrands.map((brand, index) => (
          <div
            key={brand.id}
            className="group relative overflow-hidden cursor-pointer"
          >

            <div className="
              relative 
              h-40 md:h-96 
              transition-all duration-1000 ease-in-out overflow-hidden
              group
              hover:h-[40rem] sm:hover:h-[45rem] md:hover:h-[50rem]
            ">
              <img
                src={brand.image}
                alt={brand.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />

              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-1000"></div>

              <div className="absolute left-4 sm:left-8 md:left-12 lg:left-16 top-1/2 transform -translate-y-1/2 z-10 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl">
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-white mb-2 sm:mb-3 md:mb-4 leading-tight group-hover:text-4xl sm:group-hover:text-5xl md:group-hover:text-6xl lg:group-hover:text-7xl xl:group-hover:text-8xl transition-all duration-1000">
                  {brand.name}
                </h3>
                <p className="text-sm sm:text-base md:text-lg lg:text-lg text-gray-300 font-medium opacity-0 group-hover:opacity-100 transition-all duration-1000 delay-500 transform translate-y-4 group-hover:translate-y-0">
                  {brand.category}
                </p>
                <p className="text-xs sm:text-sm md:text-base lg:text-base text-gray-400 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg opacity-0 group-hover:opacity-100 transition-all duration-1000 delay-700 transform translate-y-4 group-hover:translate-y-0">
                  {brand.description}
                </p>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

              <div className="absolute top-4 sm:top-6 md:top-8 lg:top-8 right-4 sm:right-6 md:right-8 lg:right-8 bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 md:px-6 lg:px-6 py-2 sm:py-2 md:py-3 lg:py-3 opacity-0 group-hover:opacity-100 transition-all duration-1000 delay-300 transform translate-y-2 group-hover:translate-y-0">
                <span className="text-white font-semibold text-sm sm:text-sm md:text-lg lg:text-lg">Premium</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}