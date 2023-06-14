

const parent = React.createElement('div', { id: "parent" },
    [ React.createElement('div', { id: "child" },
        [React.createElement('h1', {}, "This is a h1 heading"),
        React.createElement('h2', {}, "This is h2 heading"),
        React.createElement('p', {}, "This is a paragraph")
        ],
),
React.createElement('div', { id: "child1" },
        [React.createElement('h1', {}, "This is a h1 heading"),
        React.createElement('h2', {}, "This is h2 heading"),
        React.createElement('p', {}, "This is a paragraph")
        ],
)]);


const heading = React.createElement('h1', { id: 'heading', "xyz": 'abc' }, " Hello World from React!");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
console.log(parent)