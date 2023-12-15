import Home from './routes/Home.svelte';
import Settings from './routes/Settings.svelte';
import NotFound from './routes/NotFound.svelte';
import LoginPage from "./routes/LoginPage.svelte";

export default {
    '/': Home,
    '/login': LoginPage,
    '/settings/': Settings,
    // The catch-all route must always be last
    '*': NotFound
};
