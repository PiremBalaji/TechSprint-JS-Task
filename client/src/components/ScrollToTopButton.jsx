import { useEffect, useState } from 'react'

export default function ScrollToTopButton() {
	const [visible, setVisible] = useState(false)
	useEffect(() => {
		const onScroll = () => setVisible(window.scrollY > 300)
		window.addEventListener('scroll', onScroll, { passive: true })
		return () => window.removeEventListener('scroll', onScroll)
	}, [])
	if (!visible) return null
	return (
		<button
			onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
			className="fixed bottom-6 right-6 inline-flex h-11 w-11 items-center justify-center rounded-full bg-indigo-600 text-white shadow-lg hover:bg-indigo-500"
			aria-label="Scroll to top"
		>
			<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 19V5m0 0l-7 7m7-7l7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
		</button>
	)
}


