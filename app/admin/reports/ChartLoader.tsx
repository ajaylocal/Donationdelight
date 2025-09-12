import dynamic from "next/dynamic";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

export const Bar = dynamic(() => import("react-chartjs-2").then(mod => mod.Bar), { ssr: false });
export const Line = dynamic(() => import("react-chartjs-2").then(mod => mod.Line), { ssr: false });
