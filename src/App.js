import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    if (value === "C") {
      setInput("");
      setResult("");
    } else if (value === "=") {
      try {
        const evalResult = eval(input);
        setResult(evalResult);
      } catch {
        setResult("Error");
      }
    } else {
      setInput(input + value);
    }
  };

  const buttons = [
    "7", "8", "9", "/", 
    "4", "5", "6", "*", 
    "1", "2", "3", "-", 
    "0", ".", "%", "+", 
    "C", "="
  ];

  return (
    <motion.div
      className="flex items-center justify-center min-h-screen bg-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Card className="w-80 shadow-2xl rounded-2xl p-4 bg-white">
        <CardContent>
          <div className="mb-4">
            <div className="text-right text-2xl font-mono">{input || "0"}</div>
            <div className="text-right text-gray-500">{result ? `= ${result}` : ""}</div>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {buttons.map((btn) => (
              <Button
                key={btn}
                variant={btn === "=" ? "default" : "outline"}
                className="text-xl p-4 rounded-2xl"
                onClick={() => handleClick(btn)}
              >
                {btn}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
