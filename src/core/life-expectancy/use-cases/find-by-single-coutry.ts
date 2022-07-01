import { data } from "@/data/life-expectance-by-country";

export function getLifeExpectancyBySingleCountry(country: string) {
  const lifeExpectancy = data.find(item => item.country === country);

  return lifeExpectancy;
}