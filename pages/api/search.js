import { api_base, api_key } from "../../lib/tmdb";

export default async (req, res) => {
    const result = await fetch(`${api_base}/search/movie?api_key=${api_key}&language=pt-BR&query=${req.query.query}`);
    const json = await result.json();

    res.status(200).json({
        list:  json.results,
    });
};