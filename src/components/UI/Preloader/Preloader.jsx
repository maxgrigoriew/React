/** @format */

import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	text-transform: uppercase;
	color: var(--color-accent);
	width: 100%;
	height: 100%;
	background: #fff;
	position: absolute;
	display: flex;
	justify-content: center;
	padding-top: 200px;
	margin: auto;
	top: 30px;
	z-index: 11;
`;
const Loader = styled.div`
	& div {
		border: 2px inset #fff;
		border-radius: 100%;
		padding: 4px;
		animation: preloader-7-spin 15s linear infinite;
	}
`;

const Preloader = () => {
	return (
		<Wrapper>
			<Loader>
				<div class='preloader-7'>
					<div>
						<div>
							<div>
								<div>
									<div>
										<div>
											<div>
												<div>
													<div></div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Loader>
		</Wrapper>
	);
};

export default Preloader;
