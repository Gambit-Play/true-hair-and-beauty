import React, { useState, Fragment } from 'react';

// Component
import {
	TextInput,
	NumberInput,
	ListLayout,
	ListTopBar,
	ListRowLabels,
	ListItem,
	ListTitle,
	NewItemBlock,
	ListActionBlock,
} from '../../service-detail/service-detail.styles';
import { Button } from '../../../../atoms/button/button.styles';

const ListCard = ({
	services,
	title,
	price,
	mainIndex,
	addNewServicesStart,
	setNewServiceStart,
	deleteServicesStart,
}) => {
	const [edit, setEdit] = useState({ index: null, isEdit: false });

	return (
		<ListLayout>
			<ListTopBar>
				<ListTitle>Services</ListTitle>
				<NewItemBlock>
					<TextInput
						className='new-input'
						placeholder='Service Name'
						name='title'
						value={title}
						onChange={event =>
							setNewServiceStart(
								event.target.name,
								event.target.value
							)
						}
					/>
					<NumberInput
						className='new-input'
						value={price ? price : null}
						placeholder='Price'
						onValueChange={({ floatValue }) => {
							setNewServiceStart('price', floatValue);
						}}
					/>
					<Button
						className='new-button'
						onClick={() => addNewServicesStart(mainIndex)}
					>
						save
					</Button>
					<Button outlined /* onClick={clearService} */>
						cancel
					</Button>
				</NewItemBlock>
				<Button>New Service</Button>
			</ListTopBar>
			<ListRowLabels>
				<div>Number</div>
				<div>Service Name</div>
				<div>Price</div>
			</ListRowLabels>
			{services.map((service, serviceIndex) => (
				<ListItem key={serviceIndex}>
					<div># {serviceIndex}</div>
					{edit.isEdit && edit.index === serviceIndex ? (
						<Fragment>
							<TextInput
								className='new-input'
								placeholder='Service Name'
								name='title'
								value={service.title}
								onChange={event =>
									setNewServiceStart(
										event.target.name,
										event.target.value
									)
								}
							/>
							<NumberInput
								className='new-input'
								value={service.price ? service.price : null}
								placeholder='Price'
								onValueChange={({ floatValue }) => {
									setNewServiceStart('price', floatValue);
								}}
							/>
						</Fragment>
					) : (
						<Fragment>
							<div>{service.title}</div>
							<div>€{service.price}</div>
						</Fragment>
					)}
					<ListActionBlock>
						<Button
							className='edit-button'
							onClick={() => {
								setEdit({
									isEdit: !edit.isEdit,
									index: serviceIndex,
								});
							}}
						>
							edit
						</Button>
						<Button
							className='delete-button'
							onClick={() =>
								deleteServicesStart(serviceIndex, mainIndex)
							}
						>
							delete
						</Button>
					</ListActionBlock>
				</ListItem>
			))}
		</ListLayout>
	);
};

export default ListCard;
