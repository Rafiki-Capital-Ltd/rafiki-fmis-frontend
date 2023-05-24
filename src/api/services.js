import { api } from './api';
import {
	FARMS_ROUTE,
	FARM_ANIMALS_ROUTE,
	FARM_ASSETS_ROUTE,
	FARM_CONSUMPTIONS_ROUTE,
	FARM_PRODUCTIONS_ROUTE,
	FARM_SALES_ROUTE,
	FARM_CROPS_ROUTE,
	LOGIN_ROUTE,
	LOGOUT_ROUTE,
	REFRESH_TOKEN_ROUTE,
	REGISTER_ROUTE,
} from './routes';

// AUTH

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

// FARMS

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

// FARM ASSETS

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

// FARM ANIMALS

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

// FARM CROPS

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

// FARM CONSUMPTIONS

export async function getFarmConsumptions(farmId) {
	try {
		const res = await api.get(FARM_CONSUMPTIONS_ROUTE, {
			params: { farm: farmId },
		});
		return res?.data;
	} catch (error) {
		console.error(error);
	}
}

export async function createFarmConsumption(farmConsumptionDetails) {
	try {
		const res = await api.post(FARM_CONSUMPTIONS_ROUTE, farmConsumptionDetails);
		return res?.data;
	} catch (error) {
		console.error(error);
	}
}

export async function updateFarmConsumption(consumptionId, farmConsumption) {
	try {
		const res = await api.put(
			`${FARM_CONSUMPTIONS_ROUTE}/${consumptionId}`,
			farmConsumption
		);
		return res?.data;
	} catch (error) {
		console.error(error);
	}
}

export async function deleteFarmConsumption(farmConsumption) {
	try {
		const res = await api.delete(
			`${FARM_CONSUMPTIONS_ROUTE}/${farmConsumption.id}`
		);
		return res?.data;
	} catch (error) {
		console.error(error);
	}
}

// FARM PRODUCTIONS

export async function getFarmProductions(farmId) {
	try {
		const res = await api.get(FARM_PRODUCTIONS_ROUTE, {
			params: { farm: farmId },
		});
		return res?.data;
	} catch (error) {
		console.error(error);
	}
}

export async function createFarmProduction(farmProductionDetails) {
	try {
		const res = await api.post(FARM_PRODUCTIONS_ROUTE, farmProductionDetails);
		return res?.data;
	} catch (error) {
		console.error(error);
	}
}

export async function updateFarmProduction(consumptionId, farmProduction) {
	try {
		const res = await api.put(
			`${FARM_PRODUCTIONS_ROUTE}/${consumptionId}`,
			farmProduction
		);
		return res?.data;
	} catch (error) {
		console.error(error);
	}
}

export async function deleteFarmProduction(farmProduction) {
	try {
		const res = await api.delete(
			`${FARM_PRODUCTIONS_ROUTE}/${farmProduction.id}`
		);
		return res?.data;
	} catch (error) {
		console.error(error);
	}
}

// FARM SALES

export async function getFarmSales(farmId) {
	try {
		const res = await api.get(FARM_SALES_ROUTE, {
			params: { farm: farmId },
		});
		return res?.data;
	} catch (error) {
		console.error(error);
	}
}

export async function createFarmSale(farmSaleDetails) {
	try {
		const res = await api.post(FARM_SALES_ROUTE, farmSaleDetails);
		return res?.data;
	} catch (error) {
		console.error(error);
	}
}

export async function updateFarmSale(consumptionId, farmSale) {
	try {
		const res = await api.put(`${FARM_SALES_ROUTE}/${consumptionId}`, farmSale);
		return res?.data;
	} catch (error) {
		console.error(error);
	}
}

export async function deleteFarmSale(farmSale) {
	try {
		const res = await api.delete(`${FARM_SALES_ROUTE}/${farmSale.id}`);
		return res?.data;
	} catch (error) {
		console.error(error);
	}
}
