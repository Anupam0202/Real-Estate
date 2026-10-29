# Real Estate App

![Real Estate](https://i.ibb.co/jTW4bFC/image.png)

## Setup

The app reads listings from the [Bayut API on RapidAPI](https://rapidapi.com/apidojo/api/bayut). The API key is read on the server only and never shipped to the browser.

1. Copy `.env.example` to `.env.local` and set `RAPIDAPI_KEY`.
2. `npm install`, then `npm run dev`.

On Vercel, set `RAPIDAPI_KEY` under **Project Settings → Environment Variables**. The `dev` and `build` scripts enable Node's legacy OpenSSL provider and turn off its built-in `fetch`, which Next.js 11 needs on Node 17 and later.
