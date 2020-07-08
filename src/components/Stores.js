import {
    writable, get
} from 'svelte/store';

export const User = writable();
export const IdUser = writable();
export const IdAccount = writable();
export const IdVehicle = writable();
export const LicensePlate = writable();
export const MarkLabel = writable();
export const NameVehicle = writable();
export const Vin = writable();
export const UserFullName = writable();

export class APPLocalStorage{
getUser(){
    return JSON.parse(localStorage.getItem('User'));
}
getPreferences(){
    return this.getUser().preferences;
}

}
//export const IdVehicle = writable();