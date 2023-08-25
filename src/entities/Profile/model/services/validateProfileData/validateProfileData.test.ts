import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { validateProfileData } from './validateProfileData';
import { ValidateProfileError } from '../../types/profile';

const data = {
  first: 'Aleksey',
  lastname: 'Kostin',
  age: 32,
  currency: Currency.USD,
  country: Country.Belarus,
  city: 'Moscow',
  username: 'admin',
};

describe('validateProfileData.test', () => {
  test('success', () => {
    const result = validateProfileData(data);

    expect(result).toEqual([]);
  });

  test('without first and last names', () => {
    const result = validateProfileData({ ...data, first: '', lastname: '' });

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
    ]);
  });

  test('incorect age', () => {
    const result = validateProfileData({ ...data, age: undefined });

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_AGE,
    ]);
  });

  test('incorect city', () => {
    const result = validateProfileData({ ...data, city: undefined });

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_CITY,
    ]);
  });

  test('incorect all', () => {
    const result = validateProfileData({});

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_CITY,
    ]);
  });
});
