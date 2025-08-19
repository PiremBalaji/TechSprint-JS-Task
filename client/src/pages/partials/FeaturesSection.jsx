export default function FeaturesSection() {
	const features = [
		{ title: 'Innovation Hub', desc: 'Showcase cutting-edge projects and breakthrough ideas from talented students.', icon: (
			<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M13 3L4 14h7l-1 7 9-11h-7l1-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
		)},
		{ title: 'Knowledge Exchange', desc: 'Connect with peers, mentors, and industry professionals to expand your horizons.', icon: (
			<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M4 6h16M4 12h10M4 18h7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
		)},
		{ title: 'Skill Development', desc: 'Participate in workshops, competitions, and hands-on sessions to enhance your expertise.', icon: (
			<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M4 7h16v10H4z" stroke="currentColor" strokeWidth="1.5"/><path d="M7 7v10M17 7v10M4 10h16M4 14h16" stroke="currentColor" strokeWidth="1.5"/></svg>
		)},
	]
	return (
		<section id="features" className="mx-auto mt-12 w-full max-w-7xl px-4">
			<div className="mb-6">
				<h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Why TechSprint Symposium?</h2>
				<p className="text-sm text-gray-600 dark:text-gray-300">A platform for students to showcase innovation, learn from experts, and build lasting connections.</p>
			</div>
			<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
				{features.map((f, i) => (
					<div key={i} className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:bg-gray-900 dark:border-gray-800">
						<div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300">
							{f.icon}
						</div>
						<h3 className="mt-4 text-base font-semibold text-gray-900 group-hover:text-indigo-700 transition-colors dark:text-white">{f.title}</h3>
						<p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{f.desc}</p>
					</div>
				))}
			</div>
		</section>
	)
}


