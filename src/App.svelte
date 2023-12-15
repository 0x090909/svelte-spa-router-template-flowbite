<script>
	import {getCookie} from "./util"
	import {location} from 'svelte-spa-router'

	import AppDashboard from "./components/AppDashboard.svelte";
	import Maintenance from "./routes/Maintenance.svelte";
	import LoginPage from "./routes/LoginPage.svelte";

	$: loggedIn = getCookie("loggedIn") === "1";
 </script>

<body class="bg-gray-50 dark:bg-gray-800">

	{#if loggedIn}
		<AppDashboard bind:loggedIn={loggedIn}></AppDashboard>
	{:else}
		{#if $location === "/login"}
			<LoginPage bind:loggedIn={loggedIn}></LoginPage>
		{:else if $location === "/"}
			<Maintenance></Maintenance>
		{/if}
	{/if}

</body>