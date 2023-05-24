import { api } from './api';
import {
	FARMS_ROUTE,
	FARM_ASSETS_ROUTE,
	LOGIN_ROUTE,
	LOGOUT_ROUTE,
	REFRESH_TOKEN_ROUTE,
	REGISTER_ROUTE,
} from './routes';

export async function register(userRegisterData) {
	try {
		const res = await api.post(REGISTER_ROUTE, userRegisterData);
		return res?.data;
	} catch (error) {
		console.error(error);
	}
}

export async function login(loginCredentials) {
	try {
		const res = await api.post(LOGIN_ROUTE, loginCredentials);
		return res?.data;
	} catch (error) {
		console.error(error);
	}
}

export async function getAccessToken() {
	try {
		const res = await api.post(REFRESH_TOKEN_ROUTE, {
			refreshToken: localStorage.getItem('refreshToken'),
		});
		return res?.data;
	} catch (error) {
		console.error(error);
	}
}

export async function logout() {
	try {
		const res = await api.get(LOGOUT_ROUTE);
		return res?.data;
	} catch (error) {
		console.error(error);
	}
}

export async function getFarms() {
	try {
		const res = await api.get(FARMS_ROUTE);
		return res?.data;
	} catch (error) {
		console.error(error);
	}
}

export async function getFarm(farmId) {
	try {
		const res = await api.get(`${FARMS_ROUTE}/${farmId}`);
		return res?.data;
	} catch (error) {
		console.error(error);
	}
}

export async function createFarm(farmDetails) {
	try {
		const res = await api.post(FARMS_ROUTE, farmDetails);
		return res?.data;
	} catch (error) {
		console.error(error);
	}
}

export async function getFarmAssets(farmId) {
	try {
		const res = await api.get(FARM_ASSETS_ROUTE, { params: { farm: farmId } });
		return res?.data;
	} catch (error) {
		console.error(error);
	}
}

export async function createFarmAsset(farmAssetDetails) {
	try {
		const res = await api.post(FARM_ASSETS_ROUTE, farmAssetDetails);
		return res?.data;
	} catch (error) {
		console.error(error);
	}
}
