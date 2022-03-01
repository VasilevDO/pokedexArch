import OnePokeStandart from "../components/Models/OnePokeStandart"
import axios from 'axios';

export default class CardService {
    static async getAll(limit=24, page=1) {

        const response=await axios.get('https://pokeapi.co/api/v2/pokemon', {
            params: {
                limit: limit,
                offset: (page-1)*limit
            }
        })
        const {count,results}=response.data
        const fullyLoaded=await Promise.all(results.map(async (u)=> {
            return await axios.get(u.url).then(resp=>resp.data)
        }))
        const abstractedFullyLoaded=fullyLoaded.map((u)=>{
            return new OnePokeStandart(u)
        })

        return [abstractedFullyLoaded, count]
        
    }

    static async getById(id) {
        const response=await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        return response
    }

    static async preload(count) {
        const response=await axios.get(`https://pokeapi.co/api/v2/pokemon`, {
            params: {
                limit: count,
            }
        })
        return response
    }

}