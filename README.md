⚡ VoltAir Dashboard
VoltAir is an AI-powered wireless energy intelligence prototype designed to demonstrate real-time grid insights, system efficiency, and future-ready energy orchestration.
This repository contains a working dashboard prototype built for live demos, investor discussions, and rapid iteration using Next.js + Vercel AI Gateway.

🌍 What This Project Represents
VoltAir is not just a dashboard — it is a signal.

It showcases how:

Wireless energy systems can be monitored, analyzed, and optimized

AI can provide real-time intelligence for energy infrastructure

A future energy ecosystem can be visualized before full hardware deployment

This prototype is intentionally designed to look and behave like a production-grade energy intelligence platform.

🚀 Key Features

📊 Real-Time Metrics (Demo)
Visual placeholders for:
Wireless Transfer Efficiency
Grid Load Distribution
System Performance Signals

🤖 AI-Ready Architecture
Integrated with Vercel AI SDK for:
Streaming insights
Future predictive analytics
AI-generated summaries & recommendations

⚡ Modern Tech Stack
Next.js (App-ready)
React
Tailwind CSS
Vercel AI Gateway
TypeScript

☁️ Instant Cloud Deployment
Designed for seamless deployment on Vercel
Environment-based key management

🧠 Architecture Overview
Copy code

voltair-dashboard/
│
├─ public/                # Static assets
├─ src/
│   ├─ components/        # Dashboard UI components
│   ├─ pages/             # Next.js pages
│   └─ styles/            # Global styles
│
├─ .gitignore
├─ package.json
├─ tsconfig.json
└─ README.md

🛠️ Getting Started (Local)

1️⃣ Clone the repository
Copy code
Bash
git clone https://github.com/Dbig1/voltair-dashboard.git
cd voltair-dashboard

2️⃣ Install dependencies
Copy code
Bash
npm install

3️⃣ Create environment file
Copy code
Bash
touch .env.local

Add:
Copy code
Env
AI_GATEWAY_API_KEY=your_vercel_ai_gateway_key

⚠️ .env.local is ignored by Git for security.

4️⃣ Run the development server
Copy code
Bash
npm run dev

Open:
Copy code
http://localhost:3000

☁️ Deployment (Vercel)
Import this repository into Vercel
Set environment variable:
Copy code

AI_GATEWAY_API_KEY
Deploy
You’ll receive a live URL such as:
Copy code

https://voltair-dashboard.vercel.app

🎯 Use Cases
Investor demos & pitch validation
Proof-of-concept for wireless energy intelligence
AI + Energy storytelling
UI foundation for future hardware integration
Research & strategic partnerships

🔒 Security & Ethics
No real grid or energy infrastructure is connected
All metrics are simulated for demonstration
No sensitive or proprietary data is collected

📌 Roadmap (Preview)
Live AI-generated system insights
Predictive load modeling
Scenario simulation (grid stress, outages, optimization)
Multi-region energy visualization
Investor-ready analytics export (PDF / slides)

👤 Author
Precious Tsoritse
Founder – VoltAir
Energy Intelligence · AI Systems · Future Infrastructure

⚡ Final Note
VoltAir is built to signal readiness, not perfection.
This dashboard exists to open conversations, attract alignment, and prove capability before scale.
