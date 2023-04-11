class Graph {
    constructor(){
        this.adjList = {};
    }

    createGraph(edges) {
        for (const edge of edges) {
            this.adjList[edge[0]]? this.adjList[edge[0]].push(edge[1]) : this.adjList[edge[0]] = [edge[1]];
            this.adjList[edge[1]]? this.adjList[edge[1]].push(edge[0]) : this.adjList[edge[1]] = [edge[0]];
        }
    }

    findPath(source, dest) {
        const stack = [];
        let visited = [];
        stack.push(source);
        visited[source] = true;

        while(stack.length) {
            const current = stack.pop();
            if(current === dest) 
                return true;

            for(let vertex of this.adjList[current]) {
                if (!visited[vertex]) {
                    stack.push(vertex);
                    visited[vertex] = true;
                }
            }
        }

        return false;
    }
}

const edges = [[0,1],[0,2],[3,5],[5,4],[4,3]];
const source = 0;
const dest = 5;
const g = new Graph();
g.createGraph(edges);
console.log(g);

console.log(g.findPath(source, dest)); //false
