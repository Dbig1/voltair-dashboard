const askAI = async () => {
  const res = await fetch("/api/ai", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      prompt: "Analyze VoltAir system efficiency trends",
    }),
  });

  const data = await res.json();
  console.log(data.response);
};
