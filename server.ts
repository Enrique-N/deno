import { serve } from 'https://deno.land/std@0.100.0/http/mod.ts';
import { bgYellow, bold, red } from "https://deno.land/std/fmt/colors.ts";

const PORT = 8000;
const app = serve({ port: PORT });

for await (let req of app) {
    const resp = new URL(`${req.url}`, `http://localhost:${PORT}`);
    let frase = resp.searchParams.get('frase');
    let body = frase === null ? " " : frase.split(' ').join(' ');
    let time = new Date().toLocaleString() + " " + body;
    console.log(bgYellow(bold(red(time))));
    req.respond({ body: time });
};