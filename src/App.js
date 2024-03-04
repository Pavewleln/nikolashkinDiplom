import { Header } from "./app/components/Header";
import { Navigation } from "./app/components/Navigation";
import { Routes, Route } from "react-router-dom";
import {Home} from "./app/layouts/Home";
import {Settlement} from "./app/layouts/Settlement";
import {Administration} from "./app/layouts/Administration";
import {News} from "./app/layouts/News";
import {Council} from "./app/layouts/Council";
import {Documents} from "./app/layouts/Documents";
import {Contacts} from "./app/layouts/Contacts";

function App() {
    return (
        <div className={"container"}>
            <Header/>
            <Navigation/>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/settlement" element={<Settlement />} />
                <Route path="/administration" element={<Administration />} />
                <Route path="/news" element={<News />} />
                <Route path="/council" element={<Council />} />
                <Route path="/documents" element={<Documents />} />
                <Route path="/contacts" element={<Contacts />} />
            </Routes>
        </div>
    );
}

export default App;
