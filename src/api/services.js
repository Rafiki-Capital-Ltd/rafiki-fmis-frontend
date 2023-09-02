import { api } from './api';
import {
	FARMS_ROUTE,
	FARM_ANIMALS_ROUTE,
	FARM_ASSETS_ROUTE,
	FARM_INPUTS_ROUTE,
	FARM_CONSUMPTIONS_ROUTE,
	FARM_PRODUCTIONS_ROUTE,
	FARM_SALES_ROUTE,
	FARM_PURCHASES_ROUTE,
	FARM_EXPENSES_ROUTE,
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

// FARM INPUTS

export async function getFarmInputs(farmId) {
	try {
		const res = await api.get(FARM_INPUTS_ROUTE, { params: { farm: farmId } });
		return res?.data;
	} catch (error) {
		console.error(error);
	}
}

export async function createFarmInput(farmInputDetails) {
	try {
		const res = await api.post(FARM_INPUTS_ROUTE, farmInputDetails);
		return res?.data;
	} catch (error) {
		console.error(error);
	}
}

export async function updateFarmInput(inputId, farmInput) {
	try {
		const res = await api.put(`${FARM_INPUTS_ROUTE}/${inputId}`, farmInput);
		return res?.data;
	} catch (error) {
		console.error(error);
	}
}

export async function deleteFarmInput(farmInput) {
	try {
		const res = await api.delete(`${FARM_INPUTS_ROUTE}/${farmInput.id}`);
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

export async function updateFarmProduction(productionId, farmProduction) {
	try {
		const res = await api.put(
			`${FARM_PRODUCTIONS_ROUTE}/${productionId}`,
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

export async function updateFarmSale(saleId, farmSale) {
	try {
		const res = await api.put(`${FARM_SALES_ROUTE}/${saleId}`, farmSale);
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

// FARM PURCHASES

export async function getFarmPurchases(farmId) {
	try {
		const res = await api.get(FARM_PURCHASES_ROUTE, {
			params: { farm: farmId },
		});
		return res?.data;
	} catch (error) {
		console.error(error);
	}
}

export async function createFarmPurchase(farmPurchaseDetails) {
	try {
		const res = await api.post(FARM_PURCHASES_ROUTE, farmPurchaseDetails);
		return res?.data;
	} catch (error) {
		console.error(error);
	}
}

export async function updateFarmPurchase(purchaseId, farmPurchase) {
	try {
		const res = await api.put(
			`${FARM_PURCHASES_ROUTE}/${purchaseId}`,
			farmPurchase
		);
		return res?.data;
	} catch (error) {
		console.error(error);
	}
}

export async function deleteFarmPurchase(farmPurchase) {
	try {
		const res = await api.delete(`${FARM_PURCHASES_ROUTE}/${farmPurchase.id}`);
		return res?.data;
	} catch (error) {
		console.error(error);
	}
}

// FARM EXPENSES

export async function getFarmExpenses(farmId) {
	try {
		const res = await api.get(FARM_EXPENSES_ROUTE, {
			params: { farm: farmId },
		});
		return res?.data;
	} catch (error) {
		console.error(error);
	}
}

export async function createFarmExpense(farmExpenseDetails) {
	try {
		const res = await api.post(FARM_EXPENSES_ROUTE, farmExpenseDetails);
		return res?.data;
	} catch (error) {
		console.error(error);
	}
}

export async function updateFarmExpense(expenseId, farmExpense) {
	try {
		const res = await api.put(
			`${FARM_EXPENSES_ROUTE}/${expenseId}`,
			farmExpense
		);
		return res?.data;
	} catch (error) {
		console.error(error);
	}
}

export async function deleteFarmExpense(farmExpense) {
	try {
		const res = await api.delete(`${FARM_EXPENSES_ROUTE}/${farmExpense.id}`);
		return res?.data;
	} catch (error) {
		console.error(error);
	}
}
