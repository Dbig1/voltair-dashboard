#!/usr/bin/env node
/**
 * VoltAir Automated Vercel Deployment Script
 * Author: Precious Tsoritse
 * Purpose: Deploy voltair-dashboard repo to Vercel with AI Gateway key
 */

const { execSync } = require("child_process");

// --- CONFIGURATION ---
const PROJECT_NAME = "voltair-dashboard";
const TEAM_NAME = "precious-tsoritse-s-projects"; // Your Vercel team
const AI_KEY = "vck_29GkKcQeHVPpIYV4j0c62HrsSumb7UqRsrj1wo8v1GkgxtdRDN2Dv5vO"; // VoltAir API Key

try {
  console.log("\n🔹 Checking Vercel CLI installation...");
  execSync("vercel --version", { stdio: "inherit" });

  console.log("\n🔹 Setting AI_GATEWAY_API_KEY in Vercel...");
  execSync(`vercel env add AI_GATEWAY_API_KEY production`, { stdio: "inherit" });
  console.log(`Value for AI_GATEWAY_API_KEY:\n${AI_KEY}`);
  console.log("✅ Environment variable set!");

  console.log("\n🔹 Linking project to Vercel...");
  execSync(`vercel link --name ${PROJECT_NAME} --team ${TEAM_NAME}`, { stdio: "inherit" });

  console.log("\n🔹 Deploying VoltAir Dashboard...");
  execSync(`vercel --prod`, { stdio: "inherit" });

  console.log("\n🎉 Deployment complete! Visit your live app at https://voltair-dashboard.vercel.app");

} catch (err) {
  console.error("\n❌ Deployment failed. Details:", err.message);
}
