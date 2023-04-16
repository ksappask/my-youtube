import "./App.css";
import Head from "./components/Head";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import Demo from "./components/Demo";
import Demo2 from "./components/Demo2";
import Search from "./components/Search";
import { Helmet } from "react-helmet";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
      {
        path: "demo",
        element: (
          <>
            <Demo /> <Demo2 />
          </>
        ),
      },
      {
        path: "search",
        element: <Search />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <>
        <Helmet>
          <title>My Youtube</title>
        </Helmet>
        <RouterProvider router={appRouter}></RouterProvider>
      </>
    </Provider>
  );
}

export default App;
