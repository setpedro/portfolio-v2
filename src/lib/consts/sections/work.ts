export const workData = [
    {
        id: "loris-tools",
        name: "loris.tools",
        role: "founding engineer",
        link: "https://loris.tools",
        logo: "/loris-tools.png",
        logoAlt: "loris.tools logo",
        description:
            "crypto derivatives data platform for perps analytics across funding, open interest, volume, liquidations, order-book depth, options and RWA",
        results: ["~50k MAU", "40+ exchanges", "paid API + subs"],
        details: [
            "rebuilt the frontend, making it dramatically faster and grew it to ~50k monthly users",
            "built the paid API + subscription product, turning free traction into paying users",
            "expanded the product with new dashboards and data pipelines across 40+ exchanges",
        ],
        stack: ["Python", "Next.js", "Django", "AWS", "Vercel"],
        timeline: "Oct 2025 - Present",
    },
    {
        id: "private-client",
        name: "client work",
        role: "systems engineer",
        link: null,
        logo: "/private-client.svg",
        logoAlt: null,
        description: "trading systems & bots for private crypto clients",
        results: ["real-time", "automated execution"],
        details: [
            "cross-exchange funding-rate arbitrage bot, delivered end to end and iterated on",
            "low-latency Solana execution infrastructure with real-time on-chain detection",
        ],
        stack: ["Python", "Solana", "exchange & DEX APIs"],
        timeline: "2025 - Present",
    },
    {
        id: "vinuchain",
        name: "vinuchain",
        role: "frontend developer",
        link: null,
        logo: "/vinuchain.svg",
        logoAlt: "vinuchain logo",
        description:
            "onchain rewards dApp for VinuChain — gas-monetization program letting dapps earn from the gas they generate",
        results: ["smart-contract integration", "gas monetization"],
        details: [],
        stack: ["Next.js", "Solidity"], // ⚠️ confirm — add your contract lib (ethers/wagmi/web3.js) if you want
        timeline: "Nov 2024",
    },
];

export type WorkEntry = (typeof workData)[number];
