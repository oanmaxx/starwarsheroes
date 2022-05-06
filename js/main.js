var app = new Vue({
    el: '#app',
    data: {
        heroes: [],
        allHeroes: [],
        searchText: ''
    },
    created: function () {
        axios.get("https://swapi.dev/api/people/?format=json").then(response => this.heroesResult(response));
    },
    methods: {
        heroesResult:function(response) {
            console.log(response);
            this.heroes = response.data.results;
            this.allHeroes = response.data.results;
        },
        search: function() {
            console.log(this.searchText);
            if (this.searchText === '') {
                this.heroes = this.allHeroes;
            } else {
                sortedHeroes = [];
                this.allHeroes.forEach(element => {
                    if (element.name.includes(this.searchText)) {
                        sortedHeroes.push(element);
                    }
                });
                this.heroes = sortedHeroes;
            }
        }
    }
})