import { api } from './api';
import {
	FARMS_ROUTE,
	FARM_ANIMALS_ROUTE,
	FARM_ASSETS_ROUTE,
	FARM_CROPS_ROUTE,
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
		console.log(res);
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

export async function updateFarm(farmId, farmDetails) {
	try {
		const res = await api.put(`${FARMS_ROUTE}/${farmId}`, farmDetails);
		return res?.data;
	} catch (error) {
		console.error(error);
	}
}

export async function deleteFarm(farmId) {
	try {
		const res = await api.delete(`${FARMS_ROUTE}/${farmId}`);
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

export async function updateFarmAsset(assetId, farmAsset) {
	try {
		const res = await api.put(`${FARM_ASSETS_ROUTE}/${assetId}`, farmAsset);
		return res?.data;
	} catch (error) {
		console.error(error);
	}
}

export async function deleteFarmAsset(farmAsset) {
	try {
		const res = await api.delete(`${FARM_ASSETS_ROUTE}/${farmAsset.id}`);
		return res?.data;
	} catch (error) {
		console.error(error);
	}
}

export async function getFarmAnimals(farmId) {
	try {
		const res = await api.get(FARM_ANIMALS_ROUTE, { params: { farm: farmId } });
		return res?.data;
	} catch (error) {
		console.error(error);
	}
}

export async function createFarmAnimal(farmAnimalDetails) {
	try {
		const res = await api.post(FARM_ANIMALS_ROUTE, farmAnimalDetails);
		return res?.data;
	} catch (error) {
		console.error(error);
	}
}

export async function updateFarmAnimal(animalId, farmAnimal) {
	try {
		const res = await api.put(`${FARM_ANIMALS_ROUTE}/${animalId}`, farmAnimal);
		return res?.data;
	} catch (error) {
		console.error(error);
	}
}

export async function deleteFarmAnimal(farmAnimal) {
	try {
		const res = await api.delete(`${FARM_ANIMALS_ROUTE}/${farmAnimal.id}`);
		return res?.data;
	} catch (error) {
		console.error(error);
	}
}

export async function getFarmCrops(farmId) {
	try {
		const res = await api.get(FARM_CROPS_ROUTE, { params: { farm: farmId } });
		return res?.data;
	} catch (error) {
		console.error(error);
	}
}

export async function createFarmCrop(farmCropDetails) {
	try {
		const res = await api.post(FARM_CROPS_ROUTE, farmCropDetails);
		return res?.data;
	} catch (error) {
		console.error(error);
	}
}

export async function updateFarmCrop(cropId, farmCrop) {
	try {
		const res = await api.put(`${FARM_CROPS_ROUTE}/${cropId}`, farmCrop);
		return res?.data;
	} catch (error) {
		console.error(error);
	}
}

export async function deleteFarmCrop(farmCrop) {
	try {
		const res = await api.delete(`${FARM_CROPS_ROUTE}/${farmCrop.id}`);
		return res?.data;
	} catch (error) {
		console.error(error);
	}
}
