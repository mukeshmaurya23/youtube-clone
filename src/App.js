import React from "react";
import Header from "./components/pages/Header";
import Body from "./components/pages/Body";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/pages/MainContainer";
import WatchPage from "./components/pages/WatchPage";
import SearchResultVideo from "./components/pages/SearchResultVideo";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <div>
          <Header />
        </div>
        <Body />
      </>
    ),
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch", //{parentPath}/watch
        element: <WatchPage />,
      },
      {
        path: "results/:searchQuery",
        element: <SearchResultVideo />,
      },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
/*



 
          
              <Header />
              <Body />
                <Sidebar />
                <MainContent />
                   <ButtonList />
                   <VideoCard />
          
          */
