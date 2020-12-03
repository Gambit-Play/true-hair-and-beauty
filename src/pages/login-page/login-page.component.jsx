import React from 'react';
import { compose } from 'redux';
import { useHistory } from 'react-router-dom';

// HOC
import WithUser from '../../components/HOC/with-user.hoc';

// Components
import {
	MainWrapper,
	ImageBlock,
	InputWrapper,
	InputSection,
	TextInput,
	ButtonBlock,
} from './login-page.styles';
import {
	InputBlock,
	InputLabel,
} from '../../components/atoms/inputs/inputs.styles';
import { Button } from '../../components/atoms/button/button.styles';

// Images
import logoImage from '../../assets/logo-grey.svg';

const LogInPage = ({
	emailSignInStart,
	setLoginCredentials,
	email,
	password,
}) => {
	const { push } = useHistory();

	return (
		<MainWrapper>
			<ImageBlock />
			<InputWrapper>
				<img src={logoImage} alt='' />
				<InputSection>
					<InputBlock className='input-block'>
						<InputLabel>Email:</InputLabel>
						<TextInput
							type='text'
							name='email'
							value={email}
							onChange={event => {
								setLoginCredentials(
									event.target.name,
									event.target.value
								);
							}}
						/>
					</InputBlock>
					<InputBlock className='input-block'>
						<InputLabel>Password:</InputLabel>
						<TextInput
							type='password'
							name='password'
							value={password}
							onChange={event => {
								setLoginCredentials(
									event.target.name,
									event.target.value
								);
							}}
						/>
					</InputBlock>
					<ButtonBlock>
						<Button
							className='save-button'
							onClick={emailSignInStart}
						>
							Login
						</Button>
						<Button outlined onClick={() => push('/')}>
							Cancel
						</Button>
					</ButtonBlock>
				</InputSection>
			</InputWrapper>
		</MainWrapper>
	);
};

export default compose(WithUser)(LogInPage);
