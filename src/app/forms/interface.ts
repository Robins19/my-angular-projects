export interface IDescription {
    description: string;
}

export interface BookingTabsUiDataModel {
    uiName: string;
    selectedSerices: MaidServiceModel[];
}

export interface MaidServiceModel {
    _id: string;
    uniquieAppKey: string;
    updatedOn: string;
    createdOn: string;
    Name: string;
}