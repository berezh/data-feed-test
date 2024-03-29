import moment from "moment";
import { orderBy } from "lodash";

import { BasicFeedParams } from "src/data-feed";
import { EuStates } from "./data/eu-states";
import { Feed } from "../../../../lib/interfaces";

export interface EuState {
  name: string;
  nativeName: string;
  code: string;
  capital: string;
  accession: Date;
  population: number;
  area: number;
  totalGdp: number;
  capitalGdp: number;
  currency: string;
  epSeats: number;
  languages: string[];
}

const euStates: EuState[] = EuStates.map<EuState>(x => {
  return {
    name: x[0],
    nativeName: x[1],
    code: x[2],
    capital: x[3],
    accession: moment(x[4], "M/D/YYYY").toDate(),
    population: x[5],
    area: x[6],
    totalGdp: x[7],
    capitalGdp: x[8],
    currency: x[9],
    epSeats: x[10],
    languages: x[11],
  };
});

export const DataGenerator = {
  loadEuState: (count: number, params: BasicFeedParams): Feed<EuState> => {
    const { skip = 0, page, name, search, isEuro, language, currency, capital, order, direction, population1M, population10M, extraParam } = params;

    // console.log("load", params);

    let filterItems: EuState[] = orderBy(euStates, order, direction) as any;

    if (name) {
      filterItems = filterItems.filter(x => x.name.toLowerCase().includes((name as string).toLowerCase()));
    }

    if (search) {
      filterItems = filterItems.filter(x => x.name.toLowerCase().includes(search?.toLowerCase()));
    }

    if (population1M === true) {
      filterItems = filterItems.filter(x => x.population >= 1000000);
    }

    // console.log('population10M', population10M);
    if (population10M === true || population10M === false) {
      filterItems = filterItems.filter(x => (population10M ? x.population >= 10000000 : x.population < 10000000));
    }

    if (isEuro === true) {
      filterItems = filterItems.filter(x => x.currency === "euro");
    }

    if (language) {
      filterItems = filterItems.filter(x => x.languages.find(l => l.toLowerCase() === (language as string).toLowerCase()));
    }

    if (currency) {
      filterItems = filterItems.filter(x => x.currency.indexOf(currency as string) >= 0);
    }

    if (capital) {
      filterItems = filterItems.filter(x => x.capital.toLowerCase().indexOf((capital as string).toLowerCase()) >= 0);
    }

    // console.log('data-generator', extraParam, options);
    if (extraParam) {
      filterItems = filterItems.filter(x => x.name.toLowerCase().indexOf((extraParam as string).toLowerCase()) >= 0);
    }

    // const items = [
    //     ...filterItems.filter((x, i) => {
    //         return i + 1 > skip && i + 1 < skip + count;
    //     }),
    // ];
    const total = filterItems.length;

    let data: EuState[] = [];

    if (page) {
      const currentPage = typeof page === "string" ? parseInt(page) : page;
      const startIndex = count * (currentPage - 1);
      data = filterItems.slice(startIndex, startIndex + count);
    } else {
      data = filterItems.slice(skip, skip + count);
    }

    return {
      data,
      skip: skip + count,
      total,
    };
  },
};
