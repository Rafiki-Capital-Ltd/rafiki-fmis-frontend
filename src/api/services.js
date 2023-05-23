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
	const res = await api.post(REGISTER_ROUTE, userRegisterData);
	return res.data;
}

export async function login(loginCredentials) {
	const res = await api.post(LOGIN_ROUTE, loginCredentials);
	return res.data;
}

export async function getAccessToken() {
	const res = await api.post(REFRESH_TOKEN_ROUTE, {
		refreshToken: localStorage.getItem('refreshToken'),
	});
	return res.data;
}

export async function logout() {
	const res = await api.get(LOGOUT_ROUTE);
	return res.data;
}

export async function getFarms() {
	const res = await api.get(FARMS_ROUTE);
	return res.data;
}

export async function getFarm(farmId) {
	const res = await api.get(`${FARMS_ROUTE}/${farmId}`);
	return res.data;
}

export async function createFarm(farmDetails) {
	const res = await api.post(FARMS_ROUTE, farmDetails);
	return res.data;
}

export async function getFarmAssets(farmId) {
	const res = await api.get(FARM_ASSETS_ROUTE, { params: { farm: farmId } });
	return res.data;
}

export async function createFarmAsset(farmAssetDetails) {
	const res = await api.post(FARM_ASSETS_ROUTE, farmAssetDetails);
	return res.data;
}
