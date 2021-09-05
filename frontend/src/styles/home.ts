import styled from 'styled-components';

export const Container = styled.div`
	max-width: 1120px;
	margin: 0 auto;
`;

export const Header = styled.header`
	padding-top: 1.5rem;
	padding-bottom: 0.5rem;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;

	h1 {
		font-size: 3rem;
	}

	span {
		font-size: 1rem;
	}
`;

export const Form = styled.div`
	margin: 1.5rem;
	background: #eee;
	border-radius: 0.5rem;
	color: #212121;
	box-shadow: 5px 5px 26px 5px rgba(0, 0, 0, 0.15);

	form {
		padding: 2rem;
		display: flex;
		flex-direction: column;
		gap: 1.5rem;

		h2 {
			margin-bottom: 0.5rem;
			display: flex;
			flex-direction: column;
			align-items: center;
			font-size: 1.5rem;
		}

		div {
			display: flex;
			flex-direction: column;

			label {
				font-size: 1rem;
				margin-bottom: 0.5rem;
				padding: 0 1rem;
			}

			input {
				font-size: 1rem;
				background: #fff;
				border: 0;
				border-radius: 0.5rem;
				height: 3rem;
				padding: 0 1rem;
			}
		}

		.button {
			display: flex;
			flex-direction: column;
			margin: 0;

			button {
				margin-top: 1.5rem;
				height: 3rem;
				border: 0;
				border-radius: 0.5rem;
				background: #21ab47;
				color: #fff;
				font-weight: 500;
				transition: filter 0.2s;

				display: flex;
				align-items: center;
				justify-content: center;

				img {
					height: 1.1rem;
					filter: invert(1);
					margin-right: 0.5rem;
				}
			}

			button:hover {
				filter: brightness(0.85);
			}
		}

		.success {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			font-size: 1rem;
		}
	}
`;

export const Data = styled.div`
	margin: 1.5rem;
	background: #eee;
	border-radius: 0.5rem;
	color: #212121;
	box-shadow: 5px 5px 26px 5px rgba(0, 0, 0, 0.15);
	padding: 2rem;

	h2 {
		display: flex;
		flex-direction: column;
		align-items: center;
		font-size: 1.5rem;
		margin-bottom: 0.5rem;
	}

	main {
		display: flex;
		border-bottom: 1px solid #ccc;

		@media (max-width: 768px) {
			flex-direction: column;
		}

		&:last-child {
			border: 0;

			.leftData {
				padding-bottom: 0;
			}

			@media (max-width: 768px) {
				.leftData {
					padding-bottom: 1.5rem;
				}
			}

			.rightButtons {
				padding-bottom: 0;
			}
		}

		.leftData {
			width: 75%;
			padding: 1.5rem;

			@media (max-width: 768px) {
				width: 100%;
				padding: 1.5rem 0;
			}

			div {
				display: flex;
				align-items: center;
				margin-bottom: 1.2rem;
				margin-left: 1.5rem;

				@media (max-width: 768px) {
					margin-left: 0;
				}

				label {
					font-size: 1rem;
					width: 12rem;

					@media (max-width: 768px) {
						width: 50%;
					}
				}

				span {
					font-size: 1rem;

					@media (max-width: 768px) {
						width: 50%;
					}
				}
			}

			div:last-child {
				margin-bottom: 0;
			}
		}

		.rightButtons {
			width: 25%;
			padding: 1.5rem;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-between;

			@media (max-width: 768px) {
				width: 100%;
				padding: 0 0 1.5rem 0;
				justify-content: center;
				gap: 1rem;
			}

			button {
				height: 2.4rem;
				width: 10rem;
				border: 0;
				border-radius: 0.5rem;
				color: #fff;
				font-weight: 500;
				transition: filter 0.2s;
				display: flex;
				align-items: center;
				justify-content: center;

				@media (max-width: 768px) {
					width: 100%;
					height: 3rem;
				}

				img {
					height: 1.2rem;
					filter: invert(1);
					margin-right: 0.5rem;
				}
			}

			button:hover {
				filter: brightness(0.85);
			}

			.remove {
				background: #e30000;
			}

			.like,
			.dislike {
				background: #007ecc;
			}
		}
	}
`;
