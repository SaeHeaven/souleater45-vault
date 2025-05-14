import { InferenceClient } from "@huggingface/inference";

const client = new InferenceClient("hf_hf_pFMbEZtQNXWuWNlfGdBkOGRlMUtuJeacGk");

const chatCompletion = await client.chatCompletion({
    provider: "nebius",
    model: "mistralai/Mistral-Small-3.1-24B-Instruct-2503",
    messages: [
        {
            role: "user",
            content: [
                {
                    type: "text",
                    text: "Describe this image in one sentence.",
                },
                {
                    type: "image_url",
                    image_url: {
                        url: "https://cdn.britannica.com/61/93061-050-99147DCE/Statue-of-Liberty-Island-New-York-Bay.jpg",
                    },
                },
            ],
        },
    ],
});

console.log(chatCompletion.choices[0].message);