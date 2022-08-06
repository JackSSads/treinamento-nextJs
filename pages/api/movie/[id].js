import { api_base, api_key } from "../../../lib/tmdb";

export default async (req, res) => {
    const result = await fetch(`${api_base}/movie/${req.query.id}?api_key=${api_key}&language=pt-BR`);
    const json = await result.json();

    res.status(200).json({
        info:  json,
    });
};