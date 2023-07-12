import {
  ChatCompletionResponseMessage,
  CreateChatCompletionResponse,
  CreateSearchResponseDataInner,
} from "openai";
import { openai } from "./openai";
import { NextResponse } from "next/server";

export const clientQuery = async (
  text: string,
  setResponse: Function,
  setLoading: Function
) => {
  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(text),
  };
  setLoading(true);
  try {
    const response = await fetch("/api/", config);
    if (response) {
      const { data } = await response.json();
      console.log(data);
      setLoading(false);
      setResponse(JSON.parse(data));
    }
  } catch (error) {
    console.log(error);
  }
  setLoading(false);
};

export const serverQuery = async (userInput: string) => {
  const userMsg = prompt(userInput);
  try {
    const chat_completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: userMsg }],
      temperature: 0,
    });
    const data = chat_completion.data.choices[0].message.content;
    if (data && data[0] == "ERROR") {
      throw new Error("Invalid query");
    }
    return data;
  } catch (error) {
    console.log(error);
  }
};

const prompt = (task: string) => `
Your job is to help users break their tasks down into many small steps. Simplify it as much as possible, including at least 10 steps for each request.
For the client side to format your response, please reply in an array of string with each step as a string in the array.
ie. ["This is the first", "this is the second", "this is the third"]. do not include any newlines characters. Do not label the steps with numbers.
If you cannot process the request for any reason, or have recieved vulgar input, simply return ["ERROR"]
The task is ${task}
`;
