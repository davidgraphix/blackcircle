import type { Guide } from '@/types';

export const guides: Guide[] = [
  // Start Here
  {
    id: '1',
    slug: 'what-is-investing',
    title: 'What is Investing?',
    summary: 'A beginner-friendly introduction to the concept of investing, why it matters, and how to think about growing your money over time.',
    content: `Investing is the act of putting money into assets with the expectation that they will grow in value or generate income over time. This guide introduces the fundamental concepts every new investor should understand.`,
    category: 'start-here',
    readTime: 8,
  },
  {
    id: '2',
    slug: 'understanding-nigerian-financial-markets',
    title: 'Understanding Nigerian Financial Markets',
    summary: 'An overview of Nigeria\'s key financial markets including the stock exchange, money market, and bond market.',
    content: `Nigeria has a well-developed financial market ecosystem. This guide provides an overview of the main markets where Nigerians can invest their money.`,
    category: 'start-here',
    readTime: 12,
  },
  {
    id: '3',
    slug: 'how-to-open-investment-accounts',
    title: 'How to Open Investment Accounts in Nigeria',
    summary: 'Step-by-step guide to opening brokerage accounts, CSCS accounts, and accessing Treasury bill investments.',
    content: `Before you can start investing, you need the right accounts. This guide walks you through the process of setting up the accounts you need to begin your investment journey.`,
    category: 'start-here',
    readTime: 10,
  },
  {
    id: '4',
    slug: 'understanding-risk-and-return',
    title: 'Understanding Risk and Return',
    summary: 'Learn the fundamental relationship between risk and potential returns, and how to think about risk in your investment decisions.',
    content: `Risk and return are two sides of the same coin in investing. This guide helps you understand this critical relationship and how it applies to Nigerian investment options.`,
    category: 'start-here',
    readTime: 9,
  },
  // Intermediate
  {
    id: '5',
    slug: 'treasury-bills-complete-guide',
    title: 'Treasury Bills: A Complete Guide',
    summary: 'Everything you need to know about investing in Nigerian Treasury bills, from auctions to secondary market trading.',
    content: `Treasury bills are one of the safest and most popular investment options in Nigeria. This comprehensive guide covers everything from how auctions work to calculating your returns.`,
    category: 'intermediate',
    readTime: 15,
  },
  {
    id: '6',
    slug: 'analyzing-nigerian-stocks',
    title: 'Analyzing Nigerian Stocks',
    summary: 'Learn fundamental and technical analysis techniques tailored for stocks listed on the Nigerian Exchange.',
    content: `Successful stock investing requires the ability to analyze companies and their prospects. This guide introduces analysis frameworks relevant to Nigerian listed companies.`,
    category: 'intermediate',
    readTime: 18,
  },
  {
    id: '7',
    slug: 'mutual-funds-and-collective-investments',
    title: 'Mutual Funds and Collective Investments',
    summary: 'Understanding unit trusts, mutual funds, and ETFs available to Nigerian investors.',
    content: `For investors who prefer professional management or want instant diversification, collective investment schemes offer an attractive option. This guide explains the landscape in Nigeria.`,
    category: 'intermediate',
    readTime: 14,
  },
  {
    id: '8',
    slug: 'building-your-first-portfolio',
    title: 'Building Your First Portfolio',
    summary: 'A practical guide to constructing a diversified investment portfolio suited to your goals and risk tolerance.',
    content: `Asset allocation and portfolio construction are critical skills for any investor. This guide provides a practical framework for building your first portfolio.`,
    category: 'intermediate',
    readTime: 16,
  },
  // Advanced
  {
    id: '9',
    slug: 'fgn-bonds-and-fixed-income-strategy',
    title: 'FGN Bonds and Fixed Income Strategy',
    summary: 'Advanced concepts in bond investing including duration, yield curves, and constructing a fixed income portfolio.',
    content: `Federal Government of Nigeria bonds offer attractive yields and portfolio diversification benefits. This guide covers advanced concepts for sophisticated fixed income investors.`,
    category: 'advanced',
    readTime: 20,
  },
  {
    id: '10',
    slug: 'international-diversification',
    title: 'International Diversification for Nigerians',
    summary: 'How to access global markets, manage currency risk, and build a truly diversified portfolio.',
    content: `Diversifying beyond Nigeria can reduce portfolio risk and provide access to global growth opportunities. This guide covers the practical and regulatory aspects of international investing.`,
    category: 'advanced',
    readTime: 22,
  },
  {
    id: '11',
    slug: 'real-estate-investment-strategies',
    title: 'Real Estate Investment Strategies',
    summary: 'From direct ownership to REITs: understanding real estate investment options in Nigeria.',
    content: `Real estate has long been a favored asset class for Nigerian investors. This guide explores various approaches from direct investment to real estate investment trusts.`,
    category: 'advanced',
    readTime: 18,
  },
  {
    id: '12',
    slug: 'tax-efficient-investing',
    title: 'Tax-Efficient Investing in Nigeria',
    summary: 'Understanding the tax implications of different investments and strategies to optimize after-tax returns.',
    content: `Taxes can significantly impact your investment returns. This guide covers the tax treatment of various investments in Nigeria and strategies for tax-efficient portfolio management.`,
    category: 'advanced',
    readTime: 16,
  },
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((guide) => guide.slug === slug);
}

export function getGuidesByCategory(category: Guide['category']): Guide[] {
  return guides.filter((guide) => guide.category === category);
}

export const guideCategories = [
  { id: 'start-here', label: 'Start Here', description: 'Essential foundations for new investors' },
  { id: 'intermediate', label: 'Intermediate', description: 'Deepen your investment knowledge' },
  { id: 'advanced', label: 'Advanced', description: 'Sophisticated strategies and concepts' },
] as const;
