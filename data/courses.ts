import type { Course } from '@/types';

export const courses: Course[] = [
  {
    id: '1',
    slug: 'investing-fundamentals',
    title: 'Investing Fundamentals',
    description: 'Master the core concepts of investing with this comprehensive beginner course. Learn about asset classes, risk management, and how to start building wealth.',
    level: 'Beginner',
    duration: '4 hours',
    outcomes: [
      'Understand different asset classes and their characteristics',
      'Learn the relationship between risk and return',
      'Know how to open investment accounts in Nigeria',
      'Build a foundation for long-term wealth creation',
    ],
    modules: [
      {
        title: 'Introduction to Investing',
        lessons: ['What is investing?', 'Why invest?', 'The power of compound interest', 'Common investing myths'],
      },
      {
        title: 'Understanding Asset Classes',
        lessons: ['Stocks and equities', 'Bonds and fixed income', 'Money market instruments', 'Real estate and alternatives'],
      },
      {
        title: 'Risk and Return',
        lessons: ['Types of investment risk', 'Risk tolerance assessment', 'Diversification basics', 'Your risk profile'],
      },
      {
        title: 'Getting Started',
        lessons: ['Opening a brokerage account', 'Understanding CSCS', 'Your first investment', 'Building good habits'],
      },
    ],
    instructor: {
      name: 'Dr. Funke Adeyemi',
      title: 'Investment Educator',
      bio: 'Dr. Adeyemi has over 15 years of experience in wealth management and has taught thousands of Nigerians how to invest wisely.',
    },
    featured: true,
  },
  {
    id: '2',
    slug: 'nigerian-stock-market-masterclass',
    title: 'Nigerian Stock Market Masterclass',
    description: 'Dive deep into the Nigerian Exchange with this comprehensive course covering stock analysis, valuation, and portfolio construction.',
    level: 'Intermediate',
    duration: '6 hours',
    outcomes: [
      'Analyze Nigerian companies using fundamental analysis',
      'Understand financial statements and key ratios',
      'Identify value and growth opportunities on the NGX',
      'Build a diversified stock portfolio',
    ],
    modules: [
      {
        title: 'Understanding the NGX',
        lessons: ['History and structure', 'Market segments', 'Trading mechanics', 'Key indices'],
      },
      {
        title: 'Fundamental Analysis',
        lessons: ['Reading annual reports', 'Income statement analysis', 'Balance sheet deep dive', 'Cash flow analysis'],
      },
      {
        title: 'Valuation Methods',
        lessons: ['P/E ratio and multiples', 'Dividend discount model', 'Relative valuation', 'When stocks are cheap or expensive'],
      },
      {
        title: 'Portfolio Construction',
        lessons: ['Sector allocation', 'Position sizing', 'Rebalancing strategies', 'When to sell'],
      },
    ],
    instructor: {
      name: 'Chidi Okafor, CFA',
      title: 'Equity Analyst',
      bio: 'Chidi is a CFA charterholder with a decade of experience analyzing Nigerian equities for institutional investors.',
    },
    featured: true,
  },
  {
    id: '3',
    slug: 'fixed-income-investing',
    title: 'Fixed Income Investing in Nigeria',
    description: 'Learn how to invest in Treasury bills, FGN bonds, and corporate debt securities for stable returns.',
    level: 'Intermediate',
    duration: '5 hours',
    outcomes: [
      'Understand how the Nigerian bond market works',
      'Participate in T-bill auctions and secondary market',
      'Calculate bond yields and returns',
      'Build a fixed income portfolio strategy',
    ],
    modules: [
      {
        title: 'Fixed Income Basics',
        lessons: ['What is fixed income?', 'Types of bonds', 'Interest rates and prices', 'Yield concepts'],
      },
      {
        title: 'Treasury Bills',
        lessons: ['T-bill characteristics', 'Auction process', 'Secondary market', 'Calculating returns'],
      },
      {
        title: 'FGN Bonds',
        lessons: ['Bond features', 'FGN bond series', 'Savings bonds', 'Trading bonds'],
      },
      {
        title: 'Portfolio Strategy',
        lessons: ['Duration management', 'Laddering strategy', 'Credit considerations', 'Tax efficiency'],
      },
    ],
    instructor: {
      name: 'Ngozi Eze',
      title: 'Fixed Income Specialist',
      bio: 'Ngozi has managed fixed income portfolios for major Nigerian institutions and now shares her expertise with individual investors.',
    },
    featured: true,
  },
  {
    id: '4',
    slug: 'personal-finance-foundations',
    title: 'Personal Finance Foundations',
    description: 'Build a solid financial foundation before you invest. Learn budgeting, emergency funds, debt management, and financial goal setting.',
    level: 'Beginner',
    duration: '3 hours',
    outcomes: [
      'Create a budget that works for your lifestyle',
      'Build an emergency fund strategy',
      'Understand and manage debt effectively',
      'Set and achieve financial goals',
    ],
    modules: [
      {
        title: 'Money Mindset',
        lessons: ['Your relationship with money', 'Financial goals setting', 'Tracking net worth', 'Financial priorities'],
      },
      {
        title: 'Budgeting',
        lessons: ['Income vs expenses', 'Budgeting methods', 'Managing irregular income', 'Automating finances'],
      },
      {
        title: 'Emergency Fund',
        lessons: ['Why you need one', 'How much to save', 'Where to keep it', 'Building the habit'],
      },
      {
        title: 'Debt Management',
        lessons: ['Good debt vs bad debt', 'Payoff strategies', 'Interest rates', 'Staying debt-free'],
      },
    ],
    instructor: {
      name: 'Aisha Mohammed',
      title: 'Personal Finance Coach',
      bio: 'Aisha is a certified financial planner who has helped hundreds of Nigerians transform their financial lives.',
    },
    featured: false,
  },
  {
    id: '5',
    slug: 'mutual-funds-guide',
    title: 'Mutual Funds: The Complete Guide',
    description: 'Understand how mutual funds work in Nigeria, how to choose the right funds, and how to build a fund-based portfolio.',
    level: 'Beginner',
    duration: '3.5 hours',
    outcomes: [
      'Understand different types of mutual funds',
      'Evaluate fund performance and fees',
      'Choose funds aligned with your goals',
      'Build a diversified fund portfolio',
    ],
    modules: [
      {
        title: 'Mutual Fund Basics',
        lessons: ['What are mutual funds?', 'Types of funds', 'How funds are managed', 'NAV explained'],
      },
      {
        title: 'Nigerian Fund Landscape',
        lessons: ['SEC regulation', 'Major fund managers', 'Fund categories', 'Money market funds'],
      },
      {
        title: 'Fund Selection',
        lessons: ['Performance metrics', 'Fee analysis', 'Manager track record', 'Risk assessment'],
      },
      {
        title: 'Building Your Portfolio',
        lessons: ['Asset allocation with funds', 'Regular investment plans', 'Monitoring performance', 'When to switch funds'],
      },
    ],
    instructor: {
      name: 'Emeka Nwosu',
      title: 'Fund Analyst',
      bio: 'Emeka has analyzed mutual funds for over 8 years and helps investors navigate the Nigerian fund industry.',
    },
    featured: false,
  },
  {
    id: '6',
    slug: 'technical-analysis-basics',
    title: 'Technical Analysis Basics',
    description: 'Learn to read charts, identify patterns, and use technical indicators to inform your trading decisions.',
    level: 'Intermediate',
    duration: '4.5 hours',
    outcomes: [
      'Read and interpret price charts',
      'Identify common chart patterns',
      'Use technical indicators effectively',
      'Develop a systematic trading approach',
    ],
    modules: [
      {
        title: 'Chart Reading',
        lessons: ['Types of charts', 'Timeframes', 'Support and resistance', 'Trend identification'],
      },
      {
        title: 'Chart Patterns',
        lessons: ['Reversal patterns', 'Continuation patterns', 'Candlestick patterns', 'Volume analysis'],
      },
      {
        title: 'Technical Indicators',
        lessons: ['Moving averages', 'RSI and MACD', 'Bollinger Bands', 'Combining indicators'],
      },
      {
        title: 'Trading Strategy',
        lessons: ['Entry and exit rules', 'Risk management', 'Position sizing', 'Backtesting basics'],
      },
    ],
    instructor: {
      name: 'Kunle Adebayo',
      title: 'Technical Analyst',
      bio: 'Kunle has been trading Nigerian and international markets for 12 years using technical analysis.',
    },
    featured: false,
  },
  {
    id: '7',
    slug: 'real-estate-investing',
    title: 'Real Estate Investing in Nigeria',
    description: 'Explore real estate investment options from direct property ownership to REITs and real estate funds.',
    level: 'Advanced',
    duration: '5.5 hours',
    outcomes: [
      'Evaluate real estate investment opportunities',
      'Understand property valuation basics',
      'Explore REIT and fund options',
      'Manage real estate portfolio risks',
    ],
    modules: [
      {
        title: 'Real Estate Fundamentals',
        lessons: ['Why real estate?', 'Property types', 'Location analysis', 'Market cycles'],
      },
      {
        title: 'Direct Investment',
        lessons: ['Property selection', 'Financing options', 'Due diligence', 'Property management'],
      },
      {
        title: 'Indirect Investment',
        lessons: ['REITs explained', 'Real estate funds', 'Comparing options', 'Tax considerations'],
      },
      {
        title: 'Portfolio Integration',
        lessons: ['Allocation strategies', 'Risk management', 'Income vs appreciation', 'Exit strategies'],
      },
    ],
    instructor: {
      name: 'Bola Ogundimu',
      title: 'Real Estate Investor',
      bio: 'Bola has built a multi-property portfolio over 20 years and now teaches others to invest in Nigerian real estate.',
    },
    featured: false,
  },
  {
    id: '8',
    slug: 'global-market-investing',
    title: 'Investing in Global Markets',
    description: 'Learn how to diversify internationally, access US stocks, and manage currency risk as a Nigerian investor.',
    level: 'Advanced',
    duration: '5 hours',
    outcomes: [
      'Access international markets from Nigeria',
      'Understand currency risk and hedging',
      'Build a globally diversified portfolio',
      'Navigate regulatory requirements',
    ],
    modules: [
      {
        title: 'Why Go Global',
        lessons: ['Diversification benefits', 'Growth opportunities', 'Currency considerations', 'Risk factors'],
      },
      {
        title: 'Access Methods',
        lessons: ['Nigerian brokers with global access', 'International platforms', 'ETFs and funds', 'Regulatory compliance'],
      },
      {
        title: 'Market Selection',
        lessons: ['US markets', 'European markets', 'Emerging markets', 'Sector opportunities'],
      },
      {
        title: 'Portfolio Management',
        lessons: ['Global allocation', 'Currency management', 'Rebalancing', 'Tax implications'],
      },
    ],
    instructor: {
      name: 'Olumide Adeyemi',
      title: 'Global Markets Strategist',
      bio: 'Olumide advises Nigerian high-net-worth individuals on international investment strategies.',
    },
    featured: false,
  },
];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((course) => course.slug === slug);
}

export function getFeaturedCourses(limit: number = 3): Course[] {
  return courses.filter((course) => course.featured).slice(0, limit);
}

export function getCoursesByLevel(level: Course['level']): Course[] {
  return courses.filter((course) => course.level === level);
}
