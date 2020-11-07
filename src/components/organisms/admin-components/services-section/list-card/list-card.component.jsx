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
import { Body1} from '../../../../atoms/text/text.styles';

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
	const [edit, setEdit] = useState({ index: null, isEdit: false });
	const [isNewService, setIsNewService] = useState(false);
	const [isDelete, setIsDelete] = useState({ index: null, isDelete: false });

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
							<ListActionBlock>
								<Button
									className='save-button'
									onClick={() => {}}
								>
									Save
								</Button>
								<Button
									className='cancel-button'
									onClick={() =>
										setEdit({
											isEdit: false,
											index: null,
										})
									}
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
			))}
		</ListLayout>
	);
};

export default ListCard;
