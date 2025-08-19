export default function Contact() {
	return (
		<section className="mx-auto mt-12 w-full max-w-3xl px-4">
			<h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Contact Us</h1>
			<p className="mt-2 text-gray-600 dark:text-gray-300">Have questions? Send us a message and we’ll get back to you.</p>
			<form className="mt-6 grid gap-4">
				<input className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-900 dark:text-white dark:border-gray-700" placeholder="Your name" />
				<input type="email" className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-900 dark:text-white dark:border-gray-700" placeholder="Email address" />
				<textarea rows="4" className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-900 dark:text-white dark:border-gray-700" placeholder="Message" />
				<button className="inline-flex w-fit items-center justify-center rounded-md bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-indigo-500">Send</button>
			</form>
		</section>
	)
}


