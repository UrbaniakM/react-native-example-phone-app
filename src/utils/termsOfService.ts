import AsyncStorage from '@react-native-community/async-storage';

const TERMS_AND_CONDITIONS_ACCEPTED_STORAGE_KEY =
  '@terms_and_conditions_accepted';

export const getPersistedIsTermsOfServiceAccepted = async () => {
  try {
    const isAccepted = await AsyncStorage.getItem(
      TERMS_AND_CONDITIONS_ACCEPTED_STORAGE_KEY,
    );
    return isAccepted === 'true';
  } catch (error) {
    console.log(
      'Failed to read terms and condition accepted from the storage',
      error,
    );
    return false;
  }
};

export const persistIsTermsOfServiceAccepted = async (isAccepted: boolean) => {
  try {
    await AsyncStorage.setItem(
      TERMS_AND_CONDITIONS_ACCEPTED_STORAGE_KEY,
      isAccepted.toString(),
    );
  } catch (error) {
    console.log(
      'Failed to save terms and condition accepted to the storage',
      error,
    );
  }
};
