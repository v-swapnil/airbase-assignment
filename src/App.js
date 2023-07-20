import { useEffect, useState } from "react";
import "./App.css";
import { LoadingBlock } from "./components/LoadingBlock";

const loaderConfig = [
  { type: "circle", radius: 100, spacing: 12 },
  { type: "rect", count: 2, width: 200, height: 20, spacing: 4 },
  { type: "rect", width: 150, height: 20 },
];

const anotherLoaderConfig = [
  { type: "rect", width: 200, height: 100, spacing: 12 },
  { type: "rect", count: 2, width: 300, height: 20, spacing: 4 },
  { type: "rect", width: 250, height: 20 },
];

function CardComponent() {
  return (
    <div className="user-card">
      <img src="https://picsum.photos/200/300" alt="Lorem Ipsum" />
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </div>
  );
}

function AnotherCardComponent() {
  return (
    <div className="user-card-square">
      <img src="https://picsum.photos/200/300" alt="Lorem Ipsum" />
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </div>
  );
}

function App() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="App">
      <h1>Airbase Assignment</h1>
      <div className="test-layout">
        <LoadingBlock
          className="user-card"
          isLoading={isLoading}
          config={loaderConfig}
          component={<CardComponent />}
        />
        <LoadingBlock
          className="user-card-square"
          isLoading={isLoading}
          config={anotherLoaderConfig}
          component={<AnotherCardComponent />}
        />
      </div>
    </div>
  );
}

export default App;
