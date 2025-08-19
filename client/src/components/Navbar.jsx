import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar({ onToggleTheme, isDark }) {
	const [open, setOpen] = useState(false)
	const [mega, setMega] = useState(false)
	return (
		<nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-gray-900/70 dark:border-gray-800">
			<div className="mx-auto max-w-7xl px-4">
				<div className="flex h-16 items-center justify-between">
					<Link to="/" className="flex items-center gap-2">
						<span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-indigo-600 text-white font-bold shadow-sm">TS</span>
						<span className="text-lg font-semibold text-gray-900 dark:text-white">TechSprint</span>
					</Link>
					<div className="hidden md:flex items-center gap-6">
						<div className="relative" onMouseEnter={() => setMega(true)} onMouseLeave={() => setMega(false)}>
							<button className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white inline-flex items-center gap-1">
								Explore
								<svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
							</button>
							{mega && (
								<div className="absolute left-1/2 z-40 mt-3 w-[580px] -translate-x-1/2 overflow-hidden rounded-2xl border border-gray-200 bg-white p-4 shadow-xl ring-1 ring-black/5 dark:bg-gray-900 dark:border-gray-800">
									<div className="grid grid-cols-2 gap-3">
										{[
											{ t: 'Hackathons', d: 'Compete and build with a team over 24 hours.'},
											{ t: 'Workshops', d: 'Hands-on sessions to level up your skills.'},
											{ t: 'Meetups', d: 'Network with developers and designers.'},
											{ t: 'Talks', d: 'Hear from industry experts and leaders.'},
										].map((it, i) => (
											<Link key={i} to="/events" className="group rounded-xl border border-gray-200 p-4 hover:bg-gray-50 dark:hover:bg-gray-800/60 dark:border-gray-800">
												<h4 className="text-sm font-semibold text-gray-900 group-hover:text-indigo-700 dark:text-white">{it.t}</h4>
												<p className="mt-1 text-xs text-gray-600 dark:text-gray-300">{it.d}</p>
											</Link>
										))}
									</div>
								</div>
							)}
						</div>
						<NavLink to="/" className={({isActive}) => `text-sm font-medium ${isActive ? 'text-indigo-600' : 'text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white'}`}>Home</NavLink>
						<NavLink to="/events" className={({isActive}) => `text-sm font-medium ${isActive ? 'text-indigo-600' : 'text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white'}`}>Events</NavLink>
						<NavLink to="/contact" className={({isActive}) => `text-sm font-medium ${isActive ? 'text-indigo-600' : 'text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white'}`}>Contact</NavLink>

						<Link className="inline-flex rounded-md bg-indigo-600 px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-500" to="/events">Join</Link>
					</div>
					<div className="md:hidden relative">
						<button
							className="inline-flex items-center gap-2 rounded-md border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none dark:text-gray-200 dark:border-gray-700 dark:bg-gray-800"
							onClick={() => setOpen((v) => !v)}
							aria-expanded={open}
							aria-haspopup="menu"
							aria-label="Toggle menu"
						>
							Menu
							<svg width="16" height="16" viewBox="0 0 24 24" fill="none" className={`transition-transform ${open ? 'rotate-180' : ''}`}>
								<path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
							</svg>
						</button>
						{open && (
							<div role="menu" className="absolute right-0 mt-2 w-56 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg dark:bg-gray-900 dark:border-gray-800">
								<NavLink to="/" onClick={() => setOpen(false)} className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-800">Home</NavLink>
								<NavLink to="/events" onClick={() => setOpen(false)} className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-800">Events</NavLink>
								<NavLink to="/contact" onClick={() => setOpen(false)} className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-800">Contact</NavLink>
								<div className="border-t border-gray-200" />

								<NavLink to="/events" onClick={() => setOpen(false)} className="block px-4 py-3 text-sm font-medium text-indigo-600 hover:bg-indigo-50 dark:hover:bg-gray-800/60">Join</NavLink>
							</div>
						)}
					</div>
				</div>
			</div>
		</nav>
	)
}


