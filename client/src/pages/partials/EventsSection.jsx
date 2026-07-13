import { useEffect, useState } from 'react'
import EventCard from '../../components/EventCard'
import { motion } from 'framer-motion'

export default function EventsSection() {
	const [events, setEvents] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState('')

	useEffect(() => {
		async function load() {
			try {
				setLoading(true)
				setError('')
				const res = await fetch('/api/events')
				if (!res.ok) throw new Error('Failed to fetch events')
				const data = await res.json()
				setEvents(data)
			} catch (err) {
				setError('Could not load events. Showing sample data.')
				setEvents([
					{
						name: 'TechSprint 2025',
						description: 'A 24-hour Hackathon focusing on AI and Web Development.',
						date: '2025-09-15',
					},
					{
						name: 'Frontend Fiesta',
						description: 'A mini conf to explore modern UI frameworks and design systems.',
						date: '2025-10-01',
					},
					{
						name: 'Data Science Summit',
						description: 'A conference to discuss the latest trends in data science and analytics.',
						date: '2025-11-20',
					},
				])
			} finally {
				setLoading(false)
			}
		}
		load()
	}, [])

	return (
		<section id="events" className="mx-auto mt-12 w-full max-w-7xl px-4">
			<header className="mb-6 flex items-end justify-between">
				<div>
					<h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Upcoming Events</h2>
					<p className="text-sm text-gray-600 dark:text-gray-300">Join us for hackathons, meetups, and workshops.</p>
				</div>
				<a href="#" className="hidden sm:inline-flex rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-500">View all</a>
			</header>
			{loading ? (
				<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{Array.from({ length: 3 }).map((_, i) => (
						<div key={i} className="rounded-2xl border border-gray-200 p-5 dark:border-gray-800">
							<div className="h-5 w-40 rounded bg-gray-200 dark:bg-gray-800 animate-pulse" />
							<div className="mt-3 h-4 w-full rounded bg-gray-200 dark:bg-gray-800 animate-pulse" />
							<div className="mt-2 h-4 w-5/6 rounded bg-gray-200 dark:bg-gray-800 animate-pulse" />
							<div className="mt-4 h-4 w-32 rounded bg-gray-200 dark:bg-gray-800 animate-pulse" />
						</div>
					))}
				</div>
			) : (
				<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{events.map((ev, idx) => (
						<motion.div key={idx} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.25, delay: idx * 0.05 }}>
							<EventCard event={ev} />
						</motion.div>
					))}
				</div>
			)}
			{error && <p className="mt-4 text-sm text-amber-700">{error}</p>}
		</section>
	)
}


