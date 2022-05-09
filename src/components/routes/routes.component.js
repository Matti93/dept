import { Routes, Route } from "react-router-dom";

export const RoutesMapperComponent = ({ routes }) => {
    return <Routes>
        <>
            {
                routes.map(({ route, component }) => {
                    return <Route key={route} path={route} element={component} >
                    </Route>

                })
            }
            <Route
                path="*"
                element={
                    <main style={{ padding: "1rem" }}>
                        <p>There's nothing here!</p>
                    </main>
                }
            />
        </>

    </Routes>
}