import React, { Fragment } from 'react';
import { compose } from 'redux';

//HOC
import WithContent from '../../../HOC/with-content.hoc';
import WithFooterDetail from '../../../HOC/with-footer-detail.hoc';

// Component
import {
	Card,
	CardImage,
	CardContentWrapper,
	CardTitle,
	CardBody,
	CardInput,
	CardDivider,
	CardButton,
	CardButtonBlock,
	CardTextArea,
} from '../card-components/card.styles';

// Images
import footerImage from '../../../../assets/footer-screenshot.png';

const FooterSection = ({
	footerSection,
	footerDetail,
	fetchFooterStart,
	setFooterStart,
	clearFooter,
	isEdit,
}) => {
	const { adres, email, tel } = footerSection;

	return (
		<Card>
			<CardImage image={footerImage} />
			<CardContentWrapper>
				<CardTitle>Tel</CardTitle>
				{isEdit ? (
					<CardInput
						type='text'
						id={footerDetail.id}
						name='tel'
						value={footerDetail.tel}
						onChange={event => {
							setFooterStart(
								event.target.name,
								event.target.value
							);
						}}
					/>
				) : (
					<CardBody>{tel}</CardBody>
				)}
				<CardDivider />
				<CardTitle>Email</CardTitle>
				{isEdit ? (
					<CardInput
						type='text'
						id={footerDetail.id}
						name='email'
						value={footerDetail.email}
						onChange={event => {
							setFooterStart(
								event.target.name,
								event.target.value
							);
						}}
					/>
				) : (
					<CardBody>{email}</CardBody>
				)}
				<CardDivider />
				<CardTitle>Adres</CardTitle>
				{isEdit ? (
					<CardTextArea
						height={100}
						type='text'
						id={footerDetail.id}
						name='adres'
						value={footerDetail.adres}
						onChange={event => {
							setFooterStart(
								event.target.name,
								event.target.value
							);
						}}
					/>
				) : (
					<CardBody>{adres}</CardBody>
				)}
			</CardContentWrapper>
			<CardButtonBlock>
				{isEdit ? (
					<Fragment>
						<CardButton>Update</CardButton>
						<CardButton onClick={clearFooter} outline>
							Cancel
						</CardButton>
					</Fragment>
				) : (
					<CardButton onClick={fetchFooterStart}>Edit</CardButton>
				)}
			</CardButtonBlock>
		</Card>
	);
};

export default compose(WithFooterDetail, WithContent)(FooterSection);
