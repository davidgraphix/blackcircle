import {
  ContentMatrix,
  TrendingSection,
  ServicesMatrix,
} from '@/components/sections';

export default function HomePage() {
  return (
    <>
      <section className="bg-[#f7f5ef] border-b border-black/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-6 lg:gap-8">
            <div className="space-y-6">
              <article className="bg-white border border-black/10 rounded-2xl overflow-hidden shadow-sm group">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative min-h-[320px] lg:min-h-[420px] bg-black overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&h=700&fit=crop"
                      alt="African market intelligence"
                      className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </div>

                  <div className="p-6 lg:p-8 flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-bold text-primary uppercase tracking-[0.18em]">
                        African Market Intelligence
                      </span>

                      <h1 className="mt-4 font-serif text-4xl lg:text-6xl font-semibold text-black leading-[0.98] tracking-tight">
                        Navigate African markets with clarity.
                      </h1>

                      <p className="mt-5 text-sm lg:text-base text-gray-600 leading-relaxed max-w-xl">
                        Follow market developments, understand investment opportunities,
                        and build stronger financial market knowledge with BlackCircle.
                      </p>
                    </div>

                    <div className="mt-8 flex flex-col sm:flex-row gap-3">
                      <a
                        href="/market-scoop"
                        className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
                      >
                        Read Market Scoop
                      </a>

                      <a
                        href="/investing-guides"
                        className="inline-flex items-center justify-center rounded-xl border border-black/15 bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-black hover:text-white transition-colors"
                      >
                        Browse Guides
                      </a>
                    </div>
                  </div>
                </div>
              </article>

              <section>
                <div className="mb-4 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                      Featured Content
                    </p>
                    <h2 className="mt-2 font-serif text-2xl lg:text-3xl font-semibold text-black">
                      Latest from BlackCircle
                    </h2>
                  </div>
                </div>

                <ServicesMatrix />
              </section>
            </div>

            <aside className="lg:sticky lg:top-24 h-fit">
              <TrendingSection />
            </aside>
          </div>
        </div>
      </section>

      <ContentMatrix />
    </>
  );
}