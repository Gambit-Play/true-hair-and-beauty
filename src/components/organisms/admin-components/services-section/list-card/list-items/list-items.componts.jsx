import React, { useState, Fragment } from 'react';

// Component
import {
	ListItem,
	ListActionBlock,
} from '../../../service-detail/service-detail.styles';
import { Button } from '../../../../../atoms/button/button.styles';
import { Body1 } from '../../../../../atoms/text/text.styles';
import {
	TextInput,
	NumberInput,
} from '../../../../../atoms/inputs/inputs.styles';

const ListItems = ({
	services,
	mainIndex,
	setNewServiceStart,
	deleteServicesStart,
}) => {
	const [edit, setEdit] = useState({ index: null, isEdit: false });
	const [isDelete, setIsDelete] = useState({ index: null, isDelete: false });

	return services.map((service, serviceIndex) => (
		<ListItem key={serviceIndex}>
			<div># {serviceIndex}</div>
			{edit.isEdit && edit.index === serviceIndex ? (
				<Fragment>
					<TextInput
						className='new-input'
						placeholder='Service Name'
						name='title'
						defaultValue={service.title}
						onChange={event =>
							setNewServiceStart(
								event.target.name,
								event.target.value
							)
						}
					/>
					<NumberInput
						className='new-input'
						defaultValue={service.price}
						placeholder='Price'
						onValueChange={({ floatValue }) => {
							setNewServiceStart('price', floatValue);
						}}
					/>
					<ListActionBlock>
						<Button className='save-button' onClick={() => {}}>
							Update
						</Button>
						<Button
							className='cancel-button'
							onClick={() => {
								setEdit({
									isEdit: false,
									index: null,
								});
								setNewServiceStart('title', '');
								setNewServiceStart('price', 0);
							}}
						>
							Cancel
						</Button>
					</ListActionBlock>
				</Fragment>
			) : (
				<Fragment>
					<div>{service.title}</div>
					<div>€{service.price}</div>
					<ListActionBlock>
						{isDelete && isDelete.index === serviceIndex ? (
							<Fragment>
								<Body1 className='delete-text'>
									Are you sure you want to delete?
								</Body1>
								<Button
									className='delete-button'
									onClick={() => {
										deleteServicesStart(
											serviceIndex,
											mainIndex
										);
										setIsDelete({
											index: null,
											isDelete: false,
										});
									}}
								>
									delete
								</Button>
								<Button
									className='cancel-button'
									onClick={() =>
										setIsDelete({
											index: null,
											isDelete: false,
										})
									}
								>
									cancel
								</Button>
							</Fragment>
						) : (
							<Fragment>
								<Button
									className='edit-button'
									onClick={() => {
										setEdit({
											isEdit: true,
											index: serviceIndex,
										});
										setNewServiceStart(
											'title',
											service.title
										);
										setNewServiceStart(
											'price',
											service.price
										);
									}}
								>
									edit
								</Button>
								<Button
									className='delete-button'
									onClick={() =>
										setIsDelete({
											index: serviceIndex,
											isDelete: true,
										})
									}
								>
									delete
								</Button>
							</Fragment>
						)}
					</ListActionBlock>
				</Fragment>
			)}
		</ListItem>
	));
};

export default ListItems;
