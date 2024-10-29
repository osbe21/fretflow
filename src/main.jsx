import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import IndexPage from "./pages/Index/IndexPage";
import PracticePage from "./pages/Practice/PracticePage";
import PracticeMenuPage from "./pages/PracticeMenu/PracticeMenuPage";
import "./index.css";

const practiceSteps = {
    "step-1": Array(3)
        .fill(["A", "B", "C", "D", "E", "F", "G"])
        .flat()
        .map((note) => ({
            note,
            string: 5,
        })),
};

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
                        path: "step-1",
                        element: (
                            <PracticePage noteList={practiceSteps["step-1"]} />
                        ),
                    },
                    {
                        path: "step-2",
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
