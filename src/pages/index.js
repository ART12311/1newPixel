import React from "react";
import theme from "theme";
import { Theme, Link, Image, Text } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, Section } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section
			padding="64px 0"
			sm-padding="40px 0"
			color="--light"
			font="--base"
			background="#000000"
		>
			<Override slot="SectionContent" />
			<Image
				width="347px"
				height="96px"
				src="https://uploads.quarkly.io/601bfca171e66d001efb18cd/images/1newPixel.svg?v=2021-02-05T06:30:33.314Z"
				text-align="center"
				align-self="center"
				padding="0 791px 0 791px"
			/>
		</Section>
		<Section
			sm-padding="40px 0"
			sm-min-height="auto"
			background="--color-dark"
			display="flex"
			flex-direction="column"
			color="--dark"
		>
			<Override slot="SectionContent" align-self="center" />
			<Text
				font="300 100px --fontFamily-googleMontserrat"
				color="#ffffff"
				align-self="center"
				white-space="pre-wrap"
				sm-white-space="normal"
				sm-font="300 35px --fontFamily-googleMontserrat"
			>
				We're down for schedule
				<br />
				maintenance right now.
			</Text>
			<Text color="#ffffff" />
		</Section>
		<Section
			sm-padding="40px 0"
			sm-min-height="auto"
			background="--color-dark"
			display="flex"
			flex-direction="column"
			color="--dark"
		>
			<Override slot="SectionContent" align-self="center" />
			<Text
				font="normal normal 2 50px/1 --fontFamily-sansVerdana"
				letter-spacing="1.0"
				white-space="normal"
				color="#ffffff"
				text-align="center"
				align-self="auto"
			>
				Please check back soon.
			</Text>
			<Text color="#ffffff" />
		</Section>
		<Section background-color="--dark" text-align="center" padding="32px 0" background="#000000">
			<Override slot="SectionContent" color="#ffffff" />
			<Link
				href="1newpixel@gmail.com"
				text-decoration-line="none"
				variant="--base"
				color="#ffffff"
				hover-color="#ffffff"
				link-color="#ffffff"
				visited-color="#ffffff"
				active-color="#ffffff"
			>
				Contact: 1newpixel@gmail.com
			</Link>
		</Section>
		<Section background-color="--dark" text-align="center" padding="32px 0" background="#000000">
			<Link text-decoration-line="none" variant="--base" color="--grey" hover-color="--primary">
				Copyright 
© 2021
			</Link>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});