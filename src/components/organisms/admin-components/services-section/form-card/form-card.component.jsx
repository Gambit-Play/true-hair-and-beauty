import React from 'react';

// Component
import {
	FormCard as Card,
	Divider,
	InputLayoutBottom,
	InputLayoutTop,
	InputBlock,
	TextInput,
	InputLabel,
	NumberInput,
	FormActionBlock,
} from '../../service-detail/service-detail.styles';
import { Button } from '../../../../atoms/button/button.styles';

const FormCard = ({
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
}) => {
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
				<FormActionBlock>
					<Button
						className='save-button'
						onClick={updateServicesStart}
					>
						save
					</Button>
					<Button outlined onClick={clearService}>
						cancel
					</Button>
				</FormActionBlock>
			</InputLayoutBottom>
		</Card>
	);
};

export default FormCard;
