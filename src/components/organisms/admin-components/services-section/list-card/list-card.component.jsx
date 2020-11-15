import React, { useState } from 'react';

// Component
import {
	ListLayout,
	ListTopBar,
	ListRowLabels,
	ListTitle,
	NewItemBlock,
} from '../../service-detail/service-detail.styles';
import ListItems from './list-items/list-items.componts';
import { Button } from '../../../../atoms/button/button.styles';
import { TextInput, NumberInput } from '../../../../atoms/inputs/inputs.styles';

const ListCard = ({
	services,
	title,
	price,
	mainIndex,
	addNewServicesStart,
	setNewServiceStart,
	deleteServicesStart,
	clearNewService,
}) => {
	const [isNewService, setIsNewService] = useState(false);

	return (
		<ListLayout>
			<ListTopBar>
				<ListTitle>Services</ListTitle>
				{isNewService ? (
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
							onClick={() => {
								addNewServicesStart(mainIndex);
								setIsNewService(false);
							}}
						>
							save
						</Button>
						<Button
							outlined
							onClick={() => {
								clearNewService();
								setIsNewService(false);
							}}
						>
							cancel
						</Button>
					</NewItemBlock>
				) : (
					<Button onClick={() => setIsNewService(true)}>
						New Service
					</Button>
				)}
			</ListTopBar>
			<ListRowLabels>
				<div>Number</div>
				<div>Service Name</div>
				<div>Price</div>
			</ListRowLabels>
			<ListItems
				deleteServicesStart={deleteServicesStart}
				mainIndex={mainIndex}
				services={services}
				setNewServiceStart={setNewServiceStart}
			/>
		</ListLayout>
	);
};

export default ListCard;
