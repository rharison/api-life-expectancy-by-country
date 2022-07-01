import { getLifeExpectancyBySingleCountry } from "@/core/life-expectancy/use-cases/find-by-single-coutry";

export function findBySingleCountry(country: string) {
  return getLifeExpectancyBySingleCountry(country);
}
