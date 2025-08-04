<<<<<<< HEAD
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'orbitron': ['Orbitron', 'monospace'],
				'inter': ['Inter', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// AI-themed colors
				'ai-glow': 'hsl(var(--ai-glow))',
				'ai-glow-intense': 'hsl(var(--ai-glow-intense))',
				'ai-electric': 'hsl(var(--ai-electric))',
				'ai-neural': 'hsl(var(--ai-neural))',
			},
			backgroundImage: {
				'gradient-ai-primary': 'var(--gradient-ai-primary)',
				'gradient-ai-card': 'var(--gradient-ai-card)', 
				'gradient-neural': 'var(--gradient-neural)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				// AI-themed animations
				'ai-pulse': {
					'0%, 100%': { 
						opacity: '1',
						transform: 'scale(1)',
						filter: 'drop-shadow(0 0 10px hsl(var(--ai-glow)))'
					},
					'50%': { 
						opacity: '0.8',
						transform: 'scale(1.05)',
						filter: 'drop-shadow(0 0 20px hsl(var(--ai-glow-intense)))'
					}
				},
				'neural-flow': {
					'0%': { 
						transform: 'translateX(-100%)',
						opacity: '0'
					},
					'50%': { 
						opacity: '1'
					},
					'100%': { 
						transform: 'translateX(100%)',
						opacity: '0'
					}
				},
				'circuit-rotate': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'glow-intense': {
					'0%, 100%': { 
						filter: 'drop-shadow(0 0 5px hsl(var(--ai-glow)))'
					},
					'50%': { 
						filter: 'drop-shadow(0 0 25px hsl(var(--ai-glow-intense))) drop-shadow(0 0 35px hsl(var(--ai-electric)))'
					}
				},
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'ai-pulse': 'ai-pulse 2s ease-in-out infinite',
				'neural-flow': 'neural-flow 3s ease-in-out infinite',
				'circuit-rotate': 'circuit-rotate 10s linear infinite',
				'glow-intense': 'glow-intense 2s ease-in-out infinite',
				'fade-in-up': 'fade-in-up 0.6s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
=======
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'orbitron': ['Orbitron', 'monospace'],
				'inter': ['Inter', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// AI-themed colors
				'ai-glow': 'hsl(var(--ai-glow))',
				'ai-glow-intense': 'hsl(var(--ai-glow-intense))',
				'ai-electric': 'hsl(var(--ai-electric))',
				'ai-neural': 'hsl(var(--ai-neural))',
			},
			backgroundImage: {
				'gradient-ai-primary': 'var(--gradient-ai-primary)',
				'gradient-ai-card': 'var(--gradient-ai-card)', 
				'gradient-neural': 'var(--gradient-neural)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				// AI-themed animations
				'ai-pulse': {
					'0%, 100%': { 
						opacity: '1',
						transform: 'scale(1)',
						filter: 'drop-shadow(0 0 10px hsl(var(--ai-glow)))'
					},
					'50%': { 
						opacity: '0.8',
						transform: 'scale(1.05)',
						filter: 'drop-shadow(0 0 20px hsl(var(--ai-glow-intense)))'
					}
				},
				'neural-flow': {
					'0%': { 
						transform: 'translateX(-100%)',
						opacity: '0'
					},
					'50%': { 
						opacity: '1'
					},
					'100%': { 
						transform: 'translateX(100%)',
						opacity: '0'
					}
				},
				'circuit-rotate': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'glow-intense': {
					'0%, 100%': { 
						filter: 'drop-shadow(0 0 5px hsl(var(--ai-glow)))'
					},
					'50%': { 
						filter: 'drop-shadow(0 0 25px hsl(var(--ai-glow-intense))) drop-shadow(0 0 35px hsl(var(--ai-electric)))'
					}
				},
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'ai-pulse': 'ai-pulse 2s ease-in-out infinite',
				'neural-flow': 'neural-flow 3s ease-in-out infinite',
				'circuit-rotate': 'circuit-rotate 10s linear infinite',
				'glow-intense': 'glow-intense 2s ease-in-out infinite',
				'fade-in-up': 'fade-in-up 0.6s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
>>>>>>> 5b409c728ea4e036e17a1e2125f482bae44118c7
