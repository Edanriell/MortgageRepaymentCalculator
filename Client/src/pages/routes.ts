import { HomePage } from "@pages/home/ui";
import { NotFoundPage } from "@pages/not-found/ui";

export const Routes = [
	{
		path: "/",
		component: HomePage,
		name: "Home"
	},
	{
		path: "/:pathMatch(.*)*",
		component: NotFoundPage,
		name: "NotFound"
	}
];
