/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],  // Enables dark mode by adding the class 'dark'
	content: [
	  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
	  "./components/**/*.{js,ts,jsx,tsx,mdx}",
	  "./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
	  extend: {
		colors: {
		  background: 'hsl(var(--background))',  // Purple background
		  foreground: 'hsl(var(--foreground))',  // Light foreground text color
		  card: {
			DEFAULT: 'hsl(var(--card))',  // Card background purple
			foreground: 'hsl(var(--card-foreground))',  // Card text color
		  },
		  popover: {
			DEFAULT: 'hsl(var(--popover))',  // Popover background purple
			foreground: 'hsl(var(--popover-foreground))',  // Popover text color
		  },
		  primary: {
			DEFAULT: 'hsl(var(--primary))',  // Primary color (purple)
			foreground: 'hsl(var(--primary-foreground))',  // Primary foreground (light purple)
		  },
		  secondary: {
			DEFAULT: 'hsl(var(--secondary))',  // Secondary purple color
			foreground: 'hsl(var(--secondary-foreground))',  // Secondary text color
		  },
		  muted: {
			DEFAULT: 'hsl(var(--muted))',  // Muted purple color
			foreground: 'hsl(var(--muted-foreground))',  // Muted text color
		  },
		  accent: {
			DEFAULT: 'hsl(var(--accent))',  // Accent color purple
			foreground: 'hsl(var(--accent-foreground))',  // Accent text color
		  },
		  destructive: {
			DEFAULT: 'hsl(var(--destructive))',  // Destructive color (red)
			foreground: 'hsl(var(--destructive-foreground))',  // Destructive text color
		  },
		  border: 'hsl(var(--border))',  // Border color
		  input: 'hsl(var(--input))',  // Input color
		  ring: 'hsl(var(--ring))',  // Ring color
		  chart: {
			'1': 'hsl(var(--chart-1))',  // Chart color 1
			'2': 'hsl(var(--chart-2))',  // Chart color 2
			'3': 'hsl(var(--chart-3))',  // Chart color 3
			'4': 'hsl(var(--chart-4))',  // Chart color 4
			'5': 'hsl(var(--chart-5))',  // Chart color 5
		  },
		},
		borderRadius: {
		  lg: 'var(--radius)',  // Large radius
		  md: 'calc(var(--radius) - 2px)',  // Medium radius
		  sm: 'calc(var(--radius) - 4px)',  // Small radius
		},
	  },
	},
	plugins: [require("tailwindcss-animate")],  // If you want to use animation plugins
  };
  