const OPEN_AI_API_KEY="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"


import { Configuration, OpenAIApi } from "openai"

const openAi = new OpenAIApi(
  new Configuration({
    apiKey: OPEN_AI_API_KEY,
  })
)



export const promptFunction=async(userPrompt,user)=>{
    const response = await openAi.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: userPrompt }],
    })
    console.log(response.data.choices[0].message.content)
return response.data.choices[0].message.content

}

// promptFunction("hello my name is edward. whats your name?",{})
