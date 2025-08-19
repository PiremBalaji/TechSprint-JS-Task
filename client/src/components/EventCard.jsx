export default function EventCard({ event }) {
	return (
		<div className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md dark:bg-gray-900 dark:border-gray-800">
			<div className="flex items-start justify-between gap-3">
				<h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-700 transition-colors dark:text-white">{event.name}</h3>
				<span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300">Upcoming</span>
			</div>
			<p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{event.description}</p>
			<p className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-indigo-700 dark:text-indigo-300">
				<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M8 7h8M8 11h8M5 4h14a1 1 0 011 1v14l-8-4-8 4V5a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.5"/></svg>
				{new Date(event.date).toLocaleDateString()}
			</p>
		</div>
	)
}


