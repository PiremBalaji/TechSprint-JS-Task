export default function Footer() {
	return (
		<footer className="mt-16 border-t border-gray-200 bg-white dark:bg-gray-900 dark:border-gray-800">
			<div className="mx-auto max-w-7xl px-4 py-8 text-sm text-gray-600 dark:text-gray-300 flex flex-col sm:flex-row items-center justify-between gap-3">
				<p>© {new Date().getFullYear()} TechSprint. All rights reserved.</p>
				<div className="flex items-center gap-4">
					<a className="hover:text-gray-900 dark:hover:text-white" href="#privacy">Privacy</a>
					<a className="hover:text-gray-900 dark:hover:text-white" href="#terms">Terms</a>
					<a className="hover:text-gray-900 dark:hover:text-white" href="#contact" id="contact">Contact</a>
				</div>
			</div>
		</footer>
	)
}


