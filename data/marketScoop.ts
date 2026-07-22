import type { MarketScoop } from '@/types';

// NOTE: The 5 scoops appended at the end of this file (ids 13–17) include an
// `image` field. If `MarketScoop` in `@/types` doesn't declare `image?: string`
// yet, add it there so these entries type-check cleanly.

const author = {
  name: 'BlackCircle Research Desk',
  role: 'Research',
};

export const marketScoops: MarketScoop[] = [
  {
    id: '1',
    slug: 'nigerian-treasury-bills-january-2026-outlook',
    title: 'Nigerian Treasury Bills: January 2026 Outlook',
    excerpt:
      "The Central Bank of Nigeria continues its tight monetary policy stance. Here's what investors should expect for T-bill rates this quarter.",
    content: `## Overview

The Nigerian Treasury Bills market has seen remarkable activity as we enter 2026. The Central Bank of Nigeria (CBN) maintains its hawkish monetary policy stance, keeping the benchmark interest rate elevated to combat persistent inflationary pressures.

## Current Market Conditions

Treasury bill rates have remained attractive for investors seeking relatively safe returns. The 364-day T-bill is currently yielding approximately 18.5%, reflecting the tight monetary conditions and investor demand for naira-denominated assets.

### Key Observations

- Primary market auctions remain well subscribed
- Secondary market liquidity remains active
- Investor demand for naira-denominated assets remains strong

## Investment Considerations

For retail investors looking to participate in the T-bill market, key factors include minimum investment size, holding period, liquidity needs, and reinvestment risk.

## Looking Ahead

We anticipate the CBN will maintain current rates through Q1 2026, with potential adjustments depending on inflation trajectory and foreign exchange stability.`,
    date: '2026-01-28',
    author,
    tags: ['Nigeria', 'Treasury Bills', 'Macro', 'Investments'],
    featured: true,
  },
  {
    id: '2',
    slug: 'ngx-banking-sector-q4-2025-review',
    title: 'NGX Banking Sector: Q4 2025 Review',
    excerpt:
      'Nigerian banks posted strong earnings in Q4 2025, driven by elevated interest rates and improved fee income. We analyze the key performers.',
    content: `## Quarterly Performance Overview

The Nigerian banking sector closed 2025 on a strong note, with tier-1 banks reporting impressive earnings growth. The high interest rate environment proved beneficial for net interest margins across the board.

## Top Performers

### Access Holdings

Access Holdings led the pack with strong profit growth, driven by trading gains and improved loan book performance.

### Zenith Bank

Zenith maintained its position as one of the strongest performers by absolute earnings, supported by diversified revenue streams and conservative risk management.

### GTCO

GTCO showed resilience with steady growth in retail banking and expanding digital revenues.

## Sector Outlook

The banking sector enters 2026 with solid fundamentals, though investors should monitor asset quality metrics closely as the economy navigates inflation pressures.`,
    date: '2026-01-25',
    author,
    tags: ['Equities', 'Nigeria', 'Banking', 'Investments'],
    featured: false,
  },
  {
    id: '3',
    slug: 'understanding-naira-fx-dynamics-2026',
    title: 'Understanding Naira FX Dynamics in 2026',
    excerpt:
      'The naira has shown relative stability in early 2026. We examine the factors driving exchange rate movements and outlook for the year.',
    content: `## Foreign Exchange Overview

The Nigerian naira has demonstrated improved stability in the first weeks of 2026, trading within a narrower band compared to the volatility experienced in 2025.

## Key Drivers

### Oil Receipts

Improved crude oil production and relatively stable global oil prices have supported dollar inflows into the economy.

### Diaspora Remittances

Remittance flows remain an important source of foreign exchange supply.

### CBN Interventions

The Central Bank has maintained its presence in the FX market, providing liquidity to meet legitimate demand.

## Implications for Investors

Foreign exchange considerations remain crucial for investment decisions in Nigeria, particularly for investors with dollar-denominated obligations or offshore exposure.`,
    date: '2026-01-22',
    author,
    tags: ['Macro', 'Nigeria', 'FX', 'Emerging Markets'],
    featured: false,
  },
  {
    id: '4',
    slug: 'sec-nigeria-new-regulations-2026',
    title: 'SEC Nigeria: New Regulations for 2026',
    excerpt:
      'The Securities and Exchange Commission introduces new rules aimed at improving market transparency and investor protection.',
    content: `## Regulatory Updates

The Securities and Exchange Commission of Nigeria has announced several regulatory changes aimed at strengthening market integrity and investor confidence.

## Key Changes

### Enhanced Disclosure Requirements

Listed companies are expected to provide more detailed reporting, including clearer updates on performance, risks, and governance.

### Digital Asset Framework

The SEC continues to refine its approach to digital assets and market innovation.

### Investor Protection

Investor protection remains a core priority as participation in capital markets grows.

## Market Impact

These regulatory changes are expected to support institutional participation and strengthen confidence in Nigeria’s capital markets.`,
    date: '2026-01-20',
    author,
    tags: ['Nigeria', 'Policy', 'Regulation', 'Capital Markets'],
    featured: false,
  },
  {
    id: '5',
    slug: 'african-eurobond-market-update',
    title: 'African Eurobond Market Update',
    excerpt:
      'African sovereign Eurobonds have rallied in recent weeks. We examine the drivers and identify what investors should watch.',
    content: `## Market Overview

African sovereign Eurobonds have experienced renewed investor attention as global risk appetite improves and investors search for higher yields.

## Country Spotlight

### Nigeria

Nigerian Eurobonds have benefited from improved sentiment around oil production, policy direction, and investor positioning.

### Kenya

Kenyan bonds have responded positively to fiscal reform signals and external financing support.

### Ghana

Ghana’s Eurobonds remain sensitive to restructuring developments and investor confidence.

## Investment Thesis

African Eurobonds can offer attractive yields, but investors must understand sovereign risk, currency exposure, liquidity, and macroeconomic conditions before participating.`,
    date: '2026-01-18',
    author,
    tags: ['Africa', 'Eurobonds', 'Fixed Income', 'Investments'],
    featured: false,
  },
  {
    id: '6',
    slug: 'nigerian-inflation-december-2025-analysis',
    title: 'Nigerian Inflation: December 2025 Analysis',
    excerpt:
      'Inflation moderated slightly in December, offering hope for monetary policy easing. We break down the numbers.',
    content: `## Inflation Report

Nigeria’s headline inflation moderated slightly in December 2025, offering early signs that price pressures may be easing.

## Component Analysis

### Food Inflation

Food inflation remains elevated and continues to affect household purchasing power.

### Core Inflation

Core inflation provides a cleaner view of underlying price pressures, excluding volatile food and energy components.

## Policy Implications

While moderation is encouraging, inflation remains high. Monetary policy is likely to remain cautious until there is a stronger trend of disinflation.`,
    date: '2026-01-15',
    author,
    tags: ['Macro', 'Nigeria', 'Inflation', 'Policy'],
    featured: false,
  },
  {
    id: '7',
    slug: 'ngx-oil-gas-sector-performance',
    title: 'NGX Oil & Gas Sector Performance',
    excerpt:
      'Energy stocks on the Nigerian Exchange have shown mixed performance. We analyze the sector dynamics.',
    content: `## Sector Overview

The oil and gas sector on the Nigerian Exchange has delivered mixed returns, with performance varying across upstream, downstream, and integrated operators.

## Key Themes

### Production and Pricing

Production levels, crude oil prices, and operating costs remain important drivers of earnings.

### Gas Strategy

Gas-focused companies continue to attract attention due to Nigeria’s energy transition priorities.

### Regulatory Environment

Investors continue to watch pricing policy, subsidy reforms, and sector-specific regulation.

## Investment Outlook

We remain cautiously optimistic on companies with strong cash flows, disciplined balance sheets, and clear exposure to gas growth.`,
    date: '2026-01-12',
    author,
    tags: ['Energy', 'Nigeria', 'Equities', 'Investments'],
    featured: false,
  },
  {
    id: '8',
    slug: 'ghana-cedi-stabilization-efforts',
    title: 'Ghana Cedi Stabilization Efforts',
    excerpt:
      'Ghana’s central bank implements new measures to support the cedi. We assess the likely effectiveness.',
    content: `## Currency Update

The Bank of Ghana has announced additional measures to support the cedi, which has faced pressure amid debt restructuring and external financing constraints.

## New Measures

### Gold Purchase Program

The central bank’s gold purchase program may help strengthen reserves over time.

### FX Auction Reforms

Auction reforms aim to improve transparency, liquidity, and price discovery in the FX market.

## Market Reaction

The cedi has shown tentative stabilization, but sustained improvement will depend on broader economic reforms and investor confidence.`,
    date: '2026-01-10',
    author,
    tags: ['Ghana', 'FX', 'Macro', 'Africa'],
    featured: false,
  },
  {
    id: '9',
    slug: 'kenyan-equities-2026-outlook',
    title: 'Kenyan Equities: 2026 Outlook',
    excerpt:
      'The Nairobi Securities Exchange offers interesting opportunities. We outline key themes for the year.',
    content: `## Market Overview

The Nairobi Securities Exchange ended 2025 with modest gains, outperforming some regional peers and attracting renewed attention from investors.

## Sector Views

### Banking

Kenyan banks remain important market drivers, supported by profitability, dividends, and regional expansion.

### Telecommunications

Telecommunications remains a key sector, with mobile money continuing to support earnings growth.

### Consumer and Manufacturing

Consumer-facing companies may benefit from improved economic activity and easing cost pressures.

## Outlook

Kenyan equities may offer selective opportunities, but investors should remain disciplined on valuation, liquidity, and currency risk.`,
    date: '2026-01-08',
    author,
    tags: ['Kenya', 'Equities', 'Africa', 'Investments'],
    featured: false,
  },
  {
    id: '10',
    slug: 'south-africa-rate-decision-analysis',
    title: 'South Africa Rate Decision Analysis',
    excerpt:
      'The SARB held rates steady at its latest meeting. We analyze the decision and implications.',
    content: `## Monetary Policy Update

The South African Reserve Bank kept rates steady at its latest meeting, in line with market expectations.

## Governor’s Commentary

The central bank emphasized the need for continued vigilance on inflation, even as headline pressures show signs of moderation.

## Economic Backdrop

South Africa continues to face structural challenges, including electricity constraints, fiscal pressure, and unemployment.

## Investment Implications

Investors should continue to monitor inflation, currency movement, and the policy path before making major allocation decisions.`,
    date: '2026-01-05',
    author,
    tags: ['South Africa', 'Macro', 'Rates', 'Policy'],
    featured: false,
  },
  {
    id: '11',
    slug: 'nigerian-pension-funds-investment-trends',
    title: 'Nigerian Pension Funds: Investment Trends',
    excerpt:
      'PFAs are diversifying their portfolios. We examine the latest allocation trends and implications for markets.',
    content: `## Industry Overview

Nigerian Pension Fund Administrators remain major players in domestic capital markets, with significant assets under management.

## Allocation Trends

### Government Securities

PFAs maintain heavy allocations to FGN bonds and Treasury bills due to yield, liquidity, and regulatory considerations.

### Equities

Equity exposure has increased selectively as funds seek diversification and higher long-term returns.

### Alternatives

Infrastructure funds and real estate investment trusts remain areas of gradual interest.

## Market Impact

PFA allocation decisions significantly influence market dynamics, especially in fixed income where they are dominant buyers.`,
    date: '2026-01-03',
    author,
    tags: ['Nigeria', 'Pension Funds', 'Fixed Income', 'Investments'],
    featured: false,
  },
  {
    id: '12',
    slug: 'african-fintech-ipo-pipeline',
    title: 'African Fintech IPO Pipeline',
    excerpt:
      'Several African fintechs are eyeing public listings. We preview the potential market entrants.',
    content: `## IPO Watch

The African fintech sector has matured significantly, with several companies now considering public listings on regional and international exchanges.

## Potential Candidates

### Payments Companies

Payments infrastructure businesses remain likely candidates due to scale, transaction volume, and regional relevance.

### Cross-Border Platforms

Cross-border fintechs may attract investor attention because of their role in remittances, trade, and settlement.

### Infrastructure Providers

Companies powering digital payments and financial rails remain strategically important.

## Market Readiness

Strong fintechs with proven business models, disciplined governance, and sustainable margins could attract meaningful investor interest when market conditions support listings.`,
    date: '2026-01-01',
    author,
    tags: ['Fintech', 'IPO', 'Africa', 'Capital Markets'],
    featured: false,
  },
  {
    id: '13',
    slug: 'nigeria-ginger-rally-broken-commodity-pipeline',
    title: 'Nigeria’s Ginger Rally Shows the Cost of a Broken Commodity Pipeline',
    excerpt:
      'A blight-driven supply shock has turned a routine kitchen staple into a high-priced commodity story. We examine why Nigeria’s ginger market still can’t convert scarcity into a resilient trading system.',
    date: '2026-05-11',
    author,
    tags: ['Nigeria', 'Commodities', 'Agriculture', 'Trade'],
    featured: false,
    image: '/images/market-scoops/nigeria-ginger-rally-broken-commodity-pipeline.jpg',
    content: `# Executive Take

Once a routine kitchen staple, ginger has become a test of Nigeria’s ability to turn agricultural demand into organized market infrastructure. Three years after a blight outbreak disrupted production in key growing areas, Nigeria’s ginger market is still trading under pressure — and the price action shows how a supply shock can turn an everyday agricultural product into a high-priced commodity story.

---

## Key Market Signals

| Indicator | Then | Now |
|---|---|---|
| Dried ginger (retail) | ~₦1,000/kg (2022) | ~₦13,000/kg (2026) |
| Export-grade dry split ginger | — | ₦13 million–₦17 million/ton |
| LCFE Kaduna dry ginger quote | — | ₦12,200–₦13,000/kg |
| Bag of dried ginger | ~₦180,000 | ₦600,000–₦610,000 |
| Mudu measure | ~₦2,700 (3 years ago) | up to ₦28,000 |
| Nigeria ginger exports (9-month period) | ₦23.76 billion (2023) | ₦6.28 billion (2024), down 74% |

- BusinessDay reported that cocoa prices fell sharply between February 9 and February 13, 2026, while ginger held at about ₦13,000 per kilogram over the same period — a sign ginger has stayed firm even as other cash crops corrected.
- LCFE market-watch data shows dry ginger from Kaduna quoted at ₦12,200 to ₦13,000 per kilogram, evidence that a crop once confined largely to informal trading channels is now surfacing more visibly in structured commodity-market references.

---

## Why Supply Broke

The reason is straightforward: demand has not disappeared, but supply has been damaged.

- Daily Trust, citing the Federal Ministry of Agriculture and Food Security, reported that Nigeria produces between 500,000 and more than 800,000 metric tonnes of ginger annually, with small-scale farmers in Kaduna State driving most of that output.
- Kaduna State contributes more than 70 percent of national output, according to the same report — a concentration that has made the state central to the crop’s economics.
- More than 2,500 hectares of ginger farms across seven southern Kaduna local government areas were destroyed, with the damage estimated at about ₦12 billion.

Once disease hit that production belt, the effect moved quickly from farms to wholesale markets, export channels and retail prices.

---

## Price Transmission: Farm to Retail

High prices, however, do not automatically mean easy profits for farmers. Ginger has a long production cycle, and farmers facing disease risk, seed shortages and limited finance may prefer shorter-cycle crops that let them recover cash more quickly.

The National Ginger Association of Nigeria has linked the sustained scarcity to three overlapping forces:

- The sector’s recovery from the 2023 blight
- An ongoing three-year seedbank project
- Rising global demand

Under the seedbank project, farmers are expected to replant 70 percent of their harvest and sell only 30 percent in order to rebuild seed stock — necessary for recovery, but a further drag on the volume available for immediate sale. That creates a difficult market equation: prices are high because supply is tight, but supply cannot recover quickly because farmers need clean seed, working capital, insurance and confidence to return to ginger production at scale.

---

## The Export Picture

Nigerian ginger is valued internationally for its pungency and high oleoresin content, but the supply shock has weakened the country’s ability to convert that demand into export earnings.

- BusinessDay, citing National Bureau of Statistics foreign trade data, reported that Nigeria’s ginger exports fell 74 percent to ₦6.28 billion in the first nine months of 2024, from ₦23.76 billion in the corresponding period of 2023 — a decline that came despite currency weakness that should ordinarily have made export receipts look stronger in naira terms.
- World Bank WITS data shows Nigeria exported about $4.72 million worth of ginger in 2024, with India, Vietnam, the United Arab Emirates, the United States and the Netherlands among the largest destinations. The export market is still present; the challenge is whether Nigeria can supply it consistently.
- Reuters also reported that Nigeria’s non-oil exports rose 19.6 percent to $3.2 billion in the first half of 2025, supported by demand for commodities such as cocoa, urea and cashew nuts. Ginger should naturally belong in that conversation, especially as policymakers search for non-oil sources of foreign exchange.

---

## Market Structure Gaps

The recent ginger rally shows that having a valuable commodity is not enough. A country also needs reliable production, aggregation, disease control, storage, quality standards, tradable contracts and financing structures that connect farmers to capital.

Without those systems, high prices can coexist with weak output:

- Farmers may still lack funding.
- Exporters may struggle to meet orders.
- Consumers may face unaffordable prices.
- Commodity exchanges may quote prices, but the underlying market may remain too fragmented to support deep institutional participation.

Warehouse receipts, forward contracts, input financing, crop insurance and exchange-backed quality standards can help farmers, buyers and exporters reduce uncertainty — and can help convert agricultural commodities from informal trading opportunities into more transparent, investable assets. Nigeria’s ginger market is not there yet, but the current price rally shows why it needs to get there.

The immediate priority is production recovery through farmer support, better agronomic practices and credible insurance. The medium-term priority is market-structure efficiency: more reliable price discovery, better warehousing, improved logistics and stronger links between farmers, processors, exporters and exchanges.

---

## The Kachia Hub

A proposed ₦40 billion ginger production and processing hub in Kachia, Kaduna State, adds a new layer to the story. Punch reported that the Federal Government and Kaduna State Government had concluded arrangements to establish the hub, with Kaduna committing ₦20 billion and the Federal Government expected to provide the balance.

The hub should not be treated as a magic solution:

- A processing plant without reliable raw-material supply will struggle.
- A hub without farmer finance will not solve production recovery.
- A factory not linked to quality standards, warehouse systems, export certification and credible offtake arrangements may simply become another impressive project that does not fully transform the underlying value chain.

The risk is not that Nigeria lacks demand for ginger. The risk is that the country builds processing capacity faster than it rebuilds the farm system that must feed it. If farmer training, insurance, input finance and aggregation are not handled together, the hub could face the same supply instability the wider market is already experiencing. That is why the Kachia project should be evaluated less as a construction announcement and more as a market-architecture project — its success should be measured by whether it increases farmer participation, reduces post-harvest losses, creates reliable export-grade supply, deepens price discovery and attracts private capital into the ginger value chain.

---

## Bottom Line

If these pieces come together, ginger could become a case study in how Nigeria converts agricultural advantage into export earnings, rural income and investable market infrastructure. If they do not, the country risks repeating the same pattern: a valuable commodity, strong global demand, high local prices and too little organized capacity to capture the opportunity.

For now, the rally in ginger prices is the market’s distress signal. The Kachia hub is the institutional response. What happens next will determine whether Nigeria merely survives another commodity shock, or uses it to build a stronger agricultural export machine.`,
  },
  {
    id: '14',
    slug: 'nigeria-telcos-cost-problem',
    title: 'Nigeria’s Telcos Fixed the Revenue Problem. Now Comes the Cost Problem',
    excerpt:
      'MTN and Airtel’s Nigerian units show a sector moving from crisis repair to cost control, but diesel, tower economics and regulation will decide how much of the data-led recovery reaches the bottom line.',
    date: '2026-05-11',
    author,
    tags: ['Nigeria', 'Telecom', 'Energy', 'Infrastructure'],
    featured: false,
    image: '/images/market-scoops/nigeria-telcos-cost-problem.jpg',
    content: `# Executive Take

Nigeria’s telecom operators are no longer telling a survival story. The worst of the 2024 earnings shock has passed for the largest players, helped by tariff relief, a less disorderly currency market and tighter commercial discipline. The harder question is what survives once the recovery is stripped of its temporary support from higher prices, calmer FX and renegotiated contracts.

> **Our view:** The sector has moved from crisis repair to cost control. Demand is strong and tariffs have helped, but the next test is whether operators can convert data growth into cash flow after paying for power, tower leases, spectrum and network expansion.

---

## Key Market Signals

| Signal | Relevance |
|---|---|
| MTN Nigeria | Q1 2026 EBITDA margin reached 55.3%, but diesel at ₦2,000 per litre in H2 2026 could reduce full-year EBITDA margin by 1.8 to 2.0 percentage points. |
| Tariff reset | The NCC’s approval of tariff increases of up to 50% repaired part of the revenue model, but it also made service quality, transparency and affordability more politically important. |
| Airtel Africa (Nigeria mobile services) | For the year ended 31 March 2026, Nigeria mobile services revenue was $1.598 billion, underlying EBITDA was $924 million and EBITDA margin reached 57.8%, supported by revenue growth, cost efficiency and stable fuel prices. |
| IHS Towers (Nigeria segment) | Q4 2025 revenue was $269.1 million and segment adjusted EBITDA was $169.7 million. IHS’s organic revenue fell as some FX and diesel-linked revenue resets moved against it, even though lower power costs helped the cost line. |
| MTN/IHS proposed transaction | MTN Group’s proposed acquisition of IHS Towers moves the story from external tower-cost exposure to infrastructure ownership, cost predictability and control of critical assets. |
| Network sharing & policy response | MTN’s network-sharing agreement with Airtel in Nigeria and Uganda, its roaming partnership with 9Mobile, and Nigeria’s renewable-power push for telecom sites all point to reducing duplication, improving infrastructure use, and lowering the cost of coverage. |

---

## MTN Nigeria: The Clearest Read on the Tension

MTN Nigeria’s Q1 2026 earnings release gave the market the clearest version of the sector’s central tension.

- **Total revenue:** ₦1.498 trillion (vs. ₦1.058 trillion in Q1 2025)
- **EBITDA:** ₦828.3 billion (vs. ₦492.7 billion in Q1 2025)
- **Profit after tax:** ₦355.5 billion (vs. ₦133.7 billion in Q1 2025)
- **Data revenue:** +56.2%
- **Fintech revenue:** +77.9%
- **Active data users:** +9.5% to 55 million
- **EBITDA margin:** 55.3%

On the face of it, this was a powerful recovery buoyed by stronger usage, improved pricing and a sharp rebound in earnings. But the cost disclosure was more important than the headline profit numbers. MTN said the energy component of its tower lease costs is linked to the prior quarter’s average Lagos ex-depot diesel price. If diesel averages ₦2,000 per litre in the second half of 2026, the company estimates full-year EBITDA margin could be reduced by **1.8 to 2.0 percentage points**. In a business now showing strong operating margins, that is not an accounting footnote — it is a reminder that part of Nigeria’s telecom recovery still depends on the price of keeping thousands of dispersed sites powered.

---

## What’s Behind the Recovery

Diesel is not the whole story. Several forces are repairing sector economics at once:

- The Nigerian Communications Commission’s **January 2025 tariff adjustment** changed the revenue base after years in which prices had lagged inflation, currency depreciation and energy costs.
- MTN has pointed to **revised IHS lease terms**, relative currency stability, and efficiency measures as part of the improvement in cost pressure in its H1 2025 results.

Diesel remains the most visible swing factor, but the real investment issue is broader: how much of the new revenue can operators keep after power, leases, spectrum, capex and service-quality demands have been paid for?

---

## Airtel Africa: The Other Side of the Ledger

Airtel Africa’s audited results for the year ended 31 March 2026 show why the sector should not be read as a one-way diesel squeeze.

- **Nigeria mobile services revenue:** $1.598 billion (vs. $1.045 billion in the year ended 31 March 2025)
- **Underlying EBITDA:** $924 million (vs. $522 million)
- **EBITDA margin:** 57.8% (up from 50.0%)
- **Data revenue growth (constant currency):** 63.6%
- **Data usage per customer:** 11.0GB/month (up from 8.4GB)
- **Smartphone penetration:** 54.9%

Airtel attributed Nigeria’s stronger margin performance to revenue growth, cost efficiency and stable fuel prices. These figures are not a contradiction of MTN’s diesel warning — they show the other side of it. When fuel stabilizes, higher tariffs and stronger data usage flow through more cleanly. When fuel rises sharply, the same network economics can absorb part of the benefit. The risk is not simply that diesel is high; it is that fuel, FX and tower costs can take back operating leverage just as subscriber demand is improving.

---

## The Tower Layer: Where the Story Gets Strategic

Operators own the customer relationship, but much of the physical network sits inside an infrastructure system of towers, power equipment, leases and service-level commitments. In Nigeria, that system is not only carrying telecom equipment — it is managing power reliability in a weak-grid economy.

IHS Holding’s fourth-quarter and full-year 2025 results explain how those costs move through the sector:

- **Nigeria segment Q4 2025 revenue:** $269.1 million
- **Segment adjusted EBITDA:** $169.7 million

IHS said organic revenue in Nigeria declined largely because revenues linked to foreign-exchange resets and diesel prices fell as the naira appreciated. In plain terms, some tower contracts include mechanisms that adjust revenues for currency movements and diesel costs — mechanisms that can lift IHS’s organic revenue when naira weakness or higher diesel prices trigger contractual resets, and reduce it when the naira strengthens or diesel-linked revenues fall. The same quarter also benefited from lower diesel and electricity costs. Energy and FX are therefore not static risks; they are built into tower contracts and can move reported earnings in both directions.

---

## MTN’s Bid to Own the Infrastructure

MTN Group’s proposed acquisition of IHS Towers brings the tower question to the centre of the investment case. Announced in **February 2026**, the transaction would increase MTN’s ownership of IHS to 100%, subject to shareholder and regulatory approvals. MTN said the deal would let it internalize margins currently paid to IHS, improve cost predictability, and benefit from third-party tower revenues — the clearest sign yet that the sector’s response has moved beyond tariff increases and diesel management toward reducing the number of critical cost variables operators do not control.

The Federal Ministry of Communications, Innovation and Digital Economy has said it will assess the proposed transaction, including its implications for consumers, competition, investment and sustainability. That regulatory interest is justified: if a major operator owns a large tower platform, the key public-interest questions are whether rival operators continue to receive fair access, whether network quality improves, and whether infrastructure control leads to lower long-term costs rather than merely shifting value within a corporate group.

For investors in MTN Nigeria, one distinction matters: the proposed buyer is **MTN Group**, not the listed Nigerian operating company. The tower upside should not be treated as an automatic transfer to MTN Nigeria minority shareholders. The narrower, more important question is whether future Nigerian tower lease terms, power-cost pass-throughs, or related-party arrangements change in ways that improve MTN Nigeria’s cash flow — public disclosures do not yet answer that. But the strategic direction is clear: the sector is moving from cost pass-through to cost control.

---

## Sharing, Leasing, Owning: The New Playbook

The same cost-control logic is visible elsewhere in the sector:

- **MTN–Airtel network-sharing agreement** in Nigeria and Uganda, designed to reduce duplicated investment and improve returns on expensive network assets.
- In 2025, the NCC approved a **three-year national roaming agreement** between MTN Nigeria and Emerging Markets Telecommunications Services Limited — then trading as 9mobile and now T2 Mobile — allowing 9mobile subscribers to roam on MTN Nigeria’s network. For 9mobile/T2, the arrangement improves coverage without a costly parallel network rollout; for MTN, it monetizes the scale of its infrastructure and deepens its role as a wholesale network platform.
- MTN Nigeria has also disclosed NCC approval to **lease spectrum from T2 Mobile**, supporting traffic management and customer experience without relying only on new spectrum acquisition.

These are not isolated technical arrangements. They point to a more concentrated industry playbook: share where duplication destroys returns, lease where asset access is more efficient than ownership, and own where control of the cost base is strategically valuable.

---

## Regulation: The Other Constraint

The 2025 tariff reset repaired part of the sector’s economics, but it also raised the political visibility of telecom pricing. Consumers are paying more, and regulators will therefore be more sensitive to service quality, transparent pricing, and the distribution of benefits from infrastructure consolidation or sharing. Higher tariffs can support investment, but they are not a blank cheque — the sector has been given more room to earn, and it will be expected to show that room is translating into better service and wider coverage.

---

## Diesel: Still the Biggest Swing Factor

- AFC-linked estimates cited by Nairametrics put Nigerian telecom diesel consumption at **more than 40 million litres per month**, costing the industry more than **$350 million annually**.
- That figure explains why diesel remains central even after the tariff reset. The Nigerian Communications Commission and the Rural Electrification Agency have consequently moved renewable power for telecom infrastructure onto the policy agenda — a sensible direction, especially for rural and semi-urban sites where power economics are weakest. But announcements will not change the margin story unless they translate into funded deployments, reliable site-level power, and lower diesel intensity.
- Domestic refining does not automatically remove the risk either. Policy support for local refining may improve supply security over time, but diesel pricing can still be shaped by crude allocation, FX, import policy and distribution costs. For operators and tower companies, the issue is not only whether diesel is available — it is whether the cost of diesel is stable enough to plan network expansion, tariffs and lease economics with confidence.

---

## Sector Timeline: From Tariff Repair to Cost Control

- **Jan–Mar 2025:** NCC approves telecom tariff increases of up to 50%; CBN launches the Nigeria FX code.
- **May–Jul 2025:** IHS says Nigeria revenue benefited from FX resets and diesel pricing; agrees to a Rwanda sale.
- **Sep–Oct 2025:** MTN leases spectrum from T2 Mobile, effective October 2025.
- **Feb–Mar 2026:** MTN announces its proposed acquisition of IHS Towers; the ministry signals a review.
- **Apr–May 2026:** MTN quantifies the diesel downside at 1.8 to 2.0 percentage points of profit margin.

---

## What Investors Should Watch

| Variable | Investor Application |
|---|---|
| Energy intensity | How quickly operators and tower partners can reduce diesel dependence through grid power, gas, batteries, solar hybrids and better site management. |
| Tower economics | If lease resets, infrastructure sharing and potential ownership changes reduce long-term costs, or simply shift them within the group structure. |
| Pricing power | If tariffs can support continued investments without triggering service-quality backlash or affordability pressure. |
| Capex quality | If new investments are adding useful capacity and coverage, or merely absorbing the cost of power, FX and legacy infrastructure stress. |
| Regulatory posture | Whether regulators allow efficiency-driven consolidation and sharing while preserving fair access, competition and consumer protection. |

---

## Bottom Line

This is the next test of the telecom recovery story. The winners will not simply be the companies with the fastest subscriber growth or the largest data traffic — they will be the operators that can turn data growth into cash flow after paying for power, leases, spectrum, capex and customer service. In a market where the grid remains weak and consumer pricing is politically sensitive, the quality of earnings will come from operational control as much as from revenue growth.

MTN’s diesel sensitivity analysis should be read as a sector signal, not the whole story. Airtel shows how fuel stability can support margin expansion. IHS shows the complex process through which energy and FX pricing move through the tower layer. MTN’s proposed acquisition of IHS shows that ownership of infrastructure has become a strategic lever. The MTN/9mobile roaming arrangement points in the same direction: in a high-cost market, coverage can no longer depend only on each operator building and powering a parallel network. Nigeria’s telecom recovery is real, but it is not a clean digital-growth story. It is a pricing, power and infrastructure-control story, and the durability of the boom will depend on how well the sector manages all three.`,
  },
  {
    id: '15',
    slug: 'opay-ipo-test-nigeria-payments-network',
    title: 'OPay’s IPO Test: Can Wall Street Price Nigeria’s Cash-to-Digital Payments Network?',
    excerpt:
      'A reported $4 billion US listing would ask public investors to price Nigeria’s largest cash-to-digital payments network. We look at what the prospectus will need to prove.',
    date: '2026-05-18', // TODO: confirm exact publish date — the source document has no "BlackCircle | [date]" header (unlike the other four articles). Estimated from the piece's own reference to a "Bloomberg reported in May" story; please verify against the original and correct if needed.
    author,
    tags: ['Fintech', 'Nigeria', 'IPO', 'Capital Markets'],
    featured: false,
    image: '/images/market-scoops/opay-ipo-test-nigeria-payments-network.jpg',
    content: `# Executive Take

OPay’s reported plan for a US listing is not just another African fintech headline. It is a question for global capital markets: can a company built around Nigeria’s cash-heavy retail economy command a public-market valuation in New York? A reported listing would do more than give early investors a path to liquidity — it would test whether global public markets are ready to value the agent-led infrastructure powering Nigeria’s cash-to-digital economy.

---

## The Reported Listing

- Bloomberg reported in May that the SoftBank-backed payments company is working with **Citigroup, Deutsche Bank and JPMorgan Chase** on a possible US initial public offering, and is seeking a valuation of about **$4 billion**.
- The company may sell shares later this year, although the timing and size of the offering have not been finalized.
- OPay was valued at $2 billion in 2021 after raising $400 million in a funding round led by SoftBank Vision Fund 2, Reuters reported at the time.

A $4 billion target would represent more than a routine fundraising milestone — it would ask public investors to place a fresh price on one of Africa’s most visible digital-payment networks.

---

## Management Built for Public Markets

Recent management changes suggest OPay is preparing itself for a more demanding capital-markets environment:

- **December 2025:** OPay appointed James Perry, a former Citigroup technology investment banker, as Chief Financial Officer.
- **January 2026:** The company announced a new global management team that included Lars Boilesen as co-CEO.

For a company reportedly considering a US listing, these appointments matter because public-market investors will look beyond user numbers. They will also assess financial reporting discipline, investor relations, governance, regulatory communication, and the credibility of the management team leading the company into its next phase.

---

## The Scale Behind the Story

The simple version of the story is that OPay has grown large enough to go public. The more important version is that OPay has built its scale by turning agents, merchants, smartphone users and frustrated bank customers into an alternative retail-payments network.

- The Guardian reported in 2023 that OPay had **more than 40 million users, 500,000 agents and 300,000 merchants** in Nigeria.
- Paystack said in 2024 that its merchants in Nigeria could accept payments from more than 40 million OPay users.

These figures matter because the investment case for a payments company is not built on downloads alone. It depends on frequency, trust, transaction value, merchant adoption, and the company’s ability to earn revenue across transfers, POS, merchant acquiring, cards, savings and other financial services.

---

## Key Market Signals

| Indicator | Latest Signal | Why It Matters |
|---|---|---|
| POS transaction value | Rose to ₦18.78 trillion in Q1 2026, up from ₦10.45 trillion in Q1 2025 (NIBSS) | Confirms OPay’s model is tied to agent- and terminal-led infrastructure, not just app downloads or wallet balances. |
| NIBSS Instant Payments volume | Nearly 11 billion transactions processed in 2024, vs. about 5 billion in 2022 (CBN fintech report cited by NIBSS) | Raises the question of how much of that national transaction flow OPay can convert into durable revenue. |
| Mobile money transactions | Rose to ₦20.71 trillion in Q1 2025, from ₦1.28 trillion in Q1 2021 (TechCabal, citing NIBSS) | Reflects a behavioural shift toward fintech wallets and POS agents when bank apps fail or branch banking is inconvenient. |

That is what makes the possible listing interesting. OPay is not simply a technology company — it is a digital layer over Nigeria’s informal economy. Its agent network gives it physical reach. Its wallet gives users speed. Its merchant tools give small businesses a way to collect and move money without relying entirely on bank branches.

---

## What Public Investors Will Ask

The same factors that make OPay attractive also create the questions public investors will ask:

- How many of its reported users are active?
- What is the transaction value per user?
- What is the revenue mix between transfers, merchant services, POS, cards, savings and lending?
- What are the take rates?
- How expensive is the agent network to maintain?
- What does profitability look like after incentives, compliance, customer support and technology costs?

These questions will become even more important if a prospectus is filed. The headline valuation may attract attention, but the prospectus will determine the quality of the story. Investors will want to see active users rather than registered users, transaction value rather than only transaction count, revenue mix rather than broad product descriptions, and profitability after incentives, agent commissions, compliance costs, fraud management and technology spending. In other words, the IPO test will not be whether OPay is large — it will be whether its scale translates into durable, well-governed, and profitable financial infrastructure.

---

## Why Public Markets Are a Different Test

Those questions matter because public markets are less forgiving than private venture rounds. Private investors can pay for growth and optionality. Public investors usually demand clearer evidence of revenue quality, unit economics, governance and regulatory durability.

---

## Regulatory Backdrop

Regulation is central to the listing story.

- **April 2024:** TechCabal reported that the CBN directed OPay, Kuda, Moniepoint and PalmPay to pause onboarding new customers amid scrutiny of their account-opening and KYC processes.
- TheCable later reported that OPay and Kuda resumed onboarding in **June 2024** after the CBN authorized them to do so.

That episode does not weaken the listing story; it clarifies the risk investors will price. OPay operates in payments, deposits, consumer finance, and financial-crime prevention — areas where scale attracts supervision.

---

## Where Is the Value Captured?

The possible IPO also raises a broader Nigerian capital-markets question. If a company monetizing Nigerian payments lists abroad, where is the value being captured? Nigeria provides the users, agents, merchants and transaction flows. A US exchange would provide the valuation platform, liquidity and exit route. That gap matters — it shows why local capital markets must become deeper, more liquid and more comfortable with high-growth technology and financial-infrastructure companies.

---

## Sector Context

- McKinsey has said African fintech revenues could more than quadruple by 2028, although the firm also noted that funding conditions have tightened since 2021. A credible OPay listing would therefore arrive at a sensitive moment — it could reopen the African fintech exit story after a period in which private funding became harder and investors became more selective.
- **Moniepoint** raised $110 million in 2024 from investors including Google, Development Partners International and Lightrock, pushing its valuation above $1 billion and reinforcing investor interest in Nigerian payments and business-banking infrastructure.
- **PalmPay** has reported more than 35 million users in Nigeria, showing how quickly consumer fintech platforms have embedded themselves in everyday transactions.

Together, these companies suggest the OPay story is not only about one possible IPO. It is about a maturing Nigerian fintech infrastructure race, where scale, trust, regulatory compliance and monetization will increasingly determine which platforms can attract global capital. A successful OPay listing could create a valuation benchmark for the sector; a weak reception could force African fintech companies to rethink growth claims, profitability timelines and governance standards.

---

## Risks

- Market windows can close quickly.
- US interest rates and investor appetite for fintech IPOs will matter.
- Nigeria’s exchange-rate volatility remains a factor.
- Competition and regulation could shift the calculus.
- OPay’s own financial disclosures — the prospectus, if filed, will be more important than the headline valuation.

Nothing about the listing is guaranteed.

---

## Bottom Line

The potential listing is important because it would test whether Nigeria’s everyday payment behaviour can be translated into a transparent public-market story. The POS agent at a street corner, the small merchant collecting digital payments, the commuter paying bills by phone, the customer avoiding a failed bank app — none of these are isolated behaviours. Together, they form the infrastructure that OPay is asking investors to value.

If Wall Street accepts that story, OPay’s listing could mark a new phase for Nigerian fintech: the moment it moves from private-market promise to public-market discipline. If it does not, the lesson may be just as important. Scale alone will not be enough. The next generation of African fintech companies will have to prove that reach, revenue, regulation and profitability can all sit in the same model.`,
  },
  {
    id: '16',
    slug: 'soybean-trade-shift-india-west-africa',
    title: 'The Soybean Trade Shift: How India’s Domestic Pressure Is Repricing West African Supply',
    excerpt:
      'A sudden Indian import squeeze has redirected soybean demand toward West Africa’s non-GM producers. We unpack the premium, and what it means for Nigeria’s own tight domestic market.',
    date: '2026-06-09',
    author,
    tags: ['Nigeria', 'Africa', 'Commodities', 'Agriculture'],
    featured: false,
    image: '/images/market-scoops/soybean-trade-shift-india-west-africa.jpg',
    content: `# Executive Take

A temporary Indian import window has exposed a deeper market signal: in agricultural trade, origin, quality verification and regulatory fit can carry as much value as scale.

India’s sudden turn to African soybeans is not only a one-off trade reversal. It is a live example of how a domestic supply squeeze, import rules and feed-sector pressure can redirect commodity flows toward smaller producers that meet a specific standard. For Nigeria, the opening is attractive but not frictionless: the country has a non-GM positioning advantage, yet it also has a domestic supply deficit and a feed industry that competes for the same crop.

---

## Key Market Signals (as at early June 2026)

| Indicator | Latest Signal | Why It Matters |
|---|---|---|
| India soymeal export stress | 25,000 metric tons of export contracts reportedly cancelled for May–June shipments | Price shock affects existing trade commitments, not just future demand. |
| Indian soymeal offers | Export offers rose from about $475/ton to about $695/ton FOB within a month | Indian soymeal becomes uncompetitive for Asian buyers. |
| African soybean purchases | At least 80,000 tons booked from African origins; possible record imports of 800,000 tons by September 2026 | Creates a short-window demand pull for compliant non-GM supply. |
| African import price into India | $700–$760/ton CIF for June–July shipments | Signals a premium for non-GM origin, quality and delivery reliability. |
| Nigeria supply-demand balance | Production around 1.35 million tons; demand above 2.7 million tons | Export upside exists inside a domestic market that is already structurally short. |
| Visible Nigerian exchange reference | AFEX public board indicated soybeans around ₦801/kg in early June | Provides a local benchmark for export-parity analysis, though public price coverage remains fragmented. |

---

## The Event: A Domestic Squeeze Becomes an Import Story

In late May 2026, India’s soybean complex shifted quickly from export confidence to supply defence.

- Reuters reported on 26 May that Indian traders cancelled roughly **25,000 metric tons** of soymeal export contracts for May and June shipments — the first such cancellations since 2021.
- The trigger was not a collapse in external demand. It was the opposite: local soybean and soymeal prices rose sharply enough to make existing export commitments commercially difficult to fulfil.
- Indian soymeal prices reportedly jumped **41% in one month** to 66,000 rupees (approx. $690) per metric ton, a four-year high.
- Export offers for June-loading soymeal moved from around **$475 per ton to about $695 per ton** free on board.

At that level, India’s traditional soymeal buyers in Asia had an incentive to look elsewhere, while Indian processors had an incentive to secure raw soybeans from origins that could pass domestic import rules. That is where Africa entered the picture.

- Indian buyers booked at least **80,000 tons** of African soybeans, with total imports potentially rising toward **800,000 tons** by the end of the Indian marketing year in September 2026.
- Reuters reported that Indian buyers were paying about **$700–$760 per ton CIF** for African soybeans scheduled for June and July shipments.
- That price cannot be compared directly with headline CME Globex soybean futures, which are quoted in U.S. cents per bushel rather than dollars per metric ton. Converted into metric-ton terms, recent CME Globex soybean futures around 1,115 cents per bushel imply roughly **$410 per ton** before freight, insurance, delivery, origin and compliance costs.

The African import price therefore appears to reflect not just the value of the bean itself, but the premium attached to non-GM eligibility, shipment logistics and delivery into India.

---

## The Rule That Changed the Trade Route

The global soybean market is large and, on headline numbers, well supplied.

- USDA’s May 2026 oilseeds outlook forecast global soybean production at a record **442 million tons** in 2026/27, supported by larger crops in Brazil, the United States and Argentina.
- Soybean exports are also forecast at record levels, with Brazil and the United States retaining dominant market shares.

Ordinarily, that scale would make Brazil or the United States the obvious first call for an importer under pressure. India’s case is different because the import filter is regulatory rather than purely volumetric: India permits imports only of non-genetically-modified soybeans, which narrows the practical supply universe. Much of the soybean supply from the Americas is genetically modified, while Nigeria, Benin, Togo and Niger have remained largely associated with traditional non-GM soybean production.

This does not make West Africa a global soybean heavyweight. It makes the region a **compliant supplier at a moment when compliance is scarce**. The current premium is less a reward for output scale and more a reward for market fit.

---

## Nigeria’s Position: Attractive Origin, Constrained Balance Sheet

Nigeria’s relevance to this trade corridor comes from three overlapping factors: it produces non-GM soybeans, it already sells into Asian markets, and it has a growing domestic feed and food-processing base.

Those strengths sit beside a structural supply gap. In July 2025, Nigeria’s Federal Ministry of Agriculture and Food Security stated that the country produces about **1.35 million tons** of soybeans annually, while national demand exceeds **2.7 million metric tons**, driven by food, feed and industrial use.

That balance matters for interpretation. An export premium does not fall into an empty domestic market — it competes with poultry feed mills, oil processors, aquaculture feed producers, food manufacturers and local traders. When external buyers pay more aggressively, aggregators have a stronger incentive to move beans toward ports. That can improve farmgate prices and rural cash flow, but it can also tighten local availability for processors that supply eggs, poultry, fish feed and edible oil markets.

Nigeria’s 2024 trade data also shows this is not a brand-new market:

- WITS/UN Comtrade data records Nigerian soybean exports of about **$118.0 million and 472,022 tons** in 2024.
- Pakistan was the largest recorded destination by volume and value, followed by India; together, both markets accounted for more than 430,000 tons.
- Canada, France and Turkey followed at a much smaller scale.

The India story therefore expands an existing export relationship rather than creating one from scratch.

---

## Prices: The Premium Is Real, But the Comparison Needs Care

The headline African import price into India, at $700–$760 per ton CIF, is notable when set against the CBOT/CME soybean benchmark. On 8 June 2026, the converted futures reference implied roughly **$411 per metric ton** before basis, freight, grade, origin and destination adjustments. The gap is therefore not a simple like-for-like price comparison — it points to the additional value embedded in the African cargoes: delivered supply into India, logistics, documentation, origin assurance and, most importantly, non-GM eligibility at a time when India’s sourcing options have narrowed.

The same caution applies locally. AFEX’s public market board in early June indicated soybeans around ₦801 per kilogram, or about ₦801,000 per ton. Using the CBN’s early-June official exchange rate near ₦1,362 per US dollar, that local indication is roughly **$588 per ton** before export handling, inland logistics, quality testing, port charges, freight and trader margin. This suggests an export-parity attraction, but it does not mean Nigerian farmers or aggregators capture the full Indian CIF price.

A more useful reading is that the premium has three layers:

1. The global soybean price
2. The non-GM compliance premium
3. The Nigeria-to-India execution spread

The last layer depends on aggregation, storage, moisture control, phytosanitary certification, port efficiency and counterparty reliability.

---

## The Domestic Transmission Channel

The most sensitive part of the story is not the export revenue — it is the pass-through into domestic feed economics. Soymeal is one of the main protein ingredients in poultry and livestock feed, and soybeans become soymeal after crushing. If export demand pulls more raw beans away from domestic processors, local soymeal prices can rise. If soymeal rises alongside maize, poultry producers can face margin pressure, which can eventually appear in the prices of eggs, chicken and fish.

India’s own livestock industry had asked its government to permit 1.5 million tons of soymeal imports after soymeal prices reportedly rose about 45% in two months; processors opposed the proposal, arguing that domestic supply was available and that imports could discourage local farmers. This policy tension is familiar: producers often benefit from high crop prices, while processors and consumers feel the cost.

Nigeria’s version of the same issue may be less visible at first because the export market is smaller relative to the global soybean complex. Still, the direction is clear: a stronger export pull can support farmers and exporters, while raising procurement costs for domestic processors unless output expands, inventories improve, or imports and substitutes absorb the shock.

---

## What to Watch Next

Four indicators will determine whether this remains a short-lived trade window or develops into a more durable West African soybean corridor:

1. **India’s new soybean crop**, expected around September and October 2026, which will determine how long the import pull remains active.
2. Any **Indian decision to relax or expand soymeal import permissions**, which could reduce the need to import raw soybeans from Africa.
3. The **spread** between Nigerian spot prices, African CIF offers into India, and global soybean futures — a signal of whether the premium is widening or being competed away.
4. **Nigeria’s domestic feed market**, which will reveal whether export demand is being absorbed smoothly or feeding into higher local soymeal costs.

---

## Bottom Line

The opportunity is real, but narrow. Nigeria and its neighbours are not replacing Brazil or the United States in global soybean trade. They are occupying a specific compliance corridor at a moment of Indian supply stress. The market reward will accrue most to exporters that can prove origin, control quality, aggregate volume and deliver reliably without exhausting local supply. That is the real story: not simply that India is buying African soybeans, but that a regulatory bottleneck has briefly turned West Africa’s non-GM profile into a premium commodity attribute.`,
  },
  {
    id: '17',
    slug: 'inside-the-sale-of-frigoglass-nigerian-glass-business',
    title: 'Inside the Sale of Frigoglass’s Nigerian Glass Business',
    excerpt:
      'Helios’s €98.1 million purchase of Frigoglass’s Nigerian holding chain reveals a high-margin glass business monetized by a parent under creditor pressure. We break down the structure behind the headline takeover offer.',
    date: '2026-07-16',
    author,
    tags: ['Nigeria', 'Capital Markets', 'M&A', 'Equities'],
    featured: false,
    image: '/images/market-scoops/inside-the-sale-of-frigoglass-nigerian-glass-business.jpg',
    content: `# Executive Take

The €98.1 million sale to Helios was not a retreat from a weak subsidiary. It was the monetization of Frigoglass’s most profitable business by a parent whose creditors needed cash, certainty, and a route through an overburdened capital structure.

The public story around Beta Glass begins with a ₦6.94 billion takeover offer to minority shareholders. Denominated in naira, directed at investors on the Nigerian Exchange, and accompanied by a set of numbers that invite immediate scrutiny, the offer has become the most visible part of the transaction. The transfer of control took place months earlier, however, when Helios Fund V paid €98.1 million for the Dutch holding company above Beta Glass and the related Nigerian packaging businesses. The current offer is the regulatory after-effect of that purchase, not the purchase itself.

Once the two events are separated, the industrial and financial logic becomes easier to see. Helios did not acquire a distressed glassmaker from a parent seeking to abandon an unviable market. It acquired a high-margin Nigerian manufacturing platform from a group that had spent several years restructuring debt and managing creditors. Frigoglass’s difficulty was not that Beta Glass had stopped creating value; it was that Beta Glass had become one of the few assets capable of creating a sufficiently large liquidity event for the parent.

---

## Key Market Signals

| Metric | Figure | Why It Matters |
|---|---|---|
| Minority takeover offer | ₦590.94/share for up to 11,741,509 shares (~₦6.94 billion) | The visible, regulatory-triggered leg of the transaction. |
| Underlying control transaction | €98.1 million (Helios Fund V, for the Dutch holding company above Beta Glass) | The actual transfer of control, completed months before the offer. |
| Implied enterprise value | ~€135 million (~3.3x 2025 adjusted EBITDA) | A restrained multiple for a business with a 34.9% margin. |
| Attributable economic interest | 55.21% → ~57.17% if the offer is fully accepted | Distinguishes the 70.05% register-level holding from Emerald’s actual economic stake. |
| Nigerian glass operations (2025) | €119.2 million revenue, €41.6 million adjusted EBITDA, 34.9% margin | Nearly 3x the EBITDA of the continuing business Frigoglass retained, on less than half the revenue. |
| Beta Glass FY2025 (company level) | ₦149.1 billion revenue, ₦48.1 billion operating profit, ₦33.25 billion profit after tax | Confirms the strength held at the operating-company level, not only in group segment reporting. |

---

## The Deal Structure Beneath the Takeover Offer

Before the sale, Beta Glass sat several layers below Frigoglass:

- The listed company’s largest registered shareholder was **Packaging Industries Nigeria Limited**, which held 61.88% of its shares.
- A Dutch company then known as **Frigoinvest Nigeria Holding B.V.** owned 76.03% of Packaging Industries and also held a separate 8.17% stake in Beta Glass directly.
- Helios acquired that Dutch company through **Emerald HoldCo B.V.**; following completion, it was renamed **Emerald Nigeria Intermediate Holdings B.V.**

The operating assets in Nigeria remained where they were, but control of the companies above them changed hands.

This structure explains the two numbers that have caused the most confusion:

- The two companies in the control chain are registered for **70.05%** of Beta Glass: 61.88% through Packaging Industries and 8.17% through the Dutch intermediate holding company.
- Emerald’s economic interest is lower because it owns only 76.03% of Packaging Industries. Applying that proportion to Packaging Industries’ Beta Glass stake, and then adding the 8.17% direct holding, produces an attributable interest of **55.21%**, equivalent to roughly 331.3 million Beta Glass shares.

The 70.05% figure describes what related entities hold on the register; 55.21% describes the portion economically attributable to Emerald.

---

## Why the Seller Needed the Transaction

The reason for the sale lies above Nigeria. Frigoglass completed a major recapitalization in 2023 after years of operational disruption and financial strain, including the destruction of its Romanian refrigeration plant and the accumulation of secured debt. The restructuring reduced some liabilities and injected new money, but it also left the group operating within a creditor-dominated structure in which debt service, asset disposals and maturity extensions became central to strategy.

When the sale was announced in December 2025, Frigoglass disclosed at the same time that noteholders had agreed to extend maturities, permit the retention of part of the disposal proceeds, and support an eventual solvent wind-down of the parent after further asset realizations. The Nigerian disposal was therefore not an isolated portfolio decision; it was part of a negotiated route through the group’s capital structure.

The relative performance of the businesses made Nigeria the logical asset to monetize. According to Frigo DebtCo’s 2025 accounts:

- **Continuing commercial-refrigeration operations:** €282.0 million of revenue, but only €15.3 million of adjusted EBITDA — before finance costs of €43.1 million contributed to a €53.1 million loss from continuing operations.
- **Nigerian glass operations** (classified as discontinued after the agreement to sell): €119.2 million of revenue, €41.6 million of adjusted EBITDA, and a margin of 34.9%.

On less than half the revenue, Nigeria generated almost three times the EBITDA of the business Frigoglass retained.

That comparison is more informative than describing Beta Glass as a “crown jewel,” because it shows what the subsidiary represented in cash terms. The Nigerian glass operations generated **€32.8 million** of operating cash inflow in 2025 and reported **€22.1 million** of profit. Frigoglass’s Russian refrigeration business — the other operation being exited — delivered €13.6 million in operating cash flow and ended the year in loss. On the group’s own segment disclosures, the Nigerian business was not merely profitable; it was the asset most capable of producing a disposal large enough to matter to creditors.

---

## Why Beta Glass Held Up When Other Subsidiaries Did Not

At Beta Glass itself, the improvement was equally pronounced. The 2025 annual report records:

- Revenue of **₦149.1 billion**
- Operating profit of **₦48.1 billion**
- Profit after tax of **₦33.25 billion**
- Cash generated from operations of **₦50.4 billion**

Those figures reflect more than a favourable year for beverages. They also point to a business model that was better aligned with the Nigerian currency shock than several multinational consumer subsidiaries whose operating gains were overwhelmed by the revaluation of large foreign-currency liabilities.

Nestlé Nigeria provides the clearest contrast. Its 2024 accounts showed rapidly rising revenue and operating profit, but a substantial dollar-denominated related-party balance generated exchange losses large enough to erase those operating gains. Cadbury Nigeria and Guinness Nigeria experienced similar, though differently structured, pressures from intercompany loans, import finance, and other foreign-currency obligations.

Beta Glass was not free of FX risk, but its exposure was smaller and more balanced:

- It held foreign-currency assets and earned some export proceeds.
- It reduced short-term import facilities.
- It refinanced much of its borrowing into a five-year naira facility.

The trade-off was higher domestic interest-rate exposure rather than an open-ended revaluation of a large dollar liability.

Local sourcing also helped, although the available disclosures require care. Beta’s 2025 value-added statement records **₦77.76 billion** of locally purchased materials and services against **₦11.20 billion** imported — but that measure combines raw materials with services and should not be read as a precise local-content ratio for physical inputs. The group’s 2023 sustainability report put locally sourced materials in the glass-container business at **51%**. Beta continued to import specialist inputs, machinery and, when domestic collection was inadequate, cullet used in glass production. Its advantage was not self-sufficiency; it was a cost base and liability structure that left the underlying economics visible even after the naira’s adjustment.

---

## An Industrial Position That Is Difficult to Reproduce

The resilience of the numbers is easier to understand once the structure of the industry is considered. Container glass is a continuous-process business in which furnaces are expensive to build, costly to stop and technically demanding to operate. Bottlers require exact specifications, dependable colour and weight, and uninterrupted deliveries at scale. Because empty glass is heavy and expensive to move, proximity to large beverage and food plants matters, while long-standing customer approvals, mould inventories and recycling networks create additional barriers that do not appear on the balance sheet.

- Beta Glass operates plants in **Agbara and Ughelli** and has said it is the only Nigerian producer with multiple furnaces capable of producing all three principal glass colours concurrently.
- Its most visible large-scale rival is **Ardagh Glass Packaging–Africa**, which operates in Nigeria as part of a broader African manufacturing network.
- Public market-share data are not sufficiently complete to describe the market as a formal duopoly, but the field is plainly concentrated and the cost of entry is high.

Frigoglass’s October 2024 investor presentation was explicit about this attraction: it highlighted the favourable market structure, Beta’s relationships with leading beverage companies and the fact that major furnace-rebuild spending was nearing completion.

Customer concentration is the corresponding risk. Beta’s four largest customers accounted for **64%** of 2025 revenue, with the largest contributing **21%**. A small group of major bottlers can negotiate hard, and the loss of one contract would be significant. Yet the same concentration illustrates why the asset is difficult to displace: Beta is not selling a generic commodity into a fragmented market; it is embedded in production systems that depend on consistency, scale and supply security. When breweries and soft-drink companies recover volumes and rebuild margins, glass demand benefits Beta without them having to own the consumer brands themselves.

---

## What Helios Appears to Have Bought

Helios’s case for the acquisition follows naturally from these characteristics. Its announcement described Beta Glass as the leading glass-packaging manufacturer in West Africa and emphasized rising domestic demand, supply reliability and regional expansion. Behind that language is a straightforward private-equity proposition: an established industrial platform serving non-discretionary consumer sectors, operating in a market with limited large-scale competition, and offering scope to improve sourcing, energy efficiency, exports, and capital discipline after a period of heavy furnace investment.

The price appears restrained when set against the latest operating results, although it should not be presented as evidence of a forced sale without qualification.

- The €98.1 million consideration covered the wider Nigerian holding chain, not Beta Glass alone.
- Using the sold operations’ disclosed net debt of €37.3 million produces an indicative enterprise value of about **€135 million**, or roughly **3.3x** 2025 adjusted EBITDA.

That is a low-looking multiple for a business with a 34.9% margin, but the comparison is based on a year in which earnings rose sharply and does not capture the full cost of future furnaces, energy reliability, customer concentration, currency volatility or the country risk attached to Nigerian manufacturing. What can be said with greater confidence is that the seller’s debt position and timetable reduced its ability to wait indefinitely for a richer valuation.

---

## A Broader Shift in the Ownership of Nigerian Assets

The deal also reflects a broader shift in who is prepared to own Nigerian operating risk. The earlier exit cycle was most visible in retail and consumer businesses, where companies such as Shoprite, Woolworths, Game and Pick n Pay found that scale on paper did not always translate into acceptable returns after logistics, rent, import costs and currency pressure. Other multinationals moved from direct ownership to distribution, licensing or more asset-light models. That history still matters, but the current transactions are not a simple reversal in which the same foreign owners are returning.

Instead, assets are moving towards a more varied group of buyers:

| Seller | Asset | Buyer |
|---|---|---|
| Diageo | Guinness Nigeria (control) | Tolaram (preserving a long-term brand relationship) |
| Holcim | Lafarge Africa | Huaxin Cement |
| Shell | Onshore business | Renaissance |
| ExxonMobil | Shallow-water interests | Seplat Energy |

The motives and industries differ, but the common feature is a rotation from global parents simplifying portfolios towards strategic, regional or specialist owners willing to price and manage Nigerian complexity directly.

Helios represents an especially revealing version of that model. It is an Africa-focused investment firm founded by Nigerian professionals, but the capital behind Fund V includes international institutions and development-finance investors. The transaction is therefore neither a conventional multinational acquisition nor a purely domestic buyout. It is global institutional capital being deployed through an Africa-specialist manager whose advantage is expected to lie in local judgement, governance and the ability to hold an asset through the volatility that encouraged other owners to reduce exposure.

---

## The Minority Offer

Only after the commercial transaction is understood does the minority offer fall into place. By acquiring the companies above Beta Glass, Emerald obtained indirect control of a listed Nigerian company and crossed the threshold at which the **Investments and Securities Act 2025** requires a takeover process.

- Emerald is now offering **₦590.94 per share** for up to **11,741,509 Beta Glass shares**, a maximum outlay of about **₦6.94 billion**.
- The offer represents **1.96%** of Beta Glass’s issued capital.
- It would raise Emerald’s attributable economic interest from **55.21% to about 57.17%** if fully accepted.

---

## What Investors Should Watch

The final offer result will show whether shareholders regarded ₦590.94 as sufficiently attractive to tender and whether the small cap was heavily oversubscribed. The more important assessment will take longer. Investors will need to see whether Helios:

- Commits fresh capital to furnaces and energy infrastructure
- Expands local cullet collection
- Increases exports
- Changes the debt profile
- Alters the company’s approach to dividends and public-market liquidity

Those decisions will reveal whether the new owner regards Beta Glass principally as a cash-generative asset to optimize or as the base of a larger regional packaging platform.

---

## Bottom Line

For Frigoglass, the transaction provided cash and room to manage creditors. For Helios, it delivered control of a scarce industrial franchise whose recent earnings were stronger than those of the businesses the seller retained. The most useful reading of the deal is therefore neither that foreign investors are abandoning Nigeria nor that capital has simply returned. It is that ownership is becoming more selective: strong Nigerian assets can attract global capital, but increasingly through investors prepared to understand local operating structures, tolerate volatility and distinguish a difficult country environment from a weak company.

Beta Glass was not sold because it failed inside Frigoglass; it was sold because, by the end, it was the part of Frigoglass that worked well enough to be turned into cash.`,
  },
];

export function getMarketScoopBySlug(slug: string): MarketScoop | undefined {
  return marketScoops.find((scoop) => scoop.slug === slug);
}

export function getFeaturedMarketScoop(): MarketScoop | undefined {
  return marketScoops.find((scoop) => scoop.featured);
}

export function getRelatedScoops(
  currentSlug: string,
  limit: number = 3
): MarketScoop[] {
  const current = getMarketScoopBySlug(currentSlug);

  if (!current) {
    return marketScoops.slice(0, limit);
  }

  return marketScoops
    .filter((scoop) => scoop.slug !== currentSlug)
    .filter((scoop) => scoop.tags.some((tag) => current.tags.includes(tag)))
    .slice(0, limit);
}

export function getAllTags(): string[] {
  const tags = new Set<string>();

  marketScoops.forEach((scoop) => {
    scoop.tags.forEach((tag) => tags.add(tag));
  });

  return Array.from(tags).sort();
}

export function formatMarketScoopDate(date: string): string {
  return new Date(date).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
}