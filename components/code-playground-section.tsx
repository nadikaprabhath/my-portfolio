"use client"

import { useState } from "react"
import { Play, Copy, Terminal } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CodePlaygroundSection() {
  const [activeTab, setActiveTab] = useState("algorithms")

  const codeExamples = {
    algorithms: {
      title: "Algorithm Visualization",
      code: `// Binary Search Implementation
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  
  return -1;
}

// Example usage
const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15];
const result = binarySearch(sortedArray, 7);
console.log(\`Found at index: \${result}\`);`,
      language: "javascript",
    },
    react: {
      title: "React Hook Example",
      code: `// Custom Hook for API calls
import { useState, useEffect } from 'react';

function useApi(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

// Usage in component
function UserProfile({ userId }) {
  const { data: user, loading, error } = useApi(\`/api/users/\${userId}\`);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}`,
      language: "javascript",
    },
    nodejs: {
      title: "Next.js API Route",
      code: `// Next.js API Route with middleware
import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

// Authentication middleware
function authenticateToken(request: NextRequest) {
  const authHeader = request.headers.get('authorization');
  const token = authHeader?.split(' ')[1];

  if (!token) {
    return null;
  }

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET!);
    return user;
  } catch (error) {
    return null;
  }
}

// Protected API route
export async function GET(request: NextRequest) {
  try {
    const user = authenticateToken(request);
    
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Fetch user profile from database
    const userProfile = await getUserById(user.id);
    
    return NextResponse.json({
      id: userProfile.id,
      username: userProfile.username,
      email: userProfile.email,
      createdAt: userProfile.createdAt
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Server error' }, 
      { status: 500 }
    );
  }
}`,
      language: "javascript",
    },
  }

  const terminalCommands = [
    { command: "npm create next-app@latest my-portfolio", output: "Creating a new Next.js app..." },
    { command: "cd my-portfolio && npm run dev", output: "Starting development server on http://localhost:3000" },
    { command: 'git add . && git commit -m "Initial commit"', output: "Changes committed successfully!" },
  ]

  return (
    <section id="code-playground" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Code <span className="gradient-text">Playground</span>
          </h2>
          <p className="text-[#8B949E] text-lg">Interactive code examples and terminal demonstrations</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Code Examples */}
          <div>
            <div className="flex gap-2 mb-4">
              {Object.entries(codeExamples).map(([key, example]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeTab === key ? "bg-[#58A6FF] text-white" : "bg-[#21262D] text-[#8B949E] hover:text-[#58A6FF]"
                  }`}
                >
                  {example.title}
                </button>
              ))}
            </div>

            <div className="code-block">
              <div className="flex items-center justify-between px-4 py-2 bg-[#21262D] border-b border-[#30363D]">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="w-3 h-3 rounded-full bg-[#F85149]" />
                    <div className="w-3 h-3 rounded-full bg-[#F2CC60]" />
                    <div className="w-3 h-3 rounded-full bg-[#3FB950]" />
                  </div>
                  <span className="text-[#8B949E] text-sm ml-2">
                    {codeExamples[activeTab as keyof typeof codeExamples].language}
                  </span>
                </div>
              </div>
              <div className="p-4 overflow-x-auto">
                <pre className="text-sm">
                  <code className="text-[#F0F6FC] font-mono whitespace-pre">
                    {codeExamples[activeTab as keyof typeof codeExamples].code}
                  </code>
                </pre>
              </div>
            </div>

            <div className="flex gap-2 mt-4">
              <Button size="sm" className="bg-[#3FB950] hover:bg-[#2EA043]">
                <Play size={16} className="mr-2" />
                Run Code
              </Button>
              <Button size="sm" variant="outline" className="border-[#58A6FF] text-[#58A6FF] bg-transparent">
                <Copy size={16} className="mr-2" />
                Copy
              </Button>
            </div>
          </div>

          {/* Terminal Window */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#58A6FF]">Terminal Commands</h3>
            <div className="code-block">
              <div className="flex items-center justify-between px-4 py-2 bg-[#21262D] border-b border-[#30363D]">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="w-3 h-3 rounded-full bg-[#F85149]" />
                    <div className="w-3 h-3 rounded-full bg-[#F2CC60]" />
                    <div className="w-3 h-3 rounded-full bg-[#3FB950]" />
                  </div>
                  <span className="text-[#8B949E] text-sm ml-2">Terminal</span>
                </div>
              </div>
              <div className="p-4 h-64 overflow-y-auto bg-[#0D1117] font-mono text-sm">
                {terminalCommands.map((cmd, index) => (
                  <div key={index} className="mb-4">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[#3FB950]">$</span>
                      <span className="text-[#F0F6FC]">{cmd.command}</span>
                    </div>
                    <div className="text-[#8B949E] ml-4">{cmd.output}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 glass-effect rounded-lg p-6">
              <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Terminal size={20} className="text-[#58A6FF]" />
                Quick Commands
              </h4>
              <div className="space-y-2 text-sm font-mono">
                <div className="flex items-center gap-2">
                  <span className="text-[#3FB950]">$</span>
                  <span className="text-[#8B949E]">npm install</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#3FB950]">$</span>
                  <span className="text-[#8B949E]">npm run build</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#3FB950]">$</span>
                  <span className="text-[#8B949E]">npm run test</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#3FB950]">$</span>
                  <span className="text-[#8B949E]">git push origin main</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
