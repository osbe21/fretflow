import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import IndexPage from "./pages/Index/IndexPage";
import PracticePage from "./pages/Practice/PracticePage";
import PracticeMenuPage from "./pages/PracticeMenu/PracticeMenuPage";
import "./assets/index.css";

// Step 1:
//     Lær alle naturlige noter på lav-E streng
//
// Step 2:
//     Lær alle naturlige noter på A streng
//
// Step 3:
//     TBC

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                index: true,
                element: <IndexPage />,
            },
            {
                path: "practice",
                children: [
                    {
                        index: true,
                        element: <PracticeMenuPage />,
                    },
                    {
                        path: ":practiceStep",
                        element: <PracticePage />,
                    },
                ],
            },
        ],
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
