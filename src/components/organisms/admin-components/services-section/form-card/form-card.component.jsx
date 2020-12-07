import React, { Fragment, useState } from 'react';
import { useHistory } from 'react-router-dom';

// Component
import {
	FormCard as Card,
	Divider,
	InputLayoutBottom,
	InputLayoutTop,
	FormActionBlock,
	ListActionBlock,
} from '../../service-detail/service-detail.styles';
import { Button } from '../../../../atoms/button/button.styles';
import { Body1 } from '../../../../atoms/text/text.styles';
import {
	InputBlock,
	TextInput,
	InputLabel,
	NumberInput,
} from '../../../../atoms/inputs/inputs.styles';

const FormCard = ({
	isNew,
	image,
	typeOfService,
	order,
	service1,
	service2,
	service3,
	updateServicesStart,
	setOtherServiceStart,
	setNewServiceStart,
	clearService,
	createServicesStart,
	deleteMainServicesStart,
}) => {
	const [isDelete, setIsDelete] = useState(false);
	const history = useHistory();

	return (
		<Card>
			<InputLayoutTop>
				<InputBlock gridArea='title'>
					<InputLabel onClick={clearService}>Title:</InputLabel>
					<TextInput
						value={typeOfService}
						type='text'
						name='typeOfService'
						onChange={event =>
							setOtherServiceStart(
								event.target.name,
								event.target.value
							)
						}
					/>
				</InputBlock>
				<InputBlock gridArea='image-url'>
					<InputLabel>Image Url:</InputLabel>
					<TextInput
						value={image}
						type='text'
						name='image'
						onChange={event =>
							setOtherServiceStart(
								event.target.name,
								event.target.value
							)
						}
					/>
				</InputBlock>
				<InputBlock gridArea='order'>
					<InputLabel>Order:</InputLabel>
					<NumberInput
						value={order}
						onValueChange={({ floatValue }) => {
							setNewServiceStart('order', floatValue);
						}}
					/>
				</InputBlock>
			</InputLayoutTop>
			<Divider />
			<InputLayoutBottom>
				<InputBlock gridArea='service1'>
					<InputLabel>Service #1:</InputLabel>
					<NumberInput
						value={service1}
						onValueChange={({ value }) => {
							setNewServiceStart('service1', value);
						}}
					/>
				</InputBlock>
				<InputBlock gridArea='service2'>
					<InputLabel>Service #2:</InputLabel>
					<NumberInput
						value={service2}
						onValueChange={({ value }) => {
							setNewServiceStart('service2', value);
						}}
					/>
				</InputBlock>
				<InputBlock gridArea='service3'>
					<InputLabel>Service #3:</InputLabel>
					<NumberInput
						value={service3}
						onValueChange={({ value }) => {
							setNewServiceStart('service3', value);
						}}
					/>
				</InputBlock>
				<FormActionBlock deleteButton>
					<div className='button-block'>
						{isNew ? (
							<Button
								className='save-button'
								onClick={() => {
									createServicesStart();
									history.goBack();
								}}
							>
								Create
							</Button>
						) : (
							<Button
								className='save-button'
								onClick={() => {
									updateServicesStart();
									history.goBack();
								}}
							>
								Update
							</Button>
						)}
						<Button
							outlined
							onClick={() => {
								clearService();
								history.goBack();
							}}
						>
							Cancel
						</Button>
					</div>
					<ListActionBlock>
						{!isNew &&
							(isDelete ? (
								<Fragment>
									<Body1 className='delete-text'>
										Are you sure you want to delete?
									</Body1>
									<Button
										className='delete-button'
										onClick={() => {
											deleteMainServicesStart();
											history.goBack();
										}}
									>
										delete
									</Button>
									<Button
										className='cancel-button'
										onClick={() => setIsDelete(false)}
									>
										cancel
									</Button>
								</Fragment>
							) : (
								<Button
									className='delete-button'
									onClick={() => setIsDelete(true)}
								>
									Delete
								</Button>
							))}
					</ListActionBlock>
				</FormActionBlock>
			</InputLayoutBottom>
		</Card>
	);
};

export default FormCard;
