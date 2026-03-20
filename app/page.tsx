import {
  DashboardHero,
  ContentMatrix,
  MarketBarometer,
  TrendingSection,
  ServicesMatrix,
  Newsletter,
  CommunityInvite,
} from '@/components/sections';

export default function HomePage() {
  return (
    <>
      <DashboardHero />
      
      {/* Main Dashboard Grid */}
      <div className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Left Sidebar - Hidden on mobile */}
            <div className="hidden md:block md:col-span-1">
              <div className="sticky top-40 space-y-6">
                <MarketBarometer />
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">Market Movers</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Data on gainers, losers, and actives is available starting 15 minutes after US markets open.
                  </p>
                </div>
              </div>
            </div>

            {/* Center - Main Content */}
            <div className="md:col-span-1 lg:col-span-2">
              <div className="space-y-6">
                {/* Featured Article */}
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-gray-300 transition-colors group">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="relative h-80 bg-gray-100 overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=500&fit=crop"
                        alt="Featured article"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6 flex flex-col justify-between">
                      <div>
                        <span className="text-xs font-bold text-primary uppercase tracking-wider">Featured</span>
                        <h2 className="mt-3 text-xl font-bold text-gray-900 group-hover:text-primary transition-colors leading-tight">
                          Global Stocks Tumble, Crude Oil Prices Skyrocket Amid Strikes on Storage Tanks
                        </h2>
                        <p className="mt-3 text-sm text-gray-600 leading-relaxed line-clamp-4">
                          Oil prices spiked before slightly paring gains, as odds of a quick return to normality fade away. Market participants continue to assess the broader implications of recent geopolitical developments.
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Market Analysis Team</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Services Matrix */}
                <div>
                  <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Our Services</h3>
                  <ServicesMatrix />
                </div>
              </div>
            </div>

            {/* Right Sidebar - Trending */}
            <div className="md:col-span-1">
              <div className="sticky top-40">
                <TrendingSection />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Sections */}
      <ContentMatrix />
      <Newsletter />
      <CommunityInvite />


    </>
  );
}
