import React from "react";

function Layout({ children }) {
  return (
    <div>
      <header>
        <nav>
          {children}
        </nav>
      </header>
      <main>
        {children[1]}
      </main>
      <footer>
        © 2023 My Website
      </footer>
    </div>
  );
}

function App() {
  return (
    <Layout>
      <h1>My Website</h1>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      <p>Welcome to my website!</p>
    </Layout>
  );
}

export default App;

// import React from "react";

// function Button({ onClick, children }) {
//   return (
//     <button onClick={onClick}>
//       {children}
//     </button>
//   );
// }

// function App() {
//   function handleClick() {
//     alert("Button clicked!");
//   }

//   return (
//     <div>
//       <Button onClick={handleClick}>
//         Click me!
//       </Button>
//     </div>
//   );
// }

// export default App;