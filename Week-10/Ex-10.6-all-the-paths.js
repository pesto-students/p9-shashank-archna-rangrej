class Graph {
    constructor(){
        this.adjList = {};
    }

    createGraph(edges) {
        for(let i=0; i<edges.length; i++) {
            this.adjList[i] = edges[i];
        }
    }

    getAllThePath(edges) {
        const stack = [];
        let result = [];
        stack.push(0);
        const dfs = (node) => {
            if (node === edges.length -1) {
                result.push(stack.slice(0));
            } else {
                for(let vertex of edges[node]) {
                    stack.push(vertex);
                    dfs(vertex);
                    stack.pop();
                }

                
            }
        }
        dfs(0);

        return result;
    }
}

const edges = [[4,3,1],[3,2,4],[3],[4],[]];
const g = new Graph();
g.createGraph(edges);
console.log(g);

console.log(g.getAllThePath(edges)); //false
