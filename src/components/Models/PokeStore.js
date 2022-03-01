import axios from 'axios'
import OnePokeStandart from './OnePokeStandart'

const PokeStore={
    all: [],

    getPokes: async function (limit, page, filter) {
        if (!this.all.length){
            await PokeStore.init() 
        }

        const filteredAll=[...this.all].filter(el=>~el.name.indexOf(filter.query))



        function fff(a,b){
            const fA=a[filter.sort]
            const sA=b[filter.sort]
            if (Number(fA)&&Number(sA)) {
                return Number(fA)>Number(sA)?1:-1;
            } else if (typeof fA==='string'&&typeof sA==='string') {
                return fA.localeCompare(sA)
            }
        }

        const sortedAll=[...filteredAll].sort(fff)

        let s=limit*(page-1)
        let po=limit*page

        const toRender=await Promise.all(sortedAll.slice(s, po).map(async (element,index) => {
            
            if (element.id) {
                return element
            } else {
                const flEl=await axios.get(element.url).then(resp=>resp.data)
                
                const newFlEl=new OnePokeStandart(flEl)
                
                this.all[s+index]=newFlEl
                return newFlEl
            }
            
        }));     
        


        return [toRender,sortedAll.length]
    },

    init: async function() {
        if (!this.all.lenght){
            const one=await axios.get('https://pokeapi.co/api/v2/pokemon',{
                params: {
                    limit: 1,
                }
            })
            const countAll=one.data.count


            const response=await axios.get('https://pokeapi.co/api/v2/pokemon', {
                params: {
                    limit: countAll,
                }
            })  
            this.all=response.data.results
            
        }
    },

    getCatchedPokes: async function (limit, page, filter) {
        if (!this.all.length){
            await PokeStore.init() 
            return []
        }

        const catchedAllPokemons=[...this.all].filter(el=>el.catched)

        const filteredAll=catchedAllPokemons.filter(el=>~el.name.indexOf(filter.query))



        function fff(a,b){
            const fA=a[filter.sort]
            const sA=b[filter.sort]
            if (Number(fA)&&Number(sA)) {
                return Number(fA)>Number(sA)?1:-1;
            } else if (typeof fA==='string'&&typeof sA==='string') {
                return fA.localeCompare(sA)
            }
        }

        const sortedAll=[...filteredAll].sort(fff)

        let s=limit*(page-1)
        let po=limit*page

        let nema= sortedAll.slice(s, po).filter((u) => !u.id)

        if (nema.length!==0) {
            await Promise.all(nema.map(async (element) => {
                const flEl=await axios.get(element.url).then(resp=>resp.data)
                const newFlEl=new OnePokeStandart(flEl)
                
                const index=sortedAll.indexOf(element)
                
                sortedAll[index]=newFlEl
                
            }));    
        }   

        return [sortedAll.slice(s, po), sortedAll.length]
    },

    changeCatched: function (id) {
        const poke=this.all.find(u=>u.id==id)
        poke.catched=poke.catched?false:true;
        
        return poke
    },

    getOnePoke: async function (id) {
        


        return 
    },

}

export default PokeStore

  