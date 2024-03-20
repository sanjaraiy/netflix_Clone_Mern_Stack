# Netflix Clone Using MERN Stack


## Create React App :-
```
npx create-react-app project_name
```

## Tailwind Setup :-
1) Install Tailwind CSS
```
npm install -D tailwindcss
npx tailwindcss init
```

2) Configure your template paths
```
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
3) Add the Tailwind directives to your CSS
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Install React-router-Dom :-
```
npm i react-router-dom
```

## Install React Icons :-
```
npm install react-icons
```