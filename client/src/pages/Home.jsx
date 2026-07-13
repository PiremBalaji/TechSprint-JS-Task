import FeaturesSection from './partials/FeaturesSection'
import EventsSection from './partials/EventsSection'

export default function Home() {
	return (
		<>
			<section className="mx-auto w-full max-w-7xl px-4 pt-8">
				<div className="relative overflow-hidden rounded-2xl border border-indigo-100 card-glass p-8 sm:p-10 shadow-sm dark:border-gray-800 dark:bg-gray-900/70">
					<div className="max-w-2xl">
						<p className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 animate-fade-in dark:bg-indigo-400/20 dark:text-indigo-300">New • 2025 events are live</p>
						<h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl animate-fade-in dark:text-white" style={{animationDelay:'60ms'}}>
							<p>Welcome to Tech Sprint</p>
						</h1>
						<p className="mt-4 text-gray-600 animate-fade-in dark:text-gray-300" style={{animationDelay:'120ms'}}>Welcome to a community of builders. Explore events and level up your skills.</p>
						<div className="mt-6 flex flex-col sm:flex-row gap-3">
							<a href="#events" className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-indigo-500">Explore Events</a>
							<a href="#features" className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:bg-transparent dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">Learn More</a>
						</div>
					</div>
					<div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-indigo-200/40 blur-3xl animate-shimmer dark:bg-indigo-500/10" />
				</div>
			</section>
			<FeaturesSection />
			<EventsSection />
		</>
	)
}


