import Marquee from "react-fast-marquee"
import { FaCode, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa"
import projects from "../projects.json"

export function Page() {
	return (
		<main className="container w-full p-5 xl:w-10/12 min-[1600px]:w-2/3">
			<header className="mb-5">
				<nav className="flex justify-between">
					<FaCode size={24} />
					<ul className="flex gap-6">
						<li>
							<a
								className="text-sm font-medium hover:underline text-gray-800"
								href="#services">
								Serviços
							</a>
						</li>
						<li>
							<a
								className="text-sm font-medium hover:underline text-gray-800"
								href="#works">
								Projetos
							</a>
						</li>
						<li>
							<a
								className="text-sm font-medium hover:underline text-gray-800"
								href="#contact">
								Contato
							</a>
						</li>
					</ul>
				</nav>
			</header>

			<section className="flex flex-col items-center gap-10 mb-6 lg:flex-row">
				<img
					className="rounded-md w-64 h-64 lg:order-2"
					src="/assets/photo.jpeg"
					alt=""
				/>
				<div className="text-center">
					<h1 className="text-2xl text-balance font-bold mb-8 text-gray-800 md:text-4xl lg:text-5xl lg:text-start">
						Criando Soluções Digitais que Conectam Ideias e Experiências
					</h1>
					<p className="font-semibold mb-9 text-gray-500 text-sm lg:text-base lg:text-start">
						Olá, sou Christofher Lucas, desenvolvedor front-end dedicado a
						transformar ideias em experiências digitais memoráveis. Acredito que
						a tecnologia deve facilitar a vida, e meu objetivo é simplificar a
						complexidade, trazendo inovação e praticidade para cada projeto.
						Vamos juntos transformar sua visão em uma experiência digital
						envolvente e eficaz?
					</p>
				</div>
			</section>
			<Marquee>
				<img
					className="w-16 h-16"
					src="/assets/react.png"
					alt=""
				/>
				<img
					className="w-16 h-16"
					src="/assets/next.png"
					alt=""
				/>
				<img
					className="w-16 h-16"
					src="/assets/sass.png"
					alt=""
				/>
				<img
					className="w-16 h-16"
					src="/assets/styled-components.png"
					alt=""
				/>
				<img
					className="w-16 h-16"
					src="/assets/graphql.png"
					alt=""
				/>
			</Marquee>
			<section
				className="mt-6"
				id="services">
				<h2 className="text-2xl font-semibold mb-6 text-gray-800 md:text-2xl lg:text-4xl">
					Serviços
				</h2>
				<div className="flex flex-col lg:flex-row lg:items-center">
					<ul className="flex flex-col gap-5 mb-5">
						<li className="flex flex-col gap-2">
							<strong className="text-lg font-bold text-gray-800 lg:text-2xl">
								React
							</strong>
							<p className="font-medium text-gray-500 text-sm lg:text-base">
								Crio aplicativos web dinâmicos e escaláveis com React, focados
								em performance e ótima experiência do usuário. Soluções
								modernas, eficientes e prontas para crescer.
							</p>
						</li>
						<li className="flex flex-col gap-2">
							<strong className="text-lg font-bold text-gray-800 lg:text-2xl">
								NextJs
							</strong>
							<p className="font-medium text-gray-500 text-sm lg:text-base">
								Desenvolvo sites e web apps rápidos e otimizados com Next.js,
								focando em SEO e carregamento eficiente. Soluções escaláveis,
								perfeitas para alta performance e ótima experiência desde o
								primeiro acesso.
							</p>
						</li>
						<li className="flex flex-col gap-2">
							<strong className="text-lg font-bold text-gray-800 lg:text-2xl">
								Ract Native
							</strong>
							<p className="font-medium text-gray-500 text-sm lg:text-base">
								Desenvolvo aplicativos móveis com React Native, proporcionando
								uma experiência quase nativa e intuitiva em iOS e Android.
								Minhas soluções aproveitam componentes nativos para garantir
								desempenho e envolvimento do usuário.
							</p>
						</li>
					</ul>
					<img
						className="w-full md:w-2/5 xl:w-2/5"
						src="/assets/front-end-developer.png"
						alt=""
					/>
				</div>
			</section>
			<section
				className="my-6"
				id="works">
				<h2 className="text-2xl font-semibold mb-6 text-gray-800 md:text-2xl lg:text-4xl">
					Projetos
				</h2>
				<ul className="flex flex-col gap-5">
					{projects.map((project) => (
						<li
							key={window.crypto.randomUUID()}
							className="flex flex-col items-center gap-5 border rounded-xl p-4 bg-gray-100 md:flex-row">
							<img
								className="w-64 h-40 rounded-lg"
								src={project.screenShotPath}
								alt={project.name}
							/>
							<div className="flex flex-col justify-between gap-6">
								<strong className="text-lg font-bold text-gray-800 lg:text-2xl">
									{project.name}
								</strong>
								<p className="font-medium text-gray-500 text-sm lg:text-base">
									{project.description}
								</p>
							</div>
						</li>
					))}
				</ul>
			</section>
			<footer
				id="contact"
				className="flex flex-col justify-center items-center text-sm">
				<nav>
					<ul className="flex gap-10">
						<li className="text-gray-800 hover:scale-150">
							<a href="https://www.instagram.com/_christofher.dev/">
								<FaInstagram size={36} />
							</a>
						</li>
						<li className="text-gray-800 hover:scale-150">
							<a href="https://www.linkedin.com/in/christofher-lucas/">
								<FaLinkedin size={36} />
							</a>
						</li>
						<li className="text-gray-800 hover:scale-150">
							<a href="https://wa.me/5582991485912">
								<FaWhatsapp size={36} />
							</a>
						</li>
					</ul>
				</nav>
				<span className="text-center font-medium text-gray-500 mt-5">
					© Christofher Lucas. Todos os direitos reservados.
				</span>
			</footer>
		</main>
	)
}
