import { Card } from "./components/Card";
import { Button } from "@app/components/Button";

export const App = () => {

    return (
        <div className="bg-vista-gradient flex flex-col justify-center items-center h-screen">
            <Card className="max-w-1/2" contentBackground="white">
                <h2>Header</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <div className="flex flex-wrap gap-2">
                    <Button onClick={() => alert('clicked')}>Default</Button>
                    <Button variant="primary" onClick={() => alert('clicked')}>Primary</Button>
                    <Button variant="secondary" onClick={() => alert('clicked')}>Secondary</Button>
                    <Button variant="info" onClick={() => alert('clicked')}>Info</Button>
                    <Button variant="success" onClick={() => alert('clicked')}>Success</Button>
                    <Button variant="destructive" onClick={() => alert('clicked')}>Destructive</Button>
                </div>
            </Card>
        </div>
    )
}

