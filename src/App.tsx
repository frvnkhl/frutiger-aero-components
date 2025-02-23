import { Card } from "./components/Card";

export const App = () => {

    return (
        <div className="bg-vista-gradient flex flex-col justify-center items-center h-screen">
            <Card className="max-w-1/2" contentBackground="white">
                <h2>Header</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </Card>
        </div>
    )
}

