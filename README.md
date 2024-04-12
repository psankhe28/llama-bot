# 💬 Llama 2 ChatBot

This chatbot is created using the open-source Llama 2 LLM model from Meta. Particularly, we're using the [**Llama2-7B**](https://replicate.com/a16z-infra/llama7b-v2-chat) model deployed by the Andreessen Horowitz (a16z) team and hosted on the [Replicate](https://replicate.com/) platform.

## Demo App

- [Link](https://llama-bot.netlify.app/)

- [API](https://llama-bot-75qx.onrender.com/)

## Getting your own Replicate API token

To use this app, you'll need to get your own [Replicate](https://replicate.com/) API token. After signing up to Replicate, you can access your API token from [this page](https://replicate.com/account/api-tokens).

## Run Locally

Clone the project

```bash
  git clone https://github.com/psankhe28/llama-bot
```

Go to the project directory

```bash
  cd llama-bot
```

Install dependencies

1. Frontend

```bash
  cd frontend
  npm install
```

Open it in the browser

```bash
  npm start
```

2. Backend

```bash
  cd backend
  npm install
```

Run the server

Then, add Replicate API token to `.env`

```bash
  REPLICATE_API_TOKEN = "your_api_token"
```

```bash
  npm start
```

## Technologies Used
`HTML`
`CSS`
`JavaScript`
`React.js`
`Nodejs`
`Express`

## Model Used

[**Llama2-7B**](https://replicate.com/a16z-infra/llama7b-v2-chat)
